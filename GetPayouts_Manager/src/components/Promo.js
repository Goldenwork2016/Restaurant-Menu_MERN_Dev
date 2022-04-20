import React from 'react';
import '../styles/css/style.css';

import Footer from './Footer';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

const Promo=()=>{
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
						We'll design and develop a custom static website just for you
					</h2>
                    <p class="display-5 pt-10">
						No catch. 100% FREE in every sense of the word.
					</p>
				</div>
				<div class="d-none d-xxl-block col-xxl-1">
				</div>
				<div class="mb-md-15 mb-8 col-md-8 col-lg-5 col-xxl-4">
					<p class="display-xs regular mb-0">
						For a limited time, every new eligible merchant who registers with Payouts will get three (3) FREE one-on-one sessions with a web designer and web developer to
						create a customized landing page for their business.
					</p>
					<br></br><br></br>
					<p class="display-xs regular mb-0">
						To get started, simply register for our Beta by clicking <a href="/coming-soon" class="color-action-2">here</a>.
					</p>
				</div>
			</div>
			<img src="../../assets/team.png" alt="" class="illustration" style={{}}/>
		</div>
	</section>
    <Footer/>
    </>
     )
  }

export default Promo