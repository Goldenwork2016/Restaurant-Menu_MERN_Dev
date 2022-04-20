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
  
	  const { merchant_id, merchant_coupons, merchant_shipping } = props;
      const shipping_data_arr = merchant_shipping.data;
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
                                <div class="row">
                                <h1 class="mb-4">
                                    Shipping Rates
                                </h1>
                                <p class="mb-5">
                                View all shipping rates and create new ones
                                </p>
                                {/* <div class="mb-6 col-lg-6" data-aos="none" data-aos-delay="150">
                                    <div class="border rounded-2 overflow-hidden btn-outline-action-10">
                                        <div class="row" style={{minHeight:"80px"}}>
                                            <button class="btn-action-1">
                                            <a href="/new" class="link-light-1">+ New Coupon</a>
                                            </button>
                                        </div>
                                    </div>
                                </div> */}
                                <a class="col-12" href="/new-shipping-rate">
                                    <div class="mb-6" data-aos="none" data-aos-delay="150">
                                        <div class="border rounded-2 overflow-hidden btn-outline-action-10">
                                            <div class="row" style={{minHeight:"100px", display:"inline"}}>
                                                <div class="text-center">
                                                    + Add New
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                {/* SHIPPING START */}
                                {shipping_data_arr
                                && shipping_data_arr.length!==0
                                && shipping_data_arr.map(shipping=>
                                <Link class="contents" 
                                // to="/new-shipping-rate"
                                >
                                    <div class="mb-6 col-lg-6" data-aos="none" data-aos-delay="150">
                                        <div class="border rounded-2 overflow-hidden btn-outline-action-10">
                                            <div class="row">
                                                <div class="col py-8 px-9">
                                                    <div class="row justify-content-between">
                                                        {/* <div class="col">
                                                            <div class="font-heading text-dark-1 mb-2">
                                                                {'3 - 5 Business Days ( is this description ? may be we should add metadata description'}
                                                            </div>
                                                        </div> */}
                                                        <div class="col-auto col-lg-12 col-xl-auto">
                                                            <p
                                                                class="text-end text-lg-start text-xl-end font-heading text-action-1 mb-2">
                                                                ${(shipping.fixed_amount.amount/100)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <p class="fs-5 mb-2 item-active">
                                                        Active
                                                    </p>
                                                    <p class="mb-0">
                                                        {shipping.display_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                )}
                                {!shipping_data_arr && <Loading />}
                                {/* SHIPPING END */}
                                {/* <a class="contents" href="/new-shipping-rate">
                                <div class="mb-6 col-lg-6" data-aos="none" data-aos-delay="150">
                                    <div class="border rounded-2 overflow-hidden btn-outline-action-10">
                                        <div class="row">
                                            <div class="col py-8 px-9">
                                                <div class="row justify-content-between">
                                                    <div class="col">
                                                        <div class="font-heading text-dark-1 mb-2">
                                                            3 - 5 Business Days
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto">
                                                        <p
                                                            class="text-end text-lg-start text-xl-end font-heading text-action-1 mb-2">
                                                            $9
                                                        </p>
                                                    </div>
                                                </div>
                                                <p class="fs-5 mb-2 item-active">
                                                    Active
                                                </p>
                                                <p class="mb-0">
                                                    Ground Shipping
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a>
                                <a class="contents" href="/new-shipping-rate">
                                <div class="mb-6 col-lg-6" data-aos="none" data-aos-delay="150">
                                    <div class="border rounded-2 overflow-hidden btn-outline-action-10">
                                        <div class="row">
                                            <div class="col py-8 px-9">
                                                <div class="row justify-content-between">
                                                    <div class="col">
                                                        <div class="font-heading text-dark-1 mb-2">
                                                            3 - 5 Business Days
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto">
                                                        <p
                                                            class="text-end text-lg-start text-xl-end font-heading text-action-1 mb-2">
                                                            $9
                                                        </p>
                                                    </div>
                                                </div>
                                                <p class="fs-5 mb-2 item-active">
                                                    Active
                                                </p>
                                                <p class="mb-0">
                                                    Ground Shipping
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </a> */}
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
        // skuData: state.skuData,
		fetchAllProductsPending: state.fetchAllProductsPending,
		merchant_id: state.merchant_id,
        merchant_coupons: state.merchant_coupons,
        merchant_shipping: state.merchant_shipping,
      };
    };

const mapDispatchToProps = {
	upsertMerchant
};

  export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
