const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({region: 'us-west-2', apiVersion: '2012-08-10'});
const docClient = new AWS.DynamoDB.DocumentClient();

const PAYOUT_MERCHANTS_TABLE_NAME='payouts-merchants';
const PAYOUT_FIREBASE_TABLE_NAME='payouts-firebase';

/*
create item to insert into dynamo db
@param {String} merchant_id
@param {String} product_id
*/
function createParamMerchant(merchant_id, product_id, merchant_name='', merchant_about='', TableName=PAYOUT_MERCHANTS_TABLE_NAME){
     return  {
            Item:{
                "merchant_id":{
                    S:merchant_id
                },
                "merchant_products":{
                    S: product_id
                },
                "merchant_name":{
                    S: merchant_name
                },
                "merchant_about":{
                    S: merchant_about
                },
            },
            TableName
    };
}

/*
create item to insert into dynamo db
@param {String} merchant_id
@param {String} product_id
*/
function createParamMerchantInfo(
    merchant_id,
    merchant_about,
    merchant_name,
    merchant_products,
    theme_color,
    automatic_tax_enabled=false,
    TableName=PAYOUT_MERCHANTS_TABLE_NAME){
    return  {
           Item:{
               "merchant_id":{
                S:merchant_id
                },
                "merchant_about":{
                    S:merchant_about
                },
                "merchant_name":{
                    S:merchant_name
                },
                "merchant_products":{
                    S: merchant_products
                },
                "theme_color":{
                    S:theme_color
                },
                "automatic_tax_enabled":{
                    BOOL:automatic_tax_enabled
                },
           },
           TableName
   };
}


/*
create item to insert into dynamo db firebase mapping
@param {String} merchant_id
@param {String} product_id
*/
function createParamFirebase(
    merchant_id,
    merchant_firebaseuid,
    TableName=PAYOUT_FIREBASE_TABLE_NAME){
    return  {
           Item:{
               "merchant_firebaseuid":{
                   S:merchant_firebaseuid
               },
               "merchant_id":{
                S:merchant_id
                },
           },
           TableName
   };
}

/**
 * get merchant using merchant_id 
 * 
 * @param {String} email 
 * @returns {String} customerId
 */
 async function getMerchantDynamoDB(merchant_id='', TableName=PAYOUT_MERCHANTS_TABLE_NAME) {
    const params = {
    Key: {
     "merchant_id": {
        S: merchant_id
      }  
    }, 
    TableName
    };
    return new Promise( (resolve,reject) =>{
         dynamodb.getItem(params, (err, data) => {
         if (err) {
             console.log(err, err.stack);
             reject(err);
         } // an error occurred
         else  {
             resolve(data);
         }; 
        })
    });
}

/**
 * get merchant using merchant_firebaseuid 
 * 
 * @param {String} email 
 * @returns {String} customerId
 */
 async function getMerchantFirebaseIdDynamoDB(merchant_firebaseuid='', TableName=PAYOUT_FIREBASE_TABLE_NAME) {
    const params = {
    Key: {
     "merchant_firebaseuid": {
        S: merchant_firebaseuid
      }  
    }, 
    TableName
    };
    return new Promise( (resolve,reject) =>{
         dynamodb.getItem(params, (err, data) => {
         if (err) {
             console.log(err, err.stack);
             reject(err);
         } // an error occurred
         else  {
             resolve(data);
         }; 
        })
    });
}

/*
add merchant using merchant_id
*/
async function upsertMerchant(merchant_id, product_id){
    return new Promise((resolve,reject)=>{
            dynamodb.putItem(createParamMerchant(
            merchant_id, 
            product_id,
        ), (err, data) => {
          if (err) {
              console.log(err, err.stack);
              reject({"msg":"err in adding merchant to db"});
          } // an error occurred
          else {
              resolve({"msg":"merchant added to db"});
          }
         });  
    })
}

/*
add merchant using merchant_id
*/
async function upsertMerchantInfo(
    merchant_id,
    merchant_about,
    merchant_name,
    merchant_products,
    theme_color,
    automatic_tax_enabled=false
    ){
    return new Promise((resolve,reject)=>{
            dynamodb.putItem(createParamMerchantInfo(
            merchant_id, 
            merchant_about,
            merchant_name,
            merchant_products,
            theme_color,
            automatic_tax_enabled
        ), (err, data) => {
          if (err) {
              console.log(err, err.stack);
              reject({"msg":"err in adding merchant to db"});
          } // an error occurred
          else {
              resolve({"msg":"merchant added to db"});
          }
         });  
    })
}

/*
add merchant using firebase_uid
*/
async function upsertMerchantFirebaseIdDynamoDB(
    merchant_id,
    merchant_firebaseuid,
    ){
    return new Promise((resolve,reject)=>{
            dynamodb.putItem(createParamFirebase(
                merchant_id,
                merchant_firebaseuid,
        ), (err, data) => {
          if (err) {
              console.log(err, err.stack);
              reject({"msg":"err in adding merchant to db"});
          } // an error occurred
          else {
              resolve({"msg":"merchant added to db"});
          }
         });  
    })
}

/**
 * getPayoutMerchantInfoBasedOnDomain
 * 
 * @param {String} email 
 */
 async function getPayoutMerchantInfoBasedOnDomain(domain) {
    const params = {
         TableName: PAYOUT_MERCHANTS_TABLE_NAME,
         FilterExpression: "#domain = :domain",
         ExpressionAttributeNames: {
             "#domain": "domain",
         },
         ExpressionAttributeValues: {
              ":domain": domain,
         }
     };
     
     return new Promise( (resolve,reject) =>{
         docClient.scan(params, (err, data) => {
             if (err) {
                 console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
                 reject("err in retrieving merchant info")
             } else {
                 console.log('retrieved merchant info based on domain');
                 console.log(data);
                 resolve(data);
             }
         });
     });
 }

module.exports = {
    getMerchantDynamoDB,
    getMerchantFirebaseIdDynamoDB,
    upsertMerchant,
    upsertMerchantInfo,
    upsertMerchantFirebaseIdDynamoDB,
    getPayoutMerchantInfoBasedOnDomain
}