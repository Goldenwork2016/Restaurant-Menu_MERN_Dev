import React, {Component} from 'react';
import '../styles/css/checkout.css';
import '../styles/css/styles.css';
import '../styles/css/framework.css';
import ReactGA from 'react-ga';
// import {SingleDatePicker} from 'react-dates';
import {
  CardElement,
  injectStripe
} from 'react-stripe-elements';
// import PaymentRequestForm from './PaymentRequestForm'
import moment from 'moment'
// import Select from 'react-select';

import ReCAPTCHA from "react-google-recaptcha";
const RECAPTCHA_SITE_KEY='6Lfzg9sUAAAAAJxpRqhBwD_8vK2XqtyopVSlRALG'

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    },
  };
};

// const customStyles = {
//   group: () => ({
//     border: '1px solid black',
//     borderRadius: '4px',
//     fontSize: '16px',
//     padding: '10px 5px',
//   }),

//   placeholder: () => ({
//     color: '#AAB7C4',
//     fontSize: '16px',
//   }),

//   indicatorSeparator: () => ({
//     display: 'none',
//   }),
// }

class CheckoutFieldsForm extends Component {
  state = {
    errorMessage: '',
    phone: '',
    email: '',
    // referralCode:'',
    // appleGPay:false
    numberOfTickets:{
      value: 1
    },
    disabled:false,
    // date: null,
    focused: null,
    prodid: '',
    productName: '',
    //recaptchaValue: null
  };

  getOptions = (ticketsAvailable)=>{
    let options = [];
    for (let index = 1; index <= ticketsAvailable; index++) {
      options.push({
        value: index,
        label: (index > 1) ? index+' seats' : index+' seat'
      })
    }
    return options
  }

  getPayMessage=()=>{
    const {
      // coupon,
      currency,amount} = this.props
    // if(!coupon){
      return " $"+(amount/100)*this.state.numberOfTickets.value + ' '+currency
    // } else {
    //   return" $" + this.getDiscountedAmount(coupon.couponDiscount)+' '+currency
    // }
  }

  /**
   * ONLY CONSIDERING 50 AND 25 
   */
  /*getDiscountedAmount=(couponDiscount)=>{
    const price = this.props.amount/100
    const newAmount =( price-price* (couponDiscount/100) ).toFixed(2) 
    // return newAmount
    return price
  }*/

  /*getPriceAppleGooglePay=(coupon)=>{
    if(coupon){
      const price = this.props.amount
      const newAmount =( price-price* (coupon.couponDiscount/100) ).toFixed(2) 
      return newAmount
    } else {
      console.log(`inside getPricecAppleGooglePay : ${this.props.amount }`)
      return this.props.amount 
    }
  }*/


  handleStripeElement = ({error}) => {
    if (error) {
      this.setState({errorMessage: error.message});
    } else {
      this.setState({errorMessage: ''});
    }
  };

  handleNumberOfTickets = numberOfTickets => {
    this.setState({ numberOfTickets });
  };

  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
    // if(event.target.value.toLowerCase() ==='flockmtl50') {
    //   this.setState({
    //     newAmount: this.getDiscountedAmount()
    //   })
    // } else {
    //   this.setState({
    //     newAmount: null
    //   })
    // }
  };

