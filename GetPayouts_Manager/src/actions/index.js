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
  ACTION_GET_ORDER_SUMMARY_MERCHANT,
  FETCH_ORDER_SUMMARY_MERCHANT
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

export const fetchOrderSummaryMerchant = (data) => {
  return {
    type: FETCH_ORDER_SUMMARY_MERCHANT,
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

export const fetchMerchantData = (merchant_id) => {
  return (dispatch) => {
    dispatch(fetchMerchantPending())
    return axios.post(merchantApiUrl,
      {
        "action": ACTION_GET_MERCHANT,
        merchant_id
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

export const upsertMerchant = (id_token, 
  merchant_about='',
  merchant_name='',
  theme_color=''
  ) => {
  return (dispatch) => {
    dispatch(fetchMerchantPending())
    return axios.post(merchantApiUrl,
      {
        "action": ACTION_CREATE_MERCHANT,
        id_token,
        merchant_about,
        merchant_name,
        theme_color
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

export const getOrderSummaryMerchant = (id_token, 
  ) => {
  return (dispatch) => {
    dispatch(fetchMerchantPending())
    return axios.post(merchantApiUrl,
      {
        "action": ACTION_GET_ORDER_SUMMARY_MERCHANT,
        id_token,
      })
      .then(response => {
      if (isEmpty(response.data)){
        dispatch(fetchErr());
        return;
      }
      if(response.data.errorMessage===undefined){ 
        dispatch(fetchOrderSummaryMerchant(response.data.data))
        }  
      })
      .catch(error => {
        dispatch(fetchErr())
      });
  // };
 }
};

export const addProduct = (
  link_website,
  link_facebook,
  link_twitter,
  link_instagram,
  link_linkedin,
  link_youtube,
  merchant_id,
  merchant_name,
  merchant_about,
  theme_color,
  product_name,
  product_description,
  picture_id,
  place_id,
  about_host,
  pricing_options,
  id_token,
  ) => {
  return (dispatch) => {
    dispatch(fetchMerchantPending())
    return axios.post(merchantApiUrl,
      {
        "action": ACTION_CREATE_PRODUCT,
        link_website,
        link_facebook,
        link_twitter,
        link_instagram,
        link_linkedin,
        link_youtube,
        merchant_id,
        merchant_name,
        merchant_about,
        theme_color,
        product_name,
        product_description,
        picture_id,
        place_id,
        about_host,
        pricing_options,
        id_token,
      })
      .then(response => {
      if (isEmpty(response.data)){
        dispatch(fetchErr());
        return;
      }
      if(response.data.errorMessage===undefined){ 
        // dispatch(fetchMerchantID(response.data.data))
        }  
      })
      .catch(error => {
        dispatch(fetchErr())
      });
  // };
 }
};
