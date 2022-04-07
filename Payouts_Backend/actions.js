const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const { createProduct, fetchProductsMerchant } = require("./product");
const { createPricingPlans, getPriceType, commission_handler } = require("./prices");
const { getMerchantDynamoDB,
        upsertMerchant,
        upsertMerchantInfo,
        getMerchantFirebaseIdDynamoDB,
        upsertMerchantFirebaseIdDynamoDB,
        getPayoutMerchantInfoBasedOnDomain
    } = require("./merchant");

const { isEmpty, calculateCommission } = require('./utils');

const { customerHandler }  = require('./customer')
  
const { createSubscription } = require("./subscription");
const { createInvoiceForOneTimeProduct } = require("./invoice");
const { createCheckoutSession } = require("./checkout");
const { getShippingRatesMerchant } = require("./shipping");
const { getMerchantCoupons } = require("./coupons");
const { getOrderSummary } = require("./payment-intent");

const { PRICE_ONE_TIME, PRICE_RECURRING } = require("./consts");

/**
*
* actionCreateProduct
*/
async function actionCreateProduct(stripe, event, merchant_firebaseuid){
    // const merchant_id = event.merchant_id ? event.merchant_id : '';
    const merchant_name = event.merchant_name ? event.merchant_name : '';
    const merchant_about = event.merchant_about ? event.merchant_about : '';

    console.log(`merchant_firebaseuid:${merchant_firebaseuid}`)
    const merchant_existing_firebase_mapping = await getMerchantFirebaseIdDynamoDB(String(merchant_firebaseuid))
    console.log(`merchant_existing_firebase_mapping:${merchant_existing_firebase_mapping}`)
    console.log(merchant_existing_firebase_mapping)

    try {

        if(isEmpty(merchant_existing_firebase_mapping)) {
            console.log(`merchant doesnt exists,,, error!!! [merchant_firebaseuid=${merchant_firebaseuid}]`);
            throw new Error('merchant_firebaseuid doesnt exists, error');
        }
    
        const merchant_id = merchant_existing_firebase_mapping.Item.merchant_id.S;
        const merchant_existing_merchant_table = await getMerchantDynamoDB(merchant_id)
        console.log(`merchant_existing_merchant_table:${merchant_existing_merchant_table}`)
        console.log(merchant_existing_merchant_table);

        if(isEmpty(merchant_existing_merchant_table)) {
            const product_id = await createProduct(stripe, event);
            await createPricingPlans(stripe, event, product_id)
            const response = await upsertMerchant(merchant_id, product_id, merchant_name, merchant_about);
            return response;
        } else {
            let product_id_existing = ''
            let new_product_id = ``;
            if(merchant_existing_merchant_table.Item.hasOwnProperty('merchant_products')){
                product_id_existing = merchant_existing_merchant_table.Item.merchant_products.S;
            }
            const product_id = await createProduct(stripe, event);
            await createPricingPlans(stripe, event, product_id)

            if (product_id_existing) {
                new_product_id = `${product_id_existing}|${product_id}`;
            } else {
                new_product_id = `${product_id}`;
            }
            console.log(`updating merchant with new product [merchant_id=${merchant_id}, new_product_id=${new_product_id}]`);
            const response = await upsertMerchant(merchant_id, new_product_id);
            return response;
        }

    } catch(error){
        console.log(error)
        console.log(error.message);
        throw new Error('unable to create Product');
    }
}

