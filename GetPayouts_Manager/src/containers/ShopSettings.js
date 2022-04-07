import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";

import Footer from '../components/Footer';
import { connect } from 'react-redux';
import {fetchSkusData} from '../actions';
import Loading from '../components/Loading';

import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';
import DashboardNav from '../components/DashboardNav';
import { auth, db, logout } from '../firebase';
import {upsertMerchant} from '../actions';

import $ from 'jquery'

const MONTHLY_MEMBERSHIP = 'Monthly Membership';

const DashboardContainer = (props) => {

  function loadScript() {
    
    $(window).on('popstate',function(e){
        e.preventDefault();
        var target = window.location.href.split("#")[1];
        if(target != "" && target!=undefined && document.getElementById(target)!=null){
        $('html, body').stop().animate({'scrollTop': $("#"+target).offset().top}, 500, 'swing', function () {
            window.location.hash = target;
        });
        }
    });
    
    $(document).ready(function() {
        SF_scripts();
    });
    
    function SF_scripts(){
    
        $(window).resize(function(){
        showCheckout();
        });
    
        $(window).trigger("resize");
    
        // open menu on mobile
  
        function showCheckout(){
        if($(window).width()<1199.98){
            $(".open_checkout").addClass("d-inline-block");
            $("header nav").addClass("d-none");
            $(".checkout_mobile").removeClass("opened");
        }else{
            $(".open_checkout").removeClass("d-inline-block");
            $("header nav").removeClass("d-none");
            $(".checkout_mobile").removeClass("d-none");
        }
        }
  
        $(".open_checkout").click(function(event){
        event.preventDefault();
        $(".checkout_mobile").addClass("opened");
        $("#hamburger").addClass("d-none");
        $("#hamburger").removeClass("d-inline-block");
        });
    
        $(".close_checkout, header, section, footer, .checkout_mobile .inner a").click(function(event){
        $(".checkout_mobile").removeClass("opened");
        $("#hamburger").removeClass("d-none");
        $("#hamburger").addClass("d-inline-block");
        });
        }
      
    
    }; // SF_scripts end
  
    loadScript();

  // componentDidMount(){
  //     if(this.props.skuData.length===0){
  //         this.props.dispatch(fetchSkusData())
  //     }
  // }
  
  // pickMonthlyMembership(){
  //     let membershipDetails;
  
  //     if(!this.props.fetchAllProductsPending){
  //         this.props.skuData.forEach( (product, i) => {
  //             if(product.product_name === MONTHLY_MEMBERSHIP){
  //                 membershipDetails= product;
  //             }
  //           });
  //         return membershipDetails;
  //     }
  // }
  
  // getActiveSkuData(){
  //     const {skuData} = this.props;
  //     const activeSkuData = skuData.filter(cardInfo => cardInfo.product_type==='spaces' && cardInfo.space_status==='Available');
  //     return activeSkuData;
  // }
  
      const [user, loading, error] = useAuthState(auth);
      const [name, setName] = useState("");
      const history = useHistory();
  
      const upsertMerchantId = async () => {
        try {
			const id_token = await user.getIdToken()
			await props.upsertMerchant(id_token);	
        } catch (err) {
			console.log(err);
        }
      };
  
      useEffect(() => {
        if (loading) return;
		if (!user) return history.replace("/login");
		upsertMerchantId();
		setName(user.displayName);
      }, [user, loading]);
  
	  const {fetchAllProductsPending,skuData, merchant_id} = props;

      return(
      <>
      <Navigation/>
        {/* <!-- Ecommerce 4 --> */}
        <section class="py-2 bg-bg-3">
            <div class="container">
                <div class="row flex-md-row flex-column">
                    <div class="col-3 hide-mobile hide-tablet">
                        <DashboardNav/>
                    </div>
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-9">
                        <div class="row">
                        <section class="bg-bg-3 pt-10 pt-md-0">
                            <div class="container">
                                <div class="row justify-content-between flex-md-row-reverse">
                                <div class="col-12">
                                    <h1 class="mb-4">
                                    Shop Settings
                                    </h1>
                                    <p class="mb-8">
                                    {/* Title */}
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
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-6">
                                        <label>Shop Name</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="Store Name"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                        <div class="mb-6 col-6">
                                        <label>Shop URL</label>
                                        <div class="input-group">
                                            <input type="text" name="lastname" placeholder="www.hellopayouts.com/pay/candelamtl"
                                            class="form-control border border-dark-3" required="required" readOnly/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-6">
                                        <label>Colour Theme</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="#FFF000"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                        <div class="mb-6 col-6">
                                        <label>Promo Bar Text</label>
                                        <div class="input-group">
                                            <input type="text" name="lastname" placeholder="20% OFF with Promo Code WELCOME20"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-lg-6 col-sm-12">
                                            <label>Logo</label>
                                            <div class="input-group text-center">
                                                <input type="file" name="firstname" placeholder="Upload an image"
                                                class="form-control border border-dark-3 text-center justify-content-center" required="required"/>
                                            </div>
                                        </div>
                                        <div class="mb-6 col-lg-6 col-sm-12">
                                            <label>Font</label>
                                            <div class="input-group">
                                                <select type="text" name="firstname" placeholder="1"
                                                class="form-control border border-dark-3" required="required">
                                                    <option>Arial</option>
                                                    <option>Helvetica</option>
                                                    <option>Monseratt</option>
                                                    <option>Comic Sans</option>
                                                    <option>Cereal</option>
                                                    <option>Signature</option>
                                                    <option>Typewriter</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-6">
                                        <label>Facebook URL (optional)</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="www.facebook.com/candelamtl"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                        <div class="mb-6 col-6">
                                        <label>Instagram URL (optional)</label>
                                        <div class="input-group">
                                            <input type="text" name="lastname" placeholder="www.instagram.com/candelamtl"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-6">
                                        <label>Twitter URL (optional)</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="www.twitter.com/candelamtl"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                        <div class="mb-6 col-6">
                                        <label>TikTok URL (optional)</label>
                                        <div class="input-group">
                                            <input type="text" name="lastname" placeholder="www.tiktok.com/candelamtl"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-12">
                                        <label>Shop Status</label>
                                        <div class="input-group">
                                            <select type="text" name="firstname" placeholder="1"
                                            class="form-control border border-dark-3" required="required">
                                                <option>Active</option>
                                                <option>Disabled</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    {/* <label class="form-check">
                                        <input class="form-check-input" type="checkbox" name="subscribe" checked="checked"/>
                                        <p class="text-start ms-9 text-dark-1 mb-6">
                                        Subscribe to our newsletter
                                        </p>
                                    </label> */}
                                    <div class="mt-5">
                                        <button class="btn mb-6" id="home-btn">
                                            Update Settings
                                        </button>
                                        <button onClick={logout} class="btn btn-outline-action-1 mb-6 ml-3">
                                            Log Out
                                        </button>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </section>
                        </div>
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
        skuData: state.skuData,
		fetchAllProductsPending: state.fetchAllProductsPending,
		merchant_id: state.merchant_id,
      };
    };

const mapDispatchToProps = {
	upsertMerchant
};

  export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
