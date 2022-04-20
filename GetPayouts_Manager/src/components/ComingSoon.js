import React, {Component} from 'react';
import CheckoutLoading from'../deprecated/CheckoutLoading';
import moment from 'moment'

import axios from 'axios';
import uuid from 'uuid/v1';
import Navigation from './Navigation';
import Footer from './Footer';
import HamburgerMenu from '../deprecated/HamburgerMenu';
import { HOST_APPLICATION_API } from '../utils/consts';
//import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY='6Lfzg9sUAAAAAJxpRqhBwD_8vK2XqtyopVSlRALG'
// const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'

export default class ComingSoon extends Component {
  state = {
    err: '',
    phone: '',
    email: '',
    disabled:false,
    // date: null,
    focused: null,
    loading: null,
    recaptchaValue: null,
    name: ''
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
  // scrollToTopOnMount(){
  //   window.scrollTo(0, 0)
  // }
  add2HostApplications = (email,phone,name) => {
    
    const data = {
      date: Date.now(),
      email,
      phone: phone.replace(/[^0-9]/g,''),      
      name,
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
                  name:''
                })
    
             }).catch(err=>{
                this.setState({
                  err:true,
                  phone: '',
                  email: '',
                  loading: false,
                  name:''
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
      const {email,phone,name} = this.state
      this.add2HostApplications(email,phone,name)
      } 
  };
  
  isBlocked=(day)=>{
    const dateDelay = moment().add(2, 'd');
    const availableDates = [dateDelay]
    return availableDates.some(date => day.isBefore(date), 'day')
  }
  render() {
    const {err,loading} = this.state
    // this.scrollToTopOnMount();
    return (
      <>
        <Navigation/>
        {/* <!-- Contact 1 --> */}
        <section class="bg-bg-3 text-left">
          <div class="container">
          <div class="row justify-content-between flex-md-row-reverse">
              <div class="col-1"></div>
              <div class="col-4 col-sm-12 pt-10 text-center">
                <img src="../../assets/beta2.png" alt="" class="illustration" style={{maxWidth:"100%"}}/>
              </div>
              <div class="col-1"></div>
              <div class="col-4 py-10 py-lg-20 col-xl-4 col-lg-5 col-md-6 col-sm-12">
                <h1 class="mb-6" data-aos="none" data-aos-delay="0">
                  Join the Beta
                </h1>
                <p class="mb-6" data-aos="none" data-aos-delay="0">
                  Payouts Beta is invite-only until June 1st 2022.
                </p>
                <form onSubmit={(e)=>this.handleSubmit(e)} enctype="multipart/form-data"
                  class="mb-15 js-ajax-form" data-aos="none" data-aos-delay="150">
                  {/* <!-- forms alerts --> */}
                  <div class="alert alert-action-8 fixed-top invisible fade js-ajax-form-result"
                    data-result="success" role="alert">
                    <span class="js-ajax-form-alert-text" data-default-text="Thanks for your message!">
                      Thanks for your message!
                    </span>
                  </div>
                  <div class="alert alert-action-5 fixed-top invisible fade js-ajax-form-result"
                    data-result="error" role="alert">
                    <span class="js-ajax-form-alert-text">
                      Error!
                    </span>
                  </div>
                  {/* <!-- forms alerts end --> */}
                  <input 
                  type="name" 
                  name="name" 
                  // pattern=".+@*.com"
                  placeholder="Your name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                    class="mb-6 form-control border border-dark-3" required="required"/>
                  <input 
                  name="email"
                  type="email"
                  // pattern=".+@*.com"
                  placeholder="email@youremail.com"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                  class="mb-6 form-control border border-dark-3" required="required"/>
                  <input 
                  name="phone"
                  type="phone"
                  // pattern=".+@*.com"
                  placeholder="514-799-6838"
                  onChange={this.handleChange}
                  value={this.state.phone}
                  required
                  class="mb-6 form-control border border-dark-3" required="required"/>                  
                  <div class="mb-6 row justify-content-start">
                    <div class="col-sm-6">
                      <button class="btn btn-action-1 w-100"
                      id='btn-submit'
                      type='submit'
                      disabled={this.state.disabled}
                      >
                        Join the Beta
                      </button>
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
                <div class="w-50 border-bottom border-dark-3 mx-auto mb-10">
                </div>
                <p class="mb-2">
                  or reach us via email at
                </p>
                <a href="mailto:support@hellopayouts.com" class="text-dark-1 fw-bold fs-1">
                  support@hellopayouts.com
                </a>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
        </section>
        <Footer/>
    </>
    );
  }
}
