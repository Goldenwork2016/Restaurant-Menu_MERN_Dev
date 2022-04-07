import React from 'react';
import {PaymentRequestButtonElement,injectStripe} from 'react-stripe-elements';
import axios from 'axios';
import uuid from 'uuid/v1';
const CHECKOUT_API = 'https://p7pruk5v4d.execute-api.us-west-2.amazonaws.com/dev/checkout'

class PaymentRequestForm extends React.Component {
  constructor(props) {
    super(props);

    const paymentRequest = props.stripe.paymentRequest({
      country: 'CA',
      currency: props.currency.toLowerCase(),
      total: {
        label: `Monthly Subscription (per seat)`,
        amount: props.amount,
      },
      requestPayerEmail: true,
      requestPayerPhone: true,
      // requestPayerName: true,
    });
  
    paymentRequest.on('token', ({complete, token, ...data}) => {
      const postData = {
        stripeToken: token.id,
        skuid:this.props.skuid,
        currency:this.props.currency,
        quantity:this.props.numberOfTicketsSelected,
        stripeEmail: data.payerEmail,
        type:'sku', // change this
        prodid:this.props.prodid,
        tokenid:uuid(),
        phone:data.payerPhone,
        // promoCode: undefined,
        // referralCode:this.props.referralCode,
        productName:this.props.productName
      }
      
      axios.post(CHECKOUT_API,postData)
            .then(res=>{
                // this.recordConversionAndCheckoutEvent(email)
                this.props.handlePaymentRequestBtn(
                  data.payerEmail,
                  res.data.orderid,
                  true)
                complete('success')
            }).catch(err=>{
                // this.recordCheckoutFailure(email)
                this.props.handlePaymentRequestBtn(
                  data.payerEmail,
                  undefined,
                  false)
                complete('fail')
            })
    });

    paymentRequest.canMakePayment().then((result) => {
      this.setState({canMakePayment: result});
    });

    this.state = {
      canMakePayment: false,
      paymentRequest,
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <>
      <div className="divider"><span></span><span>or</span><span></span></div>
      <PaymentRequestButtonElement
        className="PaymentRequestButton"
        // onClick={this.handleClick}
        paymentRequest={this.state.paymentRequest}
        style={{
          paymentRequestButton: {
            theme: 'dark',
            height: '45px',
            panelLabel: 'Pay with Google Pay'
          },
        }}
      />
      </>
    ) : null;
  }
}

export default injectStripe(PaymentRequestForm)