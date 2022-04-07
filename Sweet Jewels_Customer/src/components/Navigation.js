import React from 'react';
import Cart from './Cart';
import CartIcon from './CartIcon';
import HMIcon from './HMIcon';

// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../custom/Logo';
import NavItems from '../custom/NavItems';
import SocialLinks from '../custom/SocialLinks';

const Navigation = (props)=>{
    return(
        <>
		{/* <!-- Promo Banner --> */}
		<nav class="bg-bg-4 sticky-top py-2 py-lg-2">
			<div class="d-lg-block">
				<div class="container">
					<div class="row align-items-center justify-content-between">
						{/* <div class="col-2">
						</div> */}
						<div class="text-center d-flex justify-content-center col-6 w-100">
							<Link to="#" class="fw-bold mx-4 text-light-1">
								Free shipping with promo code 'FREESHIP' on orders over $20!
							</Link>
						</div>
						{/* <div class="d-flex align-items-center justify-content-end col-2">
						</div> */}
					</div>
				</div>
			</div>
		</nav>
		{/* <!-- Navigation Mobile --> */}
		<nav class="bg-bg-3 sticky-top py-2">
			<div class="d-lg-none d-block">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-3">
							<HMIcon />
						</div>
						<div class="col-6 text-center">
						<Link to="/">
							<Logo/>
						</Link>
						</div>
						<div class="col-3 text-right">
						{/* MOBILE SHOPPING CART ICON */}
						<CartIcon />
						</div>
					</div>
				</div>
			</div>
			<div class="offcanvas offcanvas-end bg-bg-3" data-bs-scroll="true" tabindex="-1" id="custom-id-3e86u4fq" aria-labelledby="offcanvasWithBothOptionsLabel"  style={{overflow: 'scroll'}}>
				<div class="offcanvas-header">
					<Link to="/">
						<Logo/>
					</Link>
					<Link to="#" class="btn btn-sm btn-width-equal-height  btn-light-1" data-bs-dismiss="offcanvas">
						<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="fill-dark-2">
							<path
								d="M8.9398 8L13.1398 3.80667C13.2653 3.68113 13.3359 3.51087 13.3359 3.33333C13.3359 3.1558 13.2653 2.98554 13.1398 2.86C13.0143 2.73447 12.844 2.66394 12.6665 2.66394C12.4889 2.66394 12.3187 2.73447 12.1931 2.86L7.9998 7.06L3.80646 2.86C3.68093 2.73447 3.51066 2.66394 3.33313 2.66394C3.1556 2.66394 2.98533 2.73447 2.8598 2.86C2.73426 2.98554 2.66374 3.1558 2.66374 3.33333C2.66374 3.51087 2.73426 3.68113 2.8598 3.80667L7.0598 8L2.8598 12.1933C2.79731 12.2553 2.74771 12.329 2.71387 12.4103C2.68002 12.4915 2.6626 12.5787 2.6626 12.6667C2.6626 12.7547 2.68002 12.8418 2.71387 12.9231C2.74771 13.0043 2.79731 13.078 2.8598 13.14C2.92177 13.2025 2.99551 13.2521 3.07675 13.2859C3.15798 13.3198 3.24512 13.3372 3.33313 13.3372C3.42114 13.3372 3.50827 13.3198 3.58951 13.2859C3.67075 13.2521 3.74449 13.2025 3.80646 13.14L7.9998 8.94L12.1931 13.14C12.2551 13.2025 12.3288 13.2521 12.4101 13.2859C12.4913 13.3198 12.5785 13.3372 12.6665 13.3372C12.7545 13.3372 12.8416 13.3198 12.9228 13.2859C13.0041 13.2521 13.0778 13.2025 13.1398 13.14C13.2023 13.078 13.2519 13.0043 13.2857 12.9231C13.3196 12.8418 13.337 12.7547 13.337 12.6667C13.337 12.5787 13.3196 12.4915 13.2857 12.4103C13.2519 12.329 13.2023 12.2553 13.1398 12.1933L8.9398 8Z"
								fill="#0C111E">
							</path>
						</svg>
					</Link>
				</div>
				{/* SHOPPING CART START */}
				<Cart />
				{/* SHOPPING CART END */}
			</div>
			{/* HAMBURGER MENU START */}
			<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="custom-id-3e86u4fs" aria-labelledby="offcanvasWithBothOptionsLabel">
				<div class="offcanvas-header">
					<Link to="/">
						<Logo/>
					</Link>
					<Link to="#" class="btn btn-sm btn-width-equal-height  btn-light-1" data-bs-dismiss="offcanvas">
						<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="fill-dark-2">
							<path
								d="M8.9398 8L13.1398 3.80667C13.2653 3.68113 13.3359 3.51087 13.3359 3.33333C13.3359 3.1558 13.2653 2.98554 13.1398 2.86C13.0143 2.73447 12.844 2.66394 12.6665 2.66394C12.4889 2.66394 12.3187 2.73447 12.1931 2.86L7.9998 7.06L3.80646 2.86C3.68093 2.73447 3.51066 2.66394 3.33313 2.66394C3.1556 2.66394 2.98533 2.73447 2.8598 2.86C2.73426 2.98554 2.66374 3.1558 2.66374 3.33333C2.66374 3.51087 2.73426 3.68113 2.8598 3.80667L7.0598 8L2.8598 12.1933C2.79731 12.2553 2.74771 12.329 2.71387 12.4103C2.68002 12.4915 2.6626 12.5787 2.6626 12.6667C2.6626 12.7547 2.68002 12.8418 2.71387 12.9231C2.74771 13.0043 2.79731 13.078 2.8598 13.14C2.92177 13.2025 2.99551 13.2521 3.07675 13.2859C3.15798 13.3198 3.24512 13.3372 3.33313 13.3372C3.42114 13.3372 3.50827 13.3198 3.58951 13.2859C3.67075 13.2521 3.74449 13.2025 3.80646 13.14L7.9998 8.94L12.1931 13.14C12.2551 13.2025 12.3288 13.2521 12.4101 13.2859C12.4913 13.3198 12.5785 13.3372 12.6665 13.3372C12.7545 13.3372 12.8416 13.3198 12.9228 13.2859C13.0041 13.2521 13.0778 13.2025 13.1398 13.14C13.2023 13.078 13.2519 13.0043 13.2857 12.9231C13.3196 12.8418 13.337 12.7547 13.337 12.6667C13.337 12.5787 13.3196 12.4915 13.2857 12.4103C13.2519 12.329 13.2023 12.2553 13.1398 12.1933L8.9398 8Z"
								fill="#0C111E">
							</path>
						</svg>
					</Link>
				</div>
				<div class="offcanvas-body">
				<div class="text-left d-block justify-content-center">
						<NavItems/>
					</div>
					<SocialLinks/>
				</div>
				<div class="d-flex align-items-center justify-content-end col-2">
				</div>
			</div>
			{/* HAMBURGER MENU END */}
			{/* <!-- Navigation Desktop --> */}
			<div class="d-none d-lg-block">
				<div class="container">
					<div class="row align-items-center justify-content-between">
						<div class="col-2">
							<HMIcon />
							<Link to="/">
								<Logo/>
							</Link>
						</div>
						<div class="text-center d-flex justify-content-center col-7">
							<NavItems/>
						</div>
						<div class="d-flex align-items-center justify-content-end col-2">
							{/* DESKTOP SHOPPING CART ICON */}
							<CartIcon />
						</div>
					</div>
				</div>
			</div>
		</nav>
        </>
    )
}

export default Navigation