import React, {Component} from 'react';
import CheckoutLoading from'./CheckoutLoading';
import moment from 'moment'

import axios from 'axios';
import ReactGA from 'react-ga';
import {Link } from 'react-router-dom'

import uuid from 'uuid/v1';
//import ReCAPTCHA from "react-google-recaptcha";
import { HOST_APPLICATION_API } from '../utils/consts';

const RECAPTCHA_SITE_KEY='6Lfzg9sUAAAAAJxpRqhBwD_8vK2XqtyopVSlRALG'
// const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'

export default class ProductFooter extends Component {
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

  /**
 * record redirect 2 activity from footer
 */
  

  
  isBlocked=(day)=>{
    const dateDelay = moment().add(2, 'd');
    const availableDates = [dateDelay]
    return availableDates.some(date => day.isBefore(date), 'day')
  }
  render() {
    const {err,loading} = this.state
	function recordRedirect2ProductFromFooter(productName,productLink){
		ReactGA.pageview(productLink);
		ReactGA.event({
			category: 'FOOTER_PRODUCT_LINK',
			action:    'Clicked on product from footer for '+productName,
			label: 'FOOTER_PRODUCT_LINK'
			});
	  }
    return (
      <>
	  <footer class="pt-50 pb-40 bg-dark color-white text-center text-sm-left footer_9 zi-999">
			<div class="container px-xl-0">
				<div class="row justify-content-center">
					<div class="mb-50 mb-lg-0 col-lg-4">
						<div class="mb-30 f-22 title">Powered by <a href="/" class="color-white">Payouts</a></div>
						<div class="mb-35 text-adaptive">
							Turn your products into monthly subscriptions
						</div>
						<form onSubmit={(e)=>this.handleSubmit(e)} class="mb-25 row no-gutters">
							<div class="col-lg-5 col-md-8 col-5">
							<input
								className="input w-full sm border-transparent-white focus-white color-white placeholder-transparent-white radius8"
								name="email"
								type="email"
								pattern=".+@*.com"
								placeholder="john@example.com"
								onChange={this.handleChange}
								value={this.state.email}
								required
							/>
							</div>
							<div class="col-lg-1 col-md-3 col-1"></div>
							<div class="col-lg-5 col-md-8 col-6">
							<input
								className="input w-full sm border-transparent-white focus-white color-white placeholder-transparent-white radius8"
								type='tel' 
								name="phone"
								value={this.state.phone}
								placeholder='514-799-9999'
								onChange={this.handleChange} 
								required
							/>						
							</div>
							<div class="col-lg-11 col-md-8 col-12">
								<div class="">
									<button
									class="btn sm action-1 w-full f-16 radius8" style={{backgroundColor:this.props.themeColor}}
									id='btn-submit'
									type='submit'
									disabled={this.state.disabled}
									>
										Get your own page
									</button>
								</div>
							</div>
						</form>
						{loading && <CheckoutLoading/>}
						
						{ err===false && <div>Your have been added to the waitlist!</div>}
						
						{ err && <div>We couldn't submit your request,
							please reload the page and try again</div>}
							
						{/* <div class="row no-gutters justify-content-center justify-content-sm-start">
							<div class="col-lg-auto col-sm-4 col-auto">
								<span class="link mr-10 color-white">&copy; 2021 Payouts. All rights reserved.</span>
							</div>
							<div class="col-lg-auto col-sm-4 col-auto">
								<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter('#locations')} class="link mr-10 color-white">Terms of Service</Link>
							</div>
							<div class="col-lg-auto col-sm-4 col-auto">
								<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter('#locations')} class="link ml-10 color-white">Privacy Policy</Link>
							</div>
						</div> */}
					</div>
					<div class="col-lg-1">
					</div>
					<div class="col-lg-2 col-sm-4 col-6 links">
						{/* <div class="mb-25 f-18 bold title">Learn more</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/about")} class="link mb-20 color-white">About</Link>
						</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/FAQ")} class="link mb-20 color-white">FAQ</Link>
						</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/how-it-works")} class="link mb-20 color-white">How it works</Link>
						</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/fees")} class="link mb-20 color-white">Fees</Link>
						</div> */}
					</div>
					<div class="col-lg-2 col-sm-4 col-6 links">
						{/* <div class="mb-25 f-18 bold title">Cities</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/spaces")} class="link mb-20 color-white">Montreal</Link>
						</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/spaces")} class="link mb-20 color-white">Toronto</Link>
						</div>
						<div>
							<Link to={'/spaces'} onClick={() => recordRedirect2ProductFromFooter("/spaces")} class="link mb-20 color-white">New York City</Link>
						</div> */}
					</div>
					<div class="col-xl-1 d-none d-xl-block">
					</div>
					<div class="col-lg-2 col-sm-3 col-6 mt-50-mobile">
						<i class="fas fa-flag"></i>
						<div class="ml-5 d-inline-block dropdown">
							<a href="/" class="link color-white dropdown-toggle" id="footer_10_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">English</a>
							<div class="bg-dark lh-36 dropdown-menu" aria-labelledby="footer_10_dropdown">
								<div>
									<a href="/" class="link color-white">French</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
    </>
    );
  }
}

