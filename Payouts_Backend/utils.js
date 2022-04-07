const { 
    ACTION_CREATE_PRODUCT,
    ACTION_GET_PRODUCT,
    ACTION_GET_MERCHANT,
    ACTION_CREATE_MERCHANT,
    ACTION_REMOVE_PRODUCT,
    ACTION_UPDATE_PRODUCT,
    
    ACTION_ADD_PLAN,
    ACTION_REMOVE_PLAN,
    ACTION_CHECKOUT,
    ACTION_DO_CHECKOUT_QTY,
    PAYOUTS_COMMISSION_ONE_TIME,
    ACTION_TESTING,
    ACTION_GET_ORDER_SUMMARY_MERCHANT,
} = require("./consts");

const ACTIONS = [ACTION_CREATE_PRODUCT, 
ACTION_GET_PRODUCT, 
ACTION_GET_MERCHANT,
ACTION_CREATE_MERCHANT, 
ACTION_UPDATE_PRODUCT, 
ACTION_REMOVE_PRODUCT,
// ACTION_CHECKOUT,
ACTION_DO_CHECKOUT_QTY,
ACTION_TESTING,
ACTION_GET_ORDER_SUMMARY_MERCHANT
]

/**
 * isEmpty 
 */
function isEmpty(obj) {
  for(const prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

/**
* isNotSupportedAction 
*/
 function isNotSupportedAction(action){
  return !ACTIONS.includes(action);
}

/**
 * calculate comission for payouts for one time products
 */
function calculateCommission(totalAmt){
 return Math.floor(PAYOUTS_COMMISSION_ONE_TIME * totalAmt);
}

module.exports = {
    isEmpty,
    isNotSupportedAction,
    calculateCommission
}