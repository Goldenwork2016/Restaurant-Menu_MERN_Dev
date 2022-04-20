import React from 'react';
import '../styles/css/style.css';

import Footer from '../components/Footer';
import HamburgerMenu from './HamburgerMenu';
import SearchButtonMobile from './SearchButtonMobile';
import SearchBarDesktop from './SearchBarDesktop';
import LogoMobile from './LogoMobile';
import LogoDesktop from './LogoDesktop';
import RightHandButtonDesktop from './RightHandButtonDesktop';
import {Link} from 'react-router-dom';

const Covid19=()=>{
    window.scrollTo(0, 0)
    return (
      <div id="root">
  <div className="Page__root__2VuHt">
    <div className="Page__content__rCsmc">
      <div className="LayoutSideNavigation__root__1pIVA">
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
                <Link className="TabNav__link__1PgdT TabNav__selectedLink__2d9yw NamedLink_active" target=""
                  to="/Covid19">COVID-19</Link>
                  </div>
              <div id="1" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link className="TabNav__link__1PgdT" target=""
                  to="/fees">Fees</Link>
                </div>
              <div id="2" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link
                  className="TabNav__link__1PgdT" target=""
                  to="/cancellation-policy">Cancellation Policy</Link>
                </div>
            </nav>
          </aside>
          <div className="LayoutSideNavigation__layoutWrapperMain__3jQ70" role="main">
            <div className="CancellationPolicyPage__content__32y8M">
              <h1 className="CancellationPolicyPage__heading__27NP1"><span>Payouts Response to COVID-19 (Coronavirus)</span>
              </h1>
              <div className="CancellationPolicy__root__2OToM">
                <p className="CancellationPolicy__lastUpdated__2xx8Y">Updated September 23rd, 2020</p>
                <h2>Tomorrow’s workplace redefined for your wellbeing</h2>
                <p>We’re taking the necessary steps to prioritize the health and safety of all members and employees in our spaces. As you plan for tomorrow’s world at work, we’re here to help you add more safety, flexibility, and focus to your workplace strategy.</p>
                <p className="CancellationPolicy__bold__3fTfM">Our local community teams are taking immediate actions in response to COVID-19. Below are updates on our buildings, including the health and safety measures we’re implementing.</p>
                <h2>Increased sanitization</h2>
                <p>We are disinfecting common areas more frequently and are providing complimentary sanitization products in our spaces.</p>
                <h2>Prioritizing personal space</h2>
                <p>By modifying shared spaces with staggered seating and buffer zones, teams can practice healthy social distancing in the workplace.</p>
                <h2>Behavioral signage</h2>
                <p>New cleaning standards and capacity protocols will be reinforced with strategically-placed signage.</p>
                <h2>Prioritizing personal space for workplace distancing</h2>
                <p>Professional social distancing standards and strategically placed behavioral signage allow members to collaborate in person with peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
</div>
     )
  }

export default Covid19