const {STRIPE_RETRIEVAL_LIMIT} = require('./consts');

async function getShippingRates(stripe, connected_account_id){
    let shipping_rates_arr = [];
    try {
        const shippingRates = await stripe
                                    .shippingRates.list({
                                    active: true,
                                    limit: STRIPE_RETRIEVAL_LIMIT
                                    }, {stripeAccount: connected_account_id});
        console.log('fetched shipping rates');                                    
        console.log(shippingRates);

        if(shippingRates 
         && shippingRates.hasOwnProperty('data')) {
             const { data } = shippingRates;
             if( data.length > 0 ){
                data.forEach(shippingRate => {
                    const { id } = shippingRate;
                    shipping_rates_arr.push({"shipping_rate": id});
                });      
             }
         }
        return shipping_rates_arr;                                    
    } catch (error) {
        console.error(error);
        console.error(`err in getShippingRates`);
        throw new Error('err in getShippingRates');
    }
}

async function getShippingRatesMerchant(stripe, connected_account_id){
    try {
        const shippingRates = await stripe
                                    .shippingRates.list({
                                    active: true,
                                    limit: STRIPE_RETRIEVAL_LIMIT
                                    }, {stripeAccount: connected_account_id});
        console.log(`retrieved shipping rates [connected_account_id=${connected_account_id}]`);
        console.log(shippingRates);
        return shippingRates;

    } catch (error) {
        console.log(error);
        throw new Error('err in getShippingRatesMerchant');   
    }
}

module.exports = {
    getShippingRates,
    getShippingRatesMerchant
}
