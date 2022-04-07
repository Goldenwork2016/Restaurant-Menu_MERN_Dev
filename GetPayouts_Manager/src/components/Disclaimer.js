import React from 'react';
import {Link} from 'react-router-dom';
import ReactGA from 'react-ga';

/**
 * track which product was clicked on, track its pageview
 */
function recordCancellationClickAndPageView(props){
    const{productName}=props
    ReactGA.pageview(`/cancellation-policy`);
    ReactGA.event({
        category: 'CANCELLATION_POLICY_CHECKOUT',
        action:    'Clicked on cancellation policy for '+productName,
        label: 'CANCELLATION_POLICY_CHECKOUT'
        });
  }

const Disclaimer = (props)=>
<div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
    Your purchase is protected. <br></br><b>Cancel anytime</b>. No commitment.
    {/* <Link 
    onClick={() => recordCancellationClickAndPageView(props)}
    className='Link__checkout' to='/cancellation-policy'>
       cancellation policy
    </Link> */}
</div>

export default Disclaimer