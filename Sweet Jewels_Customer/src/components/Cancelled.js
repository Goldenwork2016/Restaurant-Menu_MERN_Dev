import React from 'react';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';

const Cancelled = (props)=>{
    return(
        <>
        {/* <Navigation/> */}
        {/* <!-- Call to action 4 --> */}
        <section class="py-10 py-lg-20 bg-bg-3">
            <div class="container">
                <div class="p-6 p-sm-12 bg-bg-2 rounded-2 text-center text-lg-start">
                    <div
                        class="row flex-column-reverse flex-lg-row align-items-center justify-content-center justify-content-lg-between">
                        <div class="col-md-8 col-lg-6 col-xxl-5">
                            <h2 class="display-5" data-aos="fade-down" data-aos-delay="0">
                                Your order was cancelled.
                            </h2>
                            <a href="/home" class="mt-8 mb-6 btn btn-action-1" data-aos="fade-down" data-aos-delay="250">
                                Continue shopping
                            </a>
                            <p class="mb-0" data-aos="fade-down" data-aos-delay="500">
                                We've got plenty of products in stock just for you
                            </p>
                        </div>
                        <div class="col-md-8 col-lg-6 text-lg-end">
                            <img src="https://i.imgur.com/Dn9orJL.png" alt=""
                                class="img-fluid mb-8 mb-md-0" data-aos="fade-down" data-aos-delay="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Cancelled