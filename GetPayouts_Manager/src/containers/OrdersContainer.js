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
import {upsertMerchant, getOrderSummaryMerchant} from '../actions';

import $ from 'jquery'

const MONTHLY_MEMBERSHIP = 'Monthly Membership';

const OrdersContainer = (props) => {

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
  
      const getOrderSummary = async () => {
        try {
			const id_token = await user.getIdToken()
			await props.getOrderSummaryMerchant(id_token);	
        } catch (err) {
			console.log(err);
        }
      };
  
      useEffect(() => {
        if (loading) return;
		if (!user) return history.replace("/login");
		getOrderSummary();
		setName(user.displayName);
      }, [user, loading]);
  
	  const { merchant_order_summary} = props;

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
                                    Orders
                                </h1>
                                <p class="mb-5">
                                View all orders
                                </p>
                                {!merchant_order_summary && <Loading />}
                                {/* ORDER INFO START */}
                                {merchant_order_summary
                                && merchant_order_summary.length !== 0
                                && merchant_order_summary.map(order=>
                                <div class="mb-6 col-lg-6" data-aos="fade-down" data-aos-delay="150">
                                    <div class="border rounded-2 overflow-hidden btn-outline-action-10">
                                        <div class="row">
                                            <div class="col py-8 px-9">
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <div class="font-heading text-dark-1 mb-2">
                                                            <span class="fs-1">$189.99</span>
                                                            {/* <span class="ml-2 fs-5 mb-2 item-active">
                                                                anasofiafernandes@gmail.com
                                                                <span class="ml-2 mb-1">
                                                                <svg aria-hidden="true" class="" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.297 13.213L.293 8.255c-.39-.394-.39-1.033 0-1.426s1.024-.394 1.414 0l4.294 4.224 8.288-8.258c.39-.393 1.024-.393 1.414 0s.39 1.033 0 1.426L6.7 13.208a.994.994 0 0 1-1.402.005z" fill-rule="evenodd"></path></svg>
                                                                </span>
                                                            </span> */}
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto">
                                                        <span class="ml-2 fs-5 mb-2 item-active">
                                                            Succeeded
                                                            <span class="ml-2 mb-1">
                                                            <svg aria-hidden="true" class="" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.297 13.213L.293 8.255c-.39-.394-.39-1.033 0-1.426s1.024-.394 1.414 0l4.294 4.224 8.288-8.258c.39-.393 1.024-.393 1.414 0s.39 1.033 0 1.426L6.7 13.208a.994.994 0 0 1-1.402.005z" fill-rule="evenodd"></path></svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Customer Name</span>
                                                        <div class="font-heading text-dark-1 mb-2">
                                                            Eduardo Orellana
                                                            {/* <span class="ml-2 fs-5 mb-2 item-active">
                                                                anasofiafernandes@gmail.com
                                                                <span class="ml-2 mb-1">
                                                                <svg aria-hidden="true" class="" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.297 13.213L.293 8.255c-.39-.394-.39-1.033 0-1.426s1.024-.394 1.414 0l4.294 4.224 8.288-8.258c.39-.393 1.024-.393 1.414 0s.39 1.033 0 1.426L6.7 13.208a.994.994 0 0 1-1.402.005z" fill-rule="evenodd"></path></svg>
                                                                </span>
                                                            </span> */}
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                        <span class="fs-6">Email</span>
                                                        <div class="ml-2 fs-5 mb-2">
                                                            orellanajeo@gmail.com
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Shipping Details</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            5224
                                                            Saint-Urbain
                                                            Montreal QC H2T 2W9 CA
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                    <span class="fs-6">Date</span>
                                                        <div class="ml-2 fs-5 mb-2">
                                                            Jan. 14, 2021, 12:23 pm
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-10 mb-8 border-bottom border-dark-3"></div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col-6 fs-6 mb-5">Items</div>
                                                    <div class="col-6 fs-6 mb-5 text-right">Quantity</div>
                                                    <div class="col-6">
                                                        <div class="font-heading text-dark-1 mb-5">                         
                                                            Ève 
                                                            <span class="ml-2 fs-5 mb-2 secondary-info">
                                                                Femme / Mauve
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-6 col-xl-auto text-right">
                                                        <div class="ml-2 fs-5 mb-2">
                                                            x1
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="font-heading text-dark-1 mb-5">                         
                                                            Ève 
                                                            <span class="ml-2 fs-5 mb-2 secondary-info">
                                                                Femme / Mauve
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-6 col-xl-auto text-right">
                                                        <div class="ml-2 fs-5 mb-2">
                                                            x1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-10 mb-8 border-bottom border-dark-3"></div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Subtotal</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            $129.99
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Shipping</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            $11.45
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                    <span class="fs-6">Shipping Option</span>
                                                        <div class="ml-2 fs-5 mb-2">
                                                            Canada Post
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Taxes</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            $3.40
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                    <span class="fs-6">Tax Option</span>
                                                        <div class="ml-2 fs-5 mb-2">
                                                            (1.15%)
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Coupons</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            (-$2.50)
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                    <span class="fs-6">Coupon Name</span>
                                                        <div class="ml-2 fs-5 mb-2">
                                                            FREE SHIP
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Total</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            $189.99
                                                        </div>
                                                    </div>
                                                    <div class="col-auto col-lg-12 col-xl-auto text-right">
                                                    <span class="fs-6">Payment Processing Fees</span>
                                                        <div class="ml-2 fs-5 mb-2">
                                                            $1
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row justify-content-between mb-2">
                                                    <div class="col">
                                                        <span class="fs-6">Net</span>
                                                        <div class="font-heading text-dark-1 mb-2">                         
                                                            $188.99
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                                {/* ORDER INFO END */}
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
		fetchAllProductsPending: state.fetchAllProductsPending,
		merchant_order_summary: state.merchant_order_summary,
      };
    };

const mapDispatchToProps = {
	upsertMerchant,
    getOrderSummaryMerchant
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
