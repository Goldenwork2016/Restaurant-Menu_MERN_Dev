import React from 'react';
// import Checkout from './Checkout';
// import BookATour from './BookATour';
// import {isMobile} from 'react-device-detect';
import Checkout from './Checkout';

const BuyButtonDesktop=(props)=>{
    return (
        <>
        <div className="MembershipDatesForm__root__1_G95 ListingPage__membershipForm__2HAAC">
            <div
                className="MembershipDatesForm__submitButtonWrapper__2g8iI ListingPage__membershipDatesSubmitButtonWrapper__3NxCi">
                {/* BEFORE<button className="Button__primaryButton__3Tp6d" type="submit">
                    <span>Buy tickets</span>
                </button> */}
                <div>
                    {/* <Checkout
                    skuid = {props.skuid}
                    currency ={props.currency}
                    quantity={props.quantity.value}
                    amount={props.quantity.value * props.price}
                    prodid={props.prodid}
                    productName={props.productName}
                    coupon={props.coupon}
                    skuQuantity={props.skuQuantity}
                    spaceStatus={props.spaceStatus}
                    /> */}
                        <Checkout
                        skuid = {props.skuid}
                        currency ={props.currency}
                        quantity={props.quantity.value}
                        amount={props.quantity.value * props.price}
                        prodid={props.prodid}
                        productName={props.productName}
                        skuQuantity={props.skuQuantity}
                        spaceStatus={props.spaceStatus}
                        productType={props.productType}
                        productType={props.type}
                        onHomePage={props.onHomePage}
                        skuData={props.skuData}
                        />
                </div>
            </div>
            {props.spaceStatus==='Available' && props.type==='spaces' &&<div className="MembershipDatesForm__smallPrint__2gdnX">
                <span>Try it for free for 7 days!</span>
            </div>}
            {props.spaceStatus==='Full' &&<div className="MembershipDatesForm__smallPrint__2gdnX">
                <span>No credit card required</span>
            </div>}
        </div> 
        {/* <div className="ListingPage__responseRateAndPopularity__ijbFT">
        <div className="ListingPage__viewCountRow__3wGo5">
            <div className="ListingPage__isPopularRow__3AZfw">
                <span>This is a popular activity.</span>
            </div>
            
        </div>
        <div
            className="ListingPage__responseRateAndPopularityTableRowPopular__1xVQk">
        </div>
        <div
            className="ListingPage__responseRateAndPopularityTableRowPopular__1xVQk">
        </div>
        </div>       */}
    </>                                    
    )
}
export default BuyButtonDesktop