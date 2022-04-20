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
              <div class="row justify-content-between flex-row-reverse">
                  <div class="col-1"></div>
                  <div class="col-4 col-sm-12 text-center">
                        <div class="pt-10">
                                <img src="../../assets/person2.png" alt="" class="illustration"/>
                        </div>
                    </div>
                  <div class="col-1"></div>
                  <div class="col-4 py-10 py-lg-20 col-xl-4 col-lg-5 col-md-6 col-sm-12">
                      <h1 class="mb-4">
                          Address
                      </h1>
                      <p class="mb-8">
                          We need this information to process payments on your storefront
                      </p>
                      <section class="bg-bg-3 pt-10 pt-md-0">
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
                          {/* <p>Personal Information</p> */}
                          {/* <div class="row justify-content-center">
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
                          </div> */}
                          {/* <div class="row justify-content-center">
                            <div class="mb-6 col-6">
                              <div class="input-group">
                                <input type="text" name="firstname" placeholder="Date of Birth"
                                  class="form-control border border-dark-3" required="required"/>
                              </div>
                            </div>
                            <div class="mb-6 col-6">
                              <div class="input-group">
                                <input type="text" name="lastname" placeholder="Phone Number"
                                  class="form-control border border-dark-3" required="required"/>
                              </div>
                            </div>
                          </div> */}
                          <p>Location information</p>
                          <div class="row justify-content-center">
                            <div class="mb-6 col-6">
                              <div class="input-group">
                                <input type="text" name="firstname" placeholder="Address"
                                  class="form-control border border-dark-3" required="required"/>
                              </div>
                            </div>
                            <div class="mb-6 col-6">
                              <div class="input-group">
                                <input type="text" name="lastname" placeholder="Country"
                                  class="form-control border border-dark-3" required="required"/>
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-center">
                            <div class="mb-6 col-6">
                              <div class="input-group">
                                <input type="text" name="firstname" placeholder="Province"
                                  class="form-control border border-dark-3" required="required"/>
                              </div>
                            </div>
                            <div class="mb-6 col-6">
                              <div class="input-group">
                                <input type="text" name="lastname" placeholder="City"
                                  class="form-control border border-dark-3" required="required"/>
                              </div>
                            </div>
                          </div>

                          <div class="mb-6">
                            <div class="input-group">
                              <input type="text" name="firstname" placeholder="Postal Code"
                                class="form-control border border-dark-3" required="required"/>
                            </div>
                          </div>
                          {/* <label class="form-check">
                            <input class="form-check-input" type="checkbox" name="subscribe" checked="checked"/>
                            <p class="text-start ms-9 text-dark-1 mb-6">
                              Subscribe to our newsletter
                            </p>
                          </label> */}
                          <a href="/registration3" class="btn btn-action-1 mt-4 mb-6 w-100">
                            Submit address
                          </a>
                          {/* <a href="mailto:team@hellopayouts.com" class="btn btn-outline-action-1 mt-4 mb-6 ml-3">
                            Contact Support
                          </a> */}
                          {/* <p class="d-inline-block text-dark-3 mb-0">
                            Already have an account?
                          </p>
                          <a href="/login" class="ms-1">
                            Log In
                          </a> */}
                        </form>
                  </section>
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
