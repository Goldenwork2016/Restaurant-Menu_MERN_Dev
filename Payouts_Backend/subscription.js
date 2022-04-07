/**
 * create subscription according to customerId, priceId
 * 
 * @param {String} customerId
 * @param {String} priceId
 * https://stripe.com/docs/api/subscriptions/create
 */
function createSubscription(stripe, customerId, priceId){
    return new Promise ( (resolve,reject)=>{
          stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: priceId }],
            // default_tax_rates: [RESPACED_TAX_RATE],
            // expand: ["latest_invoice.payment_intent"]
          },  (err, subscription)=> {
            // asynchronously called
            console.log(err);
            if(!err) resolve(subscription)
            else reject(`err in creating subscription for ${customerId} `)
          });
    })
}

module.exports = {
    createSubscription
}