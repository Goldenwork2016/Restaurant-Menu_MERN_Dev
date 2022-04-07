import React from 'react';
import { Link } from "react-router-dom";
// import {SUPER_EARLY_BIRD_50,
//         EARLY_BIRD_25,
//         EARLY_BIRD_10} from './coupons';
import ReactGA from 'react-ga';
import LazyLoad from 'react-lazy-load';

/**
   * calculate coupon price
   * @param {Number} couponDiscount
   * @param {Number} price
   */
// function calcCouponPrice(couponDiscount,price){
//     const newAmount =( price-price* (couponDiscount/100) ).toFixed(2) 
//     return newAmount
// }

/**
 * getCouponName
 * 
 * @param {Number} flockSize 
 * @param {Number} skuQuantity 
 * @param {Number} price 
 * @param {Number} regularPrice 
 */
// function getCouponName(flockSize,skuQuantity,price,regularPrice) {
//     if(price/100 === regularPrice){
//         const ticketsSold = flockSize - skuQuantity
//         if(flockSize===skuQuantity) {
//             return null
//         } 
//         else if(ticketsSold >= 1 && ticketsSold <=3 ) {
//             return null
//         } 
//     } return null
// }

/**
 * getCouponPrice
 * 
 * @param {Number} flockSize 
 * @param {Number} skuQuantity 
 * @param {Number} price 
 * @param {Number} regularPrice 
 */
function getCouponPrice(flockSize,skuQuantity,price,regularPrice) {
    // if(price/100 === regularPrice){
    //     const ticketsSold = flockSize - skuQuantity
    //     if(flockSize===skuQuantity) {
    //         const newPrice =
    //                         calcCouponPrice(
    //                             EARLY_BIRD_25.couponDiscount
    //                             ,price/100)
    //         return newPrice
    //     } 
    //     else if(ticketsSold >= 1 && ticketsSold <=3 ) {
    //         const newPrice =calcCouponPrice(
    //                         EARLY_BIRD_10.couponDiscount,
    //                         price/100)
    //         return newPrice
    //     } else {
    //         return price/100
    //     }
    // } else {
    //     return price/100
    // }
    return price/100
}

/**
 * show price in del tag
 * @param {Number} price
 */
function showDelTagPrice(price){
    return <del
    style={{
        fontSize:15,
        color:'grey',
        paddingLeft:3
    }}
    >
       {'$'+price}
 </del>
}

/**
 * Show Normal Price, otherwise show merchant_price
 * @param {Number} price
 * @param {Number} merchantPrice
 * @param {Number} couponPrice
 * @param {Number} regularPrice
 */
function showMerchantPrice(price,merchantPrice,couponPrice){
    if(!isNaN(merchantPrice) ) {
        return showDelTagPrice(merchantPrice)
    } 

    else if(couponPrice < price/100){
        return showDelTagPrice(price/100)
    }

    else return ''
}

/**
 * getTicketsSold
 * decide whether to show custom going or ticketsSold
 * @param props
 */
// function getTicketsSold(props){
//     const {ticketsSold,customGoing} = props
//     if(customGoing === 0) return ticketsSold
//     else if(!customGoing) return ticketsSold
//     return customGoing
// }

/**
 * track which product was clicked on, track its pageview
 */
function recordClickAndPageView(props){
    const{productName,prodid}=props
    ReactGA.pageview(`/${prodid.toLowerCase()}`);
    ReactGA.event({
        category: 'CARD_CLICK_HOME_PAGE',
        action:    'Clicked on '+productName+" "+prodid,
        label: 'CARD_CLICK_HOME_PAGE'
        });
  }
  /***
   * get Activity Date
   */
//   function getActivityDate(props){
//     const {activityDateEpoch} = props
//     const activityDate=new Date(activityDateEpoch*1000)
//     return activityDate
//     .toDateString()
//     .replace(/\d{4}/,'')
//     .replace(/([Sat]{3}|[Fri]{3}|[Tue]{3}|[Sun]{3})/g,'')
//   }

