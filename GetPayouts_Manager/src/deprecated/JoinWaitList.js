import React, {Component} from 'react';
import CheckoutLoading from'./CheckoutLoading';
import moment from 'moment'

import axios from 'axios';
import uuid from 'uuid/v1';
//import ReCAPTCHA from "react-google-recaptcha";
import { HOST_APPLICATION_API } from '../utils/consts';

const RECAPTCHA_SITE_KEY='6Lfzg9sUAAAAAJxpRqhBwD_8vK2XqtyopVSlRALG'
// const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'

export default class JoinWaitList extends Component {
  state = {
    err: '',
    phone: '',
    email: '',
    disabled:false,
    // date: null,
    focused: null,
    loading: null,
    recaptchaValue: null,
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
  add2Waitlist = (email,phone,productname,productid,recaptchaValue) => {
    
    const data = {
      date: Date.now(),
      email,
      phone: phone.replace(/[^0-9]/g,''),      
      productname,
      productid
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
                  loading: false,
                })
    
             }).catch(err=>{
                this.setState({
                  err:true,
                  phone: '',
                  email: '',
                  loading: false,
                })
              })
              
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (!this.state.disabled) {
      this.setState({
        disabled:true
      })

      const {productName,prodid } = this.props;
      const {email,phone,recaptchaValue} = this.state
      this.add2Waitlist(email,phone,productName,prodid,recaptchaValue)
      } 
  };
  
  isBlocked=(day)=>{
    const dateDelay = moment().add(2, 'd');
    const availableDates = [dateDelay]
    return availableDates.some(date => day.isBefore(date), 'day')
  }
  render() {
    const {err,loading} = this.state
    return (
      <>
      <form className="" onSubmit={(e)=>this.handleSubmit(e)}>
      <div class="mt-30 mt-lg-12 col-xl-12 col-lg-12">
        <div class="pt-10 px-25 radius20 holder">
          <div class="mb-25 d-flex flex-wrap justify-content-between align-items-center aos-animate">
            <h6 class="f-50">
              Join waitlist
            </h6>
          </div>
          <div class="row">
            <div class="col-12 mb-10 block aos-animate">
                <div class="mb-10 f-18 semibold">
                  Full Name
                </div>
                <input
                  className="input w-full border-gray focus-action-2 action-4 placeholder-heading"
                  name="name"
                  type="name"
                  // pattern=".+@*.com"
                  placeholder="John Appleseed"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                />
            </div>
            <div class="col-12 mb-10 block aos-animate">
              <div class="mb-10 f-18 semibold">
                Business Email
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
            <div class="col-12 mb-10 block aos-animate pb-70">
              <button
              class="btn mr-20 mb-20 mb-xl-0 w-210 lg action-1"
              id='btn-submit'
              type='submit'
              disabled={this.state.disabled}
              >
                Join waitlist
              </button>
            </div>
            </div>
        </div>
      </div>
    
      <div style={{color:'#c23d4b'}}>
          {this.state.errorMessage}
      </div>
    </form> 
    {loading && <CheckoutLoading/>}
    
    { err===false && <div>Your have been added to the waitlist!</div>}
    
    { err && <div>We couldn't submit your request,
          please reload the page and try again</div>}
    </>
    );
  }
}