/**
*
* actionGetMerchant
*/
async function actionGetMerchant(stripe, event){
    let merchant_id = '';
    if (event.hasOwnProperty('domain')) // get merchant using domain
    {   
        const domain = event.domain;
        const merchant_existing_based_on_domain = await getPayoutMerchantInfoBasedOnDomain(domain)
        if(merchant_existing_based_on_domain
         && merchant_existing_based_on_domain.hasOwnProperty('Items')){
             const { Items} = merchant_existing_based_on_domain;
             if(Items 
                && Items.length > 0 & Items.length === 1) {
                    merchant_id = merchant_existing_based_on_domain.Items[0].merchant_id;
            }
         }
    }
    else if (event.hasOwnProperty('merchant_id')) // get merchant using merchand_id
    {   
        merchant_id = event.merchant_id;
    }
    else throw new Error('error in getting merchant info')

    const merchant_existing = await getMerchantDynamoDB(merchant_id)
    
    try{
        
        if (isEmpty(merchant_existing)) {
            console.log(`merchant doesnt exists,,, error!!! [merchant_id=${merchant_id}]`);
            throw new Error('merchant doesnt exists, error');
        } else {
            const merchant_id = merchant_existing.Item.merchant_id.S;
            const merchant_name = merchant_existing.Item.merchant_name.S;
            const merchant_about = merchant_existing.Item.merchant_about.S;

            const merchant_products = merchant_existing.Item.merchant_products.S;
            const products = merchant_products.split('|');
            const merchantObj = {};
            const connected_account_id = merchant_existing.Item.connected_account_id.S;

            const product_info = await fetchProductsMerchant(stripe, products, connected_account_id);
            
            merchantObj['merchant_info'] = {
                "merchant_id": merchant_id,
                "merchant_name": merchant_name,
                "merchant_about": merchant_about,
            }
            merchantObj['product_info'] = product_info;

            return merchantObj
        }
        
    } catch(error){
        console.log(error)
        console.log(error.message);
        throw new Error('error in getting merchant info')
    }
}

/**
*
* actionUpsertMerchantFirebase
*/
async function actionUpsertMerchantFirebase(
    stripe,
    event,
    merchant_firebaseuid = '',
    ){

    const merchantObj = {};
    let merchant_about= '';
    let merchant_name= '';
    let theme_color= '';
    let merchant_products_existing = ''
    let merchant_product_info = ''
    let merchant_products = ''
    let connected_account_id = ''

    if(event.hasOwnProperty('merchant_about')){
        merchant_about = event.merchant_about;
    }

    if(event.hasOwnProperty('merchant_name')){
        merchant_name = event.merchant_name;
    }

    if(event.hasOwnProperty('theme_color')){
        theme_color = event.theme_color;
    }

    try{
        console.log(`merchant_firebaseuid:${merchant_firebaseuid}`)
        const merchant_existing_firebase_mapping = await getMerchantFirebaseIdDynamoDB(String(merchant_firebaseuid))
        console.log(`merchant mapping in firebase below`)
        console.log(merchant_existing_firebase_mapping);

        if (isEmpty(merchant_existing_firebase_mapping)) {
            const merchant_id_new = uuidv4();
            console.log(`creating new merchant [merchant_id=${merchant_id_new}]`);

            await upsertMerchantFirebaseIdDynamoDB(
                merchant_id_new,
                merchant_firebaseuid,
                );
            
            if(merchant_about && merchant_name && theme_color){
                await upsertMerchantInfo(
                    merchant_id_new,
                    merchant_about,
                    merchant_name,
                    merchant_products_existing,
                    theme_color
                    );         
            }
           
            merchantObj["merchant_id"] = merchant_id_new
            merchantObj["merchant_about"] = merchant_about
            merchantObj["merchant_name"] = merchant_name
            merchantObj["merchant_products"] = merchant_products_existing
            merchantObj["theme_color"] = theme_color

        } else {
            const merchant_id_existing = merchant_existing_firebase_mapping.Item.merchant_id.S;
            const merchant_existing = await getMerchantDynamoDB(merchant_id_existing)

            merchantObj["merchant_id"] = merchant_id_existing
            
            console.log('upserting merchant info');
            console.log(`merchant_existing existing in db below`)
            console.log(merchant_existing)

            if(merchant_existing.Item.hasOwnProperty('connected_account_id')){
                connected_account_id = merchant_existing.Item.connected_account_id.S;
            }

            if(merchant_existing.Item.hasOwnProperty('merchant_products')){
                merchant_products_existing = merchant_existing.Item.merchant_products.S;
                console.log(`merchant_products_existing: ${merchant_products_existing}`);

                merchant_products = merchant_products_existing.split('|');
                merchant_product_info = await fetchProductsMerchant(stripe, merchant_products, connected_account_id);          
            }
                
            if(merchant_about && merchant_name && theme_color){
                console.log('updating merchant info');
                console.log(`merchant_about: ${merchant_about}, merchant_name:${merchant_name}, theme_color:${theme_color}`);

                merchantObj["merchant_about"] = merchant_about
                merchantObj["merchant_name"] = merchant_name
                merchantObj["theme_color"] = theme_color
    
                await upsertMerchantInfo(
                    merchant_id_existing,
                    merchant_about,
                    merchant_name,
                    merchant_products_existing,
                    theme_color
                    );    

            } else {

                if(merchant_existing.Item.hasOwnProperty('merchant_about')){
                    merchant_about = merchant_existing.Item.merchant_about.S;
                    console.log(`merchant_about: ${merchant_about}`);
                }
    
                if(merchant_existing.Item.hasOwnProperty('merchant_name')){
                    merchant_name = merchant_existing.Item.merchant_name.S;
                    console.log(`merchant_name: ${merchant_name}`);
                }
    
                if(merchant_existing.Item.hasOwnProperty('theme_color')){
                    theme_color = merchant_existing.Item.theme_color.S;
                    console.log(`theme_color: ${theme_color}`);
                }

            }

            merchantObj["merchant_about"] = merchant_about
            merchantObj["merchant_name"] = merchant_name
            merchantObj["merchant_products"] = merchant_product_info ? merchant_product_info : merchant_products_existing
            merchantObj["theme_color"] = theme_color
            merchantObj["merchant_shipping"] = await getShippingRatesMerchant(stripe, connected_account_id);
            merchantObj["merchant_coupons"] = await getMerchantCoupons(stripe, connected_account_id)
            // merchantObj["merchant_order_summary"] = await getPaymentIntentsHandler(stripe, connected_account_id)
        }
        
        return merchantObj;

    } catch(error){
        console.log(error)
        console.log(error.message);
        throw new Error('error in actionUpsertMerchantFirebase')
    }
}

