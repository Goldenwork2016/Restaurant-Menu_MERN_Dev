const { 
    ACTION_CREATE_PRODUCT,
    ACTION_GET_PRODUCT,
    ACTION_GET_MERCHANT,
    ACTION_CREATE_MERCHANT,
    ACTION_REMOVE_PRODUCT,
    ACTION_UPDATE_PRODUCT,
    ACTION_CHECKOUT,
    ACTION_DO_CHECKOUT_QTY,

    ACTION_ADD_PLAN,
    ACTION_REMOVE_PLAN,
    DEFAULT_CURRENCY_CAD,

    METADATA_FIELD_LINK_WEBSITE,
    METADATA_FIELD_LINK_FACEBOOK,
    METADATA_FIELD_LINK_TWITTER,
    METADATA_FIELD_LINK_INSTAGRAM,
    METADATA_FIELD_LINK_LINKEDIN,
    METADATA_FIELD_LINK_YOUTUBE,

    METADATA_FIELD_MERCHANT_ID,

    METADATA_FIELD_THEME_COLOR,

    METADATA_FIELD_PRODUCT_STATUS,
    PRICE_ONE_TIME,
    PRICE_RECURRING,
    ACTION_TESTING,
    ACTION_GET_ORDER_SUMMARY_MERCHANT,
} = require("./consts");

const { actionCreateProduct,
        actionGetMerchant,
        actionDoCheckout,
        actionUpsertMerchantFirebase,
        actionCreateCheckoutSession,
        actionTestFunction,
        actionGetMerchantOrderSummary,
    } = require('./actions');
const { isNotSupportedAction } = require('./utils');
const { verifyIdTokenGetFirebaseUid } = require('./firebase');

const STRIPE = require('stripe')(process.env.STRIPE_SECRET_KEY);
// const STRIPE = require('stripe')(STRIPE_TEST_SECRET_KEY);

const FIREBASE_ADMIN = require('firebase-admin');

const serviceAccount = require("./serviceAccountKey.json");

FIREBASE_ADMIN.initializeApp({
  credential: FIREBASE_ADMIN.credential.cert(serviceAccount)
});


async function stripeHandler(stripe, event, firebase_uid=''){
    console.log(event);
    const {action} = event;

    switch (action.toUpperCase()) {
        case ACTION_CREATE_PRODUCT: // needs auth
            console.log('ACTION_CREATE_PRODUCT');
            await actionCreateProduct(stripe, event, firebase_uid);
            return { msg: 'product created' };
        
        case ACTION_GET_MERCHANT:
            console.log('ACTION_GET_MERCHANT');
            const merchant_info = await actionGetMerchant(stripe, event);
            console.log(merchant_info);
            return merchant_info;

        case ACTION_CREATE_MERCHANT: // needs auth
            console.log('ACTION_CREATE_MERCHANT');
            const merchant_id_json = await actionUpsertMerchantFirebase(stripe, event, firebase_uid);
            console.log(merchant_id_json);
            return merchant_id_json;            

        case ACTION_GET_ORDER_SUMMARY_MERCHANT: // needs auth
            console.log('ACTION_GET_ORDER_SUMMARY_MERCHANT');
            const merchant_order_summary = await actionGetMerchantOrderSummary(stripe, event, firebase_uid);
            console.log(merchant_order_summary);
            return merchant_order_summary;            
            
        // case ACTION_CHECKOUT: DEPRECATED FRIDAY JAN 28TH
        //     console.log('ACTION_CHECKOUT');
        //     const latest_invoice_id = await actionDoCheckout(stripe, event);
        //     console.log(latest_invoice_id);
        //     return { 'invoice_id': latest_invoice_id };

        case ACTION_DO_CHECKOUT_QTY:
            console.log('ACTION_DO_CHECKOUT_QTY')
            const checkout_session = await actionCreateCheckoutSession(stripe, event);
            const { url } = checkout_session; // checkout url
            const response = {
                url
            };
            return response

        case ACTION_TESTING:
            console.log('ACTION_TESTING')
            // const merchant_details = await actionTestFunction(stripe, event);
            return 'test'
        
        default:
            console.log(`Sorry, this is not a valid action`);
            return { msg: 'not valid action' };
    }
}

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    let body;
    let data;
    let statusCode = '200';
    let firebase_uid = '';
    
    const action = event.action;
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        if(isNotSupportedAction(action)){
            throw new Error("unsupported method");
        } else {
            console.log(`Supported event: ${action.toUpperCase()}`);

            if (action.toUpperCase() === ACTION_CREATE_PRODUCT 
            || action.toUpperCase() === ACTION_CREATE_MERCHANT
            || action.toUpperCase() === ACTION_GET_ORDER_SUMMARY_MERCHANT
            ) {
                console.log(`getting firebase_uid for event: ${action.toUpperCase()}`);
                firebase_uid = await verifyIdTokenGetFirebaseUid(event, FIREBASE_ADMIN);
                console.log(`firebase_uid: ${firebase_uid}`);
            }

            data = await stripeHandler(STRIPE, event, firebase_uid);
            body = {"msg": "sucessfull response"};

        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
        // body = "error";
        data = null;
        console.error(err);
    } finally {
        body = JSON.stringify(body);
    }

    return {
        statusCode,
        body,
        data,
        headers,
    };
};
