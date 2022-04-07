import { fetchMerchantData } from '../actions';
let domain = '';

if( window !==undefined){
    domain =  window.location.origin
    .replace('http://','')
    .replace('https://','')
    .replace('www.','')
    .replace('.com','')
    .replace(/\s/g,'')
    //.replace(/\./g,'')
}

export async function initStoreFetchMerchantData(store){
    let state = store.getState();
    if (!state.merchantProductInfo) {
        store.dispatch(fetchMerchantData(domain));
    } else {
        // 
    }
}
