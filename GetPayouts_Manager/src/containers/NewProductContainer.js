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
                                        Add product
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
                                        <label>Title</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="T-Shirt"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                        <div class="mb-6 col-6">
                                        <label>Description</label>
                                        <div class="input-group">
                                            <input type="text" name="lastname" placeholder="Introducing the world's softest t-shirt, made locally from 100% authentic pre-shrunk cotton"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-12">
                                        <label>Media</label>
                                        <div class="input-group text-center">
                                            <input type="file" name="firstname" placeholder="Upload an image"
                                            class="form-control border border-dark-3 text-center justify-content-center" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-6">
                                        <label>Pricing</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="$99"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                            <div class="ml-4 pt-5 row">
                                                <input class="form-check-input" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                <label for="vehicle1">Charge taxes on this product</label>
                                            </div>
                                        </div>
                                        <div class="mb-6 col-6">
                                        <label>Compare at</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="$199"
                                            class="form-control border border-dark-3 text-decoration-line-through" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-12">
                                        <label>Quantity (optional)</label>
                                        <div class="input-group">
                                            <input type="text" name="firstname" placeholder="1"
                                            class="form-control border border-dark-3" required="required"/>
                                        </div>
                                            <div class="ml-4 pt-5 row">
                                                <input class="form-check-input" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                <label for="vehicle1">Unlimited</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-12">
                                        <label>Variants</label>
                                        <div class="ml-4 row">
                                            <input class="form-check-input" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                            <label for="vehicle1">This product has variants, like size or colour</label>
                                        </div>
                                        <div class="pt-5 justify-content-center">
                                            <div class="mb-6 col-12">
                                            {/* (product/VARIANT-NAME/variant-selection) */}
                                            <label>Variant Name</label>
                                            <div class="input-group">
                                                <input type="text" name="firstname" placeholder="Colour"
                                                class="form-control border border-dark-3" required="required"/>
                                            
                                            </div>
                                            <div class="row">
                                            <div class="col-1"></div>
                                            <div class="mb-6 col-6 mt-5">
                                            {/* (product/variant-name/VARIANT-SELECTION) */}
                                            <label>Variant Selection</label>
                                            <div class="input-group mb-6">
                                                <input type="text" name="firstname" placeholder="Red"
                                                class="form-control border border-dark-3" required="required"/>
                                            </div>
                                            {/* (STRIPE-PRODUCT-PLAN-PRICE) */}
                                            <label>Variant Price<span class="fs-6 ml-2">(will override product price)</span></label>
                                            <div class="input-group">
                                                <input type="text" name="firstname" placeholder="$20"
                                                class="form-control border border-dark-3" required="required"/>
                                            </div>
                                            <button class="fs-5 btn btn-outline-action-10 mt-8 mb-4">+ Add another selection</button>
                                            <button class="fs-5 btn mt-8 mb-4 btn-outline-action-4 ml-3">Delete selection</button>
                                            </div>
                                            <div class="col-3"></div>
                                            </div>
                                            <button class="btn btn-outline-action-10 mb-6">+ Add another variant</button>
                                            <button class="btn btn-outline-action-4 mb-6 ml-3">Delete variant</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <div class="mb-6 col-12">
                                        <label>Product Status</label>
                                        <div class="input-group">
                                            <select type="text" name="firstname" placeholder="1"
                                            class="form-control border border-dark-3" required="required">
                                                <option>Available</option>
                                                <option>Out of Stock</option>
                                            </select>
                                        </div>
                                            <div class="ml-4 pt-5 row">
                                                <input class="form-check-input" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                                <label for="vehicle1">Hide when out of stock</label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <label class="form-check">
                                        <input class="form-check-input" type="checkbox" name="subscribe" checked="checked"/>
                                        <p class="text-start ms-9 text-dark-1 mb-6">
                                        Subscribe to our newsletter
                                        </p>
                                    </label> */}
                                    <button class="btn mb-6" id="home-btn">
                                        Publish this product
                                    </button>
                                    <button class="btn btn-outline-action-4 mb-6 ml-3">
                                        Delete
                                    </button>
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
