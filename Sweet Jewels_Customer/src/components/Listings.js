import React from 'react';
import '../styles/css/style.css';

import Footer from '../components/Footer';
import { connect } from 'react-redux';
import {fetchSkusData} from '../actions';
import Loading from '../components/Loading';

import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';

import $ from 'jquery'

const MONTHLY_MEMBERSHIP = 'Monthly Membership';

class Listings extends React.Component  {

componentDidMount(){
    if(this.props.skuData.length===0){
        this.props.dispatch(fetchSkusData())
    }
}

pickMonthlyMembership(){
    let membershipDetails;

    if(!this.props.fetchAllProductsPending){
        this.props.skuData.forEach( (product, i) => {
            if(product.product_name === MONTHLY_MEMBERSHIP){
                membershipDetails= product;
            }
          });
        return membershipDetails;
    }
}

getActiveSkuData(){
    const {skuData} = this.props;
    const activeSkuData = skuData.filter(cardInfo => cardInfo.product_type==='subscription' && cardInfo.space_status==='Available');
    return activeSkuData;
}

render(){
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
            $(".open_menu").addClass("d-inline-block");
            $("header nav").addClass("d-none");
            $(".navigation_mobile").removeClass("opened");
        }else{
            $(".open_menu").removeClass("d-inline-block");
            $("header nav").removeClass("d-none");
            $(".navigation_mobile").removeClass("opened");
        }
        }

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
    
        function focusForm(formID){
        var form = $("#"+formID);
        if(form.hasClass("focused")){
            form.removeClass("focused");
        }else{
            form.addClass("focused");
        }
        }
    
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

    const {fetchAllProductsPending,skuData} = this.props;
    loadScript();
    // if(fetchAllProductsPending){
    //     return <Loading/>   
    // }
    // else {
    this.getActiveSkuData()
    return(
    <>
    <Navigation/>
    <section class="pt-header-3 pb-70 bg-light blog_2">
		<div class="container px-xl-0">
			<h3 class="mb-15">
				Your Listings
			</h3>
			<div class="mb-60 color-heading f-18 text-adaptive">
				View and manage your listings
			</div>
            
			<div class="row">
				<div class="col-lg-6">
					<div class="row">
						<div class="mb-30 col-12 h-270">
							<div class="h-full bg-dark color-filter-dark-4 px-30 pt-30 pb-30 radius10 overflow-hidden d-flex flex-column justify-content-between" data-bg-src="i/blog_2_img_1.jpg" data-bg-src-2x="i/blog_2_img_1@2x.jpg">
								<div class="d-flex justify-content-end relative">
									<a href="" class="pl-15 pr-15 bg-white link color-black f-18 lh-30 bold radius10">
										Product name
									</a>
                                    <a href="#" class="pl-20 f-16 color-white">Edit</a>
								</div>
							</div>
						</div>
                        {/* <span class="px-30 bold f-22">Product name</span> */}
					</div>
				</div>
			</div>
		</div>
	</section>

    {/* Section loads if there are no listings */}
    <section class="pt-105 pb-0 bg-light text-center feature_28">
        <div class="container px-xl-0">
            <div class="row justify-content-center">
                <div class="col-xl-12 col-lg-8">
                    <div class="f-32 mt-25 mb-50">
                        You haven't listed any products
                    </div>
                    {/* <div class="mt-25 mb-50 f-18 medium color-heading text-adaptive description">
                        Your listings will show up here
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    <div class="row pb-250">
        <div class="col-lg-4 hide-mobile"></div>
        <div class="col-12 text-center">
        <button class="open_checkout color-white checkout-modal color-white btn bg-action-1 mx-15 md color-white radius8 px-20 f-20 text-adaptive product-btn" style={{backgroundColor:this.props.themeColor}}>List your products</button>
            <div class="checkout_mobile bg-modal type1 zi-999">
                <div class="row inner-checkout">
                <div class="col-xl-4 hide-mobile"></div>
                <div class="col-xl-4 px-40 inner bg-light radius8">
                    <a href="#" class="close_checkout color-white"><i class="fas fa-times color-black"></i></a>
                    <div class="mt-30 mt-lg-0 col-12">
							<div class="pt-20 pb-40 text-left radius20 holder">
								<div class="mb-35 d-flex flex-wrap justify-content-between align-items-center">
									<div class="f-30">
										List your products
									</div>
									{/* <img src="i/ecommerce_37_img.png" srcset="i/ecommerce_37_img@2x.png 2x" alt=""/> */}
								</div>
								<div class="row">
									<div class="col-12 mb-15 block">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Product Name
										</div>
										<input type="text" name="name" required="required" placeholder="Weekly nail set" class="input w-full border-gray focus-action-2 color-heading placeholder-heading mb-0"/>
									</div>
                                    <div class="col-12 mb-15 block">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Variation Title (optional)
										</div>
										<input type="text" name="name" required="required" placeholder="No art" class="input w-full border-gray focus-action-2 color-heading placeholder-heading mb-0"/>
									</div>
                                    <div class="col-12 mb-15 block">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Description
										</div>
										<input type="text" name="exp" required="required" placeholder="With this plan, you get a new nail set (including removal) each week. Art not included" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading"/>
									</div>
									<div class="col-12 mb-15 block color-black">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Frequency
										</div>
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="checkbox" name="method" id="once" value="once" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="once">
                                                    One-time
                                                </label>
                                            </div>
                                            <div class="col-6 row">
                                                <div class="f-18 medium color-inherit text-adaptive">
                                                    Price
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" name="exp" required="required" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading h-30 mb-4 pl-0 pr-0"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="checkbox" name="method" id="daily" value="daily" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="daily">
                                                    Daily
                                                </label>
                                            </div>
                                            <div class="col-6 row">
                                                <div class="f-18 medium color-inherit text-adaptive">
                                                    Price
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" name="exp" required="required" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading h-30 mb-4 pl-0 pr-0"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="checkbox" name="method" id="weekly" value="weekly" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="weekly">
                                                    Weekly
                                                </label>
                                            </div>
                                            <div class="col-6 row">
                                                <div class="f-18 medium color-inherit text-adaptive">
                                                    Price
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" name="exp" required="required" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading h-30 mb-4 pl-0 pr-0"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="checkbox" name="method" id="biweekly" value="biweekly" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="biweekly">
                                                    Bi-Weekly
                                                </label>
                                            </div>
                                            <div class="col-6 row">
                                                <div class="f-18 medium color-inherit text-adaptive">
                                                    Price
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" name="exp" required="required" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading h-30 mb-4 pl-0 pr-0"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">
                                                <input type="checkbox" name="method" id="monthly" value="monthly" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="monthly">
                                                    Monthly
                                                </label>
                                            </div>
                                            <div class="col-6 row">
                                                <div class="f-18 medium color-inherit text-adaptive">
                                                    Price
                                                </div>
                                                <div class="col-8">
                                                    <input type="text" name="exp" required="required" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading h-30 mb-4 pl-0 pr-0"/>
                                                </div>
                                            </div>
                                        </div>
									</div>


                                    <div class="col-12 mb-15 block color-black">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Shipping Options (optional)
										</div>
                                        <div class="row">
                                            <div class="col-12">
                                                <input type="checkbox" name="method" id="pickup" value="pickup" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="pickup">
                                                    Pick-up 
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <input type="checkbox" name="method" id="shipping" value="shipping" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="shipping">
                                                    Shipping <span class="f-12 ml-6">(require shipping information)</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <input type="checkbox" name="method" id="shipping" value="shipping" class="col-md-12 mb-10 d-none f-18 medium input border-gray focus-action-1"/>
                                                <label class="col-md-12 f-18 medium color-inherit pl-0 text-adaptive" for="shipping">
                                                    Not applicable<span class="f-12 ml-6"></span>
                                                </label>
                                            </div>
                                        </div>
									</div>

                                    <div class="col-12 mb-15 block color-black">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Pictures (max. 3 per product)
										</div>
                                        <div class="row">
                                            <div class="col-12">
                                                <input class="mt-20 w-full d-flex align-items-center justify-content-center btn action-5 px-0"  type="file" id="img" name="img" accept="image/*"/>
                                            </div>
                                        </div>
									</div>


                                    
									{/* <div class="col-md-6 mb-30 block">
										<div class="mb-10 f-14 semibold text-uppercase sp-20 text-adaptive">
											Price
										</div>
										<input type="text" name="exp" required="required" class="input js-expiration-short-mask w-full px-3 border-gray focus-action-2 color-heading placeholder-heading"/>
									</div> */}
                                    {/* <button class="w-full d-flex align-items-center justify-content-center btn action-5 px-0"  type="file" id="img" name="img" accept="image/*">
                                        <span>
                                            <i class="fas fa-upload pr-10"></i>Upload pictures
                                        </span>
                                        <i class="fas fa-chevron-right f-12 ml-5">
                                        </i>
                                    </button> */}
								</div>
								<div class="mt-40 row flex-column-reverse flex-sm-row align-items-center buttons">
									<div class="mt-20 mt-sm-0 col-md-4 col-sm-3 block">
										<a href="#" class="link d-flex align-items-center justify-content-center justify-content-sm-start action-2 f-18 medium">
											<i class="fas fa-chevron-left f-12 mr-5">
											</i>
											<span>
												 Cancel
											</span>
										</a>
									</div>
									<div class="col-md-8 col-sm-9 block">
										<button class="w-full d-flex align-items-center justify-content-center btn action-1 px-0">
											<span>
												List product
											</span>
											<i class="fas fa-chevron-right f-12 ml-5">
											</i>
										</button>
									</div>
								</div>
							</div>
						</div>
                </div>
                <div class="col-xl-4 hide-mobile"></div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 hide-mobile"></div>
    </div>

    <Footer/>
    </>
     )
    // }
    }
}

const mapStateToProps = state => {
    return {
      skuData: state.skuData,
      fetchAllProductsPending: state.fetchAllProductsPending
    };
  };

export default connect(mapStateToProps)(Listings);