const Card =(props)=>{
    const {productType, merchantPrice,productName,price,flockSize, prodid,skuQuantity,regularPrice, inLounge, atTables, pictureId, metroStation, spaceStatus, liveSeats} = props
        return (
            <Link 
                to={`#`}
                onClick={() => recordClickAndPageView(props)}
                className="ListingCard__root__3tK5n LandingPage__listingCard__1GV46"
            >
                <div className="ListingCard__threeToTwoWrapper__KPJGV">
                    <div className="ListingCard__aspectWrapper__3yQza">
                        {/* <LazyLoad> */}
                        <picture>
                            <source
                            srcSet={process.env.PUBLIC_URL+"/assets/"+productType+"/"+pictureId+".webp"} 
                            alt={productName}
                                type="image/webp"/>
                            <source
                            srcSet={process.env.PUBLIC_URL+"/assets/"+productType+"/"+pictureId+".jpg"} 
                            alt={productName}
                                type="image/jpg" />
                            <img src={process.env.PUBLIC_URL+"/assets/"+productType+"/"+pictureId+".jpg"} 
                            alt={productName}
                                className="SectionThumbnailLinks__image__Up7Vm"/>
                        </picture>
                        {/* </LazyLoad> */}
                    </div>
                </div>
                <div className="ListingCard__info__1p2HA">
                    <div className="ListingCard__tags__2gPsy">
                        {spaceStatus === 'Full' &&
                                <div className="PayoutsDiscountTag__root__1ZMZu">
                                    <span className="PayoutsDiscountTag__FULL__1FTNt">
                                        <span>{'FULL'}</span>
                                    </span>
                                    <span className="PayoutsDiscountTag__verified__3uy7y">
                                        <span>REOPENING SOON</span>
                                    </span>
                                </div>}
                        {spaceStatus === 'Available' && 
                                <div className="PayoutsDiscountTag__root__1ZMZu">
                                    <span className="PayoutsDiscountTag__AVAILABLE__1FTNt">
                                        <span>{'AVAILABLE'}</span>
                                    </span>
                                    <span className="PayoutsDiscountTag__verified__3uy7y">
                                        <span>RECENTLY ADDED</span>
                                    </span>
                                </div>}
                        {spaceStatus === 'Soon' && 
                                <div className="PayoutsDiscountTag__root__1ZMZu">
                                    <span className="PayoutsDiscountTag__SOON__1FTNt bg-dark">
                                        <span>{'COMING SOON'}</span>
                                    </span>
                                    <span className="PayoutsDiscountTag__verified__3uy7y">
                                        <span>UP NEXT</span>
                                    </span>
                                </div>}
                    </div>
                    <div className="ListingCard__infoRow__1E-N2">
                        {/* <div className="ListingCard__price__1yHBA">
                            <div className="ListingCard__priceValue__nRVxb" title={price}> 
                            {'$'+getCouponPrice(flockSize,skuQuantity,price,regularPrice)}
                            {showMerchantPrice(price,merchantPrice, getCouponPrice(flockSize,skuQuantity,price,regularPrice))}                                
                            </div>
                            <div className="ListingCard__perUnit__2bgqh">
                                <span className="ListingCard__membershipscount__19MHs">monthly</span>
                            </div>
                        </div> */}
                        <div className="ListingCard__mainInfo__1aMXU">
                            <div className="ListingCard__title__GnsN2 mariapro bold color-dark">{productName}</div>
                            <div className="ListingCard__reviewInfoRow__34Ai0">
                                {/* <span className="ListingCard__reviewStars__1ykvy">
                                    <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                    </svg>
                                    <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                    </svg>
                                    <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                    </svg>
                                    <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                    </svg>
                                    <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                    </svg>
                                </span> */}
                                <span>
                                    {/* <span className="ListingCard__bullet__23N0F">•</span> */}
                                    <span className="ListingCard__membershipscount__19MHs">
                                    {/* <span className="ListingCard__membershipscount__19MHs">
                                    {getTicketsSold(props) >= 4 && getTicketsSold(props) + ' going '} </span> */}
                                    {liveSeats} seats available <span className="ListingPage__bullet__3bqX6">•</span> 
                                    {/* <svg width="15px" height="15px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '2px'}}>
                                        <title>metro</title>
                                        <desc>Metro Station</desc>
                                        <g id="metro" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <rect id="Rectangle" stroke="#979797" stroke-width="0.5" fill="#2C70C3" x="0.25" y="0.25" width="19.5" height="19.5" rx="0.9765625"></rect>
                                            <g id="montreal-metro-logo" transform="translate(1.660156, 1.660156)" fill="#FFFFFF" fill-rule="nonzero">
                                                <path d="M8.33233532,0.000176603618 C3.73057484,0.000176603618 0,3.73057484 0,8.33233532 C0,12.9342724 3.73057484,16.6646706 8.33233532,16.6646706 C12.9342724,16.6646706 16.6646706,12.9342724 16.6646706,8.33233532 C16.6646706,3.73057484 12.9342724,0.000176603618 8.33233532,0.000176603618 Z M8.33233532,14.581631 C4.88114741,14.581631 2.08321628,11.78317 2.08321628,8.33215872 C2.08321628,5.26208141 4.29800226,2.71068894 7.21655366,2.18423355 L7.21655366,9.79673252 L4.13022882,6.65195189 L2.4841065,8.32739042 L8.33357155,14.2353113 L14.2125294,8.35635341 L12.5077747,6.65195189 L9.39178043,9.76794613 L9.39178043,2.17452035 C12.3384118,2.67766406 14.5818076,5.24230181 14.5818076,8.33233532 C14.581631,11.7833466 11.7838764,14.581631 8.33233532,14.581631 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </svg> */}
                                    &nbsp;
                                    {metroStation}
                                    {/* {getActivityDate(props)} */}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
export default Card