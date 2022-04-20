import React from 'react';
import ReactGA from 'react-ga';
import {isMobile} from 'react-device-detect';
import Checkout from './Checkout';
import BookATour from './BookATour';

export default class InformationBox extends React.Component {

    /**
    * track which product was clicked on, track its pageview
    */
    recordCancellationClickAndPageView=()=>{
        const{productName}=this.props
        ReactGA.pageview(`/cancellation-policy`);
        ReactGA.event({
            category: 'CANCELLATION_POLICY_PRODUCT_PAGE',
            action:    'Clicked on cancellation policy for '+productName,
            label: 'CANCELLATION_POLICY_PRODUCT_PAGE'
            });
    }

    getActivityDate = ()=>{
        const {activityDateEpoch} = this.props
        const activityDate=new Date(activityDateEpoch*1000)
        return activityDate.toDateString().replace(/\d{4}/,'')
      }

      getNumOfMiliSeconds = () => {
        return this.props.flockDeadline *  24 * 60 * 60 * 1000
      }
    
    // getTicketsSold=()=>{
    //     const {ticketsSold,customGoing} = this.props
    //     if(customGoing === 0) return ticketsSold
    //     else if(!customGoing) return ticketsSold
    //     return customGoing
    // }

    render(){
    // const {ticketsAvailable} = this.props
    // const expiredMsg = ticketsAvailable === 0 ? 'Sold Out': 'No more time'
    // const Expired = () => <span>{expiredMsg}</span>;
    // const countdownDate = new Date(this.props.countdownEpoch*1000)
    // const prizePool = this.props.prize

    // const renderer = ({ days, hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //       // Render a completed state
    //       return <Expired />;
    //     } else {
    //       // Render a countdown
    //       const countDownString = days+"d "+hours+"h "+minutes+"m "+seconds+"s"
    //       return <span>{countDownString}</span>;
    //     }
    //   };

    //     function isPrizePool() {
    //     if (prizePool >= 10) {
    //         return (
    //         <div className="ListingPage__sectionDescription__6XXH1">
    //             <h2 className="ListingPage__descriptionTitle__3QPwf">
    //                 <span>Prize Money Payout
    //                 {/* {this.props.type} */}
    //                 </span>
    //             </h2>
    //             <div className="ListingPage__description__fuoXR">
    //                 <div>
    //                     <span width="0">
    //                         <span className="ListingPage__tag__3JAjz">
    //                             <span className="ListingPage__premium__1T4Vp">
    //                                 <span>{'$' + prizePool}</span>
    //                             </span>
    //                         </span>
    //                     </span>
    //                 </div>
    //             </div>
    //         </div>
    //         )
    //     }
    // }  
    return (
        <>
        <section class="pt-sm-10 pb-30 bg-light blog_21">
            <div class="container px-xl-0">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2 class="bold mb-30 f-32">
                            <a href="#" class="link color-black">
                                Amenities
                            </a>
                        </h2>
                        <div class="mb-40 w-full hr h-2 bg-gray">
                        </div>
                        <div class="d-flex align-items-center flex-wrap">
                            {this.props.amenitiesWifi==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-wifi"></i>&nbsp;Wifi
                            </a>}
                            {this.props.amenitiesLaptopFriendly==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-laptop"></i>&nbsp;Laptop Friendly
                            </a>}
                            {this.props.amenitiesWifi==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-headphones"></i>&nbsp;Quiet Zones
                            </a>}
                            {this.props.amenitiesCoffee==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-coffee"></i>&nbsp;Unlimited Coffee
                            </a>}
                            {this.props.amenitiesTea==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-coffee"></i>&nbsp;Unlimited Tea
                            </a>}
                            {this.props.amenitiesTv==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-tv"></i>&nbsp;Work Screens
                            </a>}
                            {this.props.amenitiesElevator==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-tv"></i>&nbsp;Elevator Access
                            </a>}
                            {this.props.amenitiesWifi==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-medkit"></i>&nbsp;Frequent Cleaning
                            </a>}
                            {this.props.amenitiesPhoneCharger==='true' &&<a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading f-18 lh-30 bold radius10 link">
                                <i class="fa fa-battery-full"></i>&nbsp;Charging Stations
                            </a>}
                        </div>
                    </div>
                </div>
            </div>
            </section>

            <section class="pt-20 pb-100 bg-light blog_21">
            <div class="container px-xl-0">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8">
                        <h2 class="bold mb-30 f-32">
                            <a href="#" class="link color-black">
                                Location
                            </a>
                        </h2>
                        <div class="mb-40 w-full hr h-2 bg-gray">
                        </div>
                        <div class="d-flex align-items-center flex-wrap h-500">
                            <iframe
                            title="Map" 
                            style={{
                                width:"100%",
                                height:"100%",
                                frameborder:0,
                                border:0
                            }}
                            src={"https://www.google.com/maps/embed/v1/place?q=place_id:"
                            +this.props.placeid
                            +"&key=AIzaSyC0BWK94NJzmqxvIhu1f-iJsyjjiwQEUkE"} 
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            </>
    )
  }
}