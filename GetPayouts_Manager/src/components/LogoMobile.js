import React from 'react';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';

/**
 * recordRedirect2HomePage from Product Page 
 */
function recordRedirect2HomePage(props){
    if(props){
        const{productName}=props
        if(productName){
            ReactGA.pageview(`/`);
            ReactGA.event({
            category: 'LOGO_MOBILE_PRODUCT_PAGE',
            action:    'Clicked on logo on mobile from '+productName,
            label: 'LOGO_MOBILE_PRODUCT_PAGE'
            });
        }
    }
  }

const LogoMobile = (props)=>{
    return(
        <Link className="Topbar__home__EdzBF NamedLink_active" title="Go to homepage" target="" 
        to="/"
        onClick={() => recordRedirect2HomePage(props)}>
            <picture>
                <source
                    srcSet={process.env.PUBLIC_URL+"/assets/logoorange.webp"} alt="Payouts logo"
                    type="image/webp"/>
                <source
                    srcSet={process.env.PUBLIC_URL+"/assets/logoorange.png"} alt="Payouts logo"
                    type="image/png" />
                <img src={process.env.PUBLIC_URL+"/assets/logoorange.png"} alt="Payouts logo"
                    className="respaced__logo__EZy5U"/>
            </picture>
        </Link>
    )
}

export default LogoMobile