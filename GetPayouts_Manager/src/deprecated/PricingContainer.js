import React from 'react';
// import Card from '../components/Card';
// import { Link } from "react-router-dom";
// import LazyLoad from 'react-lazy-load';

import Checkout from '../deprecated/Checkout';

const BILLED_MONTHLY = 'Billed monthly';
const BILLED_EVE_6_MNTHS = 'Billed every 6 months';
const BILLED_YEARLY = 'Billed once a year';

export default class PricingContainer extends React.Component {
    state = {
      selectedBillingOption : 'monthly'
    }
    onChange=(e)=>{
      this.setState({
        selectedBillingOption: e.target.value
      })
    }

    getMsg=()=>{
      const {selectedBillingOption} = this.state;
      switch(selectedBillingOption){
        case 'monthly' : return BILLED_MONTHLY; 
        case 'semiannual' : return BILLED_EVE_6_MNTHS; 
        case 'annual' : return BILLED_YEARLY; 
        case 'default': return BILLED_MONTHLY; 
      }
    }

    getPrice=(price)=>{
      const {selectedBillingOption} = this.state;
      switch(selectedBillingOption){
        case 'monthly' : return price; 
        case 'semiannual' : return Math.floor( price - ( price * 0.2 ) ); 
        case 'annual' : return Math.floor( price - ( price * 0.3 ) ); 
        case 'default': return price; 
      }
    }

    render(){
      const {selectedBillingOption} = this.state;
      const {monthyMembershipData, skuData} = this.props;
      const {drop_in_price,dedicated_price} = monthyMembershipData
      
        return(
            
          <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf SubscriptionPage__staticPageWrapper__3pIvq"
          role="main" id="pricing">
          <div className="SubscriptionPage__sectionOffer__uEmcG">
            <div className="SubscriptionPage__sectionOfferContent__10z9y">
              <h1 className="SubscriptionPage__pageHeader__d7wJb mariapro bold color-dark">Pricing that’s right for you</h1>
              <p className="SubscriptionPage__pageSubheader__1Q4FJ">We've kept it simple for you. Flexible membership that fits with your business needs.</p>
              <div className="SubscriptionPage__plansContainer__Wzgv4">
                
                <div className="SubscriptionPage__billingOptions__m6S-8"><button
                    onClick={(e)=>this.onChange(e)} value={selectedBillingOption}
                    className={
                      selectedBillingOption === 'monthly' ?
                      `Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ SubscriptionPage__activeBilling__3U90x`
                      :`Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ`
                    }
                    value="monthly"
                    >Monthly
                    billing</button>
                    <button
                    onClick={(e)=>this.onChange(e)} value={selectedBillingOption}
                    className={
                      selectedBillingOption === 'semiannual' ?
                      `Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ SubscriptionPage__activeBilling__3U90x`
                      :`Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ`
                    }
                    value="semiannual"
                    >Semi-annual
                    billing - save 20%</button>
                    <button
                    onClick={(e)=>this.onChange(e)} value={selectedBillingOption}
                    className={
                      selectedBillingOption === 'annual' ?
                      `Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ SubscriptionPage__activeBilling__3U90x`
                      :`Button__inlineTextButton__3IeDs SubscriptionPage__linkBillingSwitch__1dTjZ`
                    }
                    value="annual"
                    >Yearly billing
                    - save 30%</button>
              </div>
              <div className="SubscriptionPage__billingOptionsMobile__1j9jK">
                  <h3>Choose billing period</h3>
                  <select className="Checkout__membership__price" onChange={(e)=>this.onChange(e)} value={selectedBillingOption}>
                    <option value="monthly">Monthly Billing</option>
                    <option value="semiannual">Semi-annual Billing - save 20%</option>
                    <option value="annual">Yearly Billing - save 30%</option>
                  </select>
              </div>
                <div className="SubscriptionPage__columns__2jPGl">
                  <div className="SubscriptionPage__leftColumn__2wN7C">
                    <div className="SubscriptionPage__planContainer__xFaWr SubscriptionPage__highlightedPlan__1a9z1">
                      <div className="SubscriptionPage__planName__qSAXo">Drop-In Membership<span className="SubscriptionPage__feature__3Zr0g"> as low as</span></div>
                      <div className="SubscriptionPage__price__1nQ7z"><span
                          className="SubscriptionPage__priceValue__1u7ZQ">${this.getPrice(drop_in_price)}</span> /month</div>
                      <ul className="SubscriptionPage__features__24t0W">
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Access</b> to Location</li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Ergonomic Seating</b></li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Enterprise-Grade</b> WiFi</li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Unlimited Coffee &amp; tea</b></li>
                        <br>
                        </br>
                        <li className="SubscriptionPage__feature__3Zr0g">+ <b>Risk Free</b> Cancellation</li>
                      </ul>
                      <div className="SubscriptionPage__actions__1gByv">
                        <div className="SubscriptionPage__buttonContainer__3cvsj">
                           <div
                            // className="SubscriptionPage__buyButton__F4UWb"
                            >
                              <Checkout
                              skuid = {'TRYITNOW'}
                              currency ={'CAD'}
                              quantity={{"value":1}}
                              amount={this.getPrice(drop_in_price)*100}
                              prodid={'TRYITNOW'}
                              productName={'TRYITNOW'}
                              skuQuantity={0}
                              spaceStatus={'TRYITNOW'}
                              skuData= {skuData}
                              onHomePage
                              />
                              </div>
                            </div>
                        <div className="SubscriptionPage__priceDetails__1fd7g">{this.getMsg()}</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="SubscriptionPage__rightColumn__2TmXd">
                    <div className="SubscriptionPage__planContainer__xFaWr">
                      <div className="SubscriptionPage__planName__qSAXo">
                        Dedicated Desk</div>
                      <div className="SubscriptionPage__price__1nQ7z"><span
                          className="SubscriptionPage__priceValue__1u7ZQ">${this.getPrice(dedicated_price)}</span> /month</div>
                      <ul className="SubscriptionPage__features__24t0W SubscriptionPage__highlightedFeatures__2Eh38">
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Full Access</b> to Locations</li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Ergonomic Seating</b></li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Enterprise-Grade</b> WiFi</li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Unlimited Coffee &amp; tea</b></li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Permanent Space</b></li>
                        <li className="SubscriptionPage__feature__3Zr0g"><b>Priority</b> Service &amp; Support</li>
                        <br>
                        </br>
                        <li className="SubscriptionPage__feature__3Zr0g">+ <b>Risk Free</b> Cancellation</li>
                      </ul>
                      <div className="SubscriptionPage__actions__1gByv">
                        <div className="SubscriptionPage__buttonContainer__3cvsj"><div
                            // className="SubscriptionPage__premiumButton__2jFH0 SubscriptionPage__buyButton__F4UWb"
                            >
                            <Checkout
                            skuid = {'TRYITNOWPREMIUM'}
                            currency ={'CAD'}
                            quantity={{"value":1}}
                            amount={this.getPrice(dedicated_price)*100}
                            prodid={'TRYITNOWPREMIUM'}
                            productName={'TRYITNOWPREMIUM'}
                            skuQuantity={0}
                            spaceStatus={'TRYITNOWPREMIUM'}
                            skuData= {skuData}
                            onHomePage
                            />
                            </div>
                            </div>
                        <div className="SubscriptionPage__priceDetails__1fd7g">{this.getMsg()}</div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }

}