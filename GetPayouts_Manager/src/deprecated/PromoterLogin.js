import React from 'react';
import '../styles/css/style.css';
import axios from 'axios';
import uuid from 'uuid/v1';
import Footer from '../components/Footer';
import HamburgerMenu from './HamburgerMenu';
import SearchButtonMobile from './SearchButtonMobile';
import SearchBarDesktop from './SearchBarDesktop';
import LogoMobile from './LogoMobile';
import LogoDesktop from './LogoDesktop';
import RightHandButtonDesktop from './RightHandButtonDesktop';
// import FirebaseOTPPromoterLogin from './FirebaseOTPPromoterLogin'
import Dashboard from './Dashboard';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'

export default class PromoterLogin extends React.Component {

    state = {
        isSignedIn: false,
        loading: null,
        promoterCode:'',
        stripeEarned:''
      };
    
      uiConfig =
        { signInFlow: 'popup',
         signInOptions:
         [ {
           provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
           defaultCountry: "CA"
          }
         ]
         , callbacks: { signInSuccessWithAuthResult: () => false }
        };
    
      componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => {
              if(!!user){
                const phoneNumber = firebase
                            .auth()
                            .currentUser
                            .phoneNumber
              this.addData2Spreadsheet(phoneNumber)
              }
              return this.setState({isSignedIn: !!user}
              )
            });
        window.scrollTo(0, 0)
      }
      
      componentWillUnmount() {
        this.unregisterAuthObserver();
      }
    
      addData2Spreadsheet = (phone) => {
        
        const data = {
          phone,
          tokenid:uuid()
        }
    
        axios.post(HOST_APPLICATION_API,data)
                 .then(res=>{
                     if(!this.state.promoterCode){
                        this.setPromoterInfo(
                          res.data.promoterCode,
                          res.data.stripeEarned
                          )
                     }
                 }).catch(err=>{
                  })
                  
      }
    
      setPromoterInfo=(promoterCode,stripeEarned)=>{
        this.setState({
          promoterCode,
          stripeEarned
        })
      }

      signOut=()=>{
        firebase.auth().signOut()
      }
    
render(){
    return (
      <div id="root">
          <div className="Page__root__2VuHt">
            <div className="Page__content__rCsmc">
                <div className="LayoutSingleColumn__root__2iP-z">
                <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf AuthenticationPage__layoutWrapperMain__14oxs"
            role="main">
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
                {!this.state.isSignedIn && <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf SubscriptionPage__staticPageWrapper__3pIvq"
                    role="main">
                    <div className="SubscriptionPage__sectionOffer__uEmcG">
                    <div className="SubscriptionPage__sectionOfferContent__10z9y" id="register">
                        <div className="ml_6vw mr_6vw">
                        <h1 className="SubscriptionPage__pageHeader__d7wJb">
                        Unlock exclusive perks and discounts.
                        </h1>
                        <p className="SubscriptionPage__pageSubheader__1Q4FJ">
                        Become a Payouts member for free to start stacking up points and saving on competitive group activities.
                        </p>
                        </div>
                        <div className="SubscriptionPage__plansContainer__Wzgv4">
                            <div className="AuthenticationPage__root__3eDEh">
                             <StyledFirebaseAuth 
                            uiConfig={this.uiConfig} 
                            firebaseAuth={firebase.auth()}
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionHowItWorks__35IfC">
                    <div className="SubscriptionPage__sectionHowItWorksContent__8E1K0">
                        <h2 className="SubscriptionPage__sectionHeader__Dnnw9">How Payouts works for members</h2>
                        <p className="SubscriptionPage__subheader__1gUfx">Already a regular? Create a profile to earn points, get discounts and even get the occasional gig as a Flockleader.</p>
                        <div className="SubscriptionPage__reasons__3RnJT">
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonLowestFees__3oKzN"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Save on group activities</h3>
                            <p className="SubscriptionPage__reasonDescription__3bg9P">Buy activity packages for less and save up to 40% on group activities.</p>
                        </div>
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonCommunication__17QoC"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Invite friends and get additional points.</h3>
                            <p className="SubscriptionPage__reasonDescription__3bg9P">
                             Invite your friends on Payouts and score additional points reedemable towards any activity.
                             </p>
                        </div>
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonControl__2OlmE"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Build up recommendations</h3>
                            <p className="SubscriptionPage__reasonDescription__3bg9P">
                            Let us learn about what you like most and we'll pair you up with others with the same interests.
                            </p>
                        </div>
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonCare__H0ppp"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Build a reliable image</h3>
                            <p className="SubscriptionPage__reasonDescription__3bg9P">
                            Play only against people with verified profiles, and leave (and get) reviews to unlock additional perks and discounts.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionQuote__1gQdJ">
                    <div className="SubscriptionPage__sectionQuoteContent__16-7i">
                        <div className="SubscriptionPage__sectionQuoteWrapper__QO8x6"><img
                            className="SubscriptionPage__quoteImage__r558j"
                            src={process.env.PUBLIC_URL+"/assets/respaced-member.jpg"} />
                        <div className="SubscriptionPage__quoteWrapper__1QKb2">
                            <div className="SubscriptionPage__quote__APvAv">
                            “Straight up just had a blast with like-minded people. Glad I joined.”</div>
                            <div className="SubscriptionPage__author__1UKOs"><span
                                className="SubscriptionPage__authorName__2_viv">Jean Claude,&nbsp;</span>Joined Aug 26th 2019</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionGetStarted__3aShg">
                    <div className="SubscriptionPage__sectionGetStartedContent__18XMp">
                        <div className="SubscriptionPage__getStartedWrapper__2kmeK">
                        <h2 className="SubscriptionPage__sectionHeader__Dnnw9">Find your flock. Become a real flock member.</h2><a
                            className="SubscriptionPage__getStartedLink__wDVeE SubscriptionPage__buyButton__F4UWb" target=""
                            href="#register">Create an account</a>
                        </div>
                    </div>
                    </div>
                </div> 
                }
                { 
                    this.state.isSignedIn && 
                    <Dashboard
                    promoterCode = {this.state.promoterCode}
                    stripeEarned = {this.state.stripeEarned}
                    phoneNumber = {
                                    firebase
                                        .auth()
                                        .currentUser
                                        .phoneNumber
                                 }
                    signOut = {this.signOut}
                    />
                } 
                <Footer/>
                </div>
            </div>
        </div>    
      </div>
      </div>
     )

}
}

