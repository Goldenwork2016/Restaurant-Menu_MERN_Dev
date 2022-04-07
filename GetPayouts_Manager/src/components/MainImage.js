import React from 'react';
import ReactGA from 'react-ga';
// import LazyLoad from 'react-lazy-load';

const MAX_LEN_LOUNGE_LES_COUSINS = 9;
const MAX_LEN_ESCAD_HOTEL = 7;
const MAX_LEN_DEFAULT = 3;

const get_max_len = (product_name)=>{
  if(product_name.indexOf("Lounge Les Cousins")!== -1) return MAX_LEN_LOUNGE_LES_COUSINS;
  if(product_name.indexOf("Escad Hotel")!== -1) return MAX_LEN_ESCAD_HOTEL;
  return MAX_LEN_DEFAULT;
}

export default class MainImage extends React.Component {
    state = { 
        ctr:0,
        modalIsOpen: false,
        MAX_LEN: MAX_LEN_DEFAULT
    }

    componentDidMount(){
      const max_len_based_on_product = get_max_len(this.props.productName)
      this.setState({
        MAX_LEN: max_len_based_on_product
      })
    }
    toggleModal = () => {
      this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
      this.recordViewPhotosEvent()
    }
    goLeft = () => {
        const {ctr, MAX_LEN} = this.state
        if(ctr === 0)
            this.setState({ ctr: MAX_LEN-1});
        else 
            this.setState(state => ({ ctr: state.ctr-1 }));
        this.recordLeftRightCarousel('left')
    }
    goRight = () => {
        const {ctr, MAX_LEN} = this.state
        if(ctr === MAX_LEN-1)
            this.setState({ ctr: 0});
        else 
            this.setState(state => ({ ctr: state.ctr+1 }));
        this.recordLeftRightCarousel('right')
    }
    getImgPath=()=>{
        return process.env.PUBLIC_URL+"/assets/"
                    +this.props.type+"/"
                    +this.props.pictureId+"-"+
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
        <section className="LocationDetails__Wrapper-sc-1iqdbdn-2 dyFpsD">
        <div className="sc-9l7nkv-0 LocationDetails__ImageContentSpace-sc-1iqdbdn-18 jaMEub">
        <div>
          <div width="100%" className="n6k0o4-0 Container-sc-1blnu6v-0 kxBriU">
            <div className="sc-2bxxka-0 gydFLl">
              <div className="sc-7v1z3w-0 jiJMnl ImageGrid__PrimaryImageColumn-sc-1jp4l7a-1 cfzECI">
                {/* <LazyLoad> */}
                <img className="ImageGrid__Background-sc-1jp4l7a-0 ImageGrid__PrimaryImage-sc-1jp4l7a-2 JpAIl" src={process.env.PUBLIC_URL+"/assets/"
                +this.props.type+"/"
                +this.props.pictureId
                +"-0.jpg"} alt="Angle 1"/>
                {/* <LazyLoad> */}
                <div className="ImageGrid__ButtonContainer-sc-1jp4l7a-5 fSSEHU"><button onClick={this.toggleModal}
                    className="sc-4i5irx-0 dhNjst x85bks-0 ddjQAO ImageGridButton-sc-1pejs5b-0 hJZIAK"
                    type="button"><span>View all images</span></button></div>
              </div>
              <div className="sc-7v1z3w-0 bVJxdu Desktop__only">
                <div height="100%" direction="column" className="d32j6f-0 kUNSIi">
                {/* <LazyLoad> */}
                  <img className="ImageGrid__Background-sc-1jp4l7a-0 ImageGrid__Secondary-sc-1jp4l7a-3 hOjJRi" src={process.env.PUBLIC_URL+"/assets/"
              +this.props.type+"/"
              +this.props.pictureId
              +"-1.jpg"} alt="Angle 2"/>
                {/* <LazyLoad> */}
                {/* <LazyLoad> */}
                  <img className="ImageGrid__Background-sc-1jp4l7a-0 ImageGrid__Tertiary-sc-1jp4l7a-4 bQTnzl" src={process.env.PUBLIC_URL+"/assets/"
              +this.props.type+"/"
              +this.props.pictureId
              +"-2.jpg"} alt="Angle 3"/>
                {/* <LazyLoad> */}
                <img className="ImageGrid__Background-sc-1jp4l7a-0 ImageGrid__Tertiary-sc-1jp4l7a-4 bQTnzl" style={{display:'none'}} src={process.env.PUBLIC_URL+"/assets/"
              +this.props.type+"/"
              +this.props.pictureId
              +"-3.jpg"} alt="Angle 3"/>
                {/* <LazyLoad> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalIsOpen && <div className="Modal__isOpen__2TLKc">
                    <div className="ListingPage__carouselModalScrollLayer__S4LNl">
                    <div className="ListingPage__carouselModalContainer__1AKWp">
                    <button className="Modal__close__10tWW Modal__closeLight__A723p" title=""
                    onClick={this.toggleModal}>
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
                                <img data-savepage-src=""
                                className="ResponsiveImage__root__ath9d ImageCarousel__image__2xo-B" alt="Angle"
                                src={this.getImgPath()}
                                srcSet="" sizes="(max-width: 767px) 100vw, 80vw"/>
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
      </section>
    )
}
}