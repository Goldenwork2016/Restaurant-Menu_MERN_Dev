import React from 'react';
import '../styles/css/style.css';

import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import SearchButtonMobile from './SearchButtonMobile';
import SearchBarDesktop from './SearchBarDesktop';
import LogoMobile from './LogoMobile';
import LogoDesktop from './LogoDesktop';
import RightHandButtonDesktop from './RightHandButtonDesktop';
import {Link} from 'react-router-dom';

const Fees=()=>{
  window.scrollTo(0, 0)
    return (
      <div id="root">
  <div className="Page__root__2VuHt">
    <div className="Page__content__rCsmc">
        <div className="LayoutWrapperTopbar__root__3sx2Q">
          <div className="Topbar__root__2O2hF">
            <div className="Topbar__container__3H7De bg-dark">
                <HamburgerMenu/>
                <LogoMobile/>
                <SearchButtonMobile/>
              </div>
            <div className="Topbar__desktop__2tv3W">
                <nav className="TopbarDesktop__root__3iSVO bg-dark">
                    <LogoDesktop/>
                    <SearchBarDesktop/>
                    <RightHandButtonDesktop/>
                </nav>
            </div>
            </div>
          </div>
        <div className="LayoutSideNavigation__container__3tJLc">
        <aside className="LayoutWrapperSideNav__root__lVHCq leftnav_wrapper test">
            <nav className="LayoutWrapperSideNav__tabs__EKdgG">
            <div id="0" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link className="TabNav__link__1PgdT" target=""
                  to="/Covid19">COVID-19</Link>
                  </div>
              <div id="1" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link 
                  // className="TabNav__link__1PgdT" 
                  className="TabNav__link__1PgdT TabNav__selectedLink__2d9yw NamedLink_active"
                  to='/fees'
                  // href="respaced-fees"
                  >Fees
                </Link>
              </div>
              <div id="2" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link
                  className="TabNav__link__1PgdT"  
                  to='/cancellation-policy'
                  // className="TabNav__link__1PgdT TabNav__selectedLink__2d9yw NamedLink_active" 
                  // target=""
                  // href="#cancellation-policy"
                  >
                  Cancellation Policy
                  </Link>
              </div>
            </nav>
          </aside>
          <div className="LayoutSideNavigation__layoutWrapperMain__3jQ70" role="main">
            <div className="FeesPage__content__1odXN">
              <h1 className="FeesPage__heading__R29Nq"><span>Payouts Fees</span></h1>
              <div className="Fees__root__BUSuv">
                <p className="Fees__lastUpdated__3L_rR">Updated June 1st, 2020<p><b>COVID-19 UPDATE: Payouts is waiving all host fees indefinitely due to the COVID-19 crisis affecting all restaurants around the world.</b></p></p>
                <p>This is an overview of fees on Payouts for customers and venue partners. If you have questions at any time regarding fees, please email us at <a
                    href="mailto:hello@getpayouts.com">hello@getpayouts.com</a>.</p>
                <h2>Fees for Guests:</h2>
                <p>We charge a 10% cleaning and maintenance fee to continue to deliver only the best spaces for professionals across Montreal.
                  </p>
                <h2>Fees for Hosts:</h2>
                {/* <h3>1. Fees for Venues</h3> */}
                <p><b>COVID-19 UPDATE: Payouts is waiving all host fees indefinitely due to the COVID-19 crisis affecting all restaurants around the world.</b></p>
                <p>Payouts retains 5% of each membership payment as a transaction fee and requires that a space can support at least 3 guests, for a minimum of 40 hours every week. The fee is deducted from the
                  membership total paid out to hosts. The price agreed upon with Payouts should include any local taxes and/or fees.
                  Hosts are responsible for reporting all income
                  generated from memberships per government and local regulations and codes. We may withhold a
                  membership transaction in the event of a dispute or other event per the Services Agreement.</p>
                <h2>Other Fees:</h2>
                <h3>1. Merchant cancellation fee</h3>
                <p>In the event that a host cancels a reservation after it has been confirmed, a $100 fee will automatically be charged. This helps us make sure we continue to deliver the best experience to guests.
                  </p>
                <h3>2. Fines for damage</h3>
                <p>We try to avoid all events of damage, but in the rare event that damage to the host property,
                  equipment, or other takes place during the time period of the membership agreement, the guest is directly responsible for these fees. As defined in the Services Agreement, the guest is
                  liable for this damage and Payouts may collect this if required. It is encouraged for both the
                  host and guest to work through this directly since it is usually best between both parties
                  directly. Venues are also encouraged and in some instances required to have their own General
                  Liability (GL) insurance policies per our Service Agreement for this very reason. If you need to
                  report damage to your host, equipment, or other at any time, please take the proper action to
                  first contact any local authorities if necessary, your insurance provider, and also notify us
                  immediately at <a href="mailto:safety@getpayouts.com">safety@getpayouts.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
     )
  }

export default Fees