import React from 'react';

import ListingMainImage from '../components/ListingMainImage';
import NoMatch404 from '../components/NoMatch404';
// import MainImageAndCarousel from '../components/MainImageAndCarousel';
import axios from 'axios';
import uuid from 'uuid/v1';
import BuyButton from '../components/BuyButton';
// import BuyButtonHome from '../components/BuyButtonHome'
import BuyButtonFull from '../components/BuyButtonFull'
import PaymentSuccess from '../components/PaymentSuccess';
import PaymentFailure from '../components/PaymentFailure';
import MemberMsg from '../components/MemberMsg';
import {
  Elements
} from 'react-stripe-elements';
import {MONTHLY_MEMBERSHIP_PRICE} from '../components/monthly-price';

import ProductFooter from '../components/ProductFooter';
import Loading from '../components/Loading';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import {fetchProductData,resetProductData} from '../actions';
import ProductInfo from '../components/ProductInfo';

import CheckoutFieldsForm from '../components/CheckoutFieldsForm';
import CheckoutLoading from '../components/CheckoutLoading';
import CheckoutBar from '../components/CheckoutBar';
import HamburgerMenu from '../components/HamburgerMenu';
// import Checkout from '../components/Checkout';

// import Select from 'react-select';
// import {SUPER_EARLY_BIRD_50,
//     EARLY_BIRD_25,
//     EARLY_BIRD_10} from '../components/coupons';

const CHECKOUT_API = 'https://p7pruk5v4d.execute-api.us-west-2.amazonaws.com/dev/checkout'

class ListingProductPageContainer extends React.Component  { 

state = {
    open: false,
    payment:null,
    orderid:'',
    loading:null,
    member: null,
    numTickets: {
        value:1
    }
};

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

  handleCheckout=(token,phone,email,numTickets,date,prodid)=>{
    this.doCheckout(token,phone,email,numTickets,date,prodid)
  }
  
doCheckout = (token,phone,email,numTickets,date,prodid) => {
    
  const data = {
    stripeToken: token,
    skuid:this.props.productInfo.product_id,
    currency:this.props.currency || "CAD",
    quantity:numTickets,
    stripeEmail: email,
    type:'sku', // change this 
    prodid:this.props.productInfo.product_id,
    tokenid:uuid(),
    phone,
    // promoCode:this.props.coupon,
    // referralCode,
    productName:this.props.productInfo.product_name,
    date,
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
            // this.recordConversionAndCheckoutEvent(email)
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
            // this.recordCheckoutFailure(email)
          })
};

componentDidMount(){
    window.scrollTo(0, 0);
    const {match,productInfo} = this.props
    const {params} = match
    if(!productInfo){
        this.props.dispatch(fetchProductData(params.id))
    } 
}

