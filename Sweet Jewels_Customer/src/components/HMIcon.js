import React from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

const HMIcon = ({cart_items_with_qty})=>{
    // const num_cart_items_qty = cart_items_with_qty.length > 0 ? cart_items_with_qty.length : '';
    return(
    <a class="btn btn-width-equal-height rounded-circle"
        data-bs-toggle="offcanvas" data-bs-target="#custom-id-3e86u4fs">
        <svg style={{height: "20px"}} width="20" height="20" viewBox="0 0 16 16" fill="red"
            xmlns="http://www.w3.org/2000/svg" class="fill-dark-1">
            <path
                d="M2.00016 5.33333H14.0002C14.177 5.33333 14.3465 5.2631 14.4716 5.13807C14.5966 5.01305 14.6668 4.84348 14.6668 4.66667C14.6668 4.48986 14.5966 4.32029 14.4716 4.19526C14.3465 4.07024 14.177 4 14.0002 4H2.00016C1.82335 4 1.65378 4.07024 1.52876 4.19526C1.40373 4.32029 1.3335 4.48986 1.3335 4.66667C1.3335 4.84348 1.40373 5.01305 1.52876 5.13807C1.65378 5.2631 1.82335 5.33333 2.00016 5.33333ZM14.0002 10.6667H2.00016C1.82335 10.6667 1.65378 10.7369 1.52876 10.8619C1.40373 10.987 1.3335 11.1565 1.3335 11.3333C1.3335 11.5101 1.40373 11.6797 1.52876 11.8047C1.65378 11.9298 1.82335 12 2.00016 12H14.0002C14.177 12 14.3465 11.9298 14.4716 11.8047C14.5966 11.6797 14.6668 11.5101 14.6668 11.3333C14.6668 11.1565 14.5966 10.987 14.4716 10.8619C14.3465 10.7369 14.177 10.6667 14.0002 10.6667ZM14.0002 7.33333H2.00016C1.82335 7.33333 1.65378 7.40357 1.52876 7.5286C1.40373 7.65362 1.3335 7.82319 1.3335 8C1.3335 8.17681 1.40373 8.34638 1.52876 8.4714C1.65378 8.59643 1.82335 8.66667 2.00016 8.66667H14.0002C14.177 8.66667 14.3465 8.59643 14.4716 8.4714C14.5966 8.34638 14.6668 8.17681 14.6668 8C14.6668 7.82319 14.5966 7.65362 14.4716 7.5286C14.3465 7.40357 14.177 7.33333 14.0002 7.33333Z">
            </path>
        </svg>
        {/* {cart_items_with_qty.length > 0 && <span class="cart-notification">{num_cart_items_qty}</span>} */}
    </a>
    )
}

const mapStateToProps = state => {
    return {
        // cart_items_with_qty: state.cart_items_with_qty,
    };
  };

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(HMIcon);
