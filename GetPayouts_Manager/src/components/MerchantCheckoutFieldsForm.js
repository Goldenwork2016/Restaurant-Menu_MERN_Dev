import React, {Component} from 'react';
import '../styles/css/checkout.css';
import '../styles/css/styles.css';
import '../styles/css/framework.css';
import { getUniqueArray } from '../utils/utils';
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

class MerchantCheckoutFieldsForm extends Component {
  state = {
    product_id_selected: this.props.product_info[0].product_id,
    errorMessage: '',
    phone: '',
    email: '',
    // referralCode:'',
    // appleGPay:false
    disabled:false,
    // date: null,
    focused: null,
    //recaptchaValue: null,
    price_id: this.props.product_info[0].pricing_info[0].price_id,
    frequency: this.getPriceTypeUser(this.props.product_info[0].pricing_info[0])
  };

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
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    if (this.props.stripe && !this.state.disabled) {
        this.props
        .stripe
        .createToken()
        .then(data=>{
          const {phone,email, price_id} = this.state

          if(data.token && price_id){
            // if(!coupon){
            this.setState({
              disabled:true
            })
            return this.props.handleCheckout(
              phone,
              price_id,
              email,
              data.token.id,
              )
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

  onCloseModal = () => {
    this.setState({ open: false });
      if(!this.state.orderid){
        this.recordAbandonedCheckout()
      }
      if(this.state.payment || this.state.payment===false) {
        this.refreshPage()
      }
  };

  getPricingOptions = (product_id)=> {
    const pricing_info =  this.getProduct(product_id).pricing_info
    const { frequency} = this.state;

    const pricingInfoBasedOnFrequency = pricing_info
    .filter( pricing => this.getPriceTypeUser(pricing) ===  frequency);
  
    return pricingInfoBasedOnFrequency.map((
    ({ price_id, price_type, product_id, price_description, price_amount }) =>
      <option 
      value={price_id}
      > 
        {`${price_description}`} 
      </option>
      ))
  }

  getPriceAmount = () =>{
    const { product_id_selected, price_id } = this.state;
    const pricing_info =  this.getProduct(product_id_selected).pricing_info

    for (let index = 0; index < pricing_info.length; index++) {
      const element = pricing_info[index];
      if ( price_id == element.price_id ) {
        return pricing_info[index].price_amount/100;
      }
    }

  }

  getProductOptions = (product_info)=> {
    return product_info.map((
    ({ product_name, product_id }) =>
      <option 
      value={product_id}
      > 
        {`${product_name}`} 
      </option>
      ))
  }

  handlePricingOption = e => {
    e.preventDefault();
    this.setState({
      price_id: e.target.value
    })
  };

  getProduct = (productIdSelected) =>{
    const { product_info} = this.props;
    for (let index = 0; index < product_info.length; index++) {
      const element = product_info[index];
      if ( productIdSelected == element.product_id ) {
        return product_info[index];
      }
    }
  }

  handleProductOption = e => {
    e.preventDefault();
    const productIdSelected = e.target.value
    const pricingInfo = this.getProduct(productIdSelected).pricing_info[0];
    const priceIdNew =  pricingInfo.price_id
    const frequencyOptionNew = this.getPriceTypeUser(pricingInfo);

    this.setState({
      product_id_selected: e.target.value,
      price_id: priceIdNew,
      frequency: frequencyOptionNew,
    })
  };

  handleFrequencyOption = e => {
    e.preventDefault();
    const { product_id_selected } = this.state;
    const frequencyOptionSelected = e.target.value;
    const pricing_info =  this.getProduct(product_id_selected).pricing_info;

    const pricingInfoBasedOnFrequency = pricing_info
    .filter( pricing => this.getPriceTypeUser(pricing) ===  frequencyOptionSelected);

    const priceIdNew =  pricingInfoBasedOnFrequency[0].price_id

    this.setState({
      frequency: frequencyOptionSelected,
      price_id: priceIdNew,
    })
  };

  getPriceTypeUser({ price_type, price_recurring_interval, price_interval_count }){
    if(price_type === 'one_time' )  return 'Once';

    if (price_type === 'recurring'){
      if(price_recurring_interval == 'week' && price_interval_count === 1) return 'Weekly';
      if(price_recurring_interval == 'week' && price_interval_count === 2) return 'Bi-Weekly';
      if(price_recurring_interval == 'month' && price_interval_count === 1) return 'Monthly';
    }
  }

  getFrequencyOptions(){
    const { product_id_selected  } = this.state;
    const pricing_info =  this.getProduct(product_id_selected).pricing_info;

    const frequencyOptionsArr = pricing_info.map(pricing => {
      return this.getPriceTypeUser(pricing);
    });

    return frequencyOptionsArr.filter(getUniqueArray).map((
      frequencyOption =>
        <option 
        value={frequencyOption}
        > 
          {`${frequencyOption}`} 
        </option>
        ));

  }


  render() {
    const {themeColor, merchant_info, product_info } = this.props;
    const { product_id_selected, price_id } = this.state;

    return (
      <>
    <form className="" onSubmit={(e)=>this.handleSubmit(e)}>
      <div class="mt-30 mt-lg-12">
        <div class="pt-10 radius20 holder">
          <div class="mb-25 d-flex flex-wrap justify-content-between align-items-center aos-animate" style={{color:themeColor}}>
            <span class="f-22 color-heading">
              Checkout
                <span class="ml-6" style={{color:themeColor}}>
                    <i class="fa fa-credit-card"></i>
                </span>
            </span>
          </div>
          <div class="row">
            <div class="col-12 mb-6 block aos-animate">
              <div class="mb-10 f-14">
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
            <div class="col-12 mb-6 block aos-animate">
              <div class="mb-10 f-14">
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
            <div class="col-12 mb-6 block aos-animate">
              <div class="mb-10 f-14">
                Card Number
              </div>
              <CardElement
                  className="input js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading credit_card_custom"
                  placeholder='Card Number'
                  onChange={this.handleStripeElement}
                  {...createOptions(this.props.fontSize)}
              />
            </div>
            <div class="col-12 mb-6 block aos-animate">
              <div class="mb-10 f-14">
                Options
              </div>
              <select
                className="input StripeElement js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading"
                onChange={(e)=>this.handleProductOption(e)}
                name="prodid"
                value={product_id_selected}
                required
                > 
                {/* <option selected>Big | Chocolate</option>
                <option>Big | Vanilla</option>
                <option>Big | Strawberry</option>
                <option>Small | Chocolate</option>
                <option>Small | Vanilla</option>
                <option>Small | Strawberry</option> */}
                {
                  <>
                  {this.getProductOptions(product_info)}
                  </>
                }
              </select>
            </div>
            {/* FREQUENCY DROPDOWN */}
            <div class="col-12 mb-6 block aos-animate">
              <div class="mb-10 f-14">
                Frequency
              </div>
            </div>
            <div class="col-12 mb-10 block aos-animate">
              {/* PARSE PRICING OPTIONS TO CREATE DROPDOWN */}
              <select 
                className="input StripeElement js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading"
                onChange={(e)=>this.handleFrequencyOption(e)}
                >
                {this.getFrequencyOptions()}
              </select>
            </div>
            {/* VARIATION DROPDOWN */}
            <div class="col-12 mb-6 block aos-animate">
              <div class="mb-10 f-14">
                Variation
              </div>
            </div>
            <div class="col-12 mb-10 block aos-animate">
              {/* PARSE PRICING OPTIONS TO CREATE DROPDOWN */}
              <select 
                className="input StripeElement js-card-mask w-full px-lg-2 px-xl-3 border-gray focus-action-2 action-4 placeholder-heading"
                onChange={(e)=>this.handlePricingOption(e)}
                >
                {
                  <>
                    {this.getPricingOptions(product_id_selected)}
                  </>
                }
              </select>
            </div>
            <div class="col-12 mb-10 block aos-animate">

            <button
              class="btn mr-20 mb-20 mb-xl-0 w-full lg action-1 mt-10" 
              style={{backgroundColor:themeColor}}
              id='btn-submit'
              type='submit'
              disabled={this.state.disabled}
              >
                Pay ${this.getPriceAmount()} CAD
              </button>
            </div>
            </div>
        </div>
      </div>
      <div style={{color:'#c23d4b'}}>
          {this.state.errorMessage}
      </div>
      <div className='pb-50 pt-20 f-14 text-center'>
          We will contact you to complete the order
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

export default injectStripe(MerchantCheckoutFieldsForm);
