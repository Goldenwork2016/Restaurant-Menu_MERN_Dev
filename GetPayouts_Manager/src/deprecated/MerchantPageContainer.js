import React from 'react';
import NoMatch404 from '../components/NoMatch404';
// import MainImageAndCarousel from '../components/MainImageAndCarousel';
import axios from 'axios';
// import uuid from 'uuid/v1';
import BuyButton from '../deprecated/BuyButton';
// import BuyButtonHome from '../components/BuyButtonHome'
import BuyButtonFull from '../deprecated/BuyButtonFull'
import PaymentSuccess from '../deprecated/PaymentSuccess';
import PaymentFailure from '../deprecated/PaymentFailure';
import MemberMsg from '../deprecated/MemberMsg';
import {
  Elements
} from 'react-stripe-elements';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import {fetchMerchantData, resetMerchantData} from '../actions';

import MerchantProductInfo from '../deprecated/MerchantProductInfo';
import MerchantCheckoutFieldsForm from '../components/MerchantCheckoutFieldsForm';
import MerchantCheckoutLoading from '../deprecated/MerchantCheckoutLoading';
// import MerchantCheckoutBar from '../components/MerchantCheckoutBar';
import {isEmpty} from '../utils/utils';
import CheckoutLoading from '../deprecated/CheckoutLoading';  

// import Checkout from '../components/Checkout';

// import Select from 'react-select';
// import {SUPER_EARLY_BIRD_50,
//     EARLY_BIRD_25,
//     EARLY_BIRD_10} from '../components/coupons';

const CHECKOUT_API = 'https://fdxqe4fqz6.execute-api.us-west-2.amazonaws.com/prod/payout-merchant'

class MerchantPageContainer extends React.Component  { 
 timer = null;

state = {
    open: false,
    payment:null,
    orderid:'',
    loading:null,
    member: null,
    numTickets: {
        value:1
    },
    checkoutBarOpen: false,
    copyClick: false,
};

  onOpenModal = () => {
    this.setState({ open: true });
  };

  setTrueCheckoutBar = ()=>{
    this.setState({ checkoutBarOpen: true });
  }

  toggleCopyClick = ()=>{
    this.setState({ copyClick: true }) 
    navigator.clipboard.writeText(window.location.href );
  }

  setFalseCheckoutBar = ()=>{
    this.setState({ checkoutBarOpen: false });
    if(this.state.payment || this.state.payment===false) {
      this.refreshPage()
    }
  }

  onCloseModal = () => {
      // if(!this.state.orderid){
      //   this.recordAbandonedCheckout()
      // }
      if(this.state.payment || this.state.payment===false) {
        this.refreshPage()
      } else {
        this.setState({ open: false });
      }
  };

  refreshPage=()=>{
    window.location.assign(`/merchant/${this.props.match.params.id}`);
    this.setState({
      open: false,
      payment:null,
      orderid:'',
      loading:null,
      member:null
    })
  }

  handleCheckout = (phone, price_id, email, stripe_token) => {
    // this.setFalseCheckoutBar()
    this.doCheckout(phone, price_id, email, stripe_token);
  }
  
