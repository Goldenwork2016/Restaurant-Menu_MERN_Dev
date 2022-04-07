import React from 'react';
import {isMobile} from 'react-device-detect';
import Checkout from './Checkout';
import { connect } from 'react-redux';
import {fetchSkusData} from '../actions'
/*import {
    FacebookShareButton,
    FacebookIcon
} from 'react-share'*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
// import {SUPER_EARLY_BIRD_50,
//     EARLY_BIRD_25,
//     EARLY_BIRD_10} from './coupons';
import ReactGA from 'react-ga';
import BookATour from './BookATour';

const app_id = '367260010515362'

/**
 * getCouponName
 * 
 * @param {Number} flockSize 
 * @param {Number} skuQuantity 
 * @param {Number} price 
 * @param {Number} regularPrice 
 */
// function getCouponName(flockSize,skuQuantity,price,regularPrice) {
//     if(price === regularPrice){
//         const ticketsSold = flockSize - skuQuantity
//         if(flockSize===skuQuantity) {
//             return EARLY_BIRD_25.couponDiscount
//         } 
//         else if(ticketsSold >= 1 && ticketsSold <=3 ) {
//             return EARLY_BIRD_10.couponDiscount
//         } 
//     } return null
// }

/**
 * get messenger link
 * @param {} props 
 */
function getMessengerLink(props){
    const messengerLink = 
    "fb-messenger://share/?link=https://getpayouts.com/product/"
    +props.prodid.replace('prod_','')
    +"&app_id="+app_id;

    return messengerLink
}

/**
 * track messenger share button 
 */
function recordMessengerShareEvent(props){
    const{productName}=props
    ReactGA.event({
        category: 'MESSENGER_SHARE_PRODUCT_PAGE',
        action:    'Clicked on messenger share button for '+productName,
        label: 'MESSENGER_SHARE_PRODUCT_PAGE'
        });
  }


