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

const Listing =(props)=>{
    const {productType, merchantPrice,productName,price,flockSize, prodid,skuQuantity,regularPrice, inLounge, atTables, pictureId, metroStation, spaceStatus, liveSeats, merchantName} = props
        return (
            <div class="mt-55 pb-20 col-lg-5 col-sm-6">
                <a 
                    href={`https://checkout.hellopayouts.com/pay/${prodid.replace('prod_','')}`}
                    target="_blank"
                    onClick={() => recordClickAndPageView(props)} class="link color-inherit minw-100-p">
                        <div class="overflow-hidden mh-300 radius8">
                        <img src={process.env.PUBLIC_URL+"/assets/"+productType+"/"+prodid+".jpg"} 
                            alt={merchantName}
                                className="mb-30 img-fluid radius8"/>
                        </div>
                        <div class="mt-30 f-18">
                        {spaceStatus}&nbsp;<button class="action-1">{'$'+price/100}</button>
                        </div>
                        <div class="mt-1 f-22 title">
                            {merchantName}
                        </div>
                </a>
            </div>
        );
    }
export default Listing 


