import React, {Component} from 'react';
import '../styles/css/checkout.css';
import '../styles/css/styles.css';
import '../styles/css/framework.css';
import CheckoutLoading from'./CheckoutLoading';
import MemberMsg from'./MemberMsg';
// import {SingleDatePicker} from 'react-dates';
import moment from 'moment'
// import Select from 'react-select';

import axios from 'axios';
import uuid from 'uuid/v1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
//import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY='6Lfzg9sUAAAAAJxpRqhBwD_8vK2XqtyopVSlRALG'
const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'
const GET_OTP_API = 'https://679km1j7c7.execute-api.us-west-2.amazonaws.com/prod/otp'

const NOT_MEMBER='notmember';
const CHECKIN_ALREADY='alreadycheckedin';
const OTP_INVALID='otpinvalid';

// OTP CHECKIN 
export default class BookATourForm extends Component {
  state = {
    err: '',
    phone: '',
    email: '',
    disabled:false,
    // date: null,
    focused: null,
    loading: null,
    recaptchaValue: null,
    hostkey:'',
    member:null,
    checkedInErrMsg:'',
    otpLoading: null,
    otpSent:null
  };
  handleChange = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    });
  };
  handleRecaptcha = (event) =>{
    this.setState({
      recaptchaValue:event.target.value
    })
  }
  addData2Spreadsheet = (email,phone,recaptchaValue,hostkey) => {
    let phoneNumber = phone.replace(/[^0-9]/g,'');
    if(phoneNumber.indexOf('1')===0){
        phoneNumber = phoneNumber.substring(1);
    }
    const data = {
      date: Date.now(),
      email,
      hostkey,
      phone: phoneNumber,
      productname: this.props.productName,
      tokenid:uuid(),
      productid:this.props.productId,
      
    }
    this.setState({
      loading: true
    })

    axios.post(HOST_APPLICATION_API,data)
             .then(res=>{

              if(res.data.errorMessage 
                && res.data.errorMessage.toLowerCase()
                .includes(NOT_MEMBER)){  

                this.setState({
                  err:true,
                  phone: '',
                  email: '',
                  loading: false,
                  member:false,
                  hostkey:''
                })

              } else if(res.data.errorMessage 
                && res.data.errorMessage.toLowerCase()
                .includes(CHECKIN_ALREADY)){ 
                
                this.setState({
                  err:true,
                  phone: '',
                  email: '',
                  loading: false,
                  member:true,
                  hostkey:'',
                  checkedInErrMsg: res.data.errorMessage
                                  .replace(CHECKIN_ALREADY,'')
                })

              } else if(res.data.errorMessage 
                && res.data.errorMessage.toLowerCase()
                .includes(OTP_INVALID)){ 
                
                this.setState({
                  err:true,
                  phone: '',
                  email: '',
                  loading: false,
                  member:true,
                  hostkey:'',
                  checkedInErrMsg: res.data.errorMessage
                                  .replace(OTP_INVALID,'')
                })

              }else {
                this.setState({
                  err:false,
                  phone: '',
                  email: '',
                  loading: false,
                  member:true,
                  hostkey:''
                })
              }

             }).catch(err=>{
                this.setState({
                  err:true,
                  phone: '',
                  email: '',
                  loading: false,
                  hostkey:''
                })
              })
              
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.disabled) {
      this.setState({
        disabled:true
      })
      const {email,phone,recaptchaValue,hostkey} = this.state
      this.addData2Spreadsheet(email,phone,recaptchaValue,hostkey)
      } 
  };
  
  isBlocked=(day)=>{
    const dateDelay = moment().add(2, 'd');
    const availableDates = [dateDelay]
    return availableDates.some(date => day.isBefore(date), 'day')
  }

  getOtp = ()=>{
    const {email, phone,otpLoading,otpSent} = this.state;
    if(email && phone && (phone.length === 10 || (phone.length>=10 && phone.length <=15) ) && !otpSent) {
      
      let phoneNumber = phone.replace(/[^0-9]/g,'');
      if(phoneNumber.indexOf('1')===0){
        phoneNumber = phoneNumber.substring(1);
      }
      this.setState({
        otpLoading: true
      })
      axios.post(GET_OTP_API,{ email,phone: phoneNumber })
             .then(res=>{
              if(res.data.errorMessage 
                && res.data.errorMessage.toLowerCase()
                .includes(NOT_MEMBER)){  

                this.setState({
                  err:true,
                  otpLoading: false,
                  member:false,
                  email:'',
                  phone:''
                });

              }  else {
                this.setState({
                  err:false,
                  otpLoading: false,
                  otpSent:true
                })
              }

             }).catch(err=>{
                this.setState({
                  err:true,
                  otpLoading: false,
                })
              })

    } 
  }

  render() {
    const {err,loading,member,checkedInErrMsg, disabled, hostkey, email, phone, otpLoading,otpSent} = this.state

    return (
      <>
      <form className="" onSubmit={(e)=>this.handleSubmit(e)}>
      <div class="mt-30 mt-lg-12 col-xl-12 col-lg-12 mb-50">
        <div class="pt-10 px-25 radius20 holder">
          <div class="mb-25 d-flex flex-wrap justify-content-between align-items-center aos-animate">
            <h6 class="f-50">
              Check in
            </h6>
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
              {!otpSent && <span style={{fontSize:"16px", color:"#6b7c93"}}>&#9432; &nbsp; Enter your phone number to get a text message with a verification code.</span>}
            </div>
            {!otpLoading && <button
              class="btn mr-20 mb-20 mb-xl-0 action-1 col-12"
              onClick={this.getOtp}
              style={{marginTop:'0.8em', marginBottom:'0.8em'}}
              id='btn-submit'
            >
              {otpSent? 'One-time password sent!' : 'Verify' }
            </button>}
            {otpLoading && <CheckoutLoading/>}
            {otpSent && <>
              <input
              type='number' 
              name="hostkey"
              value={this.state.hostkey}
              placeholder='0000'
              onChange={this.handleChange} 
              required
              />
          <div className="MembershipDatesForm__smallPrint__2gdnZ">
            <span style={{fontSize:"16px", color:"#6b7c93"}}>
              We've sent you a one-time password
            </span>
          </div>
          <button
          id='btn-submit'
          type='submit'
          disabled={this.state.disabled}
          >
            Check me in
          </button></>}
          {(member===false && err===true) && 
            <MemberMsg
            memberExists={member}
            />}
      {/* <div style={{marginTop:'0.8em'}}>
      <ReCAPTCHA
        style={{padding:'5%'}}
        sitekey={RECAPTCHA_SITE_KEY}
        onChange={(e)=>this.handleRecaptcha(e)}
      />
      </div> */}
      </div>
      </div>
      </div>
    </form>
    {loading && <CheckoutLoading/>}
    
    { (member===true && err===true) && 
    <div>
      <FontAwesomeIcon
                style={{
                    color:'#6b7c93'
                }} 
                icon={faExclamationTriangle}/>
                {" "+checkedInErrMsg}
    </div>}
    
    { (member===true && err===false) && <div>You have been checked in!</div>}
    
    {(member===null && err) && <div>We couldn't submit your request,
          please reload the page and try again</div>}
    </>
    );
  }
}

