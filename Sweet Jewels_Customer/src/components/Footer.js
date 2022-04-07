import React, {Component} from 'react';
import moment from 'moment'

import axios from 'axios';
import ReactGA from 'react-ga';
import {Link } from 'react-router-dom'
import { HOST_APPLICATION_API } from '../utils/consts';
import Copyright from '../custom/Copyright';

import uuid from 'uuid/v1';
import SocialLinks from '../custom/SocialLinks';
//import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY='6Lfzg9sUAAAAAJxpRqhBwD_8vK2XqtyopVSlRALG'
// const HOST_APPLICATION_API = 'https://ampbnlj6qe.execute-api.us-west-2.amazonaws.com/dev/host-application'

export default class Footer extends Component {
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
	{/* <!-- Footer 4 --> */}
		<footer class="bg-bg-3 pb-md-8 pt-md-10 py-8 text-center">
		<div class="container">
			<SocialLinks/>
			<div class="mt-10 mb-8 border-bottom border-dark-3">
			</div>
			<p class="fs-5 mb-0">
				<Copyright/>
			</p>
		</div>
	</footer>
	{/* <!-- Footer 7 --> */}
	{/* <footer class="bg-bg-3 pt-8 pb-12">
		<div class="container">
			<div class="row">
				<div class="mb-8 mb-md-0 col-lg-3 col-xl-3" data-aos="fade-down" data-aos-delay="0">
					<a href="#" class="mb-4">
						<img src="/assets/logo_nav_2.png" alt="" class="img-fluid"/>
					</a>
					<p class="fs-5">
						Be the first to explore and use our new products while others are still waiting
					</p>
				</div>
				<div class="mb-sm-8 mb-md-0 col-lg-2 col-md-3 col-sm-6" data-aos="fade-down" data-aos-delay="150">
					<h5 class="mb-4">
						Products
					</h5>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Startup
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Postcards
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Slides
					</a>
				</div>
				<div class="mb-sm-8 mb-md-0 col-lg-2 col-md-3 col-sm-6" data-aos="fade-down" data-aos-delay="250">
					<h5 class="mb-4">
						Articles
					</h5>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Coding
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Design
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Inspiration
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Tutorials
					</a>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-6" data-aos="fade-down" data-aos-delay="400">
					<h5 class="mb-4">
						About
					</h5>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Newsletter
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Privacy
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Terms
					</a>
					<a href="#" class="mb-4 me-2 me-sm-0 d-sm-block text-dark-1">
						Cookies
					</a>
				</div>
				<div class="col-lg-2 col-md-3 col-sm-6" data-aos="fade-down" data-aos-delay="500">
					<h5 class="mb-4">
						Contact
					</h5>
					<a href="tel:+94211334283" class="mb-4 me-2 me-sm-0 d-block text-main fw-bold">
						9 (421) 133-42-83
					</a>
					<a href="mailto:info@candelamtl.com" class="mb-4 me-2 me-sm-0 d-block text-main fw-bold">
						info@candelamtl.com
					</a>
					<a href="mailto:edvard@candelamtl.com" class="mb-4 me-2 me-sm-0 d-block text-main fw-bold">
						edvard@candelamtl.com
					</a>
				</div>
			</div>
			<p class="fs-5 mb-0 mt-lg-0 mt-6" data-aos="fade-down" data-aos-delay="650">
				Copyright © 2021 candelamtl.com
			</p>
		</div>
	</footer> */}
    </>
    );
  }
}

