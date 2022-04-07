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

const CancellationPolicy=()=>{
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
                <Link className="TabNav__link__1PgdT" target=""
                  to="/Covid19">COVID-19</Link>
                  </div>
              <div id="1" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link className="TabNav__link__1PgdT" target=""
                  to="/fees">Fees</Link>
                </div>
              <div id="2" className="LayoutWrapperSideNav__tab__1-6Ra">
                <Link
                  className="TabNav__link__1PgdT TabNav__selectedLink__2d9yw NamedLink_active" target=""
                  to="/cancellation-policy">Cancellation Policy</Link>
                </div>
            </nav>
          </aside>
          <div className="LayoutSideNavigation__layoutWrapperMain__3jQ70" role="main">
            <div className="CancellationPolicyPage__content__32y8M">
              <h1 className="CancellationPolicyPage__heading__27NP1"><span>Payouts Cancellation Policy</span>
              </h1>
              <div className="CancellationPolicy__root__2OToM">
                <p className="CancellationPolicy__lastUpdated__2xx8Y">Updated June 1st, 2020</p>
                <p>In the event that a membership needs to be cancelled either by a guest or
                  by the host, the following Cancellation Policy applies. We encourage both guests and hosts
                  to communicate directly with Payouts in the event of a cancellation as soon as possible at <a className="color-dark" href="mailto:hello@getpayouts.com">hello@getpayouts.com</a> to initiate a membership
                  cancellation.</p>
                <p className="CancellationPolicy__bold__3fTfM">You must agree to this Cancellation Policy as part
                  of the&nbsp;
                  {/* <a className="" target="" href="/terms-of-service"> */}
                  Terms of Service and Community Guidelines&nbsp;
                  {/* </a>  */}
                  in order to use the
                  Payouts platform. If you do not agree to this policy, you must not use the platform.</p>
                <p>Payouts will initiate all refunds, fees, or applicable payments in accordance with this policy.
                  We also reserve the right to collect any fees for cancellations in accordance with this 
                  Cancellation Policy.</p>
                <h2>Cancellations (Hosts)</h2>
                <p>There are no penalties, fees or charges for cancellations by hosts.</p>
                <h2>Cancellations (Members)</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Refund Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>For events: If the event is cancelled </td>
                      <td>Full-refund, including fees </td>
                    </tr> */}
                    <tr>
                      <td>Membership request pending</td>
                      <td>Full-refund</td>
                    </tr>
                    <tr>
                      <td>If the membership is cancelled by Payouts</td>
                      <td>Full-refund</td>
                    </tr>
                    <tr>
                      <td>48 hours prior to membership start date</td>
                      <td>Full-refund</td>
                    </tr>
                    <tr>
                      <td>48 hours after membership start date</td>
                      <td>Full refund, minus fees</td>
                    </tr>
                    <tr>
                      <td>Within first week of membership</td>
                      <td>Full refund, minus fees</td>
                    </tr>
                    <tr>
                      <td>After the first week of membership</td>
                      <td>Non-refundable*</td>
                    </tr>
                  </tbody>
                </table>
                <p>* You can still cancel your membership for the following month without any fees or penalties.</p>
                <p>Cancellation Policy fees may be waived or exemptions made in extreme cases. In the
                  event that a cancellation needs to be made, please immediately request it by sending an email to <a
                    href="mailto:hello@getpayouts.com">hello@getpayouts.com</a>.</p>
                <h2>Payouts Initiated Cancellations</h2>
                <p>In the event of extenuating circumstances, Payouts may decide to cancel a membership and initiate a
                  refund to in accordance with the Cancellation Policy outlined above. These
                  circumstances may include knowledge of potential illegal activity or harm, risk or safety concerns,
                  violation of &nbsp;
                  {/* <a className="" target="" href="/community-guidelines"> */}
                  Community Guidelines
                  {/* </a> */}
                  , or any
                  other extenuating circumstance.</p>
                <h2>Cancellation Policy Exemptions</h2>
                <p>When approved by both the host and Payouts, the cancellation policy fees
                  may be waived. We encourage both guests and hosts to contact us directly in case of any
                  potential scheduling issues or cancellations directly and immediately. This ensures the a mutually
                  beneficial outcome in a timely manner. In the event that a cancellation needs to be made, please
                  also immediately notify <a href="mailto:hello@getpayouts.com">hello@getpayouts.com.</a></p>
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

export default CancellationPolicy