  handleAppleGooglePay=(email,orderid,payment)=>{
    if(orderid) {
      this.setOrderId(orderid)    
      this.recordConversionAndCheckoutEvent(email)
    } else {
      this.setState({
        payment
      })
    }
    this.recordCheckoutFailure(email)
  }

doCheckout = (phone, price_id, email, stripe_token) => {
  const data = {
    "action": "ACTION_CHECKOUT",
    "merchant_id": this.props.match.params.id,
    phone,
    price_id,
    stripe_email: email,
    stripe_token,
  }

this.setState({
  loading: true
})

return axios.post(CHECKOUT_API,data)
          .then(res=>{     
            if(res.data.data.invoice_id){
            this.setState({
              orderid:res.data.data.invoice_id,
              payment:true,
              loading: false
            })
          }
          // if(res.data.errorMessage && res.data.errorMessage.toLowerCase().includes('member')){
          //     this.setState({
          //       member:true,
          //       loading:false,
          //       payment:false
          //     })
          //   }

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
          })
};

componentDidMount(){
    const {match,merchantInfo} = this.props
    const {params} = match
    if(!merchantInfo){
        this.props.dispatch(fetchMerchantData(params.id))
    }
    this.timer = setTimeout(() => this.setTrueCheckoutBar(), 3000) 
}

componentWillUnmount(){
  this.props.dispatch(resetMerchantData());
  clearTimeout(this.timer);
}

getOptions = (ticketsAvailable)=>{
    let options = [];
    for (let index = 1; index <= ticketsAvailable; index++) {
      options.push({
        value: index,
        label: (index > 1) ? index+' tickets' : index+' ticket'
      })
    }
    return options
  }

/**
   * calculate coupon price
   * @param {Number} couponDiscount
   * @param {Number} price
   */
calcCouponPrice=(couponDiscount,price)=>{
    const newAmount =( price-price* (couponDiscount/100) ).toFixed(2) 
    return newAmount
}

/**
 * getCouponPrice
 * 
 * @param {Number} flockSize 
 * @param {Number} skuQuantity 
 * @param {Number} price 
 * @param {Number} regularPrice 
 */
getCouponPrice=(flockSize,skuQuantity,price,regularPrice)=> {
    // if(price/100 === regularPrice){
    //     const ticketsSold = flockSize - skuQuantity
    //     if(flockSize===skuQuantity) {
    //         const newPrice =this.calcCouponPrice(
    //             EARLY_BIRD_25.couponDiscount,
    //             price/100)
    //         return newPrice
    //     } 
    //     else if(ticketsSold >= 1 && ticketsSold <=3 ) {
    //         const newPrice =this.calcCouponPrice(
    //             EARLY_BIRD_10.couponDiscount,
    //             price/100)
    //         return newPrice
    //     } else {
    //         return price/100
    //     }
    // } else {
    // return price/100
    // }
}

getMatchingProdInfo=()=>{
    // const {match} = this.props
    // const {params} = match

    const {skuData} = this.props
    // let prodInfo;
    // skuData.forEach(sku => {
    //     if(sku.product_id.toLowerCase() === params.id.toLowerCase())
    //         prodInfo = sku
    // });
    // if(!prodInfo) {
    //     prodInfo=false
    // }
   return skuData
}

handleChange = numTickets => {
    this.setState({ numTickets });
  };

