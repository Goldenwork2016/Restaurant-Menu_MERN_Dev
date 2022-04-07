import React from 'react';

import HowItWorks from '../components/HowItWorks';
import CovidSafe from '../components/CovidSafe';
// import AsSeenOn from '../components/AsSeenOn';
import Footer from '../components/Footer';

import HamburgerMenu from '../components/HamburgerMenu';

import ListingsContainer from './ListingsContainer';
import PrivateSpacesContainer from './PrivateSpacesContainer';
// import BerriContainer from './BerriContainer';
// import SquareVictoriaContainer from './SquareVictoriaContainer';
// import PlaceDArmesContainer from './PlaceDArmesContainer';
// import PlaceDesArtsContainer from './PlaceDesArtsContainer';
// import GuyConcordiaContainer from './GuyConcordiaContainer';
// import PeelContainer from './PeelContainer';
// import LionelGroulxContainer from './LionelGroulxContainer';
import LocationsContainer from './LocationsContainer';
import PricingContainer from './PricingContainer';

import SearchButtonMobile from '../components/SearchButtonMobile';
import SearchBarDesktop from '../components/SearchBarDesktop';
import LogoMobile from '../components/LogoMobile';
import LogoDesktop from '../components/LogoDesktop';
import RightHandButtonDesktop from '../components/RightHandButtonDesktop';
import { connect } from 'react-redux';
import {fetchSkusData} from '../actions';
import Loading from '../components/Loading';

import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';
// import '../styles/fonts/AirbnbCereal_Lt.woff2';

const MONTHLY_MEMBERSHIP = 'Monthly Membership';

class HomeContainer extends React.Component  {

// componentDidMount(){
//     if(this.props.skuData.length===0){
//         this.props.dispatch(fetchSkusData())
//     }
// }

// pickMonthlyMembership(){
//     let membershipDetails;

//     if(!this.props.fetchAllProductsPending){
//         this.props.skuData.forEach( (product, i) => {
//             if(product.product_name === MONTHLY_MEMBERSHIP){
//                 membershipDetails= product;
//             }
//           });
//         return membershipDetails;
//     }
// }

// getActiveSkuData(){
//     const {skuData} = this.props;
//     const activeSkuData = skuData.filter(cardInfo => cardInfo.product_type==='subscription' && cardInfo.space_status==='Available');
//     return activeSkuData;
// }

constructor (props) {
    super(props);
    this.state = {
      animationClass: 'test'
    }
    this.changeState = this.changeState.bind(this);
  }
  
