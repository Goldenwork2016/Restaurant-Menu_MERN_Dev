import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from './Navigation';

const NoMatch404 = ()=>{
    return(
        <>
        <Navigation/>
        {/* <!-- Feature 7 --> */}
        <section class="py-10 py-lg-20 text-center bg-bg-3">
            <div class="container">
                <div class="row align-items-center flex-column">
                    <div class="col-sm-11 col-md-8 mb-6 col-lg-7 col-xl-6 col-xxl-5">
                        <h2 class="display-5">
                            Sorry, but we couldn't find what you were looking for.
                        </h2>
                    </div>
                    <div class="col-md-9 col-lg-7 col-xl-6 col-xxl-5">
                        <p class="fs-3 mb-0">
                        It might be us, please try again later.
                        </p>
                    </div>
                    <div class="col-12">
                        <img src={process.env.PUBLIC_URL+"/assets/shots/feature-7.png"} alt="" class="img-fluid my-md-15 my-8"/>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <Footer/>
        </>
    )
}

export default NoMatch404