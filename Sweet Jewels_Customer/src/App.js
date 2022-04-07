import React from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer'
import NoMatch404 from './components/NoMatch404'
import ListingProductPageContainer from './containers/ListingProductPageContainer';
import AOS from 'aos';
import '../src/styles/css/styles.css';
import ComingSoon from './components/ComingSoon';
import Cancelled from './components/Cancelled';
import Success from './components/Success';

function App() {
  AOS.init({
    // initialise with other settings
    duration: 1500
    });
  return (
      <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/home" component={HomeContainer}/>
        <Route exact path="/en" component={HomeContainer}/>
        <Route exact path="/fr" component={HomeContainer}/>
        <Route exact path="/coming-soon" component={ComingSoon}/>
        <Route path='/shop/:id' component={ListingProductPageContainer}/>
        <Route path='/pay/:id' component={ListingProductPageContainer}/>
        {/* <Route path="/" render={() => {window.location.href="/home"}} /> */}
        <Route path="/cancelled" component={Cancelled}/>
        <Route path="/success" component={Success}/>
        <Route component={NoMatch404} />
        </Switch>
      </Router>
  );
}

export default App;
