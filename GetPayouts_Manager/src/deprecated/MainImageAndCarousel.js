import React from 'react';
import ReactGA from 'react-ga';
const MAX_LEN = 3;
export default class MainImageAndCarousel extends React.Component {
    state = { 
        ctr:0,
        modalIsOpen: false 
    }
    toggleModal = () => {
      this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
      this.recordViewPhotosEvent()
    }
    goLeft = () => {
        const {ctr} = this.state
        if(ctr === 0)
            this.setState({ ctr: MAX_LEN-1});
        else 
            this.setState(state => ({ ctr: state.ctr-1 }));
        this.recordLeftRightCarousel('left')
    }
    goRight = () => {
        const {ctr} = this.state
        if(ctr === MAX_LEN-1)
            this.setState({ ctr: 0});
        else 
            this.setState(state => ({ ctr: state.ctr+1 }));
        this.recordLeftRightCarousel('right')
    }
    getImgPath=()=>{
        return process.env.PUBLIC_URL+"/assets/"
                    +this.props.type+"/"
                    +this.props.pictureId+
                    +this.state.ctr
                    +".jpg"
    }
    
    /**
    * track view photos
    */
   recordViewPhotosEvent=()=>{
    const{productName}=this.props
    ReactGA.event({
        category: 'VIEW_PHOTOS_PRODUCT_PAGE',
        action:    'Clicked on view photos for '+productName,
        label: 'VIEW_PHOTOS_PRODUCT_PAGE'
        });
   }
    /**
    * track view photos left / right
    */
   recordLeftRightCarousel=(direction)=>{
    const{productName}=this.props
    ReactGA.event({
        category: `VIEW_PHOTOS_MODAL_${direction}_PRODUCT_PAGE`,
        action:    `Clicked on ${direction} on view photos modal for ${productName}`,
        label: `VIEW_PHOTOS_MODAL_${direction}_PRODUCT_PAGE`
        });
  }
    render(){
        const { modalIsOpen } = this.state;
        return (
            <div className="ListingPage__sectionImages__1d1Ip">
                <div className="ListingPage__threeToTwoWrapper__2xT0y">
                    <div className="ListingPage__aspectWrapper__Ewtk9">
                        <div className="ListingImage">
                            <img className="ListingPage__rootForImage__39abO"
                                src={process.env.PUBLIC_URL+"/assets/"
                                +this.props.type+"/"
                                +this.props.pictureId
                                +".jpg"}
                                />
                        </div>
                        <button className="ListingPage__viewPhotos__1klTB"
                        onClick={this.toggleModal}
                        >
                            <span>{'View photos ('+MAX_LEN+')'}</span>
                        </button>
                    </div>
                </div>
                {modalIsOpen && <div className="Modal__isOpen__2TLKc">
                    <div className="ListingPage__carouselModalScrollLayer__S4LNl">
                    <div className="ListingPage__carouselModalContainer__1AKWp">
                    <button className="Modal__close__10tWW Modal__closeLight__A723p" title=""
                    onClick={this.toggleModal}
                    >
                        <span className="Modal__closeText__1JBRj"></span>
                            <svg className="Modal__closeIcon__34RPE" width="12"
                            height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(-1 -1)" fillRule="evenodd">
                            <rect transform="rotate(45 7 7)" x="-1" y="6" width="16" height="2" rx="1"></rect>
                            <rect transform="rotate(-45 7 7)" x="-1" y="6" width="16" height="2" rx="1"></rect>
                            </g>
                        </svg>
                    </button>
                        <div className="ImageBG__white">
                        <div className="ImageCarousel__root__UzQHJ">
                            <div className="ImageCarousel__imageWrapper__1Bvgc"><svg
                                className="IconSpinner__root__3JO50 ImageCarousel__loading__3NJba" viewBox="0 0 30 30"
                                preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="12" fill="none" strokeLinecap="round"
                                transform="rotate(338.077 15 15)">
                                <animateTransform attributeName="transform" type="rotate" calcMode="linear"
                                    values="0 15 15;180 15 15;720 15 15" keyTimes="0;0.5;1" dur="0.9s" begin="0s"
                                    repeatCount="indefinite"></animateTransform>
                                <animate attributeName="stroke-dasharray" calcMode="linear" values="9 56;46 14;9 56"
                                    keyTimes="0;0.5;1" dur="0.9s" begin="0s" repeatCount="indefinite"></animate>
                                </circle>
                            </svg>
                                <img
                                className="ResponsiveImage__root__ath9d ImageCarousel__image__2xo-B" alt="Listing image"
                                src={this.getImgPath()} sizes="(max-width: 767px) 100vw, 80vw"/>
                                </div>
                                <span
                            className="ImageCarousel__imageIndex__1R0Vi">
                            </span>
                            <button 
                            onClick={this.goLeft}
                            className="ImageCarousel__prev__1qaRJ">
                            </button>
                            <button 
                            onClick={this.goRight}
                            className="ImageCarousel__next__PHTzr">
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>}
            </div>
        )
    }
}
