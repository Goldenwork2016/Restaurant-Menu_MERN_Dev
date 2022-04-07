// util functions
import Cookies from 'js-cookie';

export const isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  //   https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  export function getUniqueArray(value, index, self) {
    return self.indexOf(value) === index;
  }

  export const getMatchingProduct = (product_info, product_id) =>{
    let matching_product = null;
    product_info.forEach(product_price_info => {
      if(product_price_info.product.id.toLowerCase() === product_id.toLowerCase()) matching_product = product_price_info;
    });
    return matching_product;
  };

  export const getMatchingProductBasedOnPriceId = (product_info, cart_item_price_id) =>{
    let matching_product = null;
    if(cart_item_price_id){
      product_info.forEach(product_price_info => {
        const { prices } = product_price_info;
        const prices_list = prices.data;
  
        prices_list.forEach(price => {
          if(price.id.toLowerCase() === cart_item_price_id.toLowerCase()) matching_product = product_price_info;
        });
      });  
    }

    return matching_product;
  };

  export const getMatchingPriceOption = (prices, cart_item_price_id) =>{
    let matching_price_option = null;
    prices.forEach(price => {
      if(price.id.toLowerCase() === cart_item_price_id.toLowerCase()) matching_price_option = price;
    });
    return matching_price_option;
  };

  // py_ci -> payouts_cart_items
  export const updateCookiesCartItems = (cart_item) => {
    if( Cookies.get('py_ci') ){
      let existing_ci_json_arr = JSON.parse(Cookies.get('py_ci'));
      let index = -1;
      existing_ci_json_arr.forEach( (existing_cart_item, idx) =>{
        if (existing_cart_item.price_id === cart_item.price_id) {
          index = idx;
        }
      })
      if ( index !== -1){
        existing_ci_json_arr.splice(index, 1);
      } 
      existing_ci_json_arr.push(cart_item);
      Cookies.set('py_ci', JSON.stringify(existing_ci_json_arr), { expires: 365 });

    } else {
      Cookies.set('py_ci', JSON.stringify([cart_item]), { expires: 365 });
     }
  }

  export const removeCookiesCartItem = (cart_item_2_remove) => {
    if( Cookies.get('py_ci') ){
      let existing_ci_json_arr = JSON.parse(Cookies.get('py_ci'));
      // first remove the matching price_id from list
      let index = -1;
      existing_ci_json_arr.forEach( (existing_cart_item, idx) =>{
        if (existing_cart_item.price_id === cart_item_2_remove) {
          index = idx;
        }
      })
      if ( index !== -1){
        existing_ci_json_arr.splice(index, 1);
      } 
      Cookies.set('py_ci', JSON.stringify(existing_ci_json_arr), { expires: 365 });
    }
    return;
  }

  export const getCartItemsCookies = () => {
    if( Cookies.get('py_ci') ){
      const existing_ci_json_arr = JSON.parse(Cookies.get('py_ci'));
      return existing_ci_json_arr;
    }
    return [];
  }
