import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import thunk from "redux-thunk";
import {initStoreFetchMerchantData} from './utils/store-util';

const store = createStore(asyncReducer, applyMiddleware(thunk));
initStoreFetchMerchantData(store);
export default store;
