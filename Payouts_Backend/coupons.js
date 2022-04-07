const {STRIPE_RETRIEVAL_LIMIT} = require('./consts');

async function getMerchantCoupons(stripe, connected_account_id){
    try {
        const coupons = await stripe
                                .coupons.list({
                                limit: STRIPE_RETRIEVAL_LIMIT
                                }, {stripeAccount: connected_account_id});

        console.log(`retrieved coupons [connected_account_id=${connected_account_id}]`);
        console.log(coupons);
        return coupons;

    } catch (error) {
        console.log(error);
        throw new Error('err in getMerchantCoupons');   
    }
}

module.exports = {
    getMerchantCoupons
}
