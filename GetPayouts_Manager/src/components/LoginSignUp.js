import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, signInWithFacebook, sendPasswordResetEmail } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import {upsertMerchant} from '../actions';
import { connect } from 'react-redux';
import '../styles/css/style.css';

import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
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
        {/* <!-- Form 4 --> */}
        <section class="bg-bg-3 py-10 py-lg-20 text-center">
          <div class="container">
            <h2 class="display-5 mb-6">
              Get started
            </h2>
            <div class="row flex-column align-items-center">
              <div class="col-xl-12 col-lg-5 col-md-6 col-sm-9">
                <p class="fs-2 mb-10">
                  Launch your online shop and start selling right away.
                </p>
              </div>
              <div class="col-xl-4 col-lg-5 col-md-6 col-sm-9">
                <a onClick={ (e) => signInWithGoogleHandler()} href="#" class="btn btn-action-1 w-100 mb-6 position-relative ps-12">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="fill-light-1 position-absolute start-0 top-50 translate-middle-y ms-4">
                    <path
                      d="M21.4555 10.154C21.5785 10.813 21.6455 11.502 21.6455 12.221C21.6455 17.845 17.8815 21.844 12.1965 21.844C10.9037 21.8444 9.62344 21.59 8.42894 21.0955C7.23443 20.6009 6.14908 19.8758 5.2349 18.9616C4.32072 18.0475 3.59563 16.9621 3.10107 15.7676C2.6065 14.5731 2.35215 13.2929 2.35254 12C2.35215 10.7072 2.6065 9.42691 3.10107 8.2324C3.59563 7.0379 4.32072 5.95255 5.2349 5.03837C6.14908 4.12419 7.23443 3.3991 8.42894 2.90453C9.62344 2.40997 10.9037 2.15561 12.1965 2.15601C14.8545 2.15601 17.0755 3.13401 18.7795 4.72201L16.0045 7.49701V7.49001C14.9715 6.50601 13.6605 6.00101 12.1965 6.00101C8.94854 6.00101 6.30854 8.74501 6.30854 11.994C6.30854 15.242 8.94854 17.992 12.1965 17.992C15.1435 17.992 17.1495 16.307 17.5615 13.993H12.1965V10.154H21.4565H21.4555Z">
                    </path>
                  </svg>
                  <span>
                    Sign in with Google
                  </span>
                </a>
              </div>
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
