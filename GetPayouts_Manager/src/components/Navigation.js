import React from 'react';
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom';
import DashboardNav from './DashboardNav';
import HamburgerMenu from '../deprecated/HamburgerMenu';

const Navigation = (props)=>{
    return(
        <>
		{/* <!-- Promo Banner --> */}
		<nav class="bg-bg-4 sticky-top py-2 py-lg-2 concept-1" id="animate-nav">
			<div class="d-lg-block">
				<div class="container">
					<div class="row align-items-center justify-content-between">
						<div class="col-1">
						</div>
						<div class="text-center d-flex justify-content-center col-10">
							<a href="/login" class="fw-bold mx-4 text-light-1">
								Get a 100% FREE custom website <span class="hide-mobile">when you join our Beta program. Limited-time offer.</span><span class="hide-desktop"><br></br></span> Click <a href="/covid19-promo" class="color-action-2">here</a> to find out more.
							</a>
						</div>
						<div class="d-flex align-items-center justify-content-end col-1">
						</div>
					</div>
				</div>
			</div>
		</nav>
		{/* <!-- Navigation 1 --> */}
		<nav class="bg-bg-3 sticky-top py-4 py-lg-7">
			<div class="d-block">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-3">
							{/* <div class="d-flex align-items-center justify-content-end">
								<a href="/login" class="btn btn-sm btn-action-1 rounded-2">
									Dashboard
								</a>
							</div> */}
							<a href="/">
								{/* <span class="gradient-font logo-font">payouts</span> */}
								<img class="gradient-font logo-font" src="../../assets/payouts-beta.png" style={{height:"40px"}}/>
							</a>
						</div>
						<div class="col-6 text-center">
							<div class="text-center d-flex justify-content-center hide-mobile">
								<a href="/coming-soon" class="fw-bold mx-4 text-dark-1">
									Join the Beta
								</a>
								<a target="_blank" href="https://www.candelamtl.com" class="fw-bold mx-4 text-dark-1">
									Live Demo
									&nbsp;
									<svg class="pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21M21 3V9M21 3L10 14" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								</a>
								<a href="/pricing" class="fw-bold mx-4 text-dark-1">
									Pricing
								</a>
								<a href="/why" class="fw-bold mx-4 text-dark-1">
									Why Payouts?
								</a>
								<a href="/how" class="fw-bold mx-4 text-dark-1">
									Refer a friend
								</a>
							</div>
							{/* <a href="/">
								<span class="gradient-font logo-font">payouts</span>
							</a> */}
						</div>
						<div class="col-3 d-flex align-items-center justify-content-end">
							<a href="#" class="btn btn-width-equal-height rounded-circle custom-mobile-nav-btn" id="home-cc"
								data-bs-toggle="offcanvas" data-bs-target="#custom-id-3e86u4fq">
								<svg width="20" height="20" viewBox="0 0 16 16" fill="none"
									xmlns="http://www.w3.org/2000/svg" class="fill-light-1">
									<path
										d="M2.00016 5.33333H14.0002C14.177 5.33333 14.3465 5.2631 14.4716 5.13807C14.5966 5.01305 14.6668 4.84348 14.6668 4.66667C14.6668 4.48986 14.5966 4.32029 14.4716 4.19526C14.3465 4.07024 14.177 4 14.0002 4H2.00016C1.82335 4 1.65378 4.07024 1.52876 4.19526C1.40373 4.32029 1.3335 4.48986 1.3335 4.66667C1.3335 4.84348 1.40373 5.01305 1.52876 5.13807C1.65378 5.2631 1.82335 5.33333 2.00016 5.33333ZM14.0002 10.6667H2.00016C1.82335 10.6667 1.65378 10.7369 1.52876 10.8619C1.40373 10.987 1.3335 11.1565 1.3335 11.3333C1.3335 11.5101 1.40373 11.6797 1.52876 11.8047C1.65378 11.9298 1.82335 12 2.00016 12H14.0002C14.177 12 14.3465 11.9298 14.4716 11.8047C14.5966 11.6797 14.6668 11.5101 14.6668 11.3333C14.6668 11.1565 14.5966 10.987 14.4716 10.8619C14.3465 10.7369 14.177 10.6667 14.0002 10.6667ZM14.0002 7.33333H2.00016C1.82335 7.33333 1.65378 7.40357 1.52876 7.5286C1.40373 7.65362 1.3335 7.82319 1.3335 8C1.3335 8.17681 1.40373 8.34638 1.52876 8.4714C1.65378 8.59643 1.82335 8.66667 2.00016 8.66667H14.0002C14.177 8.66667 14.3465 8.59643 14.4716 8.4714C14.5966 8.34638 14.6668 8.17681 14.6668 8C14.6668 7.82319 14.5966 7.65362 14.4716 7.5286C14.3465 7.40357 14.177 7.33333 14.0002 7.33333Z">
									</path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="offcanvas offcanvas-end bg-bg-3" id="custom-id-3e86u4fq" aria-hidden="true">
				<div class="offcanvas-header">
					<a href="/">
						<img class="gradient-font logo-font" src="../../assets/payouts-beta.png" style={{height:"40px"}}/>
					</a>
					<a href="#" class="btn btn-sm btn-width-equal-height  btn-light-1" data-bs-dismiss="offcanvas">
						<svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="fill-dark-2">
							<path
								d="M8.9398 8L13.1398 3.80667C13.2653 3.68113 13.3359 3.51087 13.3359 3.33333C13.3359 3.1558 13.2653 2.98554 13.1398 2.86C13.0143 2.73447 12.844 2.66394 12.6665 2.66394C12.4889 2.66394 12.3187 2.73447 12.1931 2.86L7.9998 7.06L3.80646 2.86C3.68093 2.73447 3.51066 2.66394 3.33313 2.66394C3.1556 2.66394 2.98533 2.73447 2.8598 2.86C2.73426 2.98554 2.66374 3.1558 2.66374 3.33333C2.66374 3.51087 2.73426 3.68113 2.8598 3.80667L7.0598 8L2.8598 12.1933C2.79731 12.2553 2.74771 12.329 2.71387 12.4103C2.68002 12.4915 2.6626 12.5787 2.6626 12.6667C2.6626 12.7547 2.68002 12.8418 2.71387 12.9231C2.74771 13.0043 2.79731 13.078 2.8598 13.14C2.92177 13.2025 2.99551 13.2521 3.07675 13.2859C3.15798 13.3198 3.24512 13.3372 3.33313 13.3372C3.42114 13.3372 3.50827 13.3198 3.58951 13.2859C3.67075 13.2521 3.74449 13.2025 3.80646 13.14L7.9998 8.94L12.1931 13.14C12.2551 13.2025 12.3288 13.2521 12.4101 13.2859C12.4913 13.3198 12.5785 13.3372 12.6665 13.3372C12.7545 13.3372 12.8416 13.3198 12.9228 13.2859C13.0041 13.2521 13.0778 13.2025 13.1398 13.14C13.2023 13.078 13.2519 13.0043 13.2857 12.9231C13.3196 12.8418 13.337 12.7547 13.337 12.6667C13.337 12.5787 13.3196 12.4915 13.2857 12.4103C13.2519 12.329 13.2023 12.2553 13.1398 12.1933L8.9398 8Z"
								fill="#0C111E">
							</path>
						</svg>
					</a>
				</div>
				{/* <div style={{padding:"30px", borderRadius:"30px", backgroundColor:"#f7f7f7"}}>
					<div class="col-sm-12 col-lg-12 text-lg-start mb-6 mb-lg-0 pl-0">
					</div>
				</div> */}
				<div class="offcanvas-body">
					<div class="text-center d-block justify-content-center">
						<a href="/coming-soon" class="display-xs text-left mx-4 text-dark-1 w-100 pb-5">
							Join the Beta
						</a>
						<a target="_blank" href="https://www.candelamtl.com" class="display-xs text-left mx-4 text-dark-1 w-100 pb-5">
							Live Demo
							&nbsp;
							<svg class="pb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21M21 3V9M21 3L10 14" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</a>
						<a href="/pricing" class="display-xs text-left mx-4 text-dark-1 w-100 pb-5">
							Pricing
						</a>
						<a href="/why" class="display-xs text-left mx-4 text-dark-1 w-100 pb-5">
							Why Payouts?
						</a>
						<a href="/how" class="display-xs text-left mx-4 text-dark-1 w-100 pb-5">
							Refer a friend
						</a>
					</div>
					{/* <a href="/">
						<span class="gradient-font logo-font">payouts</span>
					</a> */}
				</div>
				<div class="pl-4 pr-4">
					{/* <DashboardNav/> */}
				</div>
			</div>
		</nav>
        </>
    )
}

export default Navigation