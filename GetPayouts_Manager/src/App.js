import React from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import NoMatch404 from './components/NoMatch404'

import DashboardContainer from './containers/DashboardContainer';
import NewListing from './containers/NewListing';
import LoginSignUp from './components/LoginSignUp';
import Listings from './components/Listings';
import Pricing from './components/Pricing';
import ComingSoon from './components/ComingSoon';

import AOS from 'aos';
import StripeConnect from './components/StripeConnect';
import NewProductContainer from './containers/NewProductContainer';
import ShopSettings from './containers/ShopSettings';
import Coupons from './containers/Coupons';
import ShippingRates from './containers/ShippingRates';
import TaxRates from './containers/TaxRates';
import NewCoupon from './containers/NewCoupon';
import NewShippingRate from './containers/NewShippingRate';
import NewTaxRate from './containers/NewTaxRate';
import OrdersContainer from './containers/OrdersContainer';
import Registration1 from './components/Registration1';
import Registration2 from './components/Registration2';
import HowItWorks from './components/HowItWorks';
import Promo from './components/Promo';
import Why from './components/Why';
import Registration3 from './components/Registration3';
import Registration4 from './components/Registration4';

function App() {
  AOS.init({
    // initialise with other settings
    duration: 1500
    });
  return (
      <Router>
      <Switch>
        <Route exact path="/dashboard" component={DashboardContainer}/>
        <Route exact path="/registration1" component={Registration1}/>
        <Route exact path="/registration2" component={Registration2}/>
        <Route exact path="/registration3" component={Registration3}/>
        <Route exact path="/registration4" component={Registration4}/>
        <Route exact path="/why" component={Why}/>
        <Route exact path="/how" component={HowItWorks}/>
        <Route exact path="/covid19-promo" component={Promo}/>
        <Route exact path="/orders" component={OrdersContainer}/>
        <Route exact path="/new" component={NewProductContainer}/>
        <Route exact path="/settings" component={ShopSettings}/>
        <Route exact path="/coupons" component={Coupons}/>
        <Route exact path="/new-coupon" component={NewCoupon}/>
        <Route exact path="/shipping" component={ShippingRates}/>
        <Route exact path="/new-shipping-rate" component={NewShippingRate}/>
        <Route exact path="/taxes" component={TaxRates}/>
        <Route exact path="/new-tax-rate" component={NewTaxRate}/>
        <Route exact path="/new" component={NewListing}/>
        <Route exact path="/listings" component={Listings}/>
        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/coming-soon" component={ComingSoon} />
        <Route exact path="/examples" component={HomeContainer}/>
        <Route exact path="/connect" component={StripeConnect}/>
        <Route exact path="/" component={HomeContainer}/>
        <Route component={NoMatch404} />
        </Switch>
      </Router>
  );
}

export default App;
