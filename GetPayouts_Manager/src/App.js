import React from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import Fees from './components/Fees'
// import CancellationPolicy from './components/CancellationPolicy';
// import Covid19 from './components/Covid19';
import FAQ from './components/FAQ';
import About from './components/About';
// import PromoterLogin from './components/PromoterLogin'
// import Dashboard from './components/Dashboard'
// import Host from './components/Host'
// import Berri from './components/Berri'
// import SquareVictoria from './components/SquareVictoria'
// import PlaceDArmes from './components/PlaceDArmes'
// import PlaceDesArts from './components/PlaceDesArts'
// import GuyConcordia from './components/GuyConcordia'
// import Peel from './components/Peel'
// import Atwater from './components/Atwater'
// import Compare from './components/Compare'
import NoMatch404 from './components/NoMatch404'

import ListingProductPageContainer from './containers/ListingProductPageContainer';
import MerchantPageContainer from './containers/MerchantPageContainer';

import DashboardContainer from './containers/DashboardContainer';
import NewListing from './components/NewListing';
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

function App() {
  AOS.init({
    // initialise with other settings
    duration: 1500
    });
  return (
      <Router>
      <Switch>
        <Route exact path="/dashboard" component={DashboardContainer}/>
        <Route exact path="/orders" component={OrdersContainer}/>
        <Route exact path="/new" component={NewProductContainer}/>
        <Route exact path="/settings" component={ShopSettings}/>
        <Route exact path="/coupons" component={Coupons}/>
        <Route exact path="/new-coupon" component={NewCoupon}/>
        <Route exact path="/shipping" component={ShippingRates}/>
        <Route exact path="/new-shipping-rate" component={NewShippingRate}/>
        <Route exact path="/taxes" component={TaxRates}/>
        <Route exact path="/new-tax-rate" component={NewTaxRate}/>
        {/* <Route exact path="/new" component={NewListing}/> */}
        <Route exact path="/listings" component={Listings}/>
        <Route exact path="/login" component={LoginSignUp} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/coming-soon" component={ComingSoon} />
        <Route exact path="/examples" component={HomeContainer}/>
        <Route exact path="/connect" component={StripeConnect}/>
        {/* <Route exact path="/spaces" render={() => {window.location.href="https://respaced.netlify.app/"}}/> */}
        <Route exact path="/members" component={HomeContainer}/>
        <Route exact path="/" component={HomeContainer}/>
        {/* <Route exact path="/" render={() => {window.location.href="https://respaced.netlify.app/"}}/> */}
        <Route exact path="/fees" component={Fees} />
        {/* <Route exact path="/cancellation-policy" component={CancellationPolicy} /> */}
        {/* <Route exact path="/Covid19" component={Covid19} /> */}
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/host" component={Host} /> */}
        <Route path='/pay/:id' component={ListingProductPageContainer}/>
        <Route path='/merchant/:id' component={MerchantPageContainer}/>
        {/* <Route exact path="/latin-vibes" render={() => {window.location.href="/burlight"}} /> */}
        {/* <Route exact path="/muzique" render={() => {window.location.href="/burlight"}} /> */}
        {/* <Route exact path="/maison-saintpaul" render={() => {window.location.href="/ruzoga"}} />    */}
        {/* <Route exact path="/lophasia" render={() => {window.location.href="/"}} />    */}
        {/* <Route exact path="/berri" component={Berri} /> */}
        {/* <Route exact path="/square-victoria-oaci" component={SquareVictoria} /> */}
        {/* <Route exact path="/place-d'armes" component={PlaceDArmes} /> */}
        {/* <Route exact path="/place-des-arts" component={PlaceDesArts} /> */}
        {/* <Route exact path="/guy-concordia" component={GuyConcordia} /> */}
        {/* <Route exact path="/peel" component={Peel} /> */}
        {/* <Route exact path="/atwater" component={Atwater} /> */}
        {/* <Route exact path="/compare" component={Compare} /> */}
        {/* <Route exact path="/fifa20-tournament" render={() => {window.location.href="https://www.eventbrite.com/e/fifa20-tournament-1v1-tickets-85702202595"}} /> */}
        {/* <Route exact path="/restaurants" />    */}
        <Route component={NoMatch404} />
        </Switch>
      </Router>
  );
}

export default App;
