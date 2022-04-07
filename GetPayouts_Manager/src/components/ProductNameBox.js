import React from 'react';
import {isMobile} from 'react-device-detect';
import Checkout from './Checkout';
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


const ProductNameBox=(props)=>{

    const {spaceStatus} = props
    // const prizePool = props.prize

    return (
        <div className="ListingPage__sectionHeading__2B48M">
            <div className="ListingPage__heading__2WRXH">
            <div className="sc-9l7nkv-0 LocationDetails__ContentSpace-sc-1iqdbdn-17">
                    <div className="sc-2bxxka-0">
                        <div className="sc-7v1z3w-0 LocationDetails__ContentColumn-sc-1iqdbdn-15 imJFRL">
                            <div className="Breadcrumbs__Wrapper-sc-148hl4g-0 eqByuI"><a href="/" rel="noopener noreferrer">Monthly Workspaces</a><i width="14px" height="14px"
                                className="sc-AykKC cTjkJv Breadcrumbs__Icon-sc-148hl4g-1 dLhDEO"><svg
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14px" height="14px"
                                preserveAspectRatio="xMidYMid meet">
                                <path
                                    d="M15.6464466,7.04644661 L14.9535534,6.35355339 C14.7582912,6.15829124 14.4417088,6.15829124 14.2464466,6.35355339 L8.95355336,11.6464466 C8.75829121,11.8417088 8.75829121,12.1582912 8.95355336,12.3535534 L14.2464466,17.6464466 C14.4417088,17.8417088 14.7582912,17.8417088 14.9535534,17.6464466 L15.6464466,16.9535534 C15.8417088,16.7582912 15.8417088,16.4417088 15.6464466,16.2464466 L11.4,12 L15.6464466,7.75355339 C15.8417088,7.55829124 15.8417088,7.24170876 15.6464466,7.04644661 Z"
                                    transform="matrix(-1 0 0 1 24.6 0)"></path>
                                </svg></i><a href="/" rel="noopener noreferrer">Montreal</a></div>
                        </div>
                    </div>
                </div>
                <div className="section__rootStudioTypes__31Niv">
                {/* {props.type} •  */}
                {props.location} 
                {/* • {props.genre} */}
                </div>
                <h1 className="ListingPage__title__3FHmO">
                    <span>
                        <span className="ListingPage__richTitle__-kZ4u mariapro bold color-dark">{props.productName}</span>
                        {spaceStatus === 'Available' &&
                        <>
                        <span className="ListingPage__tag__3JAjz">
                            <span className="ListingPage__AVAILABLE__1T4Vp">
                                <span>{'AVAILABLE'}</span>
                            </span>
                            <span className="ListingPage__verified__1j8YI">
                                <span className="Desktop__only"></span>
                            </span>
                        </span>
                        <br></br>
                        <span className="ListingPage__tag__3JAjz">
                            <span className="ListingPage__AVAILABLE__1T4Ve">
                                <span>{'Covid-19 Safe'}</span>
                            </span>
                            <span className="ListingPage__verified__1j8YI">
                                <span className="">Safety measures in place</span>
                            </span>
                        </span>
                        </>
                        }
                        {spaceStatus === 'Full' &&
                        <>
                        <span className="ListingPage__tag__3JAjz">
                            <span className="ListingPage__FULL__1T4Vp bg-dark">
                                <span>{'REOPENING SOON'}</span>
                            </span>
                            <span className="ListingPage__verified__1j8YI">
                                <span className="Desktop__only"></span>
                            </span>
                        </span>
                        <br></br>
                        <span className="ListingPage__tag__3JAjz">
                            <span className="ListingPage__AVAILABLE__1T4Ve">
                                <span>{'Covid-19 Safe'}</span>
                            </span>
                            <span className="ListingPage__verified__1j8YI">
                                <span className="">Safety measures in place</span>
                            </span>
                        </span>
                        </>
                        }
                        {spaceStatus === 'Soon' &&
                        <>
                        <span className="ListingPage__tag__3JAjz">
                            <span className="ListingPage__SOON__1T4Vp">
                                <span>{'COMING SOON'}</span>
                            </span>
                            <span className="ListingPage__verified__1j8YI">
                                <span className="Desktop__only"></span>
                            </span>
                        </span>
                        <br></br>
                        <span className="ListingPage__tag__3JAjz">
                            <span className="ListingPage__AVAILABLE__1T4Ve">
                                <span>{'Covid-19 Safe'}</span>
                            </span>
                            <span className="ListingPage__verified__1j8YI">
                                <span className="">Safety measures in place</span>
                            </span>
                        </span>
                        </>}
                    </span>
                </h1>
                <div className="sc-9l7nkv-0 LocationDetails__ContentSpace-sc-1iqdbdn-17">
                    <div className="sc-2bxxka-0">
                        <div className="sc-7v1z3w-0 LocationDetails__ContentColumn-sc-1iqdbdn-15 imJFRL">
                            <div className="sc-9l7nkv-0 bhBcWC">
                            {/* <span className="Rating__Wrapper-sc-1qlnavb-0 hzNwRJ"><span
                                className="Rating__Rate-sc-1qlnavb-2 aoPop"><span>{props.numStars} <i width="24px" height="24px"
                                    className="sc-AykKC jROZdh Rating__Star-sc-1qlnavb-1 fZYOpI"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"
                                        preserveAspectRatio="xMidYMid meet">
                                        <polygon
                                        points="12 15.5 7.886 17.663 8.671 13.082 5.343 9.837 9.943 9.168 12 5 14.057 9.168 18.657 9.837 15.329 13.082 16.114 17.663">
                                        </polygon>
                                    </svg></i></span></span>
                                    <span className="Rating__Count-sc-1qlnavb-3 emqydm">{props.numRatings} Ratings</span>
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ListingPage__author__3SbRu">
                    {/* <span className="Icon__info__span">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad" className="svg-inline--fa fa-gamepad fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#EF008F" d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"></path></svg>
                    &nbsp;&nbsp;{props.gamingConsole}
                    </span>

                    <span className="ListingPage__bullet__3bqX6">•</span>

                    <span className="Icon__info__span">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-friends" className="svg-inline--fa fa-user-friends fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#EF008F" d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"></path></svg>
                    &nbsp;&nbsp;{props.gamingFormat}
                    </span>

                    <span className="ListingPage__bullet__3bqX6">•</span>

                    <span className="Icon__info__span">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" className="svg-inline--fa fa-trophy fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#EF008F" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></svg>
                    &nbsp;&nbsp;{props.gamingType}
                    </span>

                    <span className="ListingPage__bullet__3bqX6 Desktop__only">•</span>

                    <span className="Icon__info__span Desktop__only">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="couch" className="svg-inline--fa fa-couch fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#EF008F" d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path></svg>
                    &nbsp;&nbsp;at {props.merchantName}
                    </span> */}
                    {/* DOT */}
                    {/* <span className="ListingPage__bullet__3bqX6">•</span> */}
                    {/* STARS START */}
                    {/* <span className="ListingPage__reviewRating__2yR-S">
                        <svg className="IconReviewStar__filled__CHYQZ ListingPage__reviewRatingStar__2WQG1"
                            width="23" height="23" viewBox="0 0 23 23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16"
                                fillRule="evenodd"></path>
                        </svg>
                        <svg className="IconReviewStar__filled__CHYQZ ListingPage__reviewRatingStar__2WQG1"
                            width="23" height="23" viewBox="0 0 23 23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16"
                                fillRule="evenodd"></path>
                        </svg>
                        <svg className="IconReviewStar__filled__CHYQZ ListingPage__reviewRatingStar__2WQG1"
                            width="23" height="23" viewBox="0 0 23 23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16"
                                fillRule="evenodd"></path>
                        </svg>
                        <svg className="IconReviewStar__filled__CHYQZ ListingPage__reviewRatingStar__2WQG1"
                            width="23" height="23" viewBox="0 0 23 23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16"
                                fillRule="evenodd"></path>
                        </svg>
                        <svg className="IconReviewStar__filled__CHYQZ ListingPage__reviewRatingStar__2WQG1"
                            width="23" height="23" viewBox="0 0 23 23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16"
                                fillRule="evenodd"></path>
                        </svg>
                    </span> */}
                    {/* STARS END */}
                </div>
                <div className="payment-support-div">
                {isMobile && <span>
                        <a
                        style={{
                            color:'#067eea'
                        }}
                        onClick={() => recordMessengerShareEvent(props)}
                        href={getMessengerLink(props)}
                        >
                            <FontAwesomeIcon icon={faFacebookMessenger}/>
                            &nbsp;Share on Messenger
                        </a>

                        {/* <button onClick={shareOnMessenger(props.productName)}>Share On Messenger</button> */}
                        {/* <span>Good rating</span> */}
                        {/* <FacebookShareButton 
                            quote={'Activties & Events with Strangers, Try '+props.productName}
                            url={'https://flocbay.com/#'+props.productName}
                            hashtag={'#respaced'}
                         >
                            <FacebookIcon
                            size={32}
                            />
                            Share
                        </FacebookShareButton> */}
                    </span>}
                </div>
            </div>
        </div>
    )
}
export default ProductNameBox