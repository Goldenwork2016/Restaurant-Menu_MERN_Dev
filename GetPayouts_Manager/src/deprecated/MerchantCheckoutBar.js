import React from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import uuid from 'uuid/v1';
import BuyButton from './BuyButton';
// import BuyButtonHome from './BuyButtonHome'
import BuyButtonFull from './BuyButtonFull'
// import {Link} from 'react-router-dom';
// import HamburgerMenu from './HamburgerMenu';
// import Checkout from './Checkout';
// import BookATour from './BookATour';
// import { useState } from "react";
import MerchantCheckoutFieldsForm from '../MerchantCheckoutFieldsForm';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';
import MemberMsg from './MemberMsg';
import $ from 'jquery';

import {
    Elements
} from 'react-stripe-elements';

import CheckoutLoading from './CheckoutLoading';  

const CHECKOUT_API = 'https://p7pruk5v4d.execute-api.us-west-2.amazonaws.com/dev/checkout'

// if (window.location.href.match('/pay/') != null) {
//   window.onload = function(){
//   document.getElementById('autobtn').click();

//   var scriptTag = document.createElement("script");
//   scriptTag.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
//   document.getElementsByTagName("head")[0].appendChild(scriptTag);
//   }
// }

setTimeout(
    function() {
      if (window.location.href.match('/merchant/') != null) {
        $(function(){ //on document ready
          // $(document).scroll(function (e) { //bind scroll event
              //if less than intBottomMargin px from bottom
                  $("#autobtn").click(); //trigger click
          // });
        });
      }
    }, 5000);

export default class MerchantCheckoutBar extends React.Component {
    
    state = {
        open: false,
        payment:null,
        orderid:'',
        loading:null,
        member: null
    }
    
     recordBuyTicketsEvent=()=>{
      ReactGA.event({
          category: 'BUY_TICKETS_PRODUCT_PAGE',
          action: 'BUY_TICKETS for '+this.props.productName,
          label: 'BUY_TICKETS_PRODUCT_PAGE'
          });
    }
    
    recordConversionAndCheckoutEvent=(email)=>{
      const person = email.split('@')[0];
      ReactGA.event({
        category: 'CONVERSION',
        action:    'Payment Completed',
        label:      'CONVERSION'
        });
    
      ReactGA.event({
        category: 'CHECKOUT_COMPLETED',
        action:    `Checkout Completed by ${person} for ${this.props.productName}`,
        label:      'CHECKOUT_COMPLETED'
        });
    }
    
    recordCheckoutFailure=(email)=>{
      const person = email.split('@')[0];
    
      ReactGA.event({
        category: 'CHECKOUT_FAILED',
        action:    `Checkout Failed for ${person} for ${this.props.productName}`,
        label:      'CHECKOUT_FAILED'
        });
    }
    
    recordAbandonedCheckout=()=>{
      ReactGA.event({
        category: 'CHECKOUT_ABANDONED',
        action:    `Checkout Abandoned for ${this.props.productName}`,
        label:      'CHECKOUT_ABANDONED'
        });
    }
    
      onOpenModal = () => {
        this.setState({ open: true });
        this.recordBuyTicketsEvent();
      };
      onCloseModal = () => {
        this.setState({ open: false });
          if(!this.state.orderid){
            this.recordAbandonedCheckout()
          }
          if(this.state.payment || this.state.payment===false) {
            this.refreshPage()
          }
      };
    
      refreshPage=()=>{
        // window.location.assign(`/product/${this.props.prodid}`);
        this.setState({
          open: false,
          payment:null,
          orderid:'',
          loading:null,
          member:null
        })
      }
    
      doCheckout = (token,phone,email,numTickets,date,prodid) => {
        const data = {
          stripeToken: token,
          skuid:this.props.prodid,
          currency:this.props.currency || "CAD",
          quantity:numTickets,
          stripeEmail: email,
          type:'sku', // change this 
          prodid:this.props.prodid || prodid,
          tokenid:uuid(),
          phone,
          // promoCode:this.props.coupon,
          // referralCode,
          productName:this.props.productName || 'BOUGHT_FROM_HOME_PAGE',
          date
        }
    
        this.setState({
          loading: true
        })
    
        axios.post(CHECKOUT_API,data)
                 .then(res=>{
                                  
                   if(res.data.orderid){
                    this.setState({
                      orderid:res.data.orderid,
                      payment:true,
                      loading: false
                    })
                    this.recordConversionAndCheckoutEvent(email)
                   }
    
                  if(res.data.errorMessage && res.data.errorMessage.toLowerCase().includes('member')){
                     this.setState({
                       member:true,
                       loading:false,
                       payment:false
                     })
                   }
    
                   if(res.data.errorMessage && res.data.errorMessage.toLowerCase().includes('unsuccessful')){
                    this.setState({
                      payment:false,
                      loading:false,
                      member:false
                    })
                  }
                 }).catch(err=>{
                    this.setState({
                      payment:false,
                      loading:false
                    })
                    this.recordCheckoutFailure(email)
                  })
      };
    
