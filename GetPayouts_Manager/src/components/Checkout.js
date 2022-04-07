import React from 'react'
import axios from 'axios';
import uuid from 'uuid/v1';
import BuyButton from './BuyButton';
// import BuyButtonHome from './BuyButtonHome'
import BuyButtonFull from './BuyButtonFull'
import CheckoutFieldsForm from './CheckoutFieldsForm';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';
import MemberMsg from './MemberMsg';
import Modal from 'react-responsive-modal';
import CheckoutLoading from './CheckoutLoading';
import Disclaimer from './Disclaimer';
import JoinWaitList from './JoinWaitList';
import ReactGA from 'react-ga';
import {
  Elements
} from 'react-stripe-elements';
import {MONTHLY_MEMBERSHIP_PRICE} from './monthly-price';

const CHECKOUT_API = 'https://p7pruk5v4d.execute-api.us-west-2.amazonaws.com/dev/checkout'

export default class Checkout extends React.Component {
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

  handleCheckout=(token,phone,email,numTickets,date,prodid)=>{
    this.doCheckout(token,phone,email,numTickets,date,prodid)
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
      price={this.props.price}
      themeColor={this.props.themeColor}
      />
    }
  }
  
  render() {
    const { open,orderid,payment,loading,member} = this.state;
    const {skuData, spaceStatus, productType, themeColor} = this.props;
    const onHomePage = (this.props.productName === 'HOMEPAGE' || this.props.onHomePage) ? true : false;
    return (
      <>
      {/* {
      onHomePage ? true : this.props.spaceStatus==='Available' 
      && 
      <BuyButton
      onOpenModal={this.onOpenModal}
      />
      }
      {
      onHomePage ? true : this.props.spaceStatus==='Soon' 
      && 
      <BuyButton
      onOpenModal={this.onOpenModal}
      />}
      {
      onHomePage ? true : this.props.spaceStatus==='Home'
      && 
      <BuyButtonHome
      onOpenModal={this.onOpenModal}
      />} */}
      {this.showFullOrBuyButton()}
      {/* {onHomePage ? true : this.props.spaceStatus==='Full'
      &&
      <BuyButtonFull
      onOpenModal={this.onOpenModal}
      />} */}
      <Modal 
        className="bg-white"
        open={open}
        onClose={this.onCloseModal}
        center
        themeColor={themeColor}
        >
        { spaceStatus ==='Full' && 
        <JoinWaitList
          productName={this.props.productName}
          prodid={this.props.prodid}
        /> }
        { (spaceStatus !=='Full' || onHomePage) && <Elements>
          <CheckoutFieldsForm
            handleCheckout={this.handleCheckout} 
            amount={onHomePage ? MONTHLY_MEMBERSHIP_PRICE:  this.props.amount}
            currency={onHomePage ?'CAD' : this.props.currency}
            productName={onHomePage ? 'HOMEPAGE' : this.props.productName}
            productType={onHomePage ? 'HOMEPAGE' : this.props.productType}
            type={onHomePage ? 'HOMEPAGE' : this.props.productType}
            skuid={onHomePage ? 'HOMEPAGE' : this.props.skuid}
            quantity={onHomePage ? 1 : this.props.quantity}
            prodid={onHomePage ? 'HOMEPAGE' : this.props.prodid}
            // coupon={this.props.coupon}
            handleAppleGooglePay={this.handleAppleGooglePay}
            skuQuantity={onHomePage ? 1 : this.props.skuQuantity}
            onHomePage = {onHomePage}
            skuData = { skuData? skuData : ''}
            themeColor={themeColor}
          />
        </Elements>}
        { (spaceStatus !=='Full' || onHomePage) && loading && <CheckoutLoading/>}
        { ( (spaceStatus !=='Full' || onHomePage) && payment===true && orderid) && <PaymentSuccess
        orderid={orderid}
        />}
        { ( (spaceStatus !=='Full' || onHomePage) && member===true && payment===false) && 
        <MemberMsg
        memberExists={member}
        />}
        {( (spaceStatus !=='Full' || onHomePage) && member===false && payment===false) && <PaymentFailure
        />}
        { (spaceStatus !=='Full' || onHomePage) && (productType ==='subscription') && payment===null && !loading && 
          <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
          Your purchase is protected. <br></br><b>Cancel anytime</b>. No commitment.
          {/* <Link 
          onClick={() => recordCancellationClickAndPageView(props)}
          className='Link__checkout' to='/cancellation-policy'>
            cancellation policy
          </Link> */}
          </div>
        }
        { (spaceStatus !=='Full' || onHomePage) && (productType ==='private') && payment===null && !loading && 
          <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
          You will only be charged once. <br></br><b>Immediate access</b>. No commitment.
          {/* <Link 
          onClick={() => recordCancellationClickAndPageView(props)}
          className='Link__checkout' to='/cancellation-policy'>
            cancellation policy
          </Link> */}
          </div>
        } 
        { onHomePage && payment===null && !loading && 
          <div className='Disclaimer__checkout' style={{textAlign: 'center'}}>
          You won't be charged until your 7-day trial expires. <br></br><b>Cancel anytime</b>. No commitment.
          {/* <Link 
          onClick={() => recordCancellationClickAndPageView(props)}
          className='Link__checkout' to='/cancellation-policy'>
            cancellation policy
          </Link> */}
          </div>
        }
      </Modal>
      </>
    )
  }
}