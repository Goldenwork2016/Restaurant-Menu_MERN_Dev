import React from 'react';
import { connect } from 'react-redux';
import { getMatchingProductBasedOnPriceId, getMatchingPriceOption } from '../utils/utils';
import { removeCartItem, add2CartQty, doCheckout } from '../actions';
import { css } from '@emotion/core';
import { PulseLoader} from 'react-spinners';
import { HashLoader} from 'react-spinners';
const override = css`
	margin: 0 auto;
	text-align:center;
	background-color: var(--theme-color);
	padding: 40px;
	border-radius: 100%;
`;

const Cart = ({ cart_items_with_qty,
	merchantProductInfo,
	add2CartQty,
	removeCartItem,
	doCheckout,
	checkoutPending,
	checkoutError })=>{
	const {product_info, merchant_info } = merchantProductInfo;

	const getCartItems = () => cart_items_with_qty.map( cart_item_with_qty  =>{
		const {price_id} = cart_item_with_qty;
		const matching_product = getMatchingProductBasedOnPriceId(product_info, price_id);

		const { prices, product } = matching_product;
		const price_option = getMatchingPriceOption(prices.data, price_id);
		let cartName = '';
        let cartNickname = '';
        let cartPrice = '';
		let cartItemDefaultQtyValue;

		if ( price_option
			 && price_option.hasOwnProperty('metadata')
			 && price_option.metadata.hasOwnProperty('description')
		){
			cartName = `${product.name}`
            cartNickname = `${price_option.metadata.description + ' - '}`
            cartPrice = `${price_option.unit_amount/100}`
		} else {
			cartName = `${product.name}`
            cartPrice = `${price_option.unit_amount/100}`
		}

		/// qty dropdown ///
		const setQtyHandler = (qtyValue)=>{
			add2CartQty({
				"price_id": price_id,
				"quantity": qtyValue,
				"description":price_option.metadata.description
			  })
		}
		
		const getQtyOptions = () => {
			const qty_options_dropdown = [];
			const quantity = price_option.metadata.hasOwnProperty('quantity') ?
			price_option.metadata.quantity : 0;
			if (!quantity) return qty_options_dropdown;
		
			for (let index = 1; index <= quantity; index++) {
			  qty_options_dropdown.push(<option
			  key={`${index}${price_id}`}
			  value={index}
			  >
				{index}
			  </option>)
			}
			return qty_options_dropdown;
		}

		cart_items_with_qty.forEach(cart_item_with_qty=>{
			if(cart_item_with_qty.price_id === price_id){
				cartItemDefaultQtyValue = cart_item_with_qty.quantity;
			}
		})

		return (
			<div key={price_option.id}>
				<div class="text-dark-1 py-2 d-inline-block col-12 px-10">
						{product.images && <img class="img-forced-cart" style={{width: '150px' }}src={product.images[0]} />}
                        <br></br>
                        <br></br>
						<span class="fs-1 fw-bolder">{cartName}</span><br></br><span class="fs-5 fw-5">{cartNickname}</span><span class="fs-5 fw-bolder">${cartPrice}</span>
                            <br></br>
                            <button
							class="btn button-outline-action-1 text-decoration-underline fs-5 pl-0"
							onClick={(e)=> removeCartItem(price_option.id)}
							>
								remove
							</button>
							<select 
							class="btn btn-outline-action-1 d-inline-flex align-items-center me-4 quantity-dropdown"
							style={{maxWidth:"80px"}}
							defaultValue={cartItemDefaultQtyValue}
							onChange={(e) => setQtyHandler(e.target.value)}
							>
								{getQtyOptions()}
							</select>
                        <div class="mt-2 mb-2 border-bottom border-dark-3"></div>
				</div>
			</div>)
	})
	const proceed_2_checkout_class = cart_items_with_qty.length >0 ? "btn btn-action-1 align-items-center fs-4 w-100" : "btn btn-action-1 align-items-center me-4 fs-4 disabled w-100";

	const checkoutHandler = async () => {
		const { merchant_id } = merchant_info;
		doCheckout(cart_items_with_qty, merchant_id);
	};

    return(
        <>
        {cart_items_with_qty.length !==0 && getCartItems()}
		<div class="text-dark-1 py-2 d-inline-block col-12 px-10">
		<div class="mb-4 bg-light text-dark-1 notification p-4">
			<span class="fs-5">Free shipping on orders over $20! Use code 'FREESHIP'!</span>
		</div>
		</div>
        <div class="text-dark-1 py-2 d-inline-block col-12 px-10 text-center">
        {!checkoutPending && 
		<button 
		onClick={(e)=> checkoutHandler()}
		target="_blank"
		class={proceed_2_checkout_class}>
            Go to Checkout
        </button>
		}
		{checkoutPending &&   <div>
        <HashLoader
          css={override}
          sizeUnit={"px"}
          size={20}
          color={"#ffffff"}
        /> 
        </div>
		}
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
	  cart_items_with_qty: state.cart_items_with_qty,
      merchantProductInfo: state.merchantProductInfo,
	  checkoutPending: state.checkoutPending,
	  checkoutError: state.checkoutError,
    };
  };

const mapDispatchToProps = {
	add2CartQty,
	removeCartItem,
	doCheckout
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
