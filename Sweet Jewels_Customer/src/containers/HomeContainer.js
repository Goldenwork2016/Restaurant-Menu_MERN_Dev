import React, { useEffect } from 'react';
// import AsSeenOn from '../components/AsSeenOn';
import Footer from '../components/Footer';

import ListingsContainer from './ListingsContainer';
import { connect } from 'react-redux';
import { fetchMerchantData } from '../actions';
import Loading from '../components/Loading';
import Navigation from '../components/Navigation';
import Collections from '../components/Collections';
import Banner from '../custom/Banner';
import SocialLinks from '../custom/SocialLinks';
import Showcase from '../custom/Showcase';
import FAQ from '../custom/FAQ';
import TextBanner from '../custom/TextBanner';

const HomeContainer = (props)=>{
	const {fetchMerchantPending, merchantProductInfo} = props;

	if(!merchantProductInfo){
		return <Loading/>   
	} else {
  return(
		<>
		<div class="enabled force-enabled">
        	<Navigation id="top"/>
		</div>
		<div class="enabled force-enabled">
			<Banner/>
		</div>
		<div class="enabled">
		{/* <!-- Ecommerce 2 --> */}
		<section class="py-8 py-lg-1 bg-bg-3" id="trending">
			<div class="container">
				<p class="fs-1 text-center mb-1"   style={{paddingTop: "30px"}}>
					Trending
				</p>
                <Collections
                    merchantProductInfo={merchantProductInfo}
                />
            </div>
        </section>
		</div>
		<div class="enabled force-enabled">
		{/* <!-- Ecommerce 2 --> */}
		<section class="py-8 py-lg-1 bg-bg-3" id="all">
			<div class="container">
				<p class="fs-1 text-center mb-1"   style={{paddingTop: "30px"}}>
					All Products
				</p>
                <ListingsContainer
                    merchantProductInfo={merchantProductInfo}
                />
            </div>
        </section>
		</div>
		{/* <!-- Feature 20 --> */}
		<div class="enabled">
			<Showcase/>
		</div>
		<div class="disabled">
			<FAQ/>
		</div>
		<div class="disabled">
			<TextBanner/>
		</div>
		<div class="enabled force-enabled">
        	<Footer/>
		</div>
    </>
     )
	}
}

const mapStateToProps = state => {
    return {
	  fetchMerchantPending: state.fetchMerchantPending,
	  merchantProductInfo: state.merchantProductInfo,
    };
  };

const mapDispatchToProps = {
	fetchMerchantData
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
