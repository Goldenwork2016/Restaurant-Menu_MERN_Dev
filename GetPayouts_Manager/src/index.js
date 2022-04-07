import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from "react-redux";
import ReactGA from 'react-ga';
import hello from './components/hello';
import 'core-js/es/map';
import 'core-js/es/set';
// import firebase from 'firebase';
import {
        StripeProvider
      } from 'react-stripe-elements';

const TRACKING_ID = 'UA-123843516-2';
ReactGA.initialize(TRACKING_ID);
// Configure Firebase.
// const config = {
//         apiKey: "AIzaSyCEwK_T9KuEXcwfT11dlTD9J8ONmCCA8Nk",
//         authDomain: "vipul-flock.firebaseapp.com",
//         databaseURL: "https://vipul-flock.firebaseio.com",
//         projectId: "vipul-flock",
//         storageBucket: "",
//         messagingSenderId: "331033170481",
//         appId: "1:331033170481:web:dda7e2649dff0ff6f4fb10",
//         measurementId: "G-VP2NF72W3Z"
//       };
// firebase.initializeApp(config);
ReactDOM.render(
        <StripeProvider apiKey={hello()}>
                <Provider store={store}>
                        <App />
                </Provider>
        </StripeProvider>, document.getElementById('root')
        
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