componentWillUnmount(){
    this.props.dispatch(resetProductData())
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

  isExpired = (countdownEpoch)=>{
    const countDownDate = new Date(countdownEpoch*1000) 
    const now = new Date().getTime();
    const isExpired = (countDownDate - now < 0)? true: false
    return isExpired
  }

  getNumOfMiliSeconds = (flockDeadline) => {
    return flockDeadline *  24 * 60 * 60 * 1000
  }

  getTicketsSold=(flock_size,last_minute_tickets,sku_quantity,sku_price,regular_price)=>{
    if(sku_price === regular_price){
        return flock_size - sku_quantity
    } else {
        return flock_size + last_minute_tickets - sku_quantity
    }
  }
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

render(){
    const { open,orderid,payment,loading,member} = this.state;
    const {spaceStatus, productType, productInfo,fetchProductPending,match,is404, prodid, productId, themeColor, linkInstagram} = this.props;
    {this.showFullOrBuyButton()}
    window.scrollTo(0, 0);

    if(is404) return <NoMatch404/>
    // if(fetchProductPending) {
        // if(!productInfo && match.hasOwnProperty('params')) {
        //     this.props.dispatch(fetchProductData(match.params.id))
        // }
        // return <Loading/>
    // } else
        return productInfo && (
    <>
    {/* <Navigation/> */}
    {/* <HamburgerMenu/> */}
    <section class="pt-header-product bg-light ecommerce_32">
      <div class="container px-xl-0">
        <div class="row justify-content-center">
          <div class="col-12 pb-0">
          <ListingMainImage
            type={productInfo.product_type}
            productName={productInfo.product_name}
            pictureId={productInfo.picture_id}
            prodid={productInfo.product_id}
            // prodid={this.props.product_id}
            // productId={productInfo.product_id}
            />
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-6">
                        <ProductInfo 
                            productName={productInfo.product_name}
                            productDescription={productInfo.product_description}
                            availableHoursMonday={productInfo.available_hours_monday}
                            availableHoursTuesday={productInfo.available_hours_tuesday}
                            availableHoursWednesday={productInfo.available_hours_wednesday}
                            availableHoursThursday={productInfo.available_hours_thursday}
                            availableHoursFriday={productInfo.available_hours_friday}
                            availableHoursSaturday={productInfo.available_hours_saturday}
                            availableHoursSunday={productInfo.available_hours_sunday}
                            atTables={parseInt(productInfo.at_tables)}
                            inLounge={parseInt(productInfo.in_lounge)}
                            merchantName={productInfo.merchant_name}
                            aboutHost={productInfo.about_host}
                            type={productInfo.product_type}
                            location={productInfo.merchant_location}
                            flockSize={parseInt(productInfo.flock_size)}
                            skuQuantity={productInfo.sku_quantity}
                            price={productInfo.sku_price}
                            regularPrice={parseInt(productInfo.regular_price)}
                            // genre={'genre'}
                            merchantWebsite={productInfo.merchant_website}
                            merchantName={productInfo.merchant_name}
                            startTime={productInfo.start_time}
                            ticketsAvailable={productInfo.sku_quantity}
                            numStars={productInfo.num_stars}
                            numRatings={productInfo.num_ratings}
                            pictureId={productInfo.picture_id}
                            prodid={this.props.product_id}
                            spaceStatus={productInfo.space_status}
                            currency={productInfo.sku_currency.toUpperCase()}
                            skuid={productInfo.sku_id}
                            skuData={productInfo.sku_data}
                            quantity={this.state.numTickets}
                            amount={this.state.numTickets.value*productInfo.sku_price}
                            show={this.isExpired(parseInt(productInfo.countdown_epoch) )}
                            ticketsSold={this.getTicketsSold(
                                parseInt(productInfo.flock_size),
                                parseInt(productInfo.last_minute_tickets),
                                productInfo.sku_quantity,
                                productInfo.sku_price,
                                parseInt(productInfo.regular_price)
                            )}
                            flockSize={parseInt(productInfo.flock_size)}
                            ticketsAvailable={productInfo.sku_quantity}
                            activityDateEpoch={parseInt(productInfo.activity_date_epoch)}
                            flockDeadline={parseInt(productInfo.flock_deadline)}
                            startTime={productInfo.start_time}
                            endTime={productInfo.end_time}
                            countdownEpoch={parseInt(productInfo.countdown_epoch)}
                            lastMinuteTickets={parseInt(productInfo.last_minute_tickets)}
                            customGoing={parseInt(productInfo.custom_going)}
                            type={productInfo.product_type}
                            quantity={this.state.numTickets}
                            availableHoursMonday={productInfo.available_hours_monday}
                            availableHoursTuesday={productInfo.available_hours_tuesday}
                            availableHoursWednesday={productInfo.available_hours_wednesday}
                            availableHoursThursday={productInfo.available_hours_thursday}
                            availableHoursFriday={productInfo.available_hours_friday}
                            availableHoursSaturday={productInfo.available_hours_saturday}
                            availableHoursSunday={productInfo.available_hours_sunday}
                            skuQuantity={productInfo.sku_quantity}
                            spaceStatus={productInfo.space_status}
                            placeId={productInfo.merchant_placeid}
                            themeColor={productInfo.theme_color}
                            linkWebsite={productInfo.link_website}
                            linkFacebook={productInfo.link_facebook}
                            linkTwitter={productInfo.link_twitter}
                            linkInstagram={productInfo.link_instagram}
                            linkLinkedin={productInfo.link_linkedin}
                            linkYoutube={productInfo.link_youtube}
                            />
          </div>
          <div class="col-xl-6 col-lg-12 col-md-12 col-sm-10 fixed-desktop hide-mobile hide-ipad">
          <div class="mt-20 mt-lg-0 text-lg-left aos-animate order-2 pr-0 top-2rem position-sticky pl-30-desktop">
            <div class="mt-lg-0 order-2 order-lg-0 aos-animate checkout-desktop">
            { (spaceStatus !=='Full' ) &&<Elements
            >
              <CheckoutFieldsForm 
                handleCheckout={this.handleCheckout} 
                amount={this.props.amount}
                currency={this.props.currency}
                productName={this.props.productName}
                productType={this.props.productType}
                type={this.props.productType}
                skuid={this.props.skuid}
                quantity={this.props.quantity}
                prodid={this.props.prodid}
                // coupon={this.props.coupon}
                handleAppleGooglePay={this.handleAppleGooglePay}
                skuQuantity={this.props.skuQuantity}
                // skuData = { skuData? skuData : ''}
                productName={productInfo.product_name}
                productDescription={productInfo.product_description}
                availableHoursMonday={productInfo.available_hours_monday}
                availableHoursTuesday={productInfo.available_hours_tuesday}
                availableHoursWednesday={productInfo.available_hours_wednesday}
                availableHoursThursday={productInfo.available_hours_thursday}
                availableHoursFriday={productInfo.available_hours_friday}
                availableHoursSaturday={productInfo.available_hours_saturday}
                availableHoursSunday={productInfo.available_hours_sunday}
                atTables={parseInt(productInfo.at_tables)}
                inLounge={parseInt(productInfo.in_lounge)}
                merchantName={productInfo.merchant_name}
                aboutHost={productInfo.about_host}
                type={productInfo.product_type}
                location={productInfo.merchant_location}
                flockSize={parseInt(productInfo.flock_size)}
                skuQuantity={productInfo.sku_quantity}
                price={productInfo.sku_price}
                regularPrice={parseInt(productInfo.regular_price)}
                // genre={'genre'}
                merchantWebsite={productInfo.merchant_website}
                merchantName={productInfo.merchant_name}
                startTime={productInfo.start_time}
                ticketsAvailable={productInfo.sku_quantity}
                numStars={productInfo.num_stars}
                numRatings={productInfo.num_ratings}
                pictureId={productInfo.picture_id}
                prodid={productInfo.product_id}
                spaceStatus={productInfo.space_status}
                currency={productInfo.sku_currency.toUpperCase()}
                skuid={productInfo.sku_id}
                skuData={productInfo.sku_data}
                quantity={this.state.numTickets}
                amount={this.state.numTickets.value*productInfo.sku_price}
                show={this.isExpired(parseInt(productInfo.countdown_epoch) )}
                ticketsSold={this.getTicketsSold(
                    parseInt(productInfo.flock_size),
                    parseInt(productInfo.last_minute_tickets),
                    productInfo.sku_quantity,
                    productInfo.sku_price,
                    parseInt(productInfo.regular_price)
                )}
                flockSize={parseInt(productInfo.flock_size)}
                ticketsAvailable={productInfo.sku_quantity}
                activityDateEpoch={parseInt(productInfo.activity_date_epoch)}
                flockDeadline={parseInt(productInfo.flock_deadline)}
                startTime={productInfo.start_time}
                endTime={productInfo.end_time}
                countdownEpoch={parseInt(productInfo.countdown_epoch)}
                lastMinuteTickets={parseInt(productInfo.last_minute_tickets)}
                customGoing={parseInt(productInfo.custom_going)}
                type={productInfo.product_type}
                quantity={this.state.numTickets}
                availableHoursMonday={productInfo.available_hours_monday}
                availableHoursTuesday={productInfo.available_hours_tuesday}
                availableHoursWednesday={productInfo.available_hours_wednesday}
                availableHoursThursday={productInfo.available_hours_thursday}
                availableHoursFriday={productInfo.available_hours_friday}
                availableHoursSaturday={productInfo.available_hours_saturday}
                availableHoursSunday={productInfo.available_hours_sunday}
                skuQuantity={productInfo.sku_quantity}
                spaceStatus={productInfo.space_status}
                themeColor={productInfo.theme_color}
                

                quantity={ {"value":1}}
                currency ={'CAD'}
              />
            </Elements>}
            { (spaceStatus !=='Full' ) && loading && <CheckoutLoading/>}
            { ( (spaceStatus !=='Full' ) && payment===true && orderid) && <PaymentSuccess
            orderid={orderid}
            />}
            { ( (spaceStatus !=='Full' ) && member===true && payment===false) && 
            <MemberMsg
            memberExists={member}
            />}
            {( (spaceStatus !=='Full' ) && member===false && payment===false) && <PaymentFailure
            />}
            { (spaceStatus !=='Full' ) && (productType ==='subscription') && payment===null && !loading && 
              <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
              {/* Your purchase is protected. <br></br><b>Cancel anytime</b>. No commitment. */}
              {/* <Link 
              onClick={() => recordCancellationClickAndPageView(props)}
              className='Link__checkout' to='/cancellation-policy'>
                cancellation policy
              </Link> */}
              </div>
            }
            { (spaceStatus !=='Full') && (productType ==='private') && payment===null && !loading && 
              <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
              You will only be charged once. <br></br><b>Immediate access</b>. No commitment.
              {/* <Link 
              onClick={() => recordCancellationClickAndPageView(props)}
              className='Link__checkout' to='/cancellation-policy'>
                cancellation policy
              </Link> */}
              </div>
            }
            { payment===null && !loading && 
              <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
              Your purchase is protected. <br></br><b>Cancel anytime</b>. No commitment.
              {/* <Link 
              onClick={() => recordCancellationClickAndPageView(props)}
              className='Link__checkout' to='/cancellation-policy'>
                cancellation policy
              </Link> */}
              </div>
            }
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    <CheckoutBar
    productName={productInfo.product_name}
    productDescription={productInfo.product_description}
    availableHoursMonday={productInfo.available_hours_monday}
    availableHoursTuesday={productInfo.available_hours_tuesday}
    availableHoursWednesday={productInfo.available_hours_wednesday}
    availableHoursThursday={productInfo.available_hours_thursday}
    availableHoursFriday={productInfo.available_hours_friday}
    availableHoursSaturday={productInfo.available_hours_saturday}
    availableHoursSunday={productInfo.available_hours_sunday}
    atTables={parseInt(productInfo.at_tables)}
    inLounge={parseInt(productInfo.in_lounge)}
    merchantName={productInfo.merchant_name}
    aboutHost={productInfo.about_host}
    type={productInfo.product_type}
    location={productInfo.merchant_location}
    flockSize={parseInt(productInfo.flock_size)}
    skuQuantity={productInfo.sku_quantity}
    price={productInfo.sku_price}
    regularPrice={parseInt(productInfo.regular_price)}
    // genre={'genre'}
    merchantWebsite={productInfo.merchant_website}
    merchantName={productInfo.merchant_name}
    startTime={productInfo.start_time}
    ticketsAvailable={productInfo.sku_quantity}
    numStars={productInfo.num_stars}
    numRatings={productInfo.num_ratings}
    pictureId={productInfo.picture_id}
    prodid={productInfo.product_id}
    currency={productInfo.sku_currency.toUpperCase()}
    skuid={productInfo.sku_id}
    skuData={productInfo.sku_data}
    quantity={this.state.numTickets}
    amount={this.state.numTickets.value*productInfo.sku_price}
    show={this.isExpired(parseInt(productInfo.countdown_epoch) )}
    ticketsSold={this.getTicketsSold(
        parseInt(productInfo.flock_size),
        parseInt(productInfo.last_minute_tickets),
        productInfo.sku_quantity,
        productInfo.sku_price,
        parseInt(productInfo.regular_price)
    )}
    flockSize={parseInt(productInfo.flock_size)}
    ticketsAvailable={productInfo.sku_quantity}
    activityDateEpoch={parseInt(productInfo.activity_date_epoch)}
    flockDeadline={parseInt(productInfo.flock_deadline)}
    startTime={productInfo.start_time}
    endTime={productInfo.end_time}
    countdownEpoch={parseInt(productInfo.countdown_epoch)}
    lastMinuteTickets={parseInt(productInfo.last_minute_tickets)}
    customGoing={parseInt(productInfo.custom_going)}
    type={productInfo.product_type}
    quantity={this.state.numTickets}
    availableHoursMonday={productInfo.available_hours_monday}
    availableHoursTuesday={productInfo.available_hours_tuesday}
    availableHoursWednesday={productInfo.available_hours_wednesday}
    availableHoursThursday={productInfo.available_hours_thursday}
    availableHoursFriday={productInfo.available_hours_friday}
    availableHoursSaturday={productInfo.available_hours_saturday}
    availableHoursSunday={productInfo.available_hours_sunday}
    skuQuantity={productInfo.sku_quantity}
    spaceStatus={productInfo.space_status}
    productType={productInfo.product_type}
    themeColor={productInfo.theme_color}
    onHomePage={false}
    
    />
    {/* <ProductFooter
    themeColor={productInfo.theme_color}
    /> */}
    </>
     )
    }
}

const mapStateToProps = state => {
    return {
      productInfo: state.product,
      fetchProductPending: state.fetchProductPending,
      is404:state.show404
    };
  };

export default ListingProductPageContainer = withRouter( connect(mapStateToProps)(ListingProductPageContainer) )