/**
*
* actionDoCheckout
*/
async function actionDoCheckout(stripe, event){
    const phone = event.phone;
    const price_id = event.price_id;
    // const product_id = event.product_id;
    // const product_name = event.product_name;
    const stripe_email = event.stripe_email;
    const stripe_token = event.stripe_token;
    
    try {
        if(!event.stripe_token) {
            throw new Error('no stripe token found')
        } else {
        const customer_id = await customerHandler(stripe, stripe_email, phone, stripe_token);
        const price_type = await getPriceType(stripe, price_id);
        
        if (price_type === PRICE_ONE_TIME){
            const invoice_id = createInvoiceForOneTimeProduct(stripe, customer_id, price_id);
            return invoice_id;
        }
        
        if (price_type === PRICE_RECURRING){
            const subscription = await createSubscription(stripe, customer_id, price_id);

            console.log(`created subscription for ${phone} ${stripe_email} ${customer_id}`);
            console.log(subscription);

            const {latest_invoice} = subscription;
            return latest_invoice;
        }
        throw new Error('INVALID price type');
        }
        
    } catch (error){
        console.log(error)
        console.log(error.message);
        throw new Error('error in doing checkout');
    }
}

/**
 * actionCreateCheckoutSession
 */
async function actionCreateCheckoutSession(stripe, event){
    try {
        // get merchant_id using domain
        if(!event.hasOwnProperty('merchant_id')
        || !event.hasOwnProperty('cart_data')
        ) {
            throw new Error('error in actionCreateCheckoutSession');
        }
        const merchant_id = event.merchant_id;
        const cart_data = event.cart_data;

        const merchant_existing = await getMerchantDynamoDB(merchant_id)
        console.log(`fetched existing merchant [merchant_id:${merchant_id}]`);
        console.log(merchant_existing);

        const connected_account_id = merchant_existing.Item.connected_account_id.S;
        const merchant_domain = merchant_existing.Item.domain.S;
        const automatic_tax_enabled = merchant_existing.Item.automatic_tax_enabled.BOOL;

        const payouts_commission_application_fee = await commission_handler(
            stripe, 
            cart_data,
            connected_account_id
        )
        const checkout_session = await createCheckoutSession(
            stripe,
            cart_data,
            connected_account_id,
            merchant_domain,
            payouts_commission_application_fee,
            automatic_tax_enabled
            );

        return checkout_session;

    } catch (error) {
        console.log(error)
        console.log(error.message);
        throw new Error('error in actionCreateCheckoutSession');
    }
}