  showFullOrBuyButton=()=>{
    const {spaceStatus } = this.props;
    if(spaceStatus==='Full'){
      return <BuyButtonFull
        onOpenModal={this.onOpenModal}
      />}
    else {
      return <BuyButton
        onOpenModal={this.onOpenModal}
        productName={this.props.productName}
        productType={this.props.type}
        productType={this.props.productType}
        themeColor={this.props.themeColor}
        />
      }
    }

//   escapeRegExp(str) {
//     return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
//   }

//   applyCouponIfNeeded=(flock_size,sku_quantity,sku_price,regular_price)=>{
//     if(sku_price === regular_price) { // In the Minimum Group
//         const ticketsSold = flock_size - sku_quantity
//         if(flock_size===sku_quantity) {
//             return EARLY_BIRD_25
//         } 
//         else if(ticketsSold >= 1 && ticketsSold <=3 ) {
//              //early bird Ticket, apply coupon 25%
//             return EARLY_BIRD_10 
//         } else {
//             return null
//         }
//     } 
//   }

resetState = ()=>{
  this.setState({
    open: false,
    payment:null,
    orderid:'',
    loading:null,
    member:null
  })

}

render(){
    const { open,orderid,payment,loading,member, checkoutBarOpen, copyClick} = this.state;
    const {spaceStatus, productType, merchantProductInfo, fetchMerchantPending,match,is404, prodid, productId, themeColor, linkInstagram} = this.props;
    {this.showFullOrBuyButton()}
    // window.scrollTo(0, 0);

    const {merchant_info, product_info} = merchantProductInfo;

    if(is404) return <NoMatch404/>
    // if(fetchMerchantPending) {
        // if(!merchantInfo[0] && match.hasOwnProperty('params')) {
        //     this.props.dispatch(fetchProductData(match.params.id))
        // }
        // return <Loading/>
    // } else
    return !isEmpty(merchantProductInfo)
          && merchantProductInfo 
          && (
    <>
    {/* <Navigation/> */}
    {/* <HamburgerMenu/> */}
    <section class="pt-100 pb-150 bg-light ecommerce_7">
      <div class="container px-xl-0">
        <div class="row justify-content-center text-center">
          <div class="col-xl-8 col-lg-10">
          <MerchantProductInfo 
            product_info={product_info}
            merchantName={merchant_info.merchant_name}
            aboutHost={merchant_info.merchant_about}
            placeId={product_info[0].place_id}
            themeColor={product_info[0].theme_color}
            // social links ( move to merchant info)
            linkWebsite={product_info[0].link_website}
            linkFacebook={product_info[0].link_facebook}
            linkTwitter={product_info[0].link_twitter}
            linkInstagram={product_info[0].link_instagram}
            linkLinkedin={product_info[0].link_linkedin}
            linkYoutube={product_info[0].link_youtube}
            />
          </div>
        </div>
      </div>
    </section>

    {/* <MerchantCheckoutBar    
    product_info={product_info}
    themeColor={product_info[0].theme_color}
    merchant_info={merchant_info}
    handleCheckout={this.handleCheckout}
    handleAppleGooglePay={this.handleAppleGooglePay}
    resetState={this.resetState}
    /> */}
    {/* <ProductFooter
    themeColor={merchantInfo.theme_color}
    /> */}
    {/* CHECKOUT BAR START */}
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
                        <button id="autobtn"
                        onClick={()=>this.setTrueCheckoutBar()}
                        // class="open_checkout color-white checkout-modal color-white btn bg-action-1 mx-15 md color-white radius8 px-20 f-20 text-adaptive product-btn"
                        class={ checkoutBarOpen ? 'open_checkout color-white checkout-modal color-white btn bg-action-1 mx-15 md color-white radius8 px-20 f-20 text-adaptive product-btn opened': 'open_checkout color-white checkout-modal color-white btn bg-action-1 mx-15 md color-white radius8 px-20 f-20 text-adaptive product-btn'}
                        style={{backgroundColor:product_info[0].theme_color}}>
                          Buy now
                        </button>
                        <div class={ checkoutBarOpen ? "checkout_mobile bg-modal type1 opened": "checkout_mobile bg-modal type1"}>
                            <div class="row inner-checkout">
                            <div class="col-xl-4 hide-mobile"></div>
                            <div class="col-xl-4 px-40 inner bg-light radius8">
                            <a 
                            class="close_checkout color-white"
                            onClick={()=>this.setFalseCheckoutBar()}
                            >
                              <i class="fas fa-times color-black"></i>
                            </a>
                            { <Elements>
                            <MerchantCheckoutFieldsForm 
                                product_info={product_info}
                                themeColor={product_info[0].theme_color}
                                merchant_info={merchant_info}
                                handleCheckout={this.handleCheckout}
                                handleAppleGooglePay={this.handleAppleGooglePay}
                                resetState={this.resetState}
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
                            onClick={()=>this.toggleCopyClick()}
                            class="color-white btn action-custom md color-white radius8 px-20 f-20 text-adaptive js-copy-btn" 
                            style={{color:product_info[0].theme_color}}
                        >
                          {!copyClick && <i class="fas fa-share pr-10" style={{color:product_info[0].theme_color}}></i>}
                          <span id="URL" style={{color:product_info[0].theme_color}}>
                            {copyClick ? 'Link copied!' : 'Share'}
                          </span>
						            </button>
					</div>
				</div>
			</div>
		</nav>
    </>
 
    </>
     )
    }
}

const mapStateToProps = state => {
    return {
      merchantProductInfo: state.merchantProductInfo,
      fetchMerchantPending: state.fetchMerchantPending,
      is404:state.show404
    };
  };

export default MerchantPageContainer = withRouter( connect(mapStateToProps)(MerchantPageContainer) )