//   handleRecaptcha = (event) =>{
//     this.setState({
//       recaptchaValue:event.target.value
//     })
//   }

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.props.stripe && !this.state.disabled) {
        this.props.stripe.createToken()
        .then(data=>{
          // const {coupon} = this.props
          const {phone,email,numberOfTickets, prodid} = this.state
          if(data.token){
            // if(!coupon){
            this.setState({
              disabled:true
            })
            return this.props.handleCheckout(
              data.token.id,
              phone,
              email,
              numberOfTickets.value,
              Date.now(),
              prodid
              )
            // } 
            // else { 
            //   return this.props.handleCheckout(data.token.id,phone,email,coupon.couponName,referralCode,numberOfTickets.value)
            // }
            // if(promoCode.toLowerCase()==='flockmtl50'){
            //   return this.props.handleCheckout(data.token.id,phone,email,promoCode)
            // } else {
            //   return this.props.handleCheckout(data.token.id,phone,email)
            // }
          } 
        });
      }
  };

  handlePaymentRequestBtn=(email,orderid,payment)=>{
    this.props.handleAppleGooglePay(
      email,
      orderid,
      payment)
  }

  recordPayEvent=()=>{
    const{productName}=this.props
    ReactGA.event({
        category: 'PAY_PRODUCT_PAGE',
        action: 'PAY for '+productName,
        label: 'PAY_PRODUCT_PAGE'
        });
  }
  isBlocked=(day)=>{
    const dateDelay = moment().add(1, 'd');
    const availableDates = [dateDelay]
    return availableDates.some(date => day.isBefore(date), 'day')
  }

  getOptionsForHomePage=()=>{
    const {skuData} = this.props;
    return skuData.map(cardInfo=>
    <option
    value={cardInfo.ProductId}
    key={cardInfo.ProductId}>
      {`${cardInfo.product_name} Drop-In Monthly: $${(cardInfo.sku_price/100)*this.state.numberOfTickets.value} ${cardInfo.sku_currency}`}
    </option>)
  }
  getComingSoonOptions=()=>{
    const {skuData} = this.props;
    return skuData.map(cardInfo=>
    <option
    value={cardInfo.ProductId}
    key={cardInfo.ProductId}>
      {`${cardInfo.product_name} Coming Soon: Dedicated Desk Monthly!`}
    </option>)
  }

  handleHomePageParam = e => {
    console.log(`selected ${e.target.value}`);
    this.setState({ prodid: e.target.value });
  };

  onCloseModal = () => {
    this.setState({ open: false });
      if(!this.state.orderid){
        this.recordAbandonedCheckout()
      }
      if(this.state.payment || this.state.payment===false) {
        this.refreshPage()
      }
  };

  render() {
    // const {currency} = this.props
    // const {appleGPay} = this.state
    // const {newAmount} = this.state
    // const finalAmount = newAmount === null ? amount/100 : newAmount
    const {onHomePage, productType, themeColor} = this.props;
    return (
      <>
    <form className="" onSubmit={(e)=>this.handleSubmit(e)}>
      <div class="mt-30 mt-lg-12">
        <div class="pt-10 radius20 holder">
          <div class="mb-25 d-flex flex-wrap justify-content-between align-items-center aos-animate" style={{color:themeColor}}>
            <h3 class="bold">
              Checkout
            </h3>
          </div>
          <div class="row">
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Your Email
              </div>
              <input
                className="input w-full border-gray focus-action-2 action-4 placeholder-heading"
                name="email"
                type="email"
                pattern=".+@*.com"
                placeholder="john@example.com"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
            </div>
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Phone Number
              </div>
              <input
                className="input js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading"
                type='tel' 
                name="phone"
                value={this.state.phone}
                placeholder='514-799-9999'
                onChange={this.handleChange} 
                required
              />
            </div>
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Card Number
              </div>
              <CardElement
                  className="input js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading credit_card_custom"
                  placeholder='Card Number'
                  onChange={this.handleStripeElement}
                  {...createOptions(this.props.fontSize)}
              />
            </div>
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Product
              </div>
              <select 
                className="input StripeElement js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading"
                onChange={(e)=>this.handleHomePageParam(e)}
                name="prodid"
                value={this.state.prodid} 
                required
                >
                  <option value=''>
                    {this.props.productName}
                  </option>
                  {/* {this.getOptionsForHomePage()} */}
                  {/* {this.getComingSoonOptions()} */}
              </select>
            </div>
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Variation
              </div>
              <select 
                className="input StripeElement js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading"
                onChange={(e)=>this.handleHomePageParam(e)}
                name="prodid"
                value={this.state.prodid} 
                required
                >
                  <option value=''>
                    N/A
                  </option>
                  {/* {this.getOptionsForHomePage()} */}
                  {/* {this.getComingSoonOptions()} */}
              </select>
            </div>
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Select Frequency
              </div>
            </div>
            <div class="col-12 mb-10 block aos-animate">
              {<select 
                className="input StripeElement js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading">
                <option>
                  Once: {this.getPayMessage()}
                </option>
                <option>
                  Daily: {this.getPayMessage()}
                </option>
                <option>
                  Weekly: {this.getPayMessage()}
                </option>
                <option>
                  Bi-Weekly: {this.getPayMessage()}
                </option>
                <option selected>
                  Monthly: {this.getPayMessage()}
                </option>
                {/* <option>
                  Every 3 months: {this.getPayMessage()}
                </option>
                <option>
                  Every 6 months: {this.getPayMessage()}
                </option>
                <option>
                  Yearly: {this.getPayMessage()}
                </option> */}
                {/* <option>
                  Drop-In Semi-Annual: {this.getPayMessage()}
                </option>
                <option>
                  Drop-In Annual: {this.getPayMessage()}
                </option>
                <option>
                  Dedicated Desk Monthly: {this.getPayMessage()}
                </option>
                <option>
                  Dedicated Desk Semi-Annual: {this.getPayMessage()}
                </option>
                <option>
                  Dedicated Desk Annual: {this.getPayMessage()}
                </option> */}
              </select>}
              </div>
              {!onHomePage && this.props.productType==='private' &&<select 
              className="input js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading">
              <option>
                One-time reservation: {this.getPayMessage()}
              </option>
              {/* <option>
                Drop-In Semi-Annual: {this.getPayMessage()}
              </option>
              <option>
                Drop-In Annual: {this.getPayMessage()}
              </option>
              <option>
                Dedicated Desk Monthly: {this.getPayMessage()}
              </option>
              <option>
                Dedicated Desk Semi-Annual: {this.getPayMessage()}
              </option>
              <option>
                Dedicated Desk Annual: {this.getPayMessage()}
              </option> */}
            </select>}
            <div class="col-12 mb-10 block aos-animate">
            {onHomePage && <button
              class="btn mr-20 mb-20 mb-xl-0 w-full lg action-1 mt-30" style={{backgroundColor:this.props.themeColor}}
              id='btn-submit'
              onClick={() => this.recordPayEvent()}
              type='submit'
              disabled={this.state.disabled}
              >
                Confirm Subscription
              </button>}
              {!onHomePage && <button
              class="btn mr-20 mb-20 mb-xl-0 w-full lg mt-30 product-btn" style={{backgroundColor:this.props.themeColor}}
              id='btn-submit'
              onClick={() => this.recordPayEvent()}
              type='submit'
              disabled={this.state.disabled}
              >
                Confirm purchase
              </button>}
              {!onHomePage && this.props.productType==='private' && <button
              class="btn mr-20 mb-20 mb-xl-0 w-full lg action-1 mt-30" style={{backgroundColor:this.props.themeColor}}
              id='btn-submit'
              onClick={() => this.recordPayEvent()}
              type='submit'
              disabled={this.state.disabled}
              >
                Complete reservation
              </button>}
            </div>
            </div>
        </div>
      </div>
      {/* {coupon && <label>
        Automatic Discount
        <input
          // placeholder="Promo Code"
          // name="promoCode"
          className="Discount_input_2HeE3i"
          type="text"
          // maxLength='10'
          // value={this.state.promoCode}
          // onChange={this.handleChange}
          value={coupon.couponName+'%-OFF'
          // +this.getDiscountedAmount(coupon.couponDiscount)
          }
          // value={'SUPER-EARLY-BIRD-50%'}
          disabled
        />
    </label>} */}
    {/* {!coupon && 
    <label>
        Automatic Discount
        <input
          className="Discount_input_2HeE3i"
          type="text"
          value='Not applicable'
          disabled
        />
    </label>} */}
    {/* <label>
        Guestlist (referral code)
        <input
          type="text"
          value='Not applicable'
          name="referralCode"
          value={this.state.referralCode.toUpperCase()}
          onChange={this.handleChange}
          placeholder="R100"
          maxLength='10'
        />
    </label> */}
    {/* <label>
      Number of seats
    <Select
        styles={customStyles}
        isSearchable={false}
        placeholder='1 seat'
        onChange={this.handleNumberOfTickets}
        options={this.getOptions(this.props.skuQuantity)}
      /> 
      </label> */}
      <div style={{color:'#c23d4b'}}>
          {this.state.errorMessage}
      </div>
      {/* <label>
        Start Date
      </label>
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id={this.props.skuid}// PropTypes.string.isRequired,
        placeholder = {'Pick a day'}
        numberOfMonths = {1}
        hideKeyboardShortcutsPanel ={true}
        isOutsideRange={(day) => this.isBlocked(day)}
        required={true}
        showDefaultInputIcon= {true}
 
        // initialVisibleMonth={() => moment().add(1, "M")}
      /> */}
      {/* <ReCAPTCHA
        style={{padding:'5%'}}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={(e)=>this.handleRecaptcha(e)}
      /> */}
      {/* <PaymentRequestForm
        currency={currency}
        amount={this.props.amount*this.state.numberOfTickets.value}
        productName={this.props.productName}
        skuid={this.props.skuid}
        quantity={this.state.numberOfTickets.value}
        prodid={this.props.prodid}
        // coupon={this.props.coupon}
        handlePaymentRequestBtn={this.handlePaymentRequestBtn}
        // referralCode={this.state.referralCode}
        numberOfTicketsSelected={this.state.numberOfTickets.value}
        />    */}
    </form> 
    </>
    );
  }
}

export default injectStripe(CheckoutFieldsForm);
