import React from 'react';
import '../styles/css/style.css';

import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import SearchButtonMobile from './SearchButtonMobile';
import SearchBarDesktop from './SearchBarDesktop';
import LogoMobile from './LogoMobile';
import LogoDesktop from './LogoDesktop';
import RightHandButtonDesktop from './RightHandButtonDesktop';
import {Link} from 'react-router-dom';

const About=()=>{
    window.scrollTo(0, 0)
    return (
      <div id="root">
        <div className="Page__root__2VuHt">
          <div className="Page__content__rCsmc">
            <div className="LayoutSingleColumn__root__2iP-z">
              <div className="LayoutWrapperTopbar__root__3sx2Q">
                    <div className="Topbar__root__2O2hF">
                        <div className="Topbar__container__3H7De bg-dark">
                            <HamburgerMenu/>
                            <LogoMobile/>
                            <SearchButtonMobile/>
                        </div>
                        <div className="Topbar__desktop__2tv3W">
                            <nav className="TopbarDesktop__root__3iSVO bg-dark">
                                <LogoDesktop/>
                                <SearchBarDesktop/>
                                <RightHandButtonDesktop/>
                            </nav>
                        </div>
                    </div>
                </div>
              <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf AboutPage__staticPageWrapper__38hsI" role="main">
                <h1 className="AboutPage__pageTitle__kpyg3">We're making workspaces more accessible to professionals across in Montreal</h1>
                <picture>
                    <source
                        srcSet={process.env.PUBLIC_URL+"/assets/Flockbanner-About.webp"}
                        type="image/webp"/>
                    <source
                        srcSet={process.env.PUBLIC_URL+"/assets/Flockbanner-About.jpg"}
                        type="image/jpg" />
                    <img src={process.env.PUBLIC_URL+"/assets/Flockbanner-About.jpg"}
                        className="AboutPage__coverImage__S_tVp" alt='Payouts About'/>
                </picture>
                <div className="AboutPage__contentWrapper__Sro3V">
                  <div className="AboutPage__contentSide__398Rv">
                    <p>Did you know Payouts spaces cost less than renting an office space?</p>
                  </div>
                  <div className="AboutPage__contentMain__2D2vX">
                    <h2>About Payouts</h2>
                    <p>Payouts provides you with multiple accessible spaces for work on a monthly basis. Members benefit from flexibility and hosts benefit from extra income by renting out their space while it is not being used.</p>
                    <p>Payouts was started by <a href="https://www.linkedin.com/in/vipul-srivastav/" target="_blank" rel="noopener noreferrer"><b>Vipul Srivastava</b></a> &amp; <a 
                        href="https://www.linkedin.com/in/orellanae/" target="_blank"><b>Eduardo Orellana</b></a>
                    .</p>
                    <p>Stay up to date with us on<a href="https://twitter.com/respacedteam"
                        target="_blank" rel="noopener noreferrer"> <b>Twitter</b></a>, <a
                        href="https://instagram.com/respacedteam" target="_blank"
                        rel="noopener noreferrer"><b>Instagram </b></a> 
                        and <a
                        href="https://www.facebook.com/respacedteam" target="_blank"
                        rel="noopener noreferrer"><b>Facebook</b></a>.</p>
                  </div>
                </div>
              </div>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
     )
  }

export default About