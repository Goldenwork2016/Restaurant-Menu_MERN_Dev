import React from 'react';
import '../styles/css/style.css';

import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import SearchButtonMobile from './SearchButtonMobile';
import SearchBarDesktop from './SearchBarDesktop';
import LogoMobile from './LogoMobile';
import LogoDesktop from './LogoDesktop';
import RightHandButtonDesktop from './RightHandButtonDesktop';

const FAQ=()=>{
    window.scrollTo(0, 0)
    return (
      <div id="root">
      <div className="Page__root__2VuHt">
        <div className="Page__content__rCsmc">
          <div className="LayoutSingleColumn__root__2iP-z">
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
            <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf HelpCenterPage__staticPageWrapper___yITb"
              role="main">
              <h1>Have questions? We're here to help!</h1>
              <h2>COVID-19 UPDATE</h2>
              <div className="AccordionItem__root__9Ec-s"><button
                  className="AccordionItem__title__3LSJE">Current Status</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Our spaces are currently closed but will be reopening soon (when safe and allowed). Check back here every Monday for the latest updates.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button
                  className="AccordionItem__title__3LSJE">Cleaning and Sanitation</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>When spaces are allowed to reopen, we plan to sanitate each space after every use and provide the necessary sanitation items to staff, members and hosts.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button
                  className="AccordionItem__title__3LSJE">Access and Guidelines</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>When spaces are allowed to reopen, all spaces will allow for about half of the usual capacity and require a minimum distance of 2 metres between usable desk/workspace. Masks will not be mandatory but strongly recommended.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button
                  className="AccordionItem__title__3LSJE">More Information</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>For more information please give us a call, send us an email or reach out via our Facebook Page.</p>
                  </div>
                </div>
              </div>
              <h2>General Questions</h2>
              <div className="AccordionItem__root__9Ec-s"><button
                  className="AccordionItem__title__3LSJE">What is Payouts?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Payouts is the only platform in Montreal where you can rent homes for work on a monthly basis. Guests benefit from flexibility and hosts benefit from extra income by renting out their space while it is not being used.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s" id="how-it-works"><button className="AccordionItem__title__3LSJE">How does Payouts
                  work?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>We work directly with our hosts to guarantee a great level of comfort tailored for meetings, work and productivity for members and list only the best spaces in the city. Want to become a host? Submit an application <a href="/host">here</a>.
                    </p>
                  </div>
                </div>
              </div>
              <h2>For Hosts</h2>
              <div className="AccordionItem__root__9Ec-s"><button
                  className="AccordionItem__title__3LSJE">How do I become a host?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Submit an application <a href="/host">here</a>. We will reach out to you with all the information you'll need.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s" id="how-it-works"><button className="AccordionItem__title__3LSJE">How does hosting
                  work?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>We vet every space before listing it on our platform and require that the space be open for a minimum of 20 hours every week. Once your listing is verified and approved, we work with you to fill the space and keep a high occupancy rate.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">Why should I host on Payouts instead of Airbnb?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Airbnb is great if you have a space you can rent out at night and have enough time to clean it and manage bookings. On Payouts, we work with folks who have a space that they wish to keep to themselves at night, that is unused during the day and who have a limited amount of spare time. Our hosts have little to no cleaning or management to do, for a much steadier source of income.</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="AccordionItem__root__9Ec-s" id="how-it-works"><button className="AccordionItem__title__3LSJE">What about local laws and regulation issues, like the ones Airbnb is facing?
              </button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Payouts listings do not fall under "short-term rental" regulations set by the Tourisme Québec, as "stays" are of 30 days or longer. Our members are technically defined as occupants, not tenants, co-tenants or tourists needing a short-term stay.
                    </p>
                  </div>
                </div>
              </div> */}
              {/* <div className="AccordionItem__root__9Ec-s" id="how-it-works"><button className="AccordionItem__title__3LSJE">What about issues with my landlord?
              </button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Landlords are much more comfortable with the same locals working out of a space every day than unknown tourists staying for a couple days through platforms such as Airbnb, VRBO and others. Also to note: According to the Regie du Logement, "An occupant who uses an apartment has no obligations toward the landlord".
                    </p>
                  </div>
                </div>
              </div> */}
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">I don't think my space has the furniture/equipment required to host, what can I do?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>We work closely with hosts to turn their restaurants into a suitable co-working space, without damaging the integrity of the space as a home. To find out how we can help you get started, submit an application <a href="/host">here</a>.</p>
                  </div>
                </div>
              </div>
              {/* <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">I'm worried about letting strangers into my home, what safeguards do you have in place?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>The same way we vet each space, we vet each guest. We do a thorough background check and require a minimum of two valid local IDs per guest before a membership can be approved. Once the membership request is approved, we share their Linkedin profile with the host. If you have any more concerns or suggestions, feel free to reach us at <a
                        href="mailto:safety@getpayouts.com">safety@getpayouts.com</a>.</p>
                  </div>
                </div>
              </div> */}
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">How do I report
                  suspicious activity?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Please report any suspicious activity immediately by sending us an email at <a
                        href="mailto:safety@getpayouts.com">safety@getpayouts.com</a>.</p>
                  </div>
                </div>
              </div>
              <h2>For Guests</h2>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">Am I getting a lease for the space I book?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Absolutely not. We believe our members benefit from flexibility and so all memberships are on a month-to-month basis. Cancel anytime.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">Will I get the whole space to myself?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Rarely. All our spaces are shared with the rest of our community. This being said, we do require discretion to create a proper work environment for all our members.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">Do I get a permanent desk with my membership?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Unfortunately not. All our memberships are hot-desks, meaning you're guaranteed to get a seat to work from every day but it may not be the exact same seat each day.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">What can I bring into the space?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>You can only bring stuff you can take back with you at the end of the day.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">What amenities can I expect to have?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>All our listings are vetted for high-speed, secure WIFI and comfortable seating for our members.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">What if I don't like the space I booked?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>All our spaces have 24 hour trial period. If your space is not to your liking after moving in, you can cancel your membership and get a full refund, <a href="/cancellation-policy">minus fees</a>.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">How do I cancel my
                  membership?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Cancellations are possible without penalty up within 48 hours of starting a membership or with fees 24 hours after the start date. In the event that you need to cancel a reservation, please review our <a href="/cancellation-policy">Cancellation Policy</a> and then contact us at <a
                        href="mailto:hello@getpayouts.com">hello@getpayouts.com</a>.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">How can I get a refund
                  for my membership?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Once your cancellation is approved, we'll automatically refund your membership and send you a confirmation email. If you have not received a confirmation email after a cancellation was approved, please contact <a href="mailto:hello@getpayouts.com">hello@getpayouts.com</a>.</p>
                  </div>
                </div>
              </div>
              <div className="AccordionItem__root__9Ec-s"><button className="AccordionItem__title__3LSJE">How do I report
                  suspicious activity?</button>
                <div className="AccordionItem__content__2QRGB AccordionItem__isOpenContent__3_FeW" style={{maxHeight:296}}>
                  <div className="AccordionItem__contentInner__1uQgR">
                    <p>Please report any suspicious activity immediately by sending us an email at <a
                        href="mailto:safety@getpayouts.com">safety@getpayouts.com</a>.</p>
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

export default FAQ