  changeState(){
    if(this.state.animationClass === 'test'){
      this.setState({
        animationClass: 'test paused'
      });
    }else{
      this.setState({
        animationClass: 'test'
      });
    }
  }

render(){
	// this.loadScript();
    const {fetchAllProductsPending,skuData} = this.props;
    // if(fetchAllProductsPending){
    //     return <Loading/>   
    // }
    // else {
    // this.getActiveSkuData()
    return(      
        <>
        <Navigation/>
		{/* <!-- Header 4 --> */}
		<header class="py-20 bg-bg-3 text-center">
			<div class="container">
				<h1 class="display-3 remove-br mb-6">
					<span class="f-50 bold h1">Create a beautiful online shop in <span class="hide-tablet">less than</span> 5 minutes
					{/* <span class="gradient-font">
						<i class="f-40 fas fa-credit-card"></i>
					</span> */}
					</span>
					<img class="mx-2 mt-2" style={{height:"50px"}} src="../../assets/payouts-icon.png"/>
					{/* <span class="color-main display-6 mx-2">
						<i id="home-icon" class="fas fa-store"></i>
					</span> */}
				</h1>
				<p class="fs-1 pe-2 pt-1 remove-br mb-md-8 mb-6">
					Launch your shop by filling out a simple form. No code. No website builders.
				</p>
				<div class="row justify-content-center">
					<form action="form-handler.php" method="post" enctype="multipart/form-data"
						class="d-flex col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-9 js-ajax-form">
						{/* <!-- forms alerts --> */}
						<div class="alert alert-action-8 fixed-top invisible fade text-center js-ajax-form-result"
							data-result="success" role="alert">
							<span class="js-ajax-form-alert-text" data-default-text="Thanks for your message!">
								Thanks for your message!
							</span>
						</div>
						<div class="alert alert-action-5 fixed-top invisible fade text-center js-ajax-form-result"
							data-result="error" role="alert">
							<span class="js-ajax-form-alert-text">
								Error!
							</span>
						</div>
						{/* <!-- forms alerts end --> */}
						<a href="/coming-soon" class="btn w-100 mr-2" id="home-btn">
							Get started
						</a>
						{/* <div class="input-group me-4">
							<div class="input-group-text border-end-0 border-dark-3 ps-4 pe-2">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
									xmlns="http://www.w3.org/2000/svg" class="fill-dark-3">
									<path fill-rule="evenodd" clip-rule="evenodd"
										d="M17.5002 3.75H2.5002C2.16868 3.75 1.85074 3.8817 1.61632 4.11612C1.3819 4.35054 1.2502 4.66848 1.2502 5V5.27104L10.0002 10.5213L18.7502 5.27098V5C18.7502 4.66848 18.6185 4.35054 18.3841 4.11612C18.1497 3.8817 17.8317 3.75 17.5002 3.75ZM0.000203451 5.64224C-6.77314e-05 5.63161 -6.79025e-05 5.62098 0.000203451 5.61034V5C0.000203451 4.33696 0.263596 3.70107 0.732437 3.23223C1.20128 2.76339 1.83716 2.5 2.5002 2.5H17.5002C18.1632 2.5 18.7991 2.76339 19.268 3.23223C19.7368 3.70107 20.0002 4.33696 20.0002 5V5.61604V5.63397V15C20.0002 15.663 19.7368 16.2989 19.268 16.7678C18.7991 17.2366 18.1632 17.5 17.5002 17.5H2.5002C1.83716 17.5 1.20128 17.2366 0.732437 16.7678C0.263596 16.2989 0.000203451 15.663 0.000203451 15V5.64224ZM18.7502 13.9117V6.72895L12.6801 10.3708L18.7502 13.9117ZM18.7051 15.3329L11.5602 11.165L11.4569 11.1048L10.0002 11.9788L8.54329 11.1049L8.44016 11.165L1.29533 15.3328C1.35239 15.5394 1.46213 15.7297 1.61632 15.8839C1.85074 16.1183 2.16868 16.25 2.5002 16.25H17.5002C17.8317 16.25 18.1497 16.1183 18.3841 15.8839C18.5383 15.7297 18.648 15.5394 18.7051 15.3329ZM1.2502 13.9117V6.73013L7.31989 10.371L1.2502 13.9117Z">
									</path>
								</svg>
							</div>
							<input type="email" name="email" placeholder="Email address"
								class="form-control border-start-0 border-dark-3 ps-1" required="required"/>
						</div> */}
						<a href="/pricing" class="btn btn-outline-action-10 w-100 ml-2">
							Pricing
						</a>
					</form>
				</div>
				<p class="mb-0 mt-4 fs-5">
					By signing up, you agree to the Terms of Service
				</p>
			</div>
		</header>
		{/* <!-- Call to action 5 --> */}
		<section class="py-10 py-lg-20 bg-bg-3 text-center">
			<div class="container">
				<div class="bg-bg-2 rounded-2 p-8 p-md-12">
					<div class="row justify-content-center">
						<div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6">
							<h2 class="display-5" data-aos="fade-down" data-aos-delay="0">
								You can sell anything. Let’s do it together.
							</h2>
							<p class="mt-6 mb-8" data-aos="fade-down" data-aos-delay="250">
								The free, powerful tool to jumpstart your store.
							</p>
							<a href="/coming-soon" class="btn btn-action-1" data-aos="fade-down" data-aos-delay="500">
								Get started
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
        <Footer/>
    </>
     )
	// }
    }
}

const mapStateToProps = state => {
    return {
      skuData: state.skuData,
      fetchAllProductsPending: state.fetchAllProductsPending
    };
  };

export default connect(mapStateToProps)(HomeContainer);
