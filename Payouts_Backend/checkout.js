const { STRIPE_ACCOUNT, 
    STRIPE_ACCOUNT_BUSINESS_TYPE,
    STRIPE_CHECKOUT_PAYMENT_MODE,
    STRIPE_CHECKOUT_PAYMENT_TYPE,
    DEFAULT_COUNTRY,
    PLATFORM_DOMAIN,
  } = require('./consts');

const { getShippingRates } = require('./shipping');

// https://stripe.com/docs/api/checkout/sessions/create
async function createCheckoutSession(
  stripe,
  cart_items_with_qty,
  connected_account_id,
  merchant_domain,
  payouts_commission_application_fee,
  automatic_tax_enabled
){
  try {
    let merchant_domain_http; 
    if (merchant_domain.includes('localhost')) {
      merchant_domain_http = PLATFORM_DOMAIN;
    } else if (merchant_domain.includes('.amplifyapp')) {
      merchant_domain_http = `https://${merchant_domain}.com`;
    } else if (merchant_domain.includes('.shop')) {
      merchant_domain_http = `https://www.${merchant_domain}.shop`;
    } else if (merchant_domain.includes('.ca')) {
      merchant_domain_http = `https://www.${merchant_domain}`;
    } else {
      merchant_domain_http = `https://www.${merchant_domain}.com`;
    }
    const line_items = cart_items_with_qty.map( ({price_id, quantity, description}) => {
      return {"price": price_id, quantity, description};
    });

    const shipping_options = await getShippingRates(stripe, connected_account_id);
    const checkoutSession = await stripe
      .checkout
      .sessions
      .create({
        submit_type: STRIPE_CHECKOUT_PAYMENT_TYPE.PAY,
        billing_address_collection: STRIPE_CHECKOUT_PAYMENT_TYPE.AUTO,
        phone_number_collection: {
          enabled: true,
        },
        payment_intent_data: {
          application_fee_amount: payouts_commission_application_fee,
        },
        shipping_options,
        shipping_address_collection: {
          allowed_countries: [DEFAULT_COUNTRY],
        },
        line_items,
        mode: STRIPE_CHECKOUT_PAYMENT_MODE.PAYMENT, // only for one time products , subscription for subscriptions
        allow_promotion_codes: true,
        automatic_tax: {
          enabled: automatic_tax_enabled
        },
        success_url: `${merchant_domain_http}/success`,
        cancel_url: `${merchant_domain_http}/cancelled`,
     },
     {stripeAccount: connected_account_id}
   );
    console.log('created checkout session');
    console.log(checkoutSession);
    return checkoutSession;

  } catch (error) {
    console.log('err in checkoutSession');
    console.log(error);
    throw new Error('error in createCheckoutSession');
  }
}

module.exports = {
  createCheckoutSession
}

// async function test(){
//   const stripe = require('stripe')(STRIPE_SECRET_KEY);
//   const cart_items_with_qty = 
//   [
//     {
//         "price_id": "price_1KPvWtLmaNRvZlNIhybPL4XY",
//         "quantity": "1",
//         "description": "Femme / Mauve"
//     }
// ]
// const connected_account_id = 'acct_1KOQDZLmaNRvZlNI'
// const merchant_domain= 'candelamtl'
// const payouts_commission_application_fee = 200

// merchant_product_info.forEach( async ({product, prices}) => {
//   const { data} = prices;
//   data.forEach( async ({id}) => {
//     await updateTaxBehaviourPrice(
//       stripe,
//       id,
//       'exclusive',
//       connected_account_id
//       );
//     console.log(`${id} updated with tax behaviour as exclusive`)
//   });
// });

//   // await createCheckoutSession(
//   //   stripe,
//   //   cart_items_with_qty,
//   //   connected_account_id,
//   //   merchant_domain,
//   //   payouts_commission_application_fee
//   // )
// }
// test()
