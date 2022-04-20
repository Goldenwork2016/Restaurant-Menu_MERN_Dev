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
                                <img src="../../assets/person3.png" alt="" class="illustration" style={{maxWidth:"100%"}}/>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-4 py-10 py-lg-20 col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <h1 class="mb-4">
                            Verify your identity
                        </h1>
                        <p class="mb-8">
                            We need a copy of your ID to verify your ID in order to process payments and deposit funds
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
                            <label>Upload your ID</label>
                            <div class="input-group mb-6">
                                <div class="input-group-text border-end-0 border-dark-3 ps-4 pe-2">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="#BABABA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                </div>
                                <input type="file" name="ID" placeholder="Upload a document"
                                    class="form-control border border-dark-3 text-center justify-content-center" required="required"/>
                            </div>
                            {/* <label class="form-check">
                                <input class="form-check-input" type="checkbox" name="subscribe" checked="checked"/>
                                <p class="text-start ms-9 text-dark-1 mb-6">
                                    Subscribe to our newsletter
                                </p>
                            </label> */}
                            <a href="/registration4" class="btn btn-action-1 w-100 mb-6 mt-5">
                                Upload documents
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