/**
*
* actionGetMerchantOrderSummary
*/
async function actionGetMerchantOrderSummary(
    stripe,
    event,
    merchant_firebaseuid = '',
    ){
    let merchant_order_summary = {};
    let connected_account_id = ''

    try{
        console.log(`merchant_firebaseuid:${merchant_firebaseuid}`)
        const merchant_existing_firebase_mapping = await getMerchantFirebaseIdDynamoDB(String(merchant_firebaseuid))
        console.log(`merchant mapping in firebase below`)
        console.log(merchant_existing_firebase_mapping);

        if (isEmpty(merchant_existing_firebase_mapping)) {
            const merchant_id_new = uuidv4();
            console.log(`creating new merchant [merchant_id=${merchant_id_new}]`);

            await upsertMerchantFirebaseIdDynamoDB(
                merchant_id_new,
                merchant_firebaseuid,
                );
            return merchant_order_summary;
        } else {
            const merchant_id_existing = merchant_existing_firebase_mapping.Item.merchant_id.S;
            const merchant_existing = await getMerchantDynamoDB(merchant_id_existing)

            console.log(`merchant_existing existing in db below`)
            console.log(merchant_existing)

            if(merchant_existing.Item.hasOwnProperty('connected_account_id')){
                connected_account_id = merchant_existing.Item.connected_account_id.S;
            }
            merchant_order_summary = await getOrderSummary(stripe, connected_account_id)
        }
        
        return merchant_order_summary;

    } catch(error){
        console.log(error)
        console.log(error.message);
        throw new Error('error in actionGetMerchantOrderSummary')
    }
}

/**
 * actionTestFunction
 */
 async function actionTestFunction(stripe, event){
    try {
    let merchant_id = '';
    let cart_data = event.cart_data;

    // if (event.hasOwnProperty('domain')) // get merchant using domain
    // {   
    //     const domain = event.domain;
    //     const merchant_existing_based_on_domain = await getPayoutMerchantInfoBasedOnDomain(domain)
    //     if(merchant_existing_based_on_domain
    //      && merchant_existing_based_on_domain.hasOwnProperty('Items')){
    //          const { Items} = merchant_existing_based_on_domain;
    //          if(Items 
    //             && Items.length > 0 & Items.length === 1) {
    //                 merchant_id = merchant_existing_based_on_domain.Items[0].merchant_id;
    //         }
    //      }
    // }
    // else if (event.hasOwnProperty('merchant_id')) // get merchant using merchand_id
    // {   
    //     merchant_id = event.merchant_id;
    // }
    // else throw new Error('error in getting merchant info')

    // const merchant_existing = await getMerchantDynamoDB(merchant_id)
    // const connected_account_id = merchant_existing.Item.connected_account_id.S;

    // const payouts_commission_application_fee = await commission_handler(
    //     stripe, 
    //     cart_data,
    //     connected_account_id
    // )
    return 'hlll';

    } catch (error) {
        console.log(error)
        console.log(error.message);
        throw new Error('error in actionTestFunction');
    }
}

module.exports = {
 actionCreateProduct,
 actionGetMerchant,
 actionDoCheckout,
 actionUpsertMerchantFirebase,
 actionCreateCheckoutSession,
 actionTestFunction,
 actionGetMerchantOrderSummary
}