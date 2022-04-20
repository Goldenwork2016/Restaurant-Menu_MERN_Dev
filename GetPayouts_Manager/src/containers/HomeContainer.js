import React from 'react';

import Footer from '../components/Footer';
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
		{/* <!-- Header 1 --> */}
		<header class="py-lg-20 bg-bg-3">
			<div class="container">
				<div class="row align-items-center flex-md-row-reverse">
					<div class="col-md-6">
						<img src="../../assets/illustration.png" alt="" class="w-100"/>
					</div>
					<div class="col-md-6 mt-8 mt-md-0">
						<h1 class="display-3 mb-6">
							Build your own storefront, with same-day delivery.
						</h1>
						{/* <p class="fs-1">
						 Generate a storefront and offer same-day delivery.&nbsp;
						 <br class="hide-mobile"></br>
						</p> */}
						<p class="fs-1 pb-4">
						 Keep your existing delivery services, but stop paying <span class="" style={{color:"var(--bs-blue)"}}>commissions &amp; fees</span> on orders from your own [direct] customers.
						</p>
						<div class="row">
							<div class="col-5 col-sm-5 col-xl-3 col-lg-3 col-md-3">
								<a href="/coming-soon" class="btn w-100 mr-2" id="home-btn">
									Get started
								</a>
							</div>
							<div class="col-5 col-sm-5 col-xl-3 col-lg-3 col-md-3">
								<a href="/pricing" class="btn btn-outline-action-10 w-100 ml-2">
									Pricing
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		{/* <!-- Call to action 5 --> */}
		<section class="py-10 py-lg-20 bg-bg-3 text-center">
			<div class="container">
				<div class="bg-bg-2 rounded-2 p-8 p-md-12">
					<div class="row justify-content-center">
						<div class="col-md-10 col-lg-8 col-xl-7 col-xxl-6">
							<h2 class="display-5" data-aos="none" data-aos-delay="0">
								You can sell anything. Let’s do it together.
							</h2>
							<p class="mt-6 mb-8" data-aos="none" data-aos-delay="250">
								The free, powerful tool to jumpstart your store.
							</p>
							<a href="/coming-soon" class="btn btn-action-1" data-aos="none" data-aos-delay="500">
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
