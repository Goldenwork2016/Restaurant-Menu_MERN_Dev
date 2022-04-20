import React from 'react';
import BookATourButton from './BookATourButton'
import Checkin from './Checkin'
import BookATourButtonFull from './BookATourButtonFull'
import Modal from 'react-responsive-modal';
import CheckoutLoading from './CheckoutLoading';

export default class BookATour extends React.Component {
  state = {
    open: false,
    loading:null
}
  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
      // if(this.state.payment || this.state.payment===false) {
      //   this.refreshPage()
      // }
  };

  render() {
    const {loading, open} = this.state
    return (
      <>
      {this.props.spaceStatus!=='Soon' && 
      <BookATourButton
      onOpenModal={this.onOpenModal}
      />}
      {this.props.spaceStatus==='Soon' &&
      <BookATourButtonFull
      onOpenModal={this.onOpenModal}
      />}
      <Modal 
        open={open}
        onClose={this.onCloseModal}
        center
        >
          <Checkin 
          productName={this.props.productName}
          productId={this.props.productId}
          />
        {loading && <CheckoutLoading/>}
        {/* {payment && <PaymentSuccess
        orderid={orderid}
        />}
        {payment===false && <PaymentFailure
        />}
        {payment===null && !loading && <Disclaimer productName={this.props.productName}/>} */}
      </Modal> 
      </>
    )
  }
}