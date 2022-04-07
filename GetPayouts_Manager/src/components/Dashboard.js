import React from 'react';
import '../styles/css/style.css';

/**
 * scrollToTopOnMount
 */
function scrollToTopOnMount(){
    window.scrollTo(0, 0)
}

const  Dashboard = (props)=>{
    scrollToTopOnMount()
    return (
      <div id="root">
          <div className="Page__root__2VuHt">
            <div className="Page__content__rCsmc">
                <div className="LayoutSingleColumn__root__2iP-z">
                <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf AuthenticationPage__layoutWrapperMain__14oxs"
            role="main">
                <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf SubscriptionPage__staticPageWrapper__3pIvq"
                    role="main">
                    <div className="SubscriptionPage__sectionOffer__uEmcG">
                    <div className="SubscriptionPage__sectionOfferContent__10z9y" id="register">
                        <div className="ml_6vw mr_6vw">
                        <h1 className="SubscriptionPage__pageHeader__d7wJb">
                        Coming soon! &nbsp;<span className="font-bolder"></span>
                        </h1>
                        {/* <p className="SubscriptionPage__pageSubheader__1Q4FJ">
                        Promote nightlifeevents on Payouts and earn from ticket sales
                        </p> */}
                        </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionHowItWorks__35IfF">
                    {/* <div className="SubscriptionPage__sectionHowItWorksContent__8E1K0">
                        <div className="SubscriptionPage__reasons__3RnJO">
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonLowestFees__3oKzN"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Rewards earned</h3>
                            <p className="DashboardPage__reasonDescription__3bg9P">${props.stripeEarned}</p>
                        </div>
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonCare__H0ppp"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Referral points earned</h3>
                            <p className="DashboardPage__reasonDescription__3bg9P">
                            {props.stripeEarned}
                            </p>
                        </div> */}
                        {/* <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonCommunication__17QoC"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Your Phone Number</h3>
                            <p className="DashboardPage__reasonDescription__3bg9P">
                                {props.phoneNumber}
                             </p>
                        </div>
                        <div className="SubscriptionPage__reason__1Fn0B">
                            <div className="SubscriptionPage__reasonControl__2OlmE"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Your commission rate</h3>
                            <p className="DashboardPage__reasonDescription__3bg9P">
                            80%
                            </p>
                        </div> */}
                        </div>
                            <h2 className="SubscriptionPage__sectionHeader__Dnno9">More coming up soon.</h2>
                            <p className="SubscriptionPage__subheader__1gUUx">Stay tuned <span className="font-bolder">{props.promoterCode}</span>, we're making Payouts more exciting for competitive gamers every day.</p>
                            {/* <a href="/burlight"><p className="SubscriptionPage__sectionHeader__Dnnw0">Burlight</p></a> Party at Muzique
                            <a href="/lophasia"><p className="SubscriptionPage__sectionHeader__Dnnw0">Lophasia</p></a> Party at Blvd44
                            <a href="/ruzoga"><p className="SubscriptionPage__sectionHeader__Dnnw0">Ruzoga</p></a> Party at Don B Comber */
                            }
                            <h2 className="SubscriptionPage__sectionHeader__Dinw9">Have questions?</h2>
                            <p className="SubscriptionPage__subheader__1gUfx">Email us at <span className="font-bolder"> hello@getpayouts.com</span>, you'll get a reply within 30 minutes.</p>
                            <p className="SubscriptionPage__subheader__1gUfY">You are logged in</p>
                            <h2 className="SubscriptionPage__sectionHeader__Dnnwf">
                                <a onClick={() => props.signOut()}>Sign out</a>
                            </h2>
                    </div>
                    </div>
                    {/* <div className="SubscriptionPage__sectionGetStarted__3aShg">
                    <div className="SubscriptionPage__sectionGetStartedContent__18XMp">
                        <div className="SubscriptionPage__getStartedWrapper__2kmeK">
                        
                        </div>
                    </div>
                    </div> */}
                </div>
                </div>
            </div>
        </div>    
    //   </div>
    //   </div>
     )
}

export default Dashboard