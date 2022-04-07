import React from 'react';
import '../styles/css/style.css';
import axios from 'axios';
import uuid from 'uuid/v1';
import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import SearchButtonMobile from './SearchButtonMobile';
import SearchBarDesktop from './SearchBarDesktop';
import LogoMobile from './LogoMobile';
import LogoDesktop from './LogoDesktop';
import RightHandButtonDesktop from './RightHandButtonDesktop';
import CheckoutLoading from './CheckoutLoading';

const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'

export default class Register extends React.Component {
    state = {
        phone: '',
        email: '',
        err:null,
        loading:null
      };
    
      handleChange = (event) => {
        this.setState({
          [`${event.target.name}`]: event.target.value
        });
      };

      
      addData2Spreadsheet = (email,phone) => {
    
        const data = {
          email,
          phone,
          tokenid:uuid(),
        }
    
        this.setState({
          loading: true
        })
    
        axios.post(HOST_APPLICATION_API,data)
                 .then(res=>{
                    this.setState({
                      err:false,
                      phone: '',
                      email: '',
                      loading: false
                    })
                 }).catch(err=>{
                    this.setState({
                      err:true,
                      phone: '',
                      email: '',
                      loading: false
                    })
                  })
                  
      };
    
      handleSubmit=(e)=>{
        e.preventDefault();
        const {email,phone} = this.state
        this.addData2Spreadsheet(email,phone)
      }
componentDidMount(){
    window.scrollTo(0, 0)
}
render(){
    const {loading,err} = this.state
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
                <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf SubscriptionPage__staticPageWrapper__3pIvq"
                    role="main">
                    <div className="SubscriptionPage__sectionOffer__uEmcG">
                    <div className="SubscriptionPage__sectionOfferContent__10z9y" id="register">
                        <div className="ml_6vw mr_6vw">
                        <h1 className="SubscriptionPage__pageHeader__d7wJb">Earn up to $7,500 per month as a host</h1>
                        <p className="SubscriptionPage__pageSubheader__1Q4FJ">
                        We'll help you turn your space into drop-in and dedicated workspaces and earn extra income each month.
                        </p>
                        </div>
                        <div className="SubscriptionPage__plansContainer__Wzgv4">
                            <div className="AuthenticationPage__root__3eDEh">
                                <div className="AuthenticationPage__content__3SL5P">
                                    <nav className="TabNavHorizontal__root__2cHws AuthenticationPage__tabs__-2veY">
                                    <div className="TabNavHorizontal__tab__1Fu6G">
                                        <div
                                        className="TabNavHorizontal__tabContent__3eaB4 TabNavHorizontal__selectedTabContent__1zGxm NamedLink_active"
                                        // target="" href="/signup"
                                        >
                                        <h1 className="AuthenticationPage__tab__2qI0B"><span>Apply</span></h1>
                                        </div></div>
                                    </nav>
                                    <form 
                                    onSubmit={(e)=>this.handleSubmit(e)}
                                    >
                                    <div>
                                        <div className="FieldTextInput__root__3xJoe"><label htmlFor="email">Email</label>
                                        <input
                                            className="FieldTextInput__input__Qwa6W" 
                                            id="email" 
                                            type="email" 
                                            name="email" 
                                            autoComplete="email"
                                            pattern=".+@*.com"
                                            onChange={(e)=>this.handleChange(e)}
                                            value={this.state.email}
                                            required
                                            placeholder="john.doe@example.com" 
                                            />
                                            </div>
                                        <div className="FieldTextInput__root__3xJoe SignupForm__password__3-pTB">
                                        <label
                                            >Phone number</label>
                                            <input 
                                            className="FieldTextInput__input__Qwa6W" 
                                            id="phone"
                                            type="tel" 
                                            name="phone" 
                                            autoComplete="phone" 
                                            placeholder="(514) 799-9999"
                                            onChange={(e)=>this.handleChange(e)}
                                            value={this.state.phone}
                                            required
                                            /></div>
                                    </div>
                                        <div className="SignupForm__bottomWrapper__1uJjE">
                                            <button
                                            // onClick={()=>this.handleSubmit()}
                                            className="Button__root__1Z5Y8" type="submit"><span>Submit</span></button>
                                        </div>
                                    </form>
                                    <br></br>
                                    {loading && <CheckoutLoading/>}
                                    {err===false && <div>Your application has been submitted </div>}
                                    {err && <div>We couldn't submit your application,
                                         please reload the page and try again</div>}
                                </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionHowItWorks__35IfC">
                    <div className="SubscriptionPage__sectionHowItWorksContent__8E1K0">
                        <h2 className="SubscriptionPage__sectionHeader__Dnnw9">Why Payouts is great for local business owners</h2>
                        <p className="SubscriptionPage__subheader__1gUfx">We work in partnership with our hosts to guarantee their financial success, we assume risk by verifying all members, taking care of insurance and handling all membership payments at no extra cost. That's <b>The Payouts Advantage</b>.</p>
                        <div className="SubscriptionPage__reasons__3RnJT">
                        <div className="SubscriptionPage__reason__1Fn0r">
                            <div className="SubscriptionPage__reasonLowestFees__3oKzN"></div>
                            <h3 className="SubscriptionPage__reasonTitle__1xvwr">Easy Money</h3>
                            <p className="SubscriptionPage__reasonDescription__3bg9P">Turn your home into a shared workspace and earn additional monthly income while you're at work!</p>
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
                        <div className="SubscriptionPage__sectionGetStartedContent__18XMp">
                        {/* <div className="SubscriptionPage__getStartedWrapper__2kmeL">
                        <h2 className="SubscriptionPage__sectionHeader__Dnnw9">Already an Airbnb host? Find out how it compares</h2><a
                            className="SubscriptionPage__getStartedLink__wDVeE SubscriptionPage__buyButton__F4UWb"
                            href="/compare">COMPARE</a>
                        </div> */}
                    </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionQuote__1gQdJ">
                    <div className="SubscriptionPage__sectionQuoteContent__16-7i">
                        <div className="SubscriptionPage__sectionQuoteWrapper__QO8x6">
                            <picture>
                                <source
                                    srcSet={process.env.PUBLIC_URL+"/assets/respaced-host.webp"} 
                                    alt="Payouts host"
                                    type="image/webp"/>
                                <source
                                    srcSet={process.env.PUBLIC_URL+"/assets/respaced-host.jpg"} 
                                    alt="Payouts host"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-host.jpg"} alt="Payouts host"
                                    className="SubscriptionPage__quoteImage__r558j"/>
                            </picture>
                        <div className="SubscriptionPage__quoteWrapper__1QKb2">
                            <div className="SubscriptionPage__quote__APvAv">
                            “Partnering with Payouts helped us add additional revenue sources, all while not losing focus on our core business. They are a big reason why we achieved the growth goals we set for our dance space.”</div>
                            <div className="SubscriptionPage__author__1UKOs"><span
                                className="SubscriptionPage__authorName__2_viv">Meghan,&nbsp;</span>co-owner of Cat’s Corner dance space</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="SubscriptionPage__sectionGetStarted__3aShg">
                    <div className="SubscriptionPage__sectionGetStartedContent__18XMp">
                        <div className="SubscriptionPage__getStartedWrapper__2kmeK">
                        <h2 className="SubscriptionPage__sectionHeader__Dnnw9">Register and start earning as a host</h2><a
                            className="SubscriptionPage__getStartedLink__wDVeE SubscriptionPage__buyButton__F4UWb"
                            href="#register">GET STARTED</a>
                        </div>
                    </div>
                    </div>
                </div>
                <Footer/>
                </div>
            </div>
        </div>    
      </div>
      </div>
     )

}
}

