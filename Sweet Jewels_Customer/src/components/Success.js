import React from 'react';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';

const Success = (props)=>{
    return(
        <>
        {/* <Navigation/> */}
        {/* <!-- Call to action 3 --> */}
        <section class="py-10 py-lg-20 bg-bg-3 text-center text-lg-start">
            <div class="container">
                <div class="row align-items-center justify-content-center justify-content-lg-start">
                    <div class="col-8 col-md-6">
                        <img src="https://i.imgur.com/glyZ7BM.png" alt="" class="img-fluid"
                            data-aos="fade-down" data-aos-delay="0"/>
                    </div>
                    <div class="ps-lg-12 ps-xl-3 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                        <h2 class="display-5 mb-6 mt-8 mt-lg-0" data-aos="fade-down" data-aos-delay="250">
                            Your order was placed! Check your email!
                        </h2>
                        <p class="fs-1 mb-8" data-aos="fade-down" data-aos-delay="500">
                            We've got your order. We'll reach out if we need any more information from you.
                        </p>
                        <a href="/home" class="btn btn-action-1 me-4" data-aos="fade-down" data-aos-delay="650">
                            Continue shopping
                        </a>
                        {/* <Link href="#" class="btn btn-outline-dark-2" data-aos="fade-down" data-aos-delay="750">
                            Learn More
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Success