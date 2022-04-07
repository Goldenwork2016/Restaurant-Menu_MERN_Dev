import { updateCookiesCartItems, getCartItemsCookies, removeCookiesCartItem } from '../utils/utils';

const initialState = {
    skuData: [],
    product:'',
    merchantProductInfo:'',
    merchant_id: '',
    fetchProductPending: true,
    fetchMerchantPending: true,
    fetchAllProductsPending: true,
    show404:false,
    cart_items_with_qty: getCartItemsCookies(),
    selected_product_id: '',
    checkoutPending: undefined,
    checkoutError: false,
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

          case "CHECKOUT_PENDING":
            return Object.assign({}, state, {
              checkoutPending: true
            }); 

          case "CHECKOUT_SUCCESSFUL":
            return Object.assign({}, state, {
              checkoutPending: false
            }); 

          case "CHECKOUT_ERROR":
            return Object.assign({}, state, {
              checkoutError: true
          });             

          case "ADD_TO_CART_QTY":
            updateCookiesCartItems(action.data)
            
            const _existing_cart_items_with_qty = [...state.cart_items_with_qty];
            const {price_id} = action.data;
            
            let existing_cart_item_index = -1;

            _existing_cart_items_with_qty.forEach( (existing_cart_item, idx) =>{
              if (existing_cart_item.price_id === price_id) {
                existing_cart_item_index = idx;
              }
            })

            if ( existing_cart_item_index !== -1){
              _existing_cart_items_with_qty.splice(existing_cart_item_index, 1);
            }
            _existing_cart_items_with_qty.push(action.data);
            
            return Object.assign({}, state, {
              cart_items_with_qty:  _existing_cart_items_with_qty
            });

          case "SET_SELECTED_PRODUCT_ID":
            return Object.assign({}, state, {
              selected_product_id:  action.data,
            });

          case "REMOVE_CART_ITEM":
            removeCookiesCartItem(action.data);
            const cart_item_2_remove = action.data;
            const _cart_items_with_qty = [...state.cart_items_with_qty];
            let index = -1;
            _cart_items_with_qty.forEach( (existing_cart_item, idx) =>{
              if (existing_cart_item.price_id === cart_item_2_remove) {
                index = idx;
              }
            })
            if ( index !== -1){
              _cart_items_with_qty.splice(index, 1);
            } 
          return Object.assign({}, state, {
            cart_items_with_qty:  _cart_items_with_qty,
          });

        default:
          return state;
      }
  };
  
  export default asyncReducer;