const ProductInfo=(props)=>{

    const {spaceStatus, type} = props
    // console.log(props.linkFacebook, props.linkInstagram, props.linkWebsite, props.linkTwitter, props.linkYoutube, props.linkLinkedin)
    return (
        <>
        <span class="mb-10 f-32 text-left">
            <h2 class="bold pt-30 pb-0">{props.merchantName}
                <span class="btn mb-10 sm product-btn medium f-22 ml-15 mt-10-mobile" style={{backgroundColor:props.themeColor}}>
                    <i class="f-24 fas fa-shopping-cart"></i>
                </span>
            </h2>
        </span>
        <div class="mt-15 d-flex flex-wrap align-items-end color_quantity">
            <div class="mt-20 mr-20 colors">
                <div class="mb-1 color-dark f-18 semibold label">
                    About
                </div>
            </div>
        </div>
        {spaceStatus === 'Available' &&
        <>
        <div class="color-heading text-adaptive text-left">
                {props.aboutHost}
        </div>
        <div class="mt-15 d-flex flex-wrap align-items-end color_quantity">
            <div class="mt-20 mr-20 colors">
                <div class="mb-1 color-dark f-18 semibold label">
                    Information
                </div>
            </div>
        </div>
        <div class="mb-0 px-0 color-heading advantages">
            <div class="mb-10">
                {props.productDescription}
            </div>
        </div>
        {/* <button class="mr-20 pt-10 mt-50 pb-10 px-40 bg-main color-white radius10 medium f-20 align-middle">
        <Checkout
                    skuid = {props.skuid}
                    currency ={props.currency}
                    quantity={props.quantity.value}
                    amount={props.quantity.value * props.price}
                    prodid={props.prodid}
                    productName={props.productName}
                    skuQuantity={props.skuQuantity}
                    spaceStatus={props.spaceStatus}
                    productType={props.productType}
                    productType={props.type}
                    skuData={props.skuData}
                    price={props.sku_price}
                    currency={'CAD'}
                    quantity={ {"value":1}}
                    skuQuantity={0}
                    skuid = {props.skuid}
                    currency ={props.currency}
                    quantity={props.quantity.value}
                    amount={props.quantity.value * props.price}
                    prodid={props.prodid}
                    productName={props.productName}
                    skuQuantity={props.skuQuantity}
                    spaceStatus={props.spaceStatus}
                    productType={props.productType}
                    productType={props.type}
                    skuData={props.skuData}
                    onHomePage={false}
                    />
        </button> */}
        </>
        }


        {type === 'subscription' &&
        <>
        <div>
            {/* <div class="mt-15 d-flex flex-wrap align-items-end text-left color_quantity">
                <div class="mt-20 mr-20 colors">
                    <div class="mb-1 color-dark f-18 semibold label">
                        Business Hours
                    </div>
                </div>
            </div>
            <span class="mb-0 px-0 color-heading advantages">
                <div class="row mb-10 ml-0">
                <span class="mb-0 px-0 color-heading advantages col-4">
                        <span class="">Monday</span>&nbsp;<br/>
                        <span class="">Tuesday</span>&nbsp;<br/>
                        <span class="">Wednesday</span>&nbsp;<br/>
                        <span class="">Thursday</span>&nbsp;<br/>
                        <span class="">Friday</span>&nbsp;<br/>
                        <span class="">Saturday</span>&nbsp;<br/>
                        <span class="">Sunday</span>&nbsp;<br/>
                </span>
                <span class="mb-0 px-0 color-heading advantages col-8">
                        <span class="text-right">{props.availableHoursMonday}</span><br/>
                        <span class="text-right">{props.availableHoursTuesday}</span><br/>
                        <span class="text-right">{props.availableHoursWednesday}</span><br/>
                        <span class="text-right">{props.availableHoursThursday}</span><br/>
                        <span class="text-right">{props.availableHoursFriday}</span><br/>
                        <span class="text-right">{props.availableHoursSaturday}</span><br/>
                        <span class="text-right">{props.availableHoursSunday}</span>
                </span>
                </div>
            </span> */}

            <div class="mt-15 d-flex flex-wrap align-items-end color_quantity">
                <div class="mt-20 mr-20 colors">
                        <div class="mb-1 color-dark f-18 semibold label">
                            Social
                        </div>
                </div>
            </div>
            <div class="mb-0 px-0 color-black advantages">
                <div class="mb-10">
                    {props.linkWebsite != 'no-website-link' && <a href={props.linkWebsite}>
                        <i class="fas fa-globe f-24 pr-10" style={{color:props.themeColor}}></i>
                    </a>}
                    {props.linkFacebook != 'no-facebook-link' && <a href={props.linkFacebook}>
                        <i class="fab fa-facebook f-24 pr-10" style={{color:props.themeColor}}></i>
                    </a>}
                    {props.linkInstagram != 'no-instagram-link' && <a href={props.linkInstagram}>
                        <i class="fab fa-instagram f-24 pr-10" style={{color:props.themeColor}}></i>
                    </a>}
                    {props.linkTwitter != 'no-twitter-link' &&<a href={props.linkTwitter}>
                        <i class="fab fa-twitter f-24 pr-10" style={{color:props.themeColor}}></i>
                    </a>}
                    {props.linkYoutube != 'no-youtube-link' &&<a href={props.linkYoutube}>
                        <i class="fab fa-youtube f-24 pr-10" style={{color:props.themeColor}}></i>
                    </a>}
                    {props.linkLinkedin != 'no-linkedin-link' &&<a href={props.linkLinkedin}>
                        <i class="fab fa-linkedin f-24 pr-10" style={{color:props.themeColor}}></i>
                    </a>}

                    {props.linkWebsite === 'no-website-link' && props.linkFacebook === 'no-facebook-link' && props.linkInstagram === 'no-instagram-link' && props.linkTwitter === 'no-twitter-link' && props.linkYoutube === 'no-youtube-link' && props.linkLinkedin === 'no-linkedin-link' && <span class="color-heading advantages">No social links</span>
                    }
                    {props.linkWebsite === undefined && props.linkFacebook === undefined && props.linkInstagram === undefined && props.linkTwitter === undefined && props.linkYoutube === undefined && props.linkLinkedin === undefined && <span class="color-heading advantages">No social links</span>
                    }
                </div>
            </div>

            <div class="mt-15 d-flex flex-wrap align-items-end color_quantity">
                <div class="mt-20 mr-20 colors">
                        <div class="mb-1 color-dark f-18 semibold label">
                            Location
                        </div>
                </div>
            </div>
            <div class="mb-0 px-0 color-black advantages">
                <div class="d-flex align-items-center flex-wrap h-500">
                    <iframe
                    title="Map" 
                    style={{
                        width:"100%",
                        height:"100%",
                        frameborder:0,
                        border:0
                    }}
                    src={"https://www.google.com/maps/embed/v1/place?q=place_id:"
                    +props.placeId
                    +"&key=AIzaSyC0BWK94NJzmqxvIhu1f-iJsyjjiwQEUkE"} 
                    >
                    </iframe>
                </div>
            </div>

            {/* <div class="mt-15 d-flex flex-wrap align-items-end text-left color_quantity">
                <div class="mt-20 mr-20 colors">
                    <div class="mb-1 color-dark f-18 semibold label">
                        Capacity
                    </div>
                </div>
            </div>
            <span class="mb-0 px-0 color-heading advantages">
                <span class="mb-10">
                    At tables: {props.atTables}<br/>
                    In Lounge: {props.inLounge}
                </span>
            </span> */}
        </div>
        </>
        
        
        }



        </>
    )
}
export default ProductInfo