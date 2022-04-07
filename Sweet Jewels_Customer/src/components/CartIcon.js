import React from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

const CartIcon = ({cart_items_with_qty})=>{
    const num_cart_items_qty = cart_items_with_qty.length > 0 ? cart_items_with_qty.length : '';
    return(
    <a href="#" class="btn btn-width-equal-height rounded-circle"
        data-bs-toggle="offcanvas" data-bs-target="#custom-id-3e86u4fq">
        <svg style={{height: "20px"}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-bag" class="svg-inline--fa fa-shopping-bag fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="var(--theme-color)" d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"></path>
        </svg>
        {cart_items_with_qty.length > 0 && <span class="cart-notification">{num_cart_items_qty}</span>}
    </a>
    )
}

const mapStateToProps = state => {
    return {
        cart_items_with_qty: state.cart_items_with_qty,
    };
  };

const mapDispatchToProps = {
	
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