      // setOrderId=(orderid)=>{
      //   this.setState({
      //     orderid,
      //     payment:true
      //   })
      // }    
    
      showFullOrBuyButton=()=>{
      // const {spaceStatus } = this.props;
      // if(spaceStatus==='Full'){
      //   return <BuyButtonFull
      //     onOpenModal={this.onOpenModal}
      //   />}
      // else {
        return <BuyButton
          onOpenModal={this.onOpenModal}
          productName={this.props.productName}
          productType={this.props.type}
          productType={this.props.productType}
          price={this.props.price}
          themeColor={this.props.themeColor}
          />
        // }
      }

    render() {
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
                resizeVideo();
                showMenuBtn();
                showCheckout();
              });
            
              $(window).trigger("resize");
            
              // open menu on mobile
            
              function showMenuBtn(){
                if($(window).width()<1199.98){
                  $(".open_menu").addClass("d-block");
                  $("header nav").addClass("d-none");
                  $(".navigation_mobile").removeClass("opened");
                }else{
                  $(".open_menu").removeClass("d-block");
                  $("header nav").removeClass("d-none");
                  $(".navigation_mobile").removeClass("opened");
                }
              }

              function showCheckout(){
                if($(window).width()<1199.98){
                  $(".open_checkout").addClass("d-block");
                  $("header nav").addClass("d-none");
                  $(".checkout_mobile").removeClass("opened");
                }else{
                  $(".open_checkout").removeClass("d-block");
                  $("header nav").removeClass("d-none");
                  $(".checkout_mobile").removeClass("d-none");
                }
              }

              $(".open_checkout").click(function(event){
                event.preventDefault();
                $(".checkout_mobile").addClass("opened");
                $("#hamburger").addClass("d-none");
                $("#hamburger").removeClass("d-block");
              });
            
              $(".close_checkout, header, section, footer, .checkout_mobile .inner a").click(function(event){
                $(".checkout_mobile").removeClass("opened");
                $("#hamburger").removeClass("d-none");
                $("#hamburger").addClass("d-block");
              });
            
              $(".open_menu").click(function(event){
                event.preventDefault();
                $(".navigation_mobile").addClass("opened");
              });
            
              $(".close_menu, header, section, footer, .navigation_mobile .inner a").click(function(event){
                $(".navigation_mobile").removeClass("opened");
              });
              
              // Set | remove z-index for sections, that has dropdown
              
              function SF_dropdown_parent(dropdown){
                // Find dropdown's parent nav|header|section|footer
                var section = dropdown;
                var noBreak = true;
                while(noBreak){
                  if(
                    section[0].tagName=="NAV" || 
                    section[0].tagName=="HEADER" || 
                    section[0].tagName=="SECTION" || 
                    section[0].tagName=="FOOTER" || 
                    section[0].tagName=="BODY"
                  ){
                    noBreak = false;
                    break;
                  }else{
                    section = section.parent();				
                  }
                }
                return section;
              }
              function SF_highest_zIndex(){
                // Find nav|header|section|footer with highest z-index on page
                var zIndex = 1;
                var currentzIndex;
                var section;
                $("nav, header, section, footer").each(function(){
                  currentzIndex = parseInt($(this).css("z-index"));
                  if(zIndex < currentzIndex){
                    zIndex = currentzIndex;
                    section = $(this);
                  }
                });
                return [zIndex, section];
              }
              
              // Set highest z-index for section, that has opened dropdown
              $(".dropdown").on("show.bs.dropdown", function () {
                var section = SF_dropdown_parent($(this));
                section.css("z-index",SF_highest_zIndex()[0]+1);	
              });
              
              // Remove z-index for section, where dropdown was closed
              $(".dropdown").on("hidden.bs.dropdown", function () {
                var section = SF_dropdown_parent($(this));
                section.css("z-index","auto");	
              })
              
              // Navigation dropdown popup
            
              if($(".js-nav-dropdowns").length>0){
                $("body").click(function(event){
                  if($(event.target).closest(".navigation_popup").length==0 && $(event.target).closest(".js-open-nav-dropdown").length==0){
                    $(".navigation_popup.opened").removeClass("opened");
                    $(".js-open-nav-dropdown i.fa-flip-vertical").removeClass("fa-flip-vertical");
                  }
                });
                
                $(".js-nav-dropdowns .js-open-nav-dropdown").click(function(event){
                  event.preventDefault();
                  var id = $(".js-nav-dropdowns .js-open-nav-dropdown").index($(this));
                  if($(".navigation_popup").eq(id).hasClass("opened")){
                    $(this).find("i").removeClass("fa-flip-vertical");
                    $(".navigation_popup").eq(id).removeClass("opened");
                  }else{
                    $(".navigation_popup.opened").removeClass("opened");
                    $(".js-open-nav-dropdown i.fa-flip-vertical").removeClass("fa-flip-vertical");
                    $(".navigation_popup").eq(id).addClass("opened");			
                    $(this).find("i").addClass("fa-flip-vertical");
                    var section = SF_dropdown_parent($(this));
                    section.css("z-index",SF_highest_zIndex()[0]+1);				
                  }
                });
              }
            
              // function focusForm(formID){
              //   var form = $("#"+formID);
              //   if(form.hasClass("focused")){
              //     form.removeClass("focused");
              //   }else{
              //     form.addClass("focused");
              //   }
              // }
            
              // Resize video, saving aspect ratio
            
              function resizeVideo(){
                var width, height, ratio;
                $(".video").each(function(){
                  ratio = $(this).data("ratio");
                  ratio = ratio.split("/");
                  ratio = ratio[0]/ratio[1];
                  width = $(this).width();
                  height = width/ratio;
                  $(this).height(height);
                });
              }
            
              resizeVideo();
            
              // Play video
            
              $(".video .play").click(function(){
                var video = $(this).parent().parent().find("video");
                $(this).closest(".poster").fadeOut(300,function(){
                  video.fadeIn(300,function(){
                    video[0].play();
                    video[0].onended = function() {
                      $(this).parent().find(".poster").delay(100).fadeIn(300);
                    };
                  });
                });
              });
              
              // Opening tabs
            
              function openTab(tab){
                if(tab.hasClass("opened")){
                  $(".tab_text").animate({height:0},300);
                  tab.removeClass("opened");
                }else{
                  var nextTabHeight = tab.next().find("div").outerHeight(true);
                  $(".tab_text").not(tab.next()).animate({height:0},300);
                  tab.next().animate({height:nextTabHeight},300);
                  $(".tab_opener").removeClass("opened");
                  tab.addClass("opened");
                }
              }
            
              $(".tab_opener").click(function(){
                openTab($(this));
              });
            
              if($(".opening_tabs").length > 0){
                $(".tab_opener").each(function(){
                  if($(this).hasClass("opened")){
                    $(this).removeClass("opened").trigger("click");
                  }
                });
              }
            
              // Copy text from block
            
              if($("#copy_from_me").length > 0){
                function copyStringToClipboard (str) {
                   var el = document.createElement('textarea');
                   el.value = str;
                   el.setAttribute('readonly', '');
                   el.style = {position: 'absolute', left: '-9999px'};
                   document.body.appendChild(el);
                   el.select();
                   document.execCommand('copy');
                   document.body.removeChild(el);
                }
                $('.js-copy-btn').click(function(){
                  copyStringToClipboard ($("#copy_from_me").text());
                });
              }
            
              // Add mask to inputs in Forms
            
              // if($(".js-card-mask").length > 0){
              //   $(".js-card-mask").mask("9999 9999 9999 9999");
              // }
              // if($(".js-expiration-mask").length > 0){
              //   $(".js-expiration-mask").mask("99 / 9999");
              // }
              // if($(".js-expiration-short-mask").length > 0){
              //   $(".js-expiration-short-mask").mask("99 / 99");
              // }
              // if($(".js-cvv-mask").length > 0){
              //   $(".js-cvv-mask").mask("999");
              }
              
              // Disable / enable blocks in Form 13
            
              $(".form_13 input[type=radio]").change(function(){
                var choosenBlock = $(".form_13 input[type=radio]:checked").closest(".js-form-block");
                $(".js-form-block").removeClass("active");
                choosenBlock.addClass("active");
              });
              
              // Ecommerce: Quantity selector
              
              $(".quantity_selector .control").click(function(event){
                event.preventDefault();
                var _this = $(this);
                var input = _this.parent().find("input");
                var input_val = parseInt(input.val());
                if(_this.hasClass("greater")){
                  if(input_val<parseInt(input.attr("max"))){
                    input.val(input_val+1);
                    input.trigger("change");
                  }
                }
                if(_this.hasClass("less")){
                  if(input_val>parseInt(input.attr("min"))){
                    input.val(input_val-1);
                    input.trigger("change");
                  }
                }
              });
            
            }; // SF_scripts end


    const { open,orderid,payment,loading,member} = this.state;
    const {skuData, spaceStatus, productType, themeColor} = this.props;
    loadScript();
    function copyMe() {
        $(document).ready(function(){
            var $temp = $("<input>");
            var $url = $(window.location).attr('href');
            $('#btn').click(function() {
            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            $temp.remove();
            $("#URL").text("Link copied!");
            });
            });
    }
    return (
        <>
		<nav class="pt-20 pb-25 pb-sm-20 bg-grey lh-40 navigation_2 sticky-desktop-bottom">
			<div class="container px-xl-0">
				<div class="row align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-6 d-flex flex-wrap align-items-center justify-content-right flex-direction-row-reverse zi-1">
					</div>
					<div class="col-xl-6 col-lg-6 d-flex flex-wrap align-items-center justify-content-right flex-direction-row-reverse zi-1000">
                        {/* <span class="f-26 order-2 color-white text-adaptive">${props.price/100}/month</span> */}
						{/* <button class="color-white btn bg-action-1 mx-15 md color-white radius8 px-20 f-20 text-adaptive product-btn" style={{backgroundColor:props.themeColor}}> */}
                        
						{/* </button> */}
                        <button id="autobtn" class="open_checkout color-white checkout-modal color-white btn bg-action-1 mx-15 md color-white radius8 px-20 f-20 text-adaptive product-btn" style={{backgroundColor:this.props.themeColor}}>Buy now</button>
                        <div class="checkout_mobile bg-modal type1">
                            <div class="row inner-checkout">
                            <div class="col-xl-4 hide-mobile"></div>
                            <div class="col-xl-4 px-40 inner bg-light radius8">
                            <a class="close_checkout color-white"><i class="fas fa-times color-black"></i></a>
                            { <Elements>
                            <MerchantCheckoutFieldsForm 
                              handleCheckout={this.props.handleCheckout} 
                              handleAppleGooglePay={this.props.handleAppleGooglePay}
                              product_info={this.props.product_info}
                              themeColor={this.props.product_info[0].theme_color}
                              merchant_info={this.props.merchant_info}
                              resetState={this.props.resetState}
                            />                            
                            </Elements>}
                            {  loading && <CheckoutLoading/>}
                            {  payment===true && orderid && <PaymentSuccess
                            orderid={orderid}
                            />}
                            { (  member===true && payment===false) && 
                            <MemberMsg
                            memberExists={member}
                            />}
                            {(  member===false && payment===false) && <PaymentFailure
                            />}
                            {/* {  payment===null && !loading && 
                            <div className='Disclaimer__checkout color-black' style={{textAlign: 'center'}}>
                            Your purchase is protected. <br></br><b>Cancel anytime</b>. No commitment.
                            <Link 
                            onClick={() => recordCancellationClickAndPageView(props)}
                            className='Link__checkout' to='/cancellation-policy'>
                                cancellation policy
                            </Link>
                            </div>
                            } */}
                            {/* ONE TIME PRODUCT */}
                            { payment===null && !loading && 
                            <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
                            {/* <Link 
                            onClick={() => recordCancellationClickAndPageView(props)}
                            className='Link__checkout' to='/cancellation-policy'>
                                cancellation policy
                            </Link> */}
                            </div>
                            } 
                            {/* EDUARDO DONT SHOW 7 DAY TRIAL */}
                            {/* { payment===null && !loading && 
                            <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
                            You won't be charged until your 7-day trial expires. <br></br><b>Cancel anytime</b>. No commitment.
                            <Link 
                            onClick={() => recordCancellationClickAndPageView(props)}
                            className='Link__checkout' to='/cancellation-policy'>
                                cancellation policy
                            </Link>
                            </div>
                            } */}
                            </div>
                            <div class="col-xl-4 hide-mobile"></div>
                            </div>
                            </div>
                        <button id="btn" 
                            value="Copy link" 
                            onClick={copyMe()} 
                            class="color-white btn action-custom md color-white radius8 px-20 f-20 text-adaptive js-copy-btn" 
                            style={{color:this.props.themeColor}}
                        >
                        <i class="fas fa-share pr-10" style={{color:this.props.themeColor}}></i>
                        <span id="URL" style={{color:this.props.themeColor}}>Share</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
        </>
    )
}
}