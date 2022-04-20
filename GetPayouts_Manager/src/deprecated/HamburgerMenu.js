import React from 'react';
import Modal from 'react-responsive-modal';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import ReactGA from 'react-ga';

import $ from 'jquery';

export default class HamburgerMenu extends React.Component {

  loadScript() {
    
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
      
      // Enable AOS plugin (blocks animations)
    
      // if(typeof(AOS) !== 'undefined' && $("body").hasClass("SFG_body")===false){
      // 	AOS.init({
      // 		easing: 'ease-out-cubic',
      // 		once: true,
      // 		offset: 50
      // 	});
      // 	setTimeout(function(){
      // 		if($(".slick-initialized").length>0){
      // 			AOS.refreshHard();
      // 		}
      // 	},200);
      // }
    
      // AJAX send form
      
      // var grecaptchaWidgetID;
      
      // $("form:not(.SFG)").submit(function(event){
        
      // 	event.preventDefault();
       
      // 	var form = $(this);
      // 	var grecaptchaContainer = document.getElementById("g-recaptcha");
      // 	if($(grecaptchaContainer).length>0){
      // 		$(".grecaptcha-overlay").fadeIn(150,function(){
      // 			$(".grecaptcha-popup").fadeIn(200,function(){
      // 				if(typeof(grecaptchaWidgetID)=="undefined"){
      // 					grecaptchaWidgetID = grecaptcha.render(grecaptchaContainer, {
      // 						"sitekey": $(grecaptchaContainer).attr("data-sitekey"),
      // 						"callback": function (grecaptchaResponse) {
      // 							if(grecaptchaResponse){
      // 								var grecaptchaInput = form.find('input[name=g-recaptcha-response]');
      // 								if(grecaptchaInput.length>0){
      // 									grecaptchaInput.val(grecaptchaResponse);
      // 								}else{
      // 									form.append('<input name="g-recaptcha-response" value="'+grecaptchaResponse+'" type="hidden" />');						
      // 								}
      // 								submitForm(form);					
      // 							}else{
      // 								grecaptcha.reset(grecaptchaWidgetID);
      // 							}
      // 						},
      // 						"expired-callback": function(){
      // 							grecaptcha.reset(grecaptchaWidgetID);
      // 						},
      // 						"error-callback": function(){
      // 							$(".alert-form-error .message").html("Error: Please, check your internet connection and try again");
      // 							$(".alert-form-error").fadeIn(200).delay(10000).fadeOut(200);
      // 							grecaptcha.reset(grecaptchaWidgetID);
      // 						},
      // 					});						
      // 				}else{
      // 					grecaptcha.reset(grecaptchaWidgetID);
      // 				}
      // 			});
      // 		});
      // 	}else{
      // 		submitForm(form);
      // 	}
      // 	function submitForm(form){
      // 	    var	term = form.serialize(),
      // 			url = form.attr("action"),
      // 			required_fields_filled = true;
            
      // 		form.find("input, textarea, select").each(function(){
      // 			if($(this).prop("required") && $(this).val()==""){
      // 				required_fields_filled = false;
      // 			}
      // 		});
    
      // 		if(required_fields_filled){
      // 			var posting = $.post(url, term);
      // 			posting
      // 			.done(function(data){
      // 				if(data=="ok"){
      // 					$(".alert-form-success").fadeIn(200).delay(5000).fadeOut(200);
      // 				}else{
      // 					$(".alert-form-error .message").html(data);
      // 					$(".alert-form-error").fadeIn(200).delay(10000).fadeOut(200);
      // 				}
      // 				hidegRecaptchaPopup();
      // 			})
      // 			.fail(function(){
      // 				$(".alert-form-error").fadeIn(200).delay(10000).fadeOut(200);
      // 				hidegRecaptchaPopup();
      // 			});
      // 		}else{
      // 			$(".alert-form-check-fields").fadeIn(200).delay(5000).fadeOut(200);
      // 			hidegRecaptchaPopup();
      // 		}
      // 	}
      // });
      
      // // Close gReCaptcha popup
      
      // $(".grecaptcha-overlay").click(function(){
      // 	hidegRecaptchaPopup();
      // });
      
      // function hidegRecaptchaPopup(){
      // 	if($(".grecaptcha-popup").is(":visible")){
      // 		$(".grecaptcha-popup").fadeOut(200, function(){
      // 			$(".grecaptcha-overlay").fadeOut(100);
      // 		});
      // 	}
      // }
    
      // Function to add style to form, when user clicks to input inside it
    
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
    

    state = {
        open: false,
        products: [
          // 'Burlight',
          // 'Lophasia',
          // 'Ruzoga',
          // 'Laser Tag',
          // 'VR Gaming',
          // 'Rage Cage',
          // 'Combat Archery',
          // 'Axe Throwing',
          // "Jose's%20Penthouse",
          // 'Go Karting',
        ]
    }

  /**
  * track which product was clicked on, track its pageview
  */
  recordHamburgerMenuEvent=(eventString)=>{
    ReactGA.event({
          category: 'HAMBURGER_MENU',
          action:    `hamburger menu ${eventString}`,
          label: 'HAMBURGER_MENU'
      });
    }

  /**
  * track which product was clicked on, track its pageview
  */
 recordJoinAGroupLinkAndCloseModal=()=>{
  ReactGA.event({
        category: 'HAMBURGER_MENU_BTN',
        action:    `clicked on hamburger button`,
        label: 'HAMBURGER_MENU_BTN'
    });
    this.setState({ open: false });
  }

    onOpenModal = () => {
      this.setState({ open: true });
      this.recordHamburgerMenuEvent('opened')
    };
    onCloseModal = () => {
      this.setState({ open: false });
      this.recordHamburgerMenuEvent('closed')
    };


   /**
    * recordRedirect2FromHamburgerMenu 
    * */
   recordRedirect2FromHamburgerMenu=(productName,productLink)=>{
    this.setState({ open: false });
    ReactGA.pageview(productLink);
    ReactGA.event({
        category: 'HAMBURGER_MENU_REDIRECT',
        action:    `Clicked on ${productName} from hamburger menu`,
        label: 'HAMBURGER_MENU_REDIRECT'
        });
   } 
  
   /**
    *  shuffle and get 4 unique elements
    */
   shuffle=()=>{
     const {products } = this.state
     let randomProducts = products
     randomProducts.sort(() => Math.random() - 0.5) 
    this.setState({
      products: randomProducts
    })
   }


  /**
   * create activities footer inks
   */
  createProductLinks=()=>{
     const productLinks = this.state.products.slice(0,4).map(productName=>
      <div key={productName}>
        <Link className="color-black" 
        to={'/'+productName.toLowerCase().replace(' ','-')}
        onClick={() => this.recordRedirect2FromHamburgerMenu(
          productName,
          '/'+productName.toLowerCase().replace(' ','-'))
        }
        className="hamburger__menulink_E7De8"
        >
          {productName}
        </Link>
      <br></br>
      </div>
      )
  return productLinks
  }
 
  /**
   * get random element from products
   */
  getRandomElement(){
    const {products } = this.state
    const randomProduct = products[Math.floor(Math.random()*products.length)];
    return '/'+randomProduct.toLowerCase().replace(' ','-')
  }
  componentDidMount(){
    this.shuffle()
  }

    render () {
        // const { open } = this.state;
        this.loadScript();
      return (
          <>
          		<a href="#" id="hamburger" class="bg-white radius_full hamburger_menu open_menu"><i class="fas fa-bars lh-40 color-black"></i></a>
              <div class="row pl-0 ml-0 navigation_mobile bg-modal type1">
                <div class="col-xl-4 hide-mobile"></div>
                <div class="col-xl-4 px-40 pt-60 pb-60 px-40 bg-light inner inner-menu">
                <a href="#" class="close_menu color-black"><i class="fas fa-times"></i></a>
                  <div class="logo color-black mb-10">
                    <a href="/" class="link mr-20 color-black f-24 bold">
                    <span class="gradient-font logo-font f-44">payouts</span>
                    {/* <img class="w-full mw-250" src={process.env.PUBLIC_URL+"/assets/logo-dark.png"}/> */}
                    </a>
                  </div>
                  <div class="f-heading f-18 link color-black mb-20">Payouts is the easiest way to sell your products online, without a website.</div>
                  <div><a href="/login" class="f-heading f-22 link color-black mb-20">My Shop</a></div>	
                  <div class="d-inline-block dropdown">
                  <button href="" class="f-heading f-22 link color-black mb-20 dropdown-toggle bg-transparent pl-0" id="footer_10_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demo</button>
                  <div class="bg-dark lh-36 dropdown-menu px-10 radius8" aria-labelledby="footer_10_dropdown">
                    <div>
                      <a target="_blank" href="https://checkout.hellopayouts.com/merchant/9204bf74-fdb4-4563-804f-8aac21ad5739" class="link color-white">Nail Salon</a><br/>
                    </div>
                  </div>
                  </div>
                  <div><a href="/pricing" class="f-heading f-22 link color-black mb-20">Pricing</a></div>	
                  {/* <div><a href="/" class="f-heading f-22 link color-black mb-20">Community</a></div>	 */}
                  {/* <div><a href="/" class="link color-black op-3 mb-15">View spaces</a></div> */}
                  {/* <div><a href="/coming-soon" class="link color-black op-3 mb-15">Become a member</a></div> */}
                          
                  <div class="socials mt-40">
                    <a href="#" target="_blank" class="link color-black f-18 mr-20"><i class="fab fa-twitter"></i></a>
                    <a href="#" target="_blank" class="link color-black f-18 mr-20"><i class="fab fa-facebook"></i></a>
                    <a href="#" target="_blank" class="link color-black f-18 mr-20"><i class="fab fa-google-plus-g"></i></a>
                  </div>
                  
                  <div class="mt-50 f-18 light color-black op-3 copy">&copy; 2021 Payouts. All rights reserved.</div>
                </div>
                <div class="col-xl-4 hide-mobile"></div>
                </div>
        </>
      );
    }
  }
  

  