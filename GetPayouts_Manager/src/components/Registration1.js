import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, signInWithFacebook, sendPasswordResetEmail } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {upsertMerchant} from '../actions';
import { connect } from 'react-redux';
import '../styles/css/style.css';

import Footer from './Footer';
import HamburgerMenu from '../deprecated/HamburgerMenu';
// import HamburgerMenu from './HamburgerMenu';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const LoginSignUp=(props)=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const [showSignUp, setShowSignUp] = useState(false);
    const [active, setActive] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [resetErrMsg, setResetErrMsg] = useState("");
    const [resetSuccess, setResetSuccess] = useState(false);

    const upsertMerchantId = async () => {
        try {
			const id_token = await user.getIdToken()
			await props.upsertMerchant(id_token);	
        } catch (err) {
			  // console.log(err);
        }
      };

    // window.scrollTo(0, 0)
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) { 
        upsertMerchantId();
        history.replace("/dashboard")
    };
    }, [user, loading]);

  const registerWithEmailAndPasswordHandler = async ()=>{
    const errorMessage = await registerWithEmailAndPassword(email, password);
    if(errorMessage) {
      setErrMsg(errorMessage);
    }
  }

  const signInWithEmailAndPasswordHandler = async ()=>{
    const errorMessage = await signInWithEmailAndPassword(email, password);
    if(errorMessage) {
      setErrMsg(errorMessage);
    }
  }

  const signInWithFacebookHandler = async ()=>{
    const errorMessage = await signInWithFacebook();
    if(errorMessage) {
      setErrMsg(errorMessage);
    }
  }

  const signInWithGoogleHandler = async ()=>{
    const errorMessage = await signInWithGoogle();
    if(errorMessage) {
      setErrMsg(errorMessage);
    }
  }

  const sendPasswordResetEmailHandler = async ()=> {
    const errorMessage = await sendPasswordResetEmail(email);
    if(errorMessage) {
      setErrMsg(errorMessage);
    } else {
      setErrMsg('');
      setResetSuccess(true);
    }
  }
    return (
        <>
        <Navigation/>
        {/* <!-- Form 8 --> */}
        <section class="bg-bg-3 pt-10 pt-md-0">
            <div class="container">
                <div class="row justify-content-between flex-md-row-reverse">
                    <div class="col-1"></div>
                    <div class="col-4 col-sm-12 text-center">
                        <div class="pt-10">
                                <img src="../../assets/person1.png" alt="" class="illustration" style={{maxWidth:"100%"}}/>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-4 py-10 py-lg-20 col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <h1 class="mb-4">
                            Let's get you online
                        </h1>
                        <p class="mb-8">
                            We need some personal information from you to setup your account
                        </p>
                        <form action="form-handler.php" method="post" enctype="multipart/form-data" class="js-ajax-form">
                            {/* <!-- forms alerts --> */}
                            <div class="alert alert-action-8 fixed-top invisible fade js-ajax-form-result"
                                data-result="success" role="alert">
                                <span class="js-ajax-form-alert-text" data-default-text="Thanks for your message!">
                                    Thanks for your message!
                                </span>
                            </div>
                            <div class="alert alert-action-5 fixed-top invisible fade js-ajax-form-result"
                                data-result="error" role="alert">
                                <span class="js-ajax-form-alert-text">
                                    Error!
                                </span>
                            </div>
                            {/* <!-- forms alerts end --> */}
                            <label>Personal Information</label>
                            <div class="row justify-content-center">
                                <div class="mb-6 col-6">
                                    <div class="input-group">
                                        <input type="text" name="firstname" placeholder="First name"
                                            class="form-control border border-dark-3" required="required"/>
                                    </div>
                                </div>
                                <div class="mb-6 col-6">
                                    <div class="input-group">
                                        <input type="text" name="lastname" placeholder="Last name"
                                            class="form-control border border-dark-3" required="required"/>
                                    </div>
                                </div>
                            </div>
                            {/* EMAIL ADDRESS FIELD (IN CASE WE NEED IT) */}
                            {/* <div class="input-group mb-6">
                                <div class="input-group-text border-end-0 border-dark-3 ps-4 pe-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" class="fill-dark-3">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M17.5002 3.75H2.5002C2.16868 3.75 1.85074 3.8817 1.61632 4.11612C1.3819 4.35054 1.2502 4.66848 1.2502 5V5.27104L10.0002 10.5213L18.7502 5.27098V5C18.7502 4.66848 18.6185 4.35054 18.3841 4.11612C18.1497 3.8817 17.8317 3.75 17.5002 3.75ZM0.000203451 5.64224C-6.77314e-05 5.63161 -6.79025e-05 5.62098 0.000203451 5.61034V5C0.000203451 4.33696 0.263596 3.70107 0.732437 3.23223C1.20128 2.76339 1.83716 2.5 2.5002 2.5H17.5002C18.1632 2.5 18.7991 2.76339 19.268 3.23223C19.7368 3.70107 20.0002 4.33696 20.0002 5V5.61604V5.63397V15C20.0002 15.663 19.7368 16.2989 19.268 16.7678C18.7991 17.2366 18.1632 17.5 17.5002 17.5H2.5002C1.83716 17.5 1.20128 17.2366 0.732437 16.7678C0.263596 16.2989 0.000203451 15.663 0.000203451 15V5.64224ZM18.7502 13.9117V6.72895L12.6801 10.3708L18.7502 13.9117ZM18.7051 15.3329L11.5602 11.165L11.4569 11.1048L10.0002 11.9788L8.54329 11.1049L8.44016 11.165L1.29533 15.3328C1.35239 15.5394 1.46213 15.7297 1.61632 15.8839C1.85074 16.1183 2.16868 16.25 2.5002 16.25H17.5002C17.8317 16.25 18.1497 16.1183 18.3841 15.8839C18.5383 15.7297 18.648 15.5394 18.7051 15.3329ZM1.2502 13.9117V6.73013L7.31989 10.371L1.2502 13.9117Z">
                                        </path>
                                    </svg>
                                </div>
                                <input type="email" name="email" placeholder="Email address"
                                    class="form-control border-start-0 border-dark-3 ps-1" required="required"/>
                            </div> */}
                            {/* <label>Date of Birth</label> */}
                            {/* <label>Phone Number</label> */}
                            <div class="input-group mb-6">
                                <div class="input-group-text border-end-0 border-dark-3 ps-4 pe-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 1L23 5M23 5L19 9M23 5H15M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36162C2.30513 3.09849 2.44757 2.85669 2.63477 2.65162C2.82196 2.44655 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#BABABA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <input type="Phone" name="Phone" placeholder="Phone number" data-input-mask
                                    class="form-control border-start-0 border-dark-3 ps-1" required="required"/>
                            </div>
                            <div class="input-group mb-6">
                                <div class="input-group-text border-end-0 border-dark-3 ps-4 pe-2">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="#BABABA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <input type="date-picker" name="DOB" placeholder="Date of Birth"
                                    class="form-control border-start-0 border-dark-3 ps-1" required="required"/>
                            </div>
                            <label>Social Insurance Number (SIN)</label>
                            <div class="input-group mb-6">
                                <div class="input-group-text border-end-0 border-dark-3 ps-4 pe-2">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M17 11L19 13L23 9M12.5 7C12.5 9.20914 10.7091 11 8.5 11C6.29086 11 4.5 9.20914 4.5 7C4.5 4.79086 6.29086 3 8.5 3C10.7091 3 12.5 4.79086 12.5 7Z" stroke="#BABABA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                                <input type="text" name="ID" placeholder="000-000-000"
                                    class="form-control border-start-0 border-dark-3 ps-1" required="required"/>
                            </div>
                            {/* <label class="form-check">
                                <input class="form-check-input" type="checkbox" name="subscribe" checked="checked"/>
                                <p class="text-start ms-9 text-dark-1 mb-6">
                                    Subscribe to our newsletter
                                </p>
                            </label> */}
                            <a href="/registration2" class="btn btn-action-1 w-100 mb-6 mt-5">
                                Next
                            </a>
                            {/* <p class="d-inline-block text-dark-3 mb-0">
                                Already have an account?
                            </p>
                            <a href="#" class="ms-1">
                                Log In
                            </a> */}
                        </form>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
     )
  }

const mapStateToProps = state => {
    return {
    };
  };

const mapDispatchToProps = {
  upsertMerchant
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSignUp);
