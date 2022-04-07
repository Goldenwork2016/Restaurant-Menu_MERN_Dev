const {
    DEFAULT_CURRENCY_CAD,
    PRICE_ONE_TIME,
    PRICE_RECURRING,
    PRICES_RETRIEVAL_LIMIT_STRIPE
    } = require("./consts");

const { calculateCommission } = require('./utils');
async function createSubscription(stripe, product_id, {recurring_type, amt, description, interval_count=null} ) {
    /**
     * recurring_type can be month, day, week, year
     * 
     *   for bi-weekly, recurring_type = week, interval_count = 2 ( every 2 weeks )
     *   for weekly, recurring_type = week, interval_count = 1 ( every 1 week )
     *   for monthly, recurring_type = month, interval_count=null
     */
    try {
            const price = await stripe.prices.create({
                unit_amount: amt, // needs to be in cents
                currency: DEFAULT_CURRENCY_CAD,
                recurring: {
                    interval: recurring_type,
                    interval_count
                }, 
                product: product_id,
                active: true, // stripe default's active value is true
    
                metadata: { 
                    description,
                    'price_active': true // default, we would use price_active to hide/show price option
                }
              });
            const {id} = price;
    
            console.log(`created price [price_id=${id}]`);
            console.log(price);
            return;

        } catch (error) {
            console.log(`failed to create pricing plan [product_id=${product_id}]`)
            console.log(error);
            throw new Error(error);
    }
}

async function createOneTimePrice(stripe, product_id, { amt, description, quantity, picture_id }, connected_account_id) {
    try {
            const price = await stripe.prices.create({
                unit_amount: amt, // needs to be in cents
                currency: DEFAULT_CURRENCY_CAD,
                product: product_id,
                active: true, // stripe default's active value is true
    
                metadata: { 
                    description,
                    quantity,
                    'price_active': true, // default, we would use price_active to hide/show price option
                    picture_id,
                }
              },
              {stripeAccount: connected_account_id}
              );
            const {id} = price;
    
            console.log(`created price one time price plan [price_id=${id}]`);
            console.log(price);
            return;

        } catch (error) {
            console.log(`failed to create one time price plan [product_id=${product_id}]`)
            console.log(error);
            throw new Error(error);
    }
}

/**
 * 
 * https://stripe.com/docs/api/prices/create?lang=node
 * 
 * @param {*} stripe 
 * @param {*} event 
 * @param {*} product_id 
 */
async function createPricingPlans(stripe, event, product_id){
    const { pricing_options } = event;

    if (pricing_options.length === 0) {
        console.log(`no pricing options specified [product_id=${product_id}]`)
        return;
    } else {
        pricing_options.forEach( ({price_type, recurring_type, amt, description, interval_count=null }) => {
            try {
                if (price_type === PRICE_RECURRING) {
                    createSubscription(stripe, product_id, {recurring_type, amt, description, interval_count })
                    .then(msg=>console.log(msg))
                    .catch(err=>console.log(err))    
                } 

                if (price_type === PRICE_ONE_TIME) {
                    createOneTimePrice(stripe, product_id, {amt, description})
                    .then(msg=>console.log(msg))
                    .catch(err=>console.log(err))    
                }

            } catch (error) {
                console.log(`failed to create pricing plan [product_id=${product_id}]`)
                console.log(error);
            }
        });
    }
}

async function getPricesProduct(stripe, product_id,connected_account_id) {
    const prices = await stripe.prices.list({
        product: product_id,
        active: true, // only fetch active prices,
        limit: PRICES_RETRIEVAL_LIMIT_STRIPE,
    },{
        stripeAccount: connected_account_id
    });    
    return prices;
}

async function getPriceType(stripe, price_id){
    try {
        const price = await stripe.prices.retrieve(price_id);
        console.log('succesfully retrieved existing price');
        console.log(price);
        const {type} = price;
        return type;
    } catch (error) {
        console.log(error);
        throw new Error('error in getting price')
    }
}

async function getPrice(stripe, price_id, connected_account_id){
    try {
        const price = await stripe
            .prices
            .retrieve(
                price_id,
                {stripeAccount: connected_account_id}
            );
        console.log('succesfully retrieved existing price');
        return price;
    } catch (error) {
        console.log(error);
        throw new Error('error in getting price')
    }
}

/***
 * fetchPricesMerchant
 */
 function fetchLineItemsPricesHandler(stripe, cart_items_with_qty, connected_account_id){
    return new Promise( ( resolve, reject)=>{
      Promise.all(
        cart_items_with_qty.map(({price_id }) => 
        getPrice(stripe, price_id, connected_account_id))
      ).then(items =>resolve(items))
       .catch(err=>reject('err in fetching prices for line items'));
    });
}

/**
 * commission_handler
 * @param {*} stripe 
 * @param {*} cart_data 
 * @param {*} connected_account_id 
 * @returns 
 */
async function commission_handler(stripe, cart_data, connected_account_id){
    let total_amount_cart_data = 0 // cents;

    try {
        const line_items_prices_data = await fetchLineItemsPricesHandler(stripe, cart_data, connected_account_id);
        console.log(line_items_prices_data);

        if(line_items_prices_data.length !== 0){
            line_items_prices_data.forEach(line_item_with_price_data => {
                cart_data.forEach(cart_item => {
                    const { id, unit_amount, metadata } = line_item_with_price_data

                    if (!metadata.hasOwnProperty('quantity')) { // quantity check
                        console.error('the below line item doesnt has quantity defined');
                        console.error(line_item_with_price_data);
                        throw new Error('err when calculating cart_total, quantity not defined')
                    }

                    const { quantity } = metadata;

                    if(parseInt(quantity,10) === 0) { // sold out check 
                        console.error('err when calcuating cart_total, item sold out');
                        console.error(line_item_with_price_data);
                        throw new Error('err when calcuating cart_total, item sold out')
                    }

                    if(parseInt(quantity,10) > 0 && cart_item.quantity > parseInt(quantity,10)) { // inventory check
                        console.error('err when calcuating cart_total, cart_item has more quanity than inventory');
                        console.error(line_item_with_price_data);
                        throw new Error('err when calcuating cart_total, cart_item has more quanity than inventory')
                    }

                    if(cart_item.price_id === id) {
                        total_amount_cart_data = 
                            total_amount_cart_data +  (cart_item.quantity* unit_amount)
                    }
                });
            });
    
            const payouts_commission_application_fee = calculateCommission(total_amount_cart_data); // cents

            if(payouts_commission_application_fee ===0) throw new Error('err when calculating commission');            
            
            console.log(`payouts_commission_application_fee=${payouts_commission_application_fee}`);

            return payouts_commission_application_fee;

        } else {
            throw new Error('err when calculating commission');
        }

    } catch (error) {
        console.error(error);
        console.error('err in commission_handler');
        throw new Error('err when calculating commission');
    }   
}

async function updateTaxBehaviourPrice(
    stripe,
    price_id,
    tax_behavior,
    connected_account_id
    ) {
        await stripe.prices
        .update(
            price_id,
            {tax_behavior}
            ,{
                stripeAccount: connected_account_id
            }
          );
}

module.exports = {
    createSubscription,
    createOneTimePrice,
    createPricingPlans,
    getPrice,
    getPricesProduct,
    getPriceType,
    fetchLineItemsPricesHandler,
    commission_handler,
    updateTaxBehaviourPrice,
}