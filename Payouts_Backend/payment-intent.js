const {STRIPE_RETRIEVAL_LIMIT } = require("./consts")

/**
 * getPaymentIntents
 * 
 * @param {*} stripe 
 * @param {*} connected_account_id 
 * @returns 
 */
 
async function getPaymentIntents(
    stripe,
    connected_account_id,
    starting_after='')
    {
    let res_obj = {};
    let payment_intent_starting_after = '';
    try {
        if (starting_after){
            res = await stripe
            .paymentIntents.list({
                limit:STRIPE_RETRIEVAL_LIMIT,
                starting_after
            },
            {stripeAccount: connected_account_id}
            );
        } else {
            res = await stripe
            .paymentIntents.list({
                limit:STRIPE_RETRIEVAL_LIMIT,
            },
            {stripeAccount: connected_account_id}
            );
        }
        const { has_more, data }  = res;
        res_obj['data']  = data
        res_obj['has_more']  = has_more
        
        // console.log(`payment_intents_parent.length = ${payment_intents_parent.length}`)
        // console.log(`data.length = ${data.length}`)
        // payment_intents_parent
        // .push
        // .apply(payment_intents_parent, ...[data]);

        if(has_more) {
            // grab the last one from the list and call getPaymentIntents again
            if (data.length >= 0){
                payment_intent_starting_after = data[data.length-1]['id'];
            }
        }
            //     payment_intents_parent
            //     .push
            //     .apply(payment_intents_parent, ...[
            //         await getPaymentIntents(
            //         stripe,
            //         connected_account_id,
            //         payment_intents_parent,
            //         starting_after)
            //         ]
            //     )
            // }
        // } else {
        //     return payment_intents_parent;
        // }
        res_obj['payment_intent_starting_after'] = payment_intent_starting_after;
        return res_obj;
    } catch (error) {
        console.error(error);
        console.error(`err in getPaymentIntents`);
        throw new Error('err in getPaymentIntents');
    }
}

// async function getPaymentIntentsHandler(stripe, connected_account_id, starting_after){
//     let order_summary_obj = [];
//     let payment_intents_parent = [];
    
//     try {
//         const payment_intent_data = await getPaymentIntents(
//             stripe,
//             connected_account_id,
//             payment_intents_parent,
//             starting_after=''
//         )
//         // const payment_intents_parent_no_duplicates = [...new Set(payment_intents_parent)];
//         const { data, has_more, payment_intent_starting_after} = payment_intent_data;
        
//         for (let index = 0; index < data.length; index++) {
//             const payment_intent = data[index];
    
//             if(payment_intent.status === 'succeeded') {
//                 const { id } = payment_intent;
//                 const checkout_session = await stripe
//                     .checkout
//                     .sessions
//                     .list({
//                         payment_intent: id,
//                         limit: STRIPE_RETRIEVAL_LIMIT,
//                     },
//                     {stripeAccount: connected_account_id}
//                 );

//                 const checkout_session_line_items = await stripe
//                 .checkout
//                 .sessions
//                 .listLineItems(
//                     checkout_session.data[0].id,
//                     {
//                     limit: STRIPE_RETRIEVAL_LIMIT,
//                     },
//                     {stripeAccount: connected_account_id}
//                 );

//                 // console.log(payment_intent.charges.data);
//                 // console.log(payment_intent);
//                 // console.log(`payment_intent:${id}`);
//                 // console.log(checkout_session);
                
//                 const order_summary_item = {};
//                 order_summary_item['payment_intent'] = payment_intent;
//                 order_summary_item['checkout_session'] = checkout_session;
//                 order_summary_item['checkout_session_line_items'] = checkout_session_line_items;
//                 order_summary_obj.push(order_summary_item);
//             }
//         }
//         order_summary_obj['has_more'] = has_more;
//         return order_summary_obj;
        
//     } catch (error) {
//         console.error(error);
//         console.error(`err in getPaymentIntentsHandler`);
//         throw new Error('err in getPaymentIntentsHandler');
//     }
// }

async function getCheckoutSessionPaymentIntentLineItems(stripe, payment_intent, connected_account_id){
    const { id } = payment_intent;
    try {
        const checkout_session = await stripe
                    .checkout
                    .sessions
                    .list({
                        payment_intent: id,
                        limit: STRIPE_RETRIEVAL_LIMIT,
                    },
                    {stripeAccount: connected_account_id}
        );
        const checkout_session_line_items = await stripe
                .checkout
                .sessions
                .listLineItems(
                    checkout_session.data[0].id,
                    {
                    limit: STRIPE_RETRIEVAL_LIMIT,
                    },
                    {stripeAccount: connected_account_id}
        );
        const order_summary_item = {};
        order_summary_item['payment_intent'] = payment_intent;
        order_summary_item['checkout_session'] = checkout_session;
        order_summary_item['checkout_session_line_items'] = checkout_session_line_items;
        return order_summary_item;

    } catch (error) {
        console.log(error);
        throw new Error('error in getCheckoutSessionPaymentIntentLineItems')
    }
}

/***
 * test
 */
 function orderSummaryPromise(stripe, connected_account_id, payment_intents){
    return new Promise( ( resolve, reject)=>{
      Promise.all(
        payment_intents.map(payment_intent => 
        getCheckoutSessionPaymentIntentLineItems(stripe, payment_intent, connected_account_id))
      ).then(order_summary =>resolve(order_summary))
       .catch(err=>reject('err in orderSummaryPromise'));
    });
}

async function getOrderSummary(stripe, connected_account_id, starting_after=''){
    try {
        const payment_intent_data = await getPaymentIntents(
            stripe,
            connected_account_id,
            starting_after=''
        )
        const { data, has_more, payment_intent_starting_after} = payment_intent_data;
        // only return "succeeded" payment intents
        const payment_intent_succeeded = data.filter(payment_intent => payment_intent.status === "succeeded" );
        const order_summary = await orderSummaryPromise(stripe, connected_account_id, payment_intent_succeeded);
    
        order_summary['has_more_payment_intents'] = has_more;
        order_summary['payment_intent_starting_after'] = payment_intent_starting_after;
        console.log(order_summary);

        return {
            'order_summary' : order_summary,
            'has_more_payment_intents' : has_more,
            'payment_intent_starting_after' : payment_intent_starting_after,
        };
    } catch (error) {
        console.log(error);
        throw new Error('error in getOrderSummary')
    }
}

module.exports = {
    getPaymentIntents,
    // getPaymentIntentsHandler,
    getOrderSummary,
}
