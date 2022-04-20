import React from 'react';
import '../styles/css/style.css';

import Footer from './Footer';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

const Why=()=>{
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
						#1.
					</h2>
                    <p class="display-6">
						No more paying commissions &amp; fees for your own [direct] customers
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
						Other platforms take a cut of up 30% from the merchant (you)
						<br></br><br></br>
						We charge a super low commission of 3% (10x cheaper)
					</p>
					<p class="pt-4 text-md regular mb-0">
						Note: You can bring this commission down to 0% for a flat $49/month whenever you want!
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
						#2.
					</h2>
                    <p class="display-6">
						No hidden fees paid by your customers
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
						On top of merchant fees for you, other platforms charge an additional 10% from end-users (your customers).
						On top of that, they throw in additional delivery and service fees to their order
						<br></br><br></br>
						On Payouts, there's a flat $8.50 per delivery that you can split with your customers. That's it. No other fees at all for you or your customers
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
						#3.
					</h2>
                    <p class="display-6">
						You're completely in control
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
                    Our self-serve dashboard allows you to manage your products, prices, extras, view customer and order info, make changes and even customize your storefront
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
						#4.
					</h2>
                    <p class="display-6">
						Split delivery fees dynamically
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
                        Set rules for how the delivery fee is split between you and your customers:
						<p class="text-lg">
						<br></br><br></br>
						"Free delivery on orders over $49"
						<br></br>
						<br></br>
						"50%/50% split on orders between $25 and $49"
						<br></br>
						<br></br>
						"Customer pays 80% of delivery fees on orders under $25"
						</p>
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
						#5.
					</h2>
                    <p class="display-6">
						New features are free, and always will be
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
						Platforms like Shopify charge extra fees that go up to $199/month for additional third-party apps
						<br></br><br></br>
						On Payouts, you can create subscription products, manage memberships, add promo codes and much more at no extra cost
					</p>
					<p class="pt-4 text-md regular mb-0">
						Note: ALL features will ALWAYS be available 100% for free. We'll never charge more to unlock new features.
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

export default Why