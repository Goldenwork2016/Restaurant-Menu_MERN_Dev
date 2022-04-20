import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';
import HamburgerMenu from '../deprecated/HamburgerMenu';

import SearchButtonMobile from '../deprecated/SearchButtonMobile';
import SearchBarDesktop from '../deprecated/SearchBarDesktop';
import LogoMobile from '../deprecated/LogoMobile';
import LogoDesktop from '../deprecated/LogoDesktop';
import RightHandButtonDesktop from '../deprecated/RightHandButtonDesktop';
import Navigation from './Navigation';

const NoMatch404 = ()=>{
    return(
        <>
        <Navigation/>
        {/* <!-- Feature 7 --> */}
        <section class="py-10 py-lg-20 text-center bg-bg-3">
            <div class="container">
                <div class="row align-items-center flex-column">
                    <div class="col-sm-11 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
                        <h2 class="display-5 mb-5">
                            We couldn't find the page you were looking for.
                        </h2>
                        <p class="fs-3 mb-0">
                            This could be us. Please try again later.
                        </p>
                    </div>
                    <div class="col-12">
                        <img src="/assets/framework/feature-7.png" alt="" class="img-fluid my-md-15 my-8"/>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default NoMatch404