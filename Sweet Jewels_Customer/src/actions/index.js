import {
  FETCH_SKUS_DATA,
  FETCH_MERCHANT_DATA,
  FETCH_PRODUCT_DATA,
  FETCH_PRODUCT_PENDING,
  FETCH_ERR,
  RESET_PRODUCT,
  FETCH_PRODUCTS_ALL_PENDING,
  ACTION_GET_MERCHANT,
  ACTION_CREATE_MERCHANT,
  ACTION_CREATE_PRODUCT,
  FETCH_MERCHANT_ID,
  RESET_MERCHANT,
  FETCH_MERCHANT_PENDING,
  SET_SELECTED_PRODUCT_ID,
  REMOVE_CART_ITEM,
  ADD_TO_CART_QTY,
  CHECKOUT_PENDING,
  CHECKOUT_SUCCESSFUL,
  CHECKOUT_ERROR,
  ACTION_DO_CHECKOUT_QTY
} from './types'
import axios from 'axios';
import {isEmpty} from '../utils/utils';

const apiUrl = 'https://o9ovncrijh.execute-api.us-west-2.amazonaws.com/dev/products';
const productApiUrl='https://o9ovncrijh.execute-api.us-west-2.amazonaws.com/dev/products';
const merchantApiUrl='https://fdxqe4fqz6.execute-api.us-west-2.amazonaws.com/prod/payout-merchant';

export const fetchData = (data) => {
  return {
    type: FETCH_SKUS_DATA,
    data
  }
};

export const fetchProduct = (data) => {
  return {
    type: FETCH_PRODUCT_DATA,
    data
  }
};

export const fetchMerchant = (data) => {
  return {
    type: FETCH_MERCHANT_DATA,
    data
  }
};

export const fetchMerchantID = (data) => {
  return {
    type: FETCH_MERCHANT_ID,
    data
  }
};

export const resetMerchantData = () => {
  return {
    type: RESET_MERCHANT
  }
};

export const resetProductData = () => {
  return {
    type: RESET_PRODUCT
  }
};

export const fetchProductPending = () => ({
  type: FETCH_PRODUCT_PENDING
});

export const fetchMerchantPending = () => ({
  type: FETCH_MERCHANT_PENDING
});

export const checkoutPending = () => ({
  type: CHECKOUT_PENDING
});

export const checkoutSuccessful = () => ({
  type: CHECKOUT_SUCCESSFUL
});

export const checkoutError = () => ({
  type: CHECKOUT_ERROR
});

export const fetchErr = () => ({
  type: FETCH_ERR
});

export const fetchAllProductsPending = () => ({
  type: FETCH_PRODUCTS_ALL_PENDING
});

export const fetchSkusData = () => {
  return (dispatch) => {
    dispatch(fetchAllProductsPending())
    return axios.get(apiUrl)
      .then(response => {

        if(response.data.errorMessage===undefined){

          response
          .data
          .products
          .sort((a, b) => (a.sku_created > b.sku_created) ? -1 : 1)
  
          dispatch(fetchData(response.data.products))        
        }  
        if(response.data.errorMessage!==undefined){
          dispatch(fetchErr())
        }
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchProductData = (productId) => {
  return (dispatch) => {
    dispatch(fetchProductPending())
    return axios.get(productApiUrl+`/${'prod_'+productId}`)
      .then(response => {
      if (isEmpty(response.data)){
        dispatch(fetchErr());
        return;
      }
      if(response.data.errorMessage===undefined){
          dispatch(fetchProduct(response.data.product))
        }  
      })
      .catch(error => {
        dispatch(fetchErr())
      });
  // };
 }
};

export const fetchMerchantData = (domain) => {
  return (dispatch) => {
    dispatch(fetchMerchantPending())
    return axios.post(merchantApiUrl,
      {
        "action": ACTION_GET_MERCHANT,
        domain
      })
      .then(response => {
      if (isEmpty(response.data)){
        dispatch(fetchErr());
        return;
      }
      if(response.data.errorMessage===undefined){ 
        dispatch(fetchMerchant(response.data.data))
        }  
      })
      .catch(error => {
        dispatch(fetchErr())
      });
  // };
 }
};

export const upsertMerchant = (id_token) => {
  return (dispatch) => {
    dispatch(fetchMerchantPending())
    return axios.post(merchantApiUrl,
      {
        "action": ACTION_CREATE_MERCHANT,
        id_token
      })
      .then(response => {
      if (isEmpty(response.data)){
        dispatch(fetchErr());
        return;
      }
      if(response.data.errorMessage===undefined){ 
        dispatch(fetchMerchantID(response.data.data))
        }  
      })
      .catch(error => {
        dispatch(fetchErr())
      });
  // };
 }
};

export const doCheckout = (cart_items_with_qty, merchant_id) => {
  return (dispatch) => {
    dispatch(checkoutPending())
    return axios.post(merchantApiUrl,{
        "action": ACTION_DO_CHECKOUT_QTY,
        "cart_data":cart_items_with_qty,
        "merchant_id": merchant_id,
      })
      .then(response => {
      if (isEmpty(response.data)){
        dispatch(checkoutError())
        return;
      }
      if(response.data.errorMessage===undefined){ 
        // dispatch(fetchMerchantID(response.data.data))
        const checkoutSessionUrl = response.data.data.url;
        dispatch(checkoutSuccessful())
        if (typeof window !== 'undefined') {
          window.location.href = checkoutSessionUrl;
          }
        }  
      })
      .catch(error => {
        dispatch(checkoutError())
      });
  // };
 }
};

export const add2CartQty = (data) => ({
  type: ADD_TO_CART_QTY,
  data
});

export const setSelectedProductId = (data) => ({
  type: SET_SELECTED_PRODUCT_ID,
  data
});

export const removeCartItem = (data) => ({
  type: REMOVE_CART_ITEM,
  data
});

