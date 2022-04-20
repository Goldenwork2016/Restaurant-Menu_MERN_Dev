import React from 'react';
import '../styles/css/style.css';

import Footer from './Footer';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

const HowItWorks=()=>{
    window.scrollTo(0, 0)
    return (
    <>
    <Navigation/>
    {/* <!-- Feature 6 --> */}
	<section class="py-10 py-lg-20 bg-bg-3 text-center">
		<div class="container">
			<div class="row justify-content-md-between justify-content-xxl-center text-md-start">
				<div class="mb-4 mb-lg-0 col-md-8 col-lg-7 col-xxl-5">
                    <h2 class="display-4">
						Step 1.
					</h2>
                    <p class="display-5">
						Do not stop using UberEats/DoorDash/Skip
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
						Are you a restaurant and you're already using delivery services? Your new Payouts shop will work as an add-on to existing delivery services. 
                        You can continue receiving orders from new customers on platforms like UberEats and Doordash,
                        while sending your <span class="color-main semi-bold">direct customers</span> to your new Payouts shop
					</p>
				</div>
			</div>
			{/* <img src="../../assets/stop.png" alt="" class="illustration" style={{}}/> */}
		</div>
	</section>
    {/* <!-- Feature 6 --> */}
	<section class="py-10 py-lg-20 bg-bg-3 text-center">
		<div class="container">
			<div class="row justify-content-md-between justify-content-xxl-center text-md-start">
				<div class="mb-4 mb-lg-0 col-md-8 col-lg-7 col-xxl-5">
                    <h2 class="display-4">
						Step 2.
					</h2>
                    <p class="display-5">
						Launch your Payouts shop
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
                        <span class="color-main semi-bold">Register for free</span> to get a custom dashboard access. 
                        Customize your new shop with your brand colour and logo; then link it as a checkout page to your existing website if you already have one.
                        <br></br>
                        <br></br>
                        If you don't have a website yet, no worries! We can create a <span class="color-main semi-bold">100% FREE website for you!</span> Our special way of saying thank you :)
					</p>
				</div>
			</div>
			{/* <img src="../../assets/launch.png" alt="" class="illustration" style={{}}/> */}
		</div>
	</section>
    {/* <!-- Feature 6 --> */}
	<section class="py-10 py-lg-20 bg-bg-3 text-center">
		<div class="container">
			<div class="row justify-content-md-between justify-content-xxl-center text-md-start">
				<div class="mb-4 mb-lg-0 col-md-8 col-lg-7 col-xxl-5">
                    <h2 class="display-4">
						Step 3.
					</h2>
                    <p class="display-5">
						Send your own traffic to your new shop
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
                    Every order made directly on your new shop will now be completely yours to own - 
                    without having to pay a 30% cut to third-party platforms
					</p>
				</div>
			</div>
			<img src="i/feature-6.png" srcset="i/feature-6@2x.png 2x" alt="" class="img-fluid"/>
		</div>
	</section>
    {/* <!-- Feature 6 --> */}
	<section class="py-10 py-lg-20 bg-bg-3 text-center">
		<div class="container">
			<div class="row justify-content-md-between justify-content-xxl-center text-md-start">
				<div class="mb-4 mb-lg-0 col-md-8 col-lg-7 col-xxl-5">
                    <h2 class="display-4">
						Step 4.
					</h2>
                    <p class="display-5">
						Gather insights on your dashboard
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
                        Gather insights on customer data, orders, payment methods, transaction amounts, and more. At no extra cost.
					</p>
				</div>
			</div>
			<img src="i/feature-6.png" srcset="i/feature-6@2x.png 2x" alt="" class="img-fluid"/>
		</div>
	</section>
    {/* <!-- Feature 6 --> */}
	<section class="py-10 py-lg-20 bg-bg-3 text-center">
		<div class="container">
			<div class="row justify-content-md-between justify-content-xxl-center text-md-start">
				<div class="mb-4 mb-lg-0 col-md-8 col-lg-7 col-xxl-5">
                    <h2 class="display-4">
						Step 5.
					</h2>
                    <p class="display-5">
						Refer a friend
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
                        You know someone who could benefit from a platform like Payouts? Awesome! Send them our way and we'll credit you one FREE month of our Phase 2 plan for every [1] referral!
					</p>
				</div>
			</div>
			<img src="i/feature-6.png" srcset="i/feature-6@2x.png 2x" alt="" class="img-fluid"/>
		</div>
	</section>
    <Footer/>
    </>
     )
  }

export default HowItWorks