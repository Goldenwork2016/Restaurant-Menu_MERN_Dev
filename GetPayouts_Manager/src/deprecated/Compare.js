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
        
          <div className="LayoutSingleColumn__root__2iP-z">
          <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf SubscriptionPage__staticPageWrapper__3pIvq"
            role="main">
            <div className="SubscriptionPage__sectionOffer__uEmcG">
              <div className="SubscriptionPage__sectionOfferContent__10z9y">
                <h1 className="SubscriptionPage__pageHeader__d7wJb">Hosting a workspace vs short-term rentals</h1>
                <p className="SubscriptionPage__pageSubheader__1Q4FJ">Find out how hosting individual workstations compares to Airbnb hosting.</p>
                <div className="SubscriptionPage__plansContainer__Wzgv4">
                  {/* <div className="SubscriptionPage__billingOptions__m6S-8"><button
                      className="Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ">Monthly
                      billing</button><button
                      className="Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ SubscriptionPage__activeBilling__3U90x">Semi-annual
                      billing - save 20%</button><button
                      className="Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ">Yearly billing
                      - save 30%</button></div> */}
                  {/* <div className="SubscriptionPage__billingOptionsMobile__1j9jK">
                    <h3>Choose billing period</h3><select>
                      <option value="monthly">Monthly Billing</option>
                      <option value="semiannual">Semi-annual billing - save 20%</option>
                      <option value="annual">Yearly billing - save 30%</option>
                    </select>
                  </div> */}
                  <div className="SubscriptionPage__columns__2jPGl">
                    <div className="SubscriptionPage__leftColumn__2wN7C Desktop__only">
                      <div className="SubscriptionPage__planContainer__xFaWr">
                        <div className="SubscriptionPage__planName__qSAXo">Airbnb Rentals</div>
                        <div className="SubscriptionPage__price__1nQ7z"><span
                            className="SubscriptionPage__priceValue__1u7ZQ">$988</span> monthly income</div>
                        <ul className="SubscriptionPage__features__24t0W">
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Full-time Job</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Guest &amp; Calendar Management</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Cleaning Required</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Laws and Regulations Risk</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Day &amp; Night Access</b></li>
                        </ul>
                        <div className="SubscriptionPage__actions__1gByv">
                        </div>
                      </div>
                    </div>
                    <div className="SubscriptionPage__rightColumn__2TmXd">
                      <div className="SubscriptionPage__planContainer__xFaWr">
                        <div className="SubscriptionPage__planName__qSAXo">
                        {/* <div className="SubscriptionPage__planName__qSAXo SubscriptionPage__highlightedPlanName__35G74"> */}
                          Payouts Workspaces</div>
                        <div className="SubscriptionPage__price__1nQ7z"><span
                            className="SubscriptionPage__priceValue__1u7ZQ">$950</span> monthly income</div>
                        <ul className="SubscriptionPage__features__24t0W SubscriptionPage__highlightedFeatures__2Eh38">
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Minimal Involvement</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>No Management Required</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>No Cleaning</b> (minimal)</li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>No Legal Risk</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Day-Time Access Only</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g__feature__checkmarked">Steady Monthly Income</li>
                          <li className="SubscriptionPage__feature__3Zr0g__feature__checkmarked">Common Areas Only</li>
                          <li className="SubscriptionPage__feature__3Zr0g__feature__checkmarked">Background Checked Guests</li>
                          <li className="SubscriptionPage__feature__3Zr0g__feature__checkmarked">Same Guests Every Day</li>
                          <li className="SubscriptionPage__feature__3Zr0g__feature__checkmarked">Beds Not Used by Guests</li>
                          <li className="SubscriptionPage__feature__3Zr0g__feature__checkmarked">Furniture Provided for <b>Free</b></li>
                        </ul>
                        <div className="SubscriptionPage__actions__1gByv">
                          <div className="SubscriptionPage__buttonContainer__3cvsj">
                            <Link
                              to="/host"
                              className="SubscriptionPage__premiumButton__2jFH0 SubscriptionPage__buyButton__F4UWb"
                              target="" rel="noopener noreferrer">HOST ON FLOCKBAY</Link></div>
                          <div className="SubscriptionPage__priceDetails__1fd7g">No long-term commitment.</div>
                        </div>
                      </div>
                    </div>
                    <div className="SubscriptionPage__rightColumn__2TmXd Mobile__only">
                      <div className="SubscriptionPage__planContainer__xFaWr">
                        <div className="SubscriptionPage__planName__qSAXo">Airbnb Rentals</div>
                        <div className="SubscriptionPage__price__1nQ7z"><span
                            className="SubscriptionPage__priceValue__1u7ZQ">$988</span> monthly income</div>
                        <ul className="SubscriptionPage__features__24t0W">
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Full-time Job</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Guest &amp; Calendar Management</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Cleaning Required</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Laws and Regulations Risk</b></li>
                          <li className="SubscriptionPage__feature__3Zr0g"><b>Day &amp; Night Access</b></li>
                        </ul>
                        <div className="SubscriptionPage__actions__1gByv">
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="SubscriptionPage__sectionHowItWorks__35IfC">
              <div className="SubscriptionPage__sectionHowItWorksContent__8E1K0">
                <h2 className="SubscriptionPage__sectionHeader__Dnnw9">Why Payouts is great for home-owners</h2>
                <p className="SubscriptionPage__subheader__1gUfx">We work in partnership with our hosts to guarantee their financial sucess, we assume risk by providing furniture at no cost and handle all the membership payments. That's The Payouts Advantage.</p>
                <div className="SubscriptionPage__reasons__3RnJT">
                  <div className="SubscriptionPage__reason__1Fn0r">
                    <div className="SubscriptionPage__reasonLowestFees__3oKzN"></div>
                    <h3 className="SubscriptionPage__reasonTitle__1xvwr">Easy Money</h3>
                    <p className="SubscriptionPage__reasonDescription__3bg9P">Turn your space into a shared workspace and earn additional monthly income while you're at work!</p>
                  </div>
                  <div className="SubscriptionPage__reason__1Fn0r">
                    <div className="SubscriptionPage__reasonCommunication__17QoC"></div>
                    <h3 className="SubscriptionPage__reasonTitle__1xvwr">Minimal Involvement</h3>
                    <p className="SubscriptionPage__reasonDescription__3bg9P">You simply accept professionals into your space the first time and then receive payouts for the space every month.</p>
                  </div>
                  <div className="SubscriptionPage__reason__1Fn0r">
                    <div className="SubscriptionPage__reasonControl__2OlmE"></div>
                    <h3 className="SubscriptionPage__reasonTitle__1xvwr">You’re in control</h3>
                    <p className="SubscriptionPage__reasonDescription__3bg9P">You set your availabilities, your monthly price, and
                      additional terms. We put you in the driver seat.</p>
                  </div>
                  <div className="SubscriptionPage__reason__1Fn0r">
                    <div className="SubscriptionPage__reasonCare__H0ppp"></div>
                    <h3 className="SubscriptionPage__reasonTitle__1xvwr">We help you get started</h3>
                    <p className="SubscriptionPage__reasonDescription__3bg9P">Need to furnish the space with desks and chairs? We'll provide them to you at no extra cost.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="SubscriptionPage__sectionQuote__1gQdJ">
              <div className="SubscriptionPage__sectionQuoteContent__16-7i">
                <div className="SubscriptionPage__sectionQuoteWrapper__QO8x6">
                <picture>
                    <source
                    srcSet={process.env.PUBLIC_URL+"/assets/respaced-member.webp"}
                        alt="Payouts Member"
                        type="image/webp"/>
                    <source
                    srcSet={process.env.PUBLIC_URL+"/assets/respaced-member.jpg"}
                        alt="Payouts Member"
                        type="image/jpg" />
                    <img src={process.env.PUBLIC_URL+"/assets/respaced-member.jpg"} 
                        alt="Payouts Member"
                        className="SubscriptionPage__quoteImage__r558j"/>
                </picture>
                  <div className="SubscriptionPage__quoteWrapper__1QKb2">
                    <p className="SubscriptionPage__quote__APvAv">“It was a breeze getting started on Payouts. They took care of everything!”</p>
                    <p className="SubscriptionPage__author__1UKOs"><span
                        className="SubscriptionPage__authorName__2_viv">Jean Claude,&nbsp;</span>Joined October 26th 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="SubscriptionPage__sectionFAQ__2sAkz">
              <div className="SubscriptionPage__sectionFAQContent__2dZ2F">
                <h2 className="SubscriptionPage__sectionHeader__Dnnw9 SubscriptionPage__faqHeader__noMSN">Frequently Asked
                  Questions</h2>
                <h3 className="SubscriptionPage__faqQuestion__sSDT6">How does hosting work?</h3>
                <p className="SubscriptionPage__faqAnswer__1Do1d">We vet every space before listing it on our platform and require that the space be open for a minimum of 40 hours every week. Once your listing is verified and approved, we work with you to fill the space and keep a high occupancy rate.</p>
                <p className="SubscriptionPage__faqAnswer__1Do1d">Hosts can easily turn their space into a workspace and offer
                  it to our community of professionals during work hours and come back to a private home in the evening.</p>
                <p className="SubscriptionPage__faqAnswer__1Do1d">Hosts get to keep 95% of the monthly premium and have little-to-no cleaning or management to do.
                  They algo benefit from the peace of mind that comes with using our background check system for guests, and a dedicated support team.</p>
                <h3 className="SubscriptionPage__faqQuestion__sSDT6">Is Payouts right for my home?</h3>
                <p className="SubscriptionPage__faqAnswer__1Do1d">If your space is empty for most of the day, you can easily turn it into a shared workspace and earn extra income - and still come home to your own private space after work.</p>
                <p className="SubscriptionPage__faqAnswer__1Do1d">If you’re concerned about local laws and regulations, it is important to note that home workspaces are not part of the same regulatory environment as short-term rentals
                and as such are entirely safe from a legal standpoint. We take pride in helping hosts setup a small business that abides by local laws and regulations
                  and that provides an experience that is unique to each guest using Payouts. If you’re still unsure if your
                  home is a fit for Payouts, submit an application <Link to="/host">here</Link> and we’ll verify the eligibility of your space for free.</p>
                <h3 className="SubscriptionPage__faqQuestion__sSDT6">How do I get started?</h3>
                <p className="SubscriptionPage__faqAnswer__1Do1d">Adding your space to Payouts is easy and costs nothing. Once you’ve had your space verified, it will immediately be available for professionals. If you need furniture like desks and chairs or personal workstations, we'll gladly jump on a call with you to arrange delivery of office furniture - all free of charge.</p><Link
                  className="SubscriptionPage__faqLink__3VKUk" target="" to="/FAQ">View all FAQ</Link>
              </div>
            </div>
            <div className="SubscriptionPage__sectionGetStarted__3aShg">
              <div className="SubscriptionPage__sectionGetStartedContent__18XMp">
                <div className="SubscriptionPage__getStartedWrapper__2kmeK">
                  <h2 className="SubscriptionPage__sectionHeader__Dnnw9">Register and start earning as a host</h2><Link
                    className="SubscriptionPage__getStartedLink__wDVeE SubscriptionPage__buyButton__F4UWb" target=""
                    to="/host">GET STARTED</Link>
                </div>
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