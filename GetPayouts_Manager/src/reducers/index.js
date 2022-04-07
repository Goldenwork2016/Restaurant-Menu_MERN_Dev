const initialState = {
    skuData: [],
    product:'',
    merchantProductInfo:'',
    merchant_id: '',
    merchant_id_account_id: '',
    merchant_about: '',
    merchant_name: '',
    merchant_products: '',
    merchant_coupons: '',
    merchant_shipping: '',
    merchant_order_summary: {},
    theme_color: '',
    fetchProductPending: true,
    fetchMerchantPending: true,
    fetchAllProductsPending: true,
    show404:false
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SKUS_DATA":
          if(action.data!==undefined){
            return Object.assign({}, state, {
              skuData: action.data,
              fetchAllProductsPending: false,
            });
          } else {
            return initialState;
          } 
          case "FETCH_PRODUCT_DATA":
            return Object.assign({}, state, {
              product: action.data,
              fetchProductPending: false,
            });

          case "FETCH_MERCHANT_DATA":
            return Object.assign({}, state, {
              merchantProductInfo: action.data,
              fetchMerchantPending: false,
            });

          case "FETCH_MERCHANT_ID":
              return Object.assign({}, state, {
                merchant_id: action.data.merchant_id,
                merchant_about: action.data.merchant_about,
                merchant_name: action.data.merchant_name,
                merchant_products: action.data.merchant_products,
                theme_color: action.data.theme_color,
                merchant_coupons: action.data.merchant_coupons,
                // merchant_order_summary: action.data.merchant_order_summary,
                merchant_shipping: action.data.merchant_shipping,
                fetchMerchantPending: false
          });            

          case "FETCH_ORDER_SUMMARY_MERCHANT":
              return Object.assign({}, state, {
                merchant_order_summary: action.data,
                fetchMerchantPending: false
          });          

          case "FETCH_PRODUCT_PENDING":
            return Object.assign({}, state, {
              product: '',
              fetchProductPending: true,
            });
          
          case "FETCH_MERCHANT_PENDING":
            return Object.assign({}, state, {
              merchantProductInfo: '',
              fetchMerchantPending: true,
            });

          case "FETCH_PRODUCTS_ALL_PENDING":
            return Object.assign({}, state, {
              skuData: [],
              fetchAllProductsPending: true,
            });
            
          case "RESET_PRODUCT":
          return Object.assign({}, state, {
            product: '',
            fetchProductPending: true,
            show404:false
          }); 

          case "RESET_MERCHANT":
          return Object.assign({}, state, {
            merchantProductInfo: '',
            fetchMerchantPending: true,
            show404:false
          });           

          case "FETCH_ERR":
          return Object.assign({}, state, {
            show404: true
          }); 
        default:
          return state;
      }
  };
  
  export default asyncReducer;