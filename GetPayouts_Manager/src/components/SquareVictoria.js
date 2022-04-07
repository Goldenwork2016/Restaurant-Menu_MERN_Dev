import React from 'react';
import '../styles/css/style.css';

// import AsSeenOn from '../components/AsSeenOn';
import Footer from '../components/Footer';
import HamburgerMenu from '../components/HamburgerMenu';

import SearchButtonMobile from '../components/SearchButtonMobile';
import SearchBarDesktop from '../components/SearchBarDesktop';
import LogoMobile from '../components/LogoMobile';
import LogoDesktop from '../components/LogoDesktop';
import RightHandButtonDesktop from '../components/RightHandButtonDesktop';
import { connect } from 'react-redux';
import {fetchSkusData} from '../actions'

import SquareVictoriaContainer from '../containers/SquareVictoriaContainer'

class SquareVictoria extends React.Component  {

componentDidMount(){
    if(this.props.skuData.length===0){
        this.props.dispatch(fetchSkusData())
    }
}
render(){
    const {skuData} = this.props
    return(
    <div className="Page__root__2VuHt LandingPage__root__3hJQM">
        <div className="Page__content__rCsmc">
            <div className="LayoutSingleColumn__root__2iP-z">
                <div className="LayoutWrapperTopbar__root__3sx2Q">
                    <div className="Topbar__root__2O2hF">
                        <div className="Topbar__container__3H7De bg-dark">
                            <HamburgerMenu/>
                            <LogoMobile/>
                            <SearchButtonMobile/>
                        </div>
                        <div className="Topbar__desktop__2tv3W">
                            <nav className="TopbarDesktop__root__3iSVO bg-dark">
                                <LogoDesktop/>
                                <SearchBarDesktop/>
                                <RightHandButtonDesktop/>
                            </nav>
                        </div>
                    </div>
                </div>
                                
                <div className="LayoutSingleColumn__layoutWrapperMain__3hsTf" role="main">
                    <ul className="LandingPage__sections__1Nrm8">
                        <SquareVictoriaContainer
                            skuData={skuData}
                        />
                        {/* <SquareVictoriaContainer
                            skuData={skuData}
                        />
                        <PlaceDArmesContainer
                            skuData={skuData}
                        />
                        <PlaceDesArtsContainer
                            skuData={skuData}
                        />
                        <GuyConcordiaContainer
                            skuData={skuData}
                        />
                        <PeelContainer
                            skuData={skuData}
                        />
                        <LionelGroulxContainer
                            skuData={skuData}
                        /> */}
                       {/* <AsSeenOn/> */}
                    </ul>
                </div>
                <Footer/>
            </div>
        </div>
    </div>
     )
    }
}

const mapStateToProps = state => {
    return {
      skuData: state.skuData
    };
  };

export default connect(mapStateToProps)(SquareVictoria);
