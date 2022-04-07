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
        <div className="DateHourPicker__root__1ej43">
            <div className="Date-time-hidden-mobile">
            {/* <div className="FieldDateInput__fieldRoot__14HXx">
                <label className="FieldDateInput__mobileMargins__2jC-Y"
                    htmlFor="firstDate.membershipDate">
                    Availabilities<br></br><br></br>
                    <span className="Product__timer">
                    {this.props.ticketsAvailable}
                    </span>
                </label>
                <div
                    className="DateInput__inputRoot__7puGA DateInput__withMobileMargins__1b86Z">
                    <div className="SingleDatePicker SingleDatePicker_1">
                        <div>
                            <div className="SingleDatePickerInput SingleDatePickerInput_1">
                                <div className="DateInput DateInput_1">
                                    <p type="text"
                                        className="DateInput_input DateInput_input_1"
                                        placeholder={this.props.productDate}>
                                        {this.props.productDate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="DateHourPicker__hourRow__9XK0b">
                <div
                    className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3T">
                    <label htmlFor="firstDate.hourStart">When?</label>
                    <div
                        className="FieldSelect__select__2OoZT DateHourPicker__hourStartSelect__2Zbza"
                        id="firstDate.hourStart"
                        name="firstDate.hourStart">
                        <p className='Product__date' selected="" value="" disabled="">
                            {this.getActivityDate()}
                            {startTime} to {endTime}
                        </p>
                    </div>
                </div>
            </div> */}
            {/* {this.props.type!=='event' && 
            <div className="DateHourPicker__hourRow__9XK0b">
                <div
                    className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3H">
                    <label htmlFor="firstDate.hourEnd">Going</label>
                    <div
                        className="Product__date"
                        id="firstDate.hourEnd" name="firstDate.hourEnd">
                        <p selected="" value="" disabled="">{this.getTicketsSold()}
                        </p> 
                    </div>
                </div>
                <div
                    className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3F">
                    <label htmlFor="firstDate.hourEnd">Minimum Required</label>
                    <div
                        className="Product__date"
                        id="firstDate.hourEnd" name="firstDate.hourEnd">
                        <p selected="" value="" disabled="">{this.props.flockSize}
                        </p> 
                    </div>
                </div>
            </div>
            } */}
            {/* <div className="DateHourPicker__hourRow__9XK0b">
                <div
                    className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3Q">
                    <label htmlFor="firstDate.hourEnd">Required</label>
                    <div
                        className="Product__date"
                        id="firstDate.hourEnd" name="firstDate.hourEnd">
                        <p selected="" value="" disabled="">{this.props.flockSize}
                        </p> 
                    </div>
                </div>
            </div> */}
            <div className="DateHourPicker__hourRow__9XK0b">
                {/* <div
                    className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3H">
                    <label htmlFor="firstDate.hourEnd">Total spots</label>
                    <div
                        className="Product__date"
                        id="firstDate.hourEnd" name="firstDate.hourEnd">
                        <p selected="" value="" disabled="">
                            {this.props.lastMinuteTickets + this.props.flockSize}
                        </p> 
                    </div>
                </div> */}
                {/* <div
                    className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3F">
                    <label htmlFor="firstDate.hourEnd">Time left to buy</label>
                    <div
                        className="Product__date"
                        id="firstDate.hourEnd" name="firstDate.hourEnd">
                        <p selected="" value="" disabled="">
                        {ticketsAvailable === 0 && 'Sold Out'}
                        {ticketsAvailable !==0 && <Countdown
                        date={countdownDate}
                        renderer={renderer}
                        onComplete={this.onComplete}
                        />
                        }
                        </p> 
                    </div>
                </div> */}
            </div>
            </div>
        </div>
        {/* {this.props.type!=='event' && <div className="SectionRulesMaybe__root__1PTcA">
        <h2 className="SectionFAQ__title__d0wbB">
            <span>What happens if the minimum is not reached by the deadline?</span>
        </h2>
        <div className="SectionRulesMaybe__rules__SgDlV">
            <div>
                <span width="0">
                    <span>
                        <span>If not enough students join by the deadline, the {this.props.type} will be pushed to the following week. If the minimum is not reached for a second time, you are entitled to a full refund as per our cancellation policy.</span>
                    </span>
                </span>
            </div>
        </div>
        </div>} */}
        <div className="ListingPage__sectionDescription__6XXH1">
            <h2 className="ListingPage__descriptionTitle__3QPwf">
                <span>About
                {/* {this.props.type} */}
                </span>
            </h2>
            <div className="ListingPage__description__fuoXR">
                <div>
                    <span width="0">
                        <span>
                            <span>{this.props.productDescription}</span>
                        </span>
                        
                    </span>
                </div>
            </div>
        </div>
        <div className="ListingPage__sectionDescription__6XXH1">
            <h2 className="ListingPage__descriptionTitle__3QPwf">
                <span>Covid-19 safety measures
                {/* {this.props.type} */}
                </span>
            </h2>
            <div className="ListingPage__description__fuoXR">
                <div>
                    <span width="0">
                        <span>
                            <span><div className="LocationDetails__AmenitiesWrapper-sc-1iqdbdn-13 BQWuw">
                <div className="Group__Style-sc-1abhmg4-0 kPuqKI">
                    <ul data-e2e="amenities" className="ul1mhn-0 eIpbjZ List-sc-1kd8oyc-0 bHYACb">
                    {this.props.amenitiesPhoneCharger==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                            <svg id="Capa_1" enable-background="new 0 0 517.974 517.974" height="24" viewBox="0 0 517.974 517.974" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m511.73 165.567-1.71-2.932c-7.152-12.269-19.32-20.437-33.384-22.409-10.421-1.462-20.775.64-29.613 5.823-1.822-2.76-4.43-4.944-7.581-6.214-12.838-5.174-26-9.835-39.121-13.854-3.957-1.213-8.154 1.014-9.368 4.974-1.214 3.961 1.014 8.155 4.974 9.368 12.713 3.896 25.468 8.412 37.909 13.425.414.167.741.521.875.948 1.819 5.821 3.483 11.601 5.025 17.346-114.33-20.992-235.868-20.692-361.645.904 1.79-6.033 3.758-12.054 5.908-18.041.147-.409.488-.745.913-.898 48.528-17.503 96.668-28.23 143.08-31.886 46.313-3.646 92.239-.354 136.494 9.789 4.038.922 8.062-1.598 8.986-5.635.925-4.038-1.598-8.061-5.635-8.986-91.425-20.954-188.327-13.349-288.016 22.608-3.443 1.242-6.317 3.553-8.256 6.548-8.971-5.458-19.56-7.714-30.229-6.218-14.063 1.973-26.231 10.141-33.384 22.409l-1.71 2.933c-7.282 12.492-8.255 27.895-2.6 41.201 0 0 59.92 140.972 59.999 141.127 1.9 6.336 3.996 12.658 6.301 18.961 1.613 4.408 5.046 7.931 9.42 9.666 59.728 23.691 120.329 35.704 180.124 35.703h.045c59.81-.006 120.427-12.03 180.169-35.739 4.277-1.698 7.673-5.123 9.315-9.397 3.487-9.073 6.465-18.319 8.972-27.719l56.34-132.601c5.658-13.308 4.685-28.71-2.597-41.204zm-66.439 162.794c-99.97 19.4-197.212 23.219-297.143 11.653-4.113-.479-7.836 2.474-8.313 6.588s2.473 7.836 6.588 8.313c38.088 4.409 75.771 6.618 113.378 6.618 60.224 0 120.225-5.705 181.157-17.096-1.778 5.828-3.758 11.586-5.943 17.272-.142.369-.458.682-.847.836-57.974 23.008-116.73 34.676-174.637 34.682-.018 0-.026 0-.044 0-57.89-.001-116.637-11.657-174.593-34.646-.398-.157-.721-.485-.863-.874-2.074-5.672-3.96-11.36-5.69-17.059 11.947 2.218 23.962 4.251 35.879 6.023.374.056.746.083 1.113.083 3.653 0 6.854-2.675 7.408-6.397.609-4.098-2.218-7.913-6.314-8.521-14.121-2.1-28.39-4.554-42.504-7.275-4.63-18.809-7.391-37.716-8.281-56.617h224.558c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-224.874c.039-7.042.315-14.08.877-21.106.33-4.129-2.749-7.744-6.878-8.075-4.142-.318-7.744 2.751-8.075 6.878-1.209 15.107-1.266 30.255-.181 45.393l-33.621-79.129c-3.813-8.972-3.157-19.357 1.754-27.779l1.71-2.934c4.822-8.271 13.026-13.779 22.509-15.109 8.152-1.139 16.229.947 22.727 5.753-4.403 13.651-7.935 27.414-10.503 41.055-.767 4.07 1.911 7.991 5.982 8.758.469.089.936.131 1.396.131 3.535 0 6.684-2.512 7.361-6.113.986-5.235 2.135-10.491 3.411-15.753 128.92-22.907 253.313-23.204 369.898-.883 5.354 23.674 8.305 46.668 8.829 68.916h-127.656c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h127.632c-.505 19.414-2.908 38.234-7.207 56.414zm55.234-127.457-33.274 78.313c1.816-37.546-3.227-77.176-15.121-118.595 6.446-4.653 14.397-6.666 22.422-5.541 9.482 1.33 17.687 6.838 22.509 15.109l1.71 2.933c4.911 8.423 5.566 18.809 1.754 27.781z"/></svg>
                            </i>Mandatory masks</span></li>}
                    {this.props.amenitiesPhoneCharger==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                            <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><g id="outline"><path d="m220.223 301.666-6.287 12.574a132.665 132.665 0 0 0 -13.936 59.032v90.728a32.036 32.036 0 0 0 32 32h120a32.036 32.036 0 0 0 32-32v-100a259.889 259.889 0 0 0 -10.4-72.8l-31.6-108.342v-30.858a18.206 18.206 0 0 1 16.656-18.027 8 8 0 0 0 7.344-7.973 54.061 54.061 0 0 0 -54-54h-128a8 8 0 0 0 -8 8v32a8 8 0 0 0 8 8h23.741a131.3 131.3 0 0 1 -19.725 61.68l-18.8 30.08a8 8 0 0 0 6.784 12.24h32a8 8 0 0 0 6.51-3.35l16.273-22.782a135.46 135.46 0 0 0 17.217-32.75v18.882a264.442 264.442 0 0 1 -27.777 117.666zm147.777 62.334v100a16.019 16.019 0 0 1 -16 16h-120a16.019 16.019 0 0 1 -16-16v-90.728a116.59 116.59 0 0 1 12.246-51.872l6.287-12.575a280.673 280.673 0 0 0 29.35-116.825h64.117l30.24 103.68a243.9 243.9 0 0 1 9.76 68.32zm-42-188h-62v-16h62zm23.466-56.374a34.48 34.48 0 0 0 -22.5 24.374h-70.966v-32a8 8 0 0 0 -8-8h-24v-16h88a38.064 38.064 0 0 1 37.466 31.626zm-157.466-31.626h16v16h-16zm25.764 100.568-13.881 19.432h-13.449l11.15-17.84a147.28 147.28 0 0 0 22.2-70.16h16.216a118.713 118.713 0 0 1 -22.236 68.568z"/><path d="m328 336h-72a16.019 16.019 0 0 0 -16 16v96a16.019 16.019 0 0 0 16 16h72a16.019 16.019 0 0 0 16-16v-96a16.019 16.019 0 0 0 -16-16zm0 112h-72v-96h72l.01 96z"/><path d="m79.612 20.341h16v19.497h-16z" transform="matrix(.625 -.781 .781 .625 9.385 79.707)"/><path d="m140.51 69.059h16v19.498h-16z" transform="matrix(.625 -.781 .781 .625 -5.802 145.545)"/><path d="m110.062 44.7h16v19.497h-16z" transform="matrix(.625 -.781 .781 .625 1.792 112.626)"/><path d="m116.503 88h19.497v16h-19.497z"/><path d="m77.51 88h19.497v16h-19.497z"/><path d="m38.516 88h19.497v16h-19.497z"/><path d="m77.863 153.91h19.497v16h-19.497z" transform="matrix(.781 -.625 .625 .781 -81.946 90.21)"/><path d="m138.761 105.192h19.498v16h-19.498z" transform="matrix(.781 -.625 .625 .781 -38.167 117.575)"/><path d="m108.314 129.551h19.497v16h-19.497z" transform="matrix(.781 -.625 .625 .781 -60.057 103.895)"/><path d="m331.3 280.337a8 8 0 0 0 -5.363 9.962l2.4 8a8 8 0 1 0 15.324-4.6l-2.4-8a8 8 0 0 0 -9.961-5.362z"/><path d="m314.5 224.337a8 8 0 0 0 -5.363 9.962l9.6 32a8 8 0 1 0 15.324-4.6l-9.6-32a8 8 0 0 0 -9.961-5.362z"/></g></svg>
                            </i>More sanitation</span></li>}
                    {this.props.amenitiesPhoneCharger==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                            <svg id="Capa_1" enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m119.809 174.001c8.276-8.614 13.38-20.299 13.38-33.159 0-26.416-21.491-47.906-47.906-47.906-26.416 0-47.907 21.491-47.907 47.906 0 12.861 5.104 24.545 13.38 33.159-28.427 2.648-50.756 26.628-50.756 55.735v96.976c0 13.047 10.615 23.663 23.663 23.663 3.059 0 5.981-.59 8.667-1.651v117.651c-5.962 2.822-10.106 8.88-10.106 15.902v12.122c0 9.706 7.896 17.602 17.602 17.602h90.915c9.706 0 17.602-7.896 17.602-17.602v-12.122c0-7.021-4.142-13.077-10.101-15.9v-49.437c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v47.73h-30.459v-96.113h5.632c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-26.265c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h5.632v96.113h-30.452v-130.459h75.91v47.729c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-33.215c2.685 1.06 5.605 1.649 8.662 1.649 13.047 0 23.663-10.615 23.663-23.663v-96.976c0-29.106-22.329-53.086-50.756-55.734zm-34.526-66.066c18.145 0 32.906 14.762 32.906 32.906 0 18.145-14.762 32.907-32.906 32.907-18.145 0-32.907-14.762-32.907-32.907 0-18.144 14.762-32.906 32.907-32.906zm-61.62 227.439c-4.776 0-8.663-3.886-8.663-8.663v-68.262h17.325v68.262c0 4.777-3.886 8.663-8.662 8.663zm13.561 159.024v-12.122c0-1.435 1.167-2.602 2.602-2.602h37.958v17.326h-37.959c-1.434 0-2.601-1.167-2.601-2.602zm96.117 0c0 1.435-1.167 2.602-2.602 2.602h-37.956v-17.325h37.957c1.435 0 2.602 1.167 2.602 2.602zm13.561-159.024c-4.773 0-8.657-3.881-8.662-8.653v-.011c0-.003 0-.006 0-.01v-68.251h17.325v68.262c0 4.777-3.886 8.663-8.663 8.663zm8.663-91.925h-17.325v-12.703c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v88.464h-75.915v-88.464c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12.703h-17.325v-13.713c0-22.601 18.387-40.988 40.988-40.988h58.589c22.601 0 40.988 18.387 40.988 40.988z"/><path d="m461.244 174.001c8.276-8.614 13.38-20.299 13.38-33.159 0-26.416-21.491-47.906-47.907-47.906s-47.906 21.491-47.906 47.906c0 12.861 5.104 24.545 13.38 33.159-28.427 2.648-50.756 26.628-50.756 55.735l-.005 36.704c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-7.991h17.33v68.251.01c0 2.317-.9 4.489-2.543 6.127-1.634 1.633-3.806 2.533-6.117 2.533-4.781 0-8.67-3.885-8.67-8.66v-25.27c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v25.27c0 13.046 10.618 23.66 23.67 23.66 3.013 0 5.938-.566 8.66-1.635v117.641c-5.959 2.823-10.101 8.879-10.101 15.9v12.122c0 9.706 7.896 17.602 17.602 17.602h90.915c9.706 0 17.602-7.896 17.602-17.602v-12.122c0-7.023-4.144-13.08-10.106-15.902v-49.434c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v47.73h-30.453v-96.113h5.632c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-26.264c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h5.632v96.113h-30.459v-130.459h75.91v47.729c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-33.217c2.686 1.062 5.608 1.651 8.667 1.651 13.047 0 23.663-10.615 23.663-23.663v-96.976c0-29.106-22.329-53.086-50.756-55.734zm-34.527-66.066c18.145 0 32.907 14.762 32.907 32.906 0 18.145-14.762 32.907-32.907 32.907s-32.906-14.762-32.906-32.907c0-18.144 14.762-32.906 32.906-32.906zm-70.282 135.514v-13.713c0-22.601 18.387-40.988 40.988-40.988h58.589c22.601 0 40.988 18.387 40.988 40.988v13.713h-17.325v-12.703c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v88.464h-75.915v-88.464c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12.703zm22.224 250.949v-12.122c0-1.435 1.167-2.602 2.602-2.602h37.957v17.326h-37.958c-1.434 0-2.601-1.167-2.601-2.602zm96.117 0c0 1.435-1.167 2.602-2.602 2.602h-37.958v-17.325h37.958c1.435 0 2.602 1.167 2.602 2.602zm13.561-159.024c-4.776 0-8.663-3.886-8.663-8.663v-68.262h17.326v68.262c0 4.777-3.886 8.663-8.663 8.663z"/><path d="m359.289 135.538-25.254-25.254c-2.929-2.929-7.678-2.929-10.606 0-2.929 2.929-2.929 7.678 0 10.606l12.451 12.451h-159.759l12.451-12.451c2.929-2.929 2.929-7.678 0-10.606-2.929-2.929-7.678-2.929-10.606 0l-25.254 25.254c-2.929 2.929-2.929 7.678 0 10.606l25.254 25.254c1.464 1.465 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197c2.929-2.929 2.929-7.678 0-10.606l-12.451-12.451h159.759l-12.451 12.451c-2.929 2.929-2.929 7.678 0 10.606 1.464 1.464 3.384 2.197 5.303 2.197s3.839-.732 5.303-2.197l25.254-25.254c2.929-2.928 2.929-7.677 0-10.606z"/><path d="m254.266 79.026c4.071.732 7.978-1.972 8.713-6.049l6.833-37.863 11.259 38.163c.026.089.054.177.083.266 1.229 3.658 4.638 6.107 8.494 6.107h.046c3.874-.02 7.281-2.509 8.477-6.194.028-.086.054-.172.079-.259l10.87-38.133 7.26 37.989c.777 4.069 4.706 6.736 8.774 5.959s6.736-4.706 5.959-8.774l-12.051-63.067c-.812-3.984-4.215-6.927-8.275-7.157-4.061-.218-7.772 2.312-9.028 6.18-.028.086-.054.172-.079.259l-12.13 42.552-12.577-42.628c-.026-.089-.054-.178-.083-.266-1.295-3.856-5.042-6.348-9.094-6.088-4.059.272-7.431 3.252-8.215 7.332l-11.363 62.958c-.737 4.077 1.972 7.978 6.048 8.713z"/><path d="m186.806 27.94c4.065.798 8.007-1.85 8.805-5.914.8-4.071 4.4-7.026 8.562-7.026 4.676 0 8.504 3.696 8.716 8.32l-.191 1.497c-.785 3.093-2.633 6.733-5.499 10.827-10.04 14.345-16.031 22.189-19.25 26.404-4.04 5.289-5.883 7.703-4.61 11.841.75 2.438 2.595 4.308 5.062 5.131.986.329 1.931.645 14.391.645 4.836 0 11.408-.047 20.388-.16 4.142-.052 7.457-3.452 7.405-7.594s-3.455-7.488-7.594-7.405c-6.168.078-12.704.129-18.202.143 3.494-4.682 8.289-11.246 14.698-20.403 4.075-5.821 6.734-11.33 7.904-16.372.399-1.767.507-3.83.507-4.148 0-13.083-10.643-23.726-23.726-23.726-11.312 0-21.103 8.047-23.28 19.135-.798 4.065 1.85 8.007 5.914 8.805z"/></g></g></svg>
                            </i>Social distancing</span></li>}
                    </ul>
                </div>
                </div></span>
                        </span>
                        
                    </span>
                </div>
            </div>
        </div>
        <div className="ListingPage__sectionDescription__6XXH1">
            <h2 className="ListingPage__descriptionTitle__3QPwf">
                <span>Amenities
                {/* {this.props.type} */}
                </span>
            </h2>
            <div className="ListingPage__description__fuoXR">
                <div>
                    <span width="0">
                        <span>
                            <span><div className="LocationDetails__AmenitiesWrapper-sc-1iqdbdn-13 BQWuw">
                <div className="Group__Style-sc-1abhmg4-0 kPuqKI">
                    <ul data-e2e="amenities" className="ul1mhn-0 eIpbjZ List-sc-1kd8oyc-0 bHYACb">
                    {this.props.amenitiesWhiteboard==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY">
                        <span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M1.5,4 C1.22385763,4 1,4.22385763 1,4.5 L1,19.5 C1,19.7761424 1.22385763,20 1.5,20 L22.5,20 C22.7761424,20 23,19.7761424 23,19.5 L23,4.5 C23,4.22385763 22.7761424,4 22.5,4 L1.5,4 Z M22,19 L2,19 L2,5 L22,5 L22,19 Z M10.8561294,10.5415244 L12.7856148,13.7573334 C12.962707,14.0524871 13.378117,14.0846036 13.5984719,13.8201778 L15.1879765,11.9351631 L16.7588221,13.8201778 C16.9820598,14.088063 17.4040464,14.0509188 17.5770543,13.748155 L20.7199114,8.24815503 C20.8569164,8.00839631 20.773618,7.70296897 20.5338593,7.56596399 C20.2941006,7.428959 19.9886733,7.51225737 19.8516683,7.75201609 L17.0791496,12.6425209 L15.5627576,10.8228505 C15.3628601,10.5829734 14.9944339,10.5829734 14.7945364,10.8228505 L13.2909359,12.6558846 L11.2859649,9.31426625 C11.0917632,8.99059676 10.6226737,8.99059676 10.428472,9.31426625 L8.0713291,13.2428377 C7.92925502,13.4796278 8.00603755,13.7867579 8.24282769,13.928832 C8.47961782,14.0709061 8.78674795,13.9941236 8.92882203,13.7573334 L10.8561294,10.5415244 Z M3,6 L3.5,6 L5.5,6 L6,6 L6,6.5 L6,8.5 L6,9 L5.5,9 L3.5,9 L3,9 L3,8.5 L3,6.5 L3,6 Z M5,7 L4,7 L4,8 L5,8 L5,7 Z M21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L3.5,18 C3.22385763,18 3,17.7761424 3,17.5 C3,17.2238576 3.22385763,17 3.5,17 L20.5,17 C20.7761424,17 21,17.2238576 21,17.5 Z">
                            </path>
                    </svg></i>Whiteboard</span>
                    </li>}
                    {/* {this.props.amenitiesWhiteboard==='false' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY">
                        <span
                        color="gray900" fontSize="normal" style={{textDecoration:"line-through"}}
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M1.5,4 C1.22385763,4 1,4.22385763 1,4.5 L1,19.5 C1,19.7761424 1.22385763,20 1.5,20 L22.5,20 C22.7761424,20 23,19.7761424 23,19.5 L23,4.5 C23,4.22385763 22.7761424,4 22.5,4 L1.5,4 Z M22,19 L2,19 L2,5 L22,5 L22,19 Z M10.8561294,10.5415244 L12.7856148,13.7573334 C12.962707,14.0524871 13.378117,14.0846036 13.5984719,13.8201778 L15.1879765,11.9351631 L16.7588221,13.8201778 C16.9820598,14.088063 17.4040464,14.0509188 17.5770543,13.748155 L20.7199114,8.24815503 C20.8569164,8.00839631 20.773618,7.70296897 20.5338593,7.56596399 C20.2941006,7.428959 19.9886733,7.51225737 19.8516683,7.75201609 L17.0791496,12.6425209 L15.5627576,10.8228505 C15.3628601,10.5829734 14.9944339,10.5829734 14.7945364,10.8228505 L13.2909359,12.6558846 L11.2859649,9.31426625 C11.0917632,8.99059676 10.6226737,8.99059676 10.428472,9.31426625 L8.0713291,13.2428377 C7.92925502,13.4796278 8.00603755,13.7867579 8.24282769,13.928832 C8.47961782,14.0709061 8.78674795,13.9941236 8.92882203,13.7573334 L10.8561294,10.5415244 Z M3,6 L3.5,6 L5.5,6 L6,6 L6,6.5 L6,8.5 L6,9 L5.5,9 L3.5,9 L3,9 L3,8.5 L3,6.5 L3,6 Z M5,7 L4,7 L4,8 L5,8 L5,7 Z M21,17.5 C21,17.7761424 20.7761424,18 20.5,18 L3.5,18 C3.22385763,18 3,17.7761424 3,17.5 C3,17.2238576 3.22385763,17 3.5,17 L20.5,17 C20.7761424,17 21,17.2238576 21,17.5 Z">
                            </path>
                    </svg></i>Whiteboard</span>
                    </li>} */}
                    {this.props.amenitiesTv==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M22,18 L22,5 L2,5 L2,18.5 C2,18.7761424 1.77614237,19 1.5,19 C1.22385763,19 1,18.7761424 1,18.5 L1,4.5 C1,4.22385763 1.22385763,4 1.5,4 L22.5,4 C22.7761424,4 23,4.22385763 23,4.5 L23,18.5 C23,18.7761424 22.7761424,19 22.5,19 L10.5,19 C10.2238576,19 10,18.7761424 10,18.5 C10,18.2238576 10.2238576,18 10.5,18 L22,18 Z M21,16 L21,17 L20,17 L20,16 L21,16 Z M19,16 L19,17 L18,17 L18,16 L19,16 Z M5.00591905,12 L6.99408095,12 C8.10191945,12 9,12.9019504 9,14.0085302 L9,19.9914698 C9,21.1007504 8.11344516,22 6.99408095,22 L5.00591905,22 C3.89808055,22 3,21.0980496 3,19.9914698 L3,14.0085302 C3,12.8992496 3.88655484,12 5.00591905,12 Z M4,19.9914698 C4,20.5471961 4.45179564,21 5.00591905,21 L6.99408095,21 C7.55599487,21 8,20.5536454 8,19.9914698 L8,14.0085302 C8,13.4528039 7.54820436,13 6.99408095,13 L5.00591905,13 C4.44400513,13 4,13.4463546 4,14.0085302 L4,19.9914698 Z M5.5,14 L6.5,14 C6.77614237,14 7,14.2238576 7,14.5 C7,14.7761424 6.77614237,15 6.5,15 L5.5,15 C5.22385763,15 5,14.7761424 5,14.5 C5,14.2238576 5.22385763,14 5.5,14 Z M5.5,16 L6.5,16 C6.77614237,16 7,16.2238576 7,16.5 C7,16.7761424 6.77614237,17 6.5,17 L5.5,17 C5.22385763,17 5,16.7761424 5,16.5 C5,16.2238576 5.22385763,16 5.5,16 Z">
                            </path>
                            </svg></i>Flatscreen TV</span></li>}
                    {this.props.amenitiesWifi==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M20.0003,22 L20.0003,22.5 C20.0003,22.7761424 19.7764424,23 19.5003,23 C19.2241576,23 19.0003,22.7761424 19.0003,22.5 L19.0003,22 L5.0004,22 L5.0004,22.5 C5.0004,22.7761424 4.77654237,23 4.5004,23 C4.22425763,23 4.0004,22.7761424 4.0004,22.5 L4.0004,22 L3.73913043,22 C2.7826087,22 2,21.1 2,20 L2,18 C2,16.9 2.7826087,16 3.73913043,16 L11.0003,16 L11.0003,15 C11.0003,14.7238576 11.2241576,14.5 11.5003,14.5 C11.7764424,14.5 12.0003,14.7238576 12.0003,15 L12.0003,16 L20.2608696,16 C21.2173913,16 22,16.9 22,18 L22,20 C22,21.1 21.2173913,22 20.2608696,22 L20.0003,22 Z M21,20 L21,18 C21,17.4236334 20.6316231,17 20.2608696,17 L3.73913043,17 C3.36837689,17 3,17.4236334 3,18 L3,20 C3,20.5763666 3.36837689,21 3.73913043,21 L20.2608696,21 C20.6316231,21 21,20.5763666 21,20 Z M19.0003,19.5 C19.0003,19.7756667 18.7762761,20 18.5003,20 C18.2243239,20 18.0003,19.7756667 18.0003,19.5 C18.0003,19.2239288 18.2242288,19 18.5003,19 C18.7763712,19 19.0003,19.2239288 19.0003,19.5 Z M17.0003,19.5 C17.0003,19.7756667 16.7762761,20 16.5003,20 C16.2243239,20 16.0003,19.7756667 16.0003,19.5 C16.0003,19.2239288 16.2242288,19 16.5003,19 C16.7763712,19 17.0003,19.2239288 17.0003,19.5 Z M1.27591344,6.67675843 C6.98182879,0.972927435 16.2226362,0.97615161 21.9243252,6.67679711 C22.1586613,6.91109024 22.158696,7.29098922 21.9244029,7.52532524 C21.6901098,7.75966126 21.3102108,7.75969602 21.0758748,7.52540289 C15.8426517,2.29313764 7.36146275,2.2901785 2.12428656,7.52544157 C1.88992918,7.75971333 1.5100302,7.75964393 1.27575843,7.52528656 C1.04148667,7.29092918 1.04155607,6.9110302 1.27591344,6.67675843 Z M4.10573593,9.50543593 C8.24704356,5.3641283 14.9579838,5.36609507 19.0963184,9.50549029 C19.330603,9.73983489 19.3305543,10.1197339 19.0962097,10.3540184 C18.8618651,10.588303 18.4819661,10.5882543 18.2476816,10.3539097 C14.5778715,6.68315914 8.62681307,6.68141507 4.95426407,10.3539641 C4.71994949,10.5882786 4.34005051,10.5882786 4.10573593,10.3539641 C3.87142136,10.1196495 3.87142136,9.73975051 4.10573593,9.50543593 Z M6.93372638,12.3329455 C9.51268514,9.75508604 13.6893731,9.7564462 16.2679829,12.3328548 C16.5023975,12.5670693 16.5025597,12.9469683 16.2683452,13.1813829 C16.0341307,13.4157975 15.6542317,13.4159597 15.4198171,13.1817452 C13.3096601,11.0733894 9.89235109,11.0722765 7.78207362,13.1816545 C7.5477091,13.4159191 7.16781012,13.4158381 6.9335455,13.1814736 C6.69928088,12.9471091 6.69936186,12.5672101 6.93372638,12.3329455 Z">
                            </path>
                            </svg></i>WiFi</span></li>}
                    {this.props.amenitiesMirror==='true' && <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M19,2 C19.5522847,2 20,2.44771525 20,3 L20,22 C20,22.5522847 19.5522847,23 19,23 L5,23 C4.44771525,23 4,22.5522847 4,22 L4,3 C4,2.44771525 4.44771525,2 5,2 L19,2 Z M5,3 L5,22 L19,22 L19,3 L5,3 Z M18,4 L18,21 L6,21 L6,4 L18,4 Z M17,5 L7,5 L7,20 L17,20 L17,5 Z M17,11.6824011 L14.8535534,13.8535534 C14.6582912,14.0488155 14.3417088,14.0488155 14.1464466,13.8535534 C13.9511845,13.6582912 13.9511845,13.3417088 14.1464466,13.1464466 L17,10.278181 L17,11.6824011 Z M13.3535534,7.35355339 L10.3535534,10.3535534 C10.1582912,10.5488155 9.84170876,10.5488155 9.64644661,10.3535534 C9.45118446,10.1582912 9.45118446,9.84170876 9.64644661,9.64644661 L12.6464466,6.64644661 C12.8417088,6.45118446 13.1582912,6.45118446 13.3535534,6.64644661 C13.5488155,6.84170876 13.5488155,7.15829124 13.3535534,7.35355339 Z M17,7.7076236 L10.3369052,14.3702017 C10.1416431,14.5654638 9.82506059,14.5654638 9.62979844,14.3702017 C9.43453629,14.1749395 9.43453629,13.8583571 9.62979843,13.6630949 L17,6.28821026 L17,7.7076236 Z">
                            </path>
                            </svg></i>Mirrors</span></li>}
                    {this.props.amenitiesElevator==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M12,21 L15,21 L15,9 L8,9 L8,21 L11,21 L11,9.46986137 L11,9 L12,9 L12,9.46986137 L12,21 Z M16,21 L17,21 L17,7 L6,7 L6,21 L7,21 L7,8.5 C7,8.22385763 7.22385763,8 7.5,8 L14.6779828,8 L15.5,8 C15.7761424,8 16,8.22385763 16,8.5 L16,21 Z M18,7 L18,22 L5,22 L5,7 C5,6.44771525 5.44771525,6 6,6 L17,6 C17.5522847,6 18,6.44771525 18,7 Z M13.6167251,4.02532598 L12.9096183,4.73243276 L11.4954047,3.31821919 L10.0811911,4.73243276 L9.37408437,4.02532598 L11.318628,2.08078233 C11.4267691,1.97264134 11.5638824,1.97248333 11.6720234,2.08062432 L13.6167251,4.02532598 Z M19.5,15 C19.2238576,15 19,14.7761424 19,14.5 C19,14.2238576 19.2238576,14 19.5,14 C19.7761424,14 20,14.2238576 20,14.5 C20,14.7761424 19.7761424,15 19.5,15 Z M19.5,17 C19.2238576,17 19,16.7761424 19,16.5 C19,16.2238576 19.2238576,16 19.5,16 C19.7761424,16 20,16.2238576 20,16.5 C20,16.7761424 19.7761424,17 19.5,17 Z">
                            </path>
                            </svg></i>Elevator access</span></li>}
                    {this.props.amenitiesPhoneCharger==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M16,21 L16,11.5 C16,11.2238576 16.2238576,11 16.5,11 C16.7761424,11 17,11.2238576 17,11.5 L17,21.5 C17,21.7761424 16.7761424,22 16.5,22 L6.5,22 C6.22385763,22 6,21.7761424 6,21.5 L6,5.5 C6,5.22385763 6.22385763,5 6.5,5 L12.5,5 C12.7761424,5 13,5.22385763 13,5.5 C13,5.77614237 12.7761424,6 12.5,6 L7,6 L7,21 L16,21 Z M11.5,20 C11.2238576,20 11,19.7761424 11,19.5 C11,19.2238576 11.2238576,19 11.5,19 C11.7761424,19 12,19.2238576 12,19.5 C12,19.7761424 11.7761424,20 11.5,20 Z M14,6.99803596 L16,2 L16,4.99882157 L18,4.99882157 L16,9.99685753 L16,6.99803596 L14,6.99803596 Z">
                            </path>
                            </svg></i>Phone charger</span></li>}
                    {this.props.amenitiesHdmi==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M13,19 L11,19 L11,22.5089948 C11,22.7801695 10.7680664,23 10.5,23 C10.2238576,23 10,22.7721195 10,22.5089948 L10,19 L7.00202479,19 C5.89633703,19 5,18.1041422 5,17.0026083 L5,10 L6,10 L6,3.99703014 C6,3.4463856 6.44266033,3 6.99895656,3 L8,3 C8,2.44661595 8.45303631,2 8.99703014,2 L15.0029699,2 C15.5536144,2 16,2.4463114 16,2.99754465 L17.0010434,3 C17.5573397,3 18,3.4463856 18,3.99703014 L18,10 L19,10 L19,17.0026083 C19,18.1057373 18.0999011,19 16.9989566,19 L14,19 L14,22.5089948 C14,22.7801695 13.7680664,23 13.5,23 C13.2238576,23 13,22.7721195 13,22.5089948 L13,19 Z M6,17.0026083 C6,17.5520127 6.44877883,18 7.00202479,18 L16.9989566,18 C17.5497993,18 18,17.5512716 18,17.0026083 L18,11 L6,11 L6,17.0026083 Z M9,10 L15,10 L15,3 L8.99703014,3 C9.0001657,2.99957579 9,10 9,10 Z M7,10 L8,10 L8,4 L7,4 L7,10 Z M16,4 L16,10 L17,10 L17,4 L16,4 Z M10,8.5 C10,8.22385763 10.2319336,8 10.5,8 C10.7761424,8 11,8.23193359 11,8.5 C11,8.77614237 10.7680664,9 10.5,9 C10.2238576,9 10,8.76806641 10,8.5 Z M13,8.5 C13,8.22385763 13.2319336,8 13.5,8 C13.7761424,8 14,8.23193359 14,8.5 C14,8.77614237 13.7680664,9 13.5,9 C13.2238576,9 13,8.76806641 13,8.5 Z">
                            </path>
                            </svg></i>HDMI</span></li>}
                    {this.props.amenitiesThunderbolt==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M9,7 L9,2 L15,2 L15,7 L16,7 L16,18.992516 C16,19.5489341 15.5469637,20 15.0029699,20 L14,20 L14,22.5095215 C14,22.7804053 13.7680664,23 13.5,23 C13.2238576,23 13,22.7849426 13,22.5095215 L13,20 L11,20 L11,22.5095215 C11,22.7804053 10.7680664,23 10.5,23 C10.2238576,23 10,22.7849426 10,22.5095215 L10,20 L8.99703014,20 C8.4463856,20 8,19.5510798 8,18.992516 L8,7 L9,7 Z M10,7 L14,7 L14,3 L10,3 L10,7 Z M9,18.992516 C9,19 15.0029699,19 15.0029699,19 C14.9956659,19 15,8 15,8 L9,8 L9,18.992516 Z M12,10 L12,14.5 L10.5,14.5 L12,10 Z M12,17 L12,12.5 L13.5,12.5 L12,17 Z">
                            </path>
                            </svg></i>Thunderbolt</span></li>}
                    {/* {this.props.amenitiesUsbC==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                            <path
                                d="M13,13 L14,13 L14,15 L20.0052288,15 C20.5546258,15 21,15.4556644 21,15.9953976 L21,22.0046024 C21,22.5543453 20.5490746,23 20.0052288,23 L4.99477117,23 C4.44537422,23 4,22.5443356 4,22.0046024 L4,15.9953976 C4,15.4456547 4.45092539,15 4.99477117,15 L11,15 L11,13 L12,13 L12,9 L11,9 L11,2.99895656 C11,2.44724809 11.4426603,2 11.9989566,2 L13.0010434,2 C13.5527519,2 14,2.44266033 14,2.99895656 L14,9 L13,9 L13,13 Z M5,22.0046024 C4.99934016,21.9995843 20,22 20,22 L20,15.9953976 C20.0006598,16.0004157 5,16 5,16 L5,22.0046024 Z M12,4 L13,4 L13,3 L12,3 L12,4 Z M12,8 L13,8 L13,5 L12,5 L12,8 Z M12,15 L13,15 L13,14 L12,14 L12,15 Z">
                            </path>
                            </svg></i>USB-C Multiport</span></li>} */}
                    {this.props.amenitiesLaptopFriendly==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" height="19px" width="19px"><path d="m5.5 5h-.5v8h14v-8zm12.5 7h-12v-6h12zm5.9 6.69-.04-.05-.11-.14-.4-.51-1.2-1.55-1.15-1.47v-10.97a1 1 0 0 0 -.99-1h-16.02c-.55 0-.99.45-.99 1v10.95l-.19.24c-.6.76-1.2 1.53-1.76 2.26l-.16.21c-.29.37-.55.72-.79 1.04l-.1.13v.17c0 1.35.65 2 2 2h20c1.17 0 2-.71 2-2v-.17l-.11-.14zm-19.9-14.69h16.01c-.01 0-.01 7.92-.01 10h-16zm18 16h-20c-.73 0-.96-.2-.99-.85.21-.28.43-.56.66-.87l.16-.21a229.93 229.93 0 0 1 2.33-2.98l.07-.09h15.51l1.6 2.06 1.2 1.55a4708182.18 4708182.18 0 0 1 .42.54c-.05.59-.38.86-.98.86zm-7.52-3.62a.5.5 0 0 0 -.48-.38h-4a .5.5 0 0 0 -.49.38l-.5 2a .5.5 0 0 0 .49.62h5a .5.5 0 0 0 .49-.62l-.5-2zm-4.34 1.62.25-1h3.22l.25 1z" fillRule="evenodd"></path></svg>
                                </i>Laptop friendly</span></li>}
                    {this.props.amenitiesCoffee==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                                <svg width="24px" height="24px" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M394.655 202.654H95.988C78.345 202.654 63.988 217.011 63.988 234.654V255.987C63.988 332.104 106.036 401.139 173.705 436.147C178.932 438.835 185.374 436.808 188.084 431.56C190.772 426.333 188.745 419.891 183.497 417.181C122.953 385.864 85.321 324.104 85.321 255.986V234.653C85.321 228.765 90.1 223.986 95.988 223.986H394.655C400.543 223.986 405.322 228.765 405.322 234.653V255.986C405.322 324.103 367.69 385.863 307.125 417.159C301.877 419.868 299.85 426.311 302.538 431.538C304.437 435.207 308.17 437.319 312.031 437.319C313.695 437.319 315.359 436.935 316.916 436.124C384.607 401.137 426.655 332.124 426.655 255.985V234.652C426.655 217.011 412.297 202.654 394.655 202.654Z" fill="black"/><path d="M489.865 422.558C488.201 418.569 484.318 415.966 480.009 415.966H10.676C6.36699 415.966 2.48399 418.569 0.819993 422.558C-0.844007 426.547 0.0729933 431.134 3.12399 434.185L27.039 458.121C41.162 472.222 59.892 479.988 79.839 479.988H410.804C430.751 479.988 449.503 472.223 463.647 458.121L487.562 434.185C490.612 431.134 491.529 426.547 489.865 422.558ZM448.543 443.038C438.474 453.107 425.055 458.654 410.826 458.654H79.839C65.61 458.654 52.191 453.107 42.122 443.038L36.405 437.321H454.26L448.543 443.038Z" fill="black"/><path d="M491.359 253.022C462.623 234.547 416.714 254.601 411.572 256.926C406.217 259.379 403.828 265.694 406.281 271.07C408.734 276.446 415.028 278.814 420.425 276.361C430.708 271.689 463.689 260.617 479.817 271.006C487.092 275.678 490.654 284.745 490.654 298.654C490.654 341.363 404.51 367.177 371.251 373.534L363.699 375.027C357.918 376.158 354.163 381.768 355.294 387.55C356.297 392.627 360.755 396.147 365.747 396.147C366.43 396.147 367.112 396.083 367.816 395.934L375.304 394.462C380.893 393.395 511.987 367.689 511.987 298.654C511.988 277.193 505.034 261.854 491.359 253.022Z" fill="black"/><path d="M328.372 113.31C345.716 91.635 345.716 57.694 328.372 36.019C324.681 31.411 318.004 30.643 313.375 34.355C308.767 38.046 308.02 44.744 311.711 49.352C322.698 63.069 322.698 86.259 311.69 100.019C294.325 121.694 294.325 155.635 311.69 177.31C313.802 179.955 316.895 181.321 320.031 181.321C322.356 181.321 324.724 180.553 326.687 178.974C331.295 175.283 332.042 168.563 328.351 163.977C317.343 150.259 317.343 127.07 328.372 113.31Z" fill="black"/><path d="M264.287 113.31C281.652 91.635 281.652 57.694 264.287 36.019C260.618 31.411 253.898 30.664 249.29 34.355C244.682 38.046 243.935 44.766 247.626 49.352C258.634 63.069 258.634 86.259 247.605 100.019C230.261 121.694 230.261 155.635 247.605 177.31C249.717 179.955 252.81 181.321 255.946 181.321C258.271 181.321 260.618 180.553 262.602 178.974C267.21 175.283 267.957 168.585 264.266 163.977C253.279 150.259 253.279 127.07 264.287 113.31Z" fill="black"/><path d="M200.372 113.331C217.716 91.656 217.716 57.715 200.372 36.04C196.703 31.432 190.004 30.664 185.375 34.376C180.788 38.045 180.042 44.765 183.711 49.352C194.698 63.069 194.698 86.259 183.69 100.019C166.325 121.694 166.325 155.635 183.69 177.31C185.802 179.955 188.895 181.321 192.031 181.321C194.356 181.321 196.724 180.553 198.687 178.996C203.295 175.305 204.042 168.585 200.351 163.999C189.343 150.259 189.343 127.091 200.372 113.331Z" fill="black"/></g><defs><clipPath id="clip0"><rect width="511.988" height="511.988" fill="white"/></clipPath></defs></svg>
                                </i>Unlimited Coffee</span></li>}
                    {this.props.amenitiesTea==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                                <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M415.974 124.542H400.992V114.608C400.992 101.577 390.389 90.9742 377.357 90.9742H220.201C216.058 90.9742 212.701 94.3313 212.701 98.4743C212.701 102.617 216.058 105.974 220.201 105.974H377.356C382.117 105.974 385.991 109.847 385.991 114.608V144.012H108.188V105.974H185.201C189.344 105.974 192.701 102.617 192.701 98.4743C192.701 94.3313 189.344 90.9742 185.201 90.9742H149.205V80.4372C149.205 64.9941 136.641 52.429 121.196 52.429C105.751 52.429 93.1875 64.9941 93.1875 80.4372V90.9742H23.6351C10.6031 90.9742 0 101.577 0 114.608V274.294C0 326.173 29.5582 371.273 72.7154 393.652H19.9571C9.94506 393.652 3.31402 404.078 7.58404 413.089C13.1441 424.822 20.3781 435.687 29.0862 445.38C37.1902 454.399 48.7503 459.57 60.8024 459.57H340.19C352.242 459.57 363.802 454.398 371.906 445.379C380.614 435.687 387.848 424.822 393.408 413.089C397.686 404.063 391.03 393.652 381.035 393.652H328.277C342.167 386.449 354.645 376.891 365.185 365.511H415.974C468.923 365.511 512 322.435 512 269.486V220.568C512 167.62 468.923 124.542 415.974 124.542V124.542ZM108.188 80.4372C108.188 73.2641 114.024 67.4291 121.197 67.4291C128.37 67.4291 134.206 73.2641 134.206 80.4372V90.9742H108.188V80.4372ZM15.0001 114.608C15.0001 109.847 18.8731 105.974 23.6351 105.974H93.1875V144.012H15.0001V114.608ZM378.888 408.652C374.087 418.316 367.992 427.291 360.747 435.354C355.484 441.21 347.991 444.57 340.189 444.57H60.8024C53.0003 444.57 45.5073 441.211 40.2442 435.355C33.0002 427.291 26.9042 418.316 22.1031 408.652H378.888ZM266.633 393.652H134.359C68.5444 393.652 15.0001 340.108 15.0001 274.293V159.012H93.1875V171.761C87.9125 173.308 83.2245 176.485 79.7565 180.979L58.1083 209.043C54.2953 213.986 52.1943 220.148 52.1943 226.393V302.035C52.1943 311.591 59.9674 319.364 69.5224 319.364H131.853C141.408 319.364 149.181 311.591 149.181 302.035V285.391C149.181 281.248 145.824 277.891 141.681 277.891C137.538 277.891 134.181 281.248 134.181 285.391V302.035C134.181 303.319 133.137 304.363 131.853 304.363H69.5224C68.2384 304.363 67.1944 303.319 67.1944 302.035V226.393C67.1944 223.446 68.1854 220.539 69.9854 218.205L91.6335 190.141C92.1005 189.536 92.6265 188.999 93.1875 188.509V204.492C84.1445 207.612 77.6285 216.202 77.6285 226.291C77.6285 239.006 87.9725 249.35 100.688 249.35C113.403 249.35 123.747 239.006 123.747 226.291C123.747 216.202 117.231 207.612 108.188 204.492V188.51C108.748 189 109.274 189.537 109.741 190.141L131.39 218.204C133.19 220.538 134.181 223.446 134.181 226.392V250.39C134.181 254.533 137.538 257.89 141.681 257.89C145.824 257.89 149.181 254.533 149.181 250.39V226.392C149.181 220.149 147.08 213.988 143.267 209.042L121.618 180.978C118.151 176.484 113.463 173.307 108.188 171.76V159.011H385.992V274.291C385.991 340.108 332.447 393.652 266.633 393.652ZM100.688 218.233C105.131 218.233 108.747 221.847 108.747 226.291C108.747 230.735 105.132 234.35 100.688 234.35C96.2436 234.35 92.6285 230.735 92.6285 226.291C92.6285 221.847 96.2436 218.233 100.688 218.233ZM400.991 274.293V177.387H415.973C439.785 177.387 459.156 196.758 459.156 220.569V269.487C459.156 293.297 439.785 312.669 415.973 312.669H395.398C399.031 300.501 400.991 287.623 400.991 274.293ZM497 269.486C497 314.164 460.652 350.511 415.974 350.511H377.292C382.252 343.327 386.489 335.692 389.964 327.667H415.974C448.056 327.667 474.157 301.566 474.157 269.485V220.567C474.157 188.486 448.056 162.385 415.974 162.385H400.992V151.511V139.541H415.974C460.653 139.541 497 175.889 497 220.566V269.486Z" fill="black"/></svg>
                                </i>Unlimited Tea</span></li>}
                    {this.props.amenitiesSelfCheckin==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" height="24px" width="24px" display="block" fill="rgb(255, 180, 0)"><path d="m21.43 9.9a2.03 2.03 0 0 0 -.51-.17l-.69-.12a1.87 1.87 0 0 0 -2.53-2.6.5.5 0 0 0 .5.87.88.88 0 0 1 1.28.98.88.88 0 0 1 -1.6.21.48.48 0 0 0 -.08-.09.48.48 0 0 0 -.02-.06 4.03 4.03 0 0 0 -2.05-1.92c-.05-.02-.11-.03-.16-.05l1.91-4.76a.5.5 0 0 0 -.28-.65l-2.5-1a .5.5 0 0 0 -.37.93l2.04.81-.55 1.36-1.63-.61a.5.5 0 0 0 -.35.94l1.61.6-.86 2.15a4.13 4.13 0 0 0 -2.36.44 2.47 2.47 0 0 0 -.29-1.57 1.67 1.67 0 0 0 -1.19-.97c-.66-.05-1.17.54-1.65 1.15l-1.35 1.71c-3.24 4.1-4.86 6.15-5.47 7.84a5.66 5.66 0 0 0 1.93 6.57.5.5 0 0 0 .6-.8 4.68 4.68 0 0 1 -1.59-5.43c.55-1.54 2.14-3.55 5.32-7.56l1.35-1.71c.57-.72.76-.77.79-.77 0 0 .06-.11.4.47a2.2 2.2 0 0 1 -.41 2.26l-2.59 3.81a.5.5 0 0 0 .05.62 9.74 9.74 0 0 1 1.87 3.52.5.5 0 1 0 .96-.29 11.18 11.18 0 0 0 -1.84-3.61l.99-1.45a3.88 3.88 0 0 0 .25 1.12 3.98 3.98 0 0 0 2.18 2.21 4.16 4.16 0 0 0 1.02.28.6.6 0 0 0 .07.01.5.5 0 0 0 .07-1 3.19 3.19 0 0 1 -.78-.22 2.99 2.99 0 0 1 -1.64-1.66 2.88 2.88 0 0 1 .04-2.24 3.1 3.1 0 0 1 4.03-1.56 3.03 3.03 0 0 1 1.55 1.44.49.49 0 0 0 .1.13.48.48 0 0 0 .03.07 1.86 1.86 0 0 0 .84.76 1.86 1.86 0 0 0 -.31.7 1.84 1.84 0 0 0 .07.99 1.98 1.98 0 0 0 -2.07 1.53 1.85 1.85 0 0 0 .07.99 2.01 2.01 0 0 0 -2.32 1.5 1.82 1.82 0 0 0 .27 1.4 2.01 2.01 0 0 0 1.3.85l.24.04c-1.39 1.42-3.92 3.67-5.51 3.67a.5.5 0 0 0 0 1c2.65 0 6.45-4.19 6.87-4.67a.5.5 0 0 0 -.04-.71.49.49 0 0 0 -.26-.11l-.01-.01-1.11-.21a1 1 0 0 1 -.66-.42.83.83 0 0 1 -.12-.65 1 1 0 0 1 1.19-.71l2.2.41h.02l.31.06a.52.52 0 0 0 .1.01.5.5 0 0 0 .09-.99l-.89-.17a.98.98 0 0 1 -.64-.42.87.87 0 0 1 -.13-.67.99.99 0 0 1 1.17-.73l2.02.39a.94.94 0 0 1 .79 1 .5.5 0 1 0 .99.11 1.87 1.87 0 0 0 -.25-1.14 1.92 1.92 0 0 0 1.22-1.4 1.9 1.9 0 0 0 -1.03-2.08zm.06 1.87a.97.97 0 0 1 -1.14.71l-1.07-.19a.96.96 0 0 1 -.62-.41.86.86 0 0 1 -.13-.65.95.95 0 0 1 .95-.73 1.07 1.07 0 0 1 .2.02l1.07.19a1.03 1.03 0 0 1 .26.09.9.9 0 0 1 .5.98zm-7.04-.82a.75.75 0 1 1 -.99-.39.75.75 0 0 1 .99.39" fill="#484848"></path></svg>
                                </i>Self check-in</span></li>}
                    {this.props.amenitiesUsbC==='true' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY"><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                                <svg width="24" height="24" viewBox="0 0 512 512"> <g> <g> <path d="M256,233.5c-1.404,0-2.776,0.136-4.109,0.383l-68.646-118.897c-2.07-3.588-6.659-4.816-10.245-2.746 c-3.587,2.071-4.816,6.658-2.745,10.245l68.652,118.908c-3.367,3.934-5.407,9.035-5.407,14.606c0,9.777,6.271,18.114,15,21.21 V444.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5V277.21c8.729-3.096,15-11.433,15-21.21 C278.5,243.594,268.406,233.5,256,233.5z M256,263.5c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5 S260.136,263.5,256,263.5z"/> </g> </g> <g> <g> <path d="M437.02,74.98C388.668,26.629,324.38,0,256,0S123.332,26.629,74.98,74.98C26.628,123.331,0,187.62,0,256 s26.629,132.668,74.98,181.02C123.331,485.372,187.62,512,256,512s132.668-26.629,181.02-74.98 C485.372,388.669,512,324.38,512,256S485.371,123.332,437.02,74.98z M256,497C123.112,497,15,388.888,15,256S123.112,15,256,15 s241,108.112,241,241S388.888,497,256,497z"/> </g> </g> <g> <g> <circle cx="256" cy="67.5" r="7.5"/> </g> </g> <g> <g> <circle cx="161.75" cy="92.75" r="7.5"/> </g> </g> <g> <g> <circle cx="92.75" cy="161.75" r="7.5"/> </g> </g> <g> <g> <circle cx="67.5" cy="256" r="7.5"/> </g> </g> <g> <g> <circle cx="92.75" cy="350.25" r="7.5"/> </g> </g> <g> <g> <circle cx="161.75" cy="419.25" r="7.5"/> </g> </g> <g> <g> <circle cx="350.25" cy="419.25" r="7.5"/> </g> </g> <g> <g> <circle cx="419.25" cy="350.25" r="7.5"/> </g> </g> <g> <g> <circle cx="444.5" cy="256" r="7.5"/> </g> </g> <g> <g> <circle cx="419.25" cy="161.75" r="7.5"/> </g> </g> <g> <g> <circle cx="350.25" cy="92.75" r="7.5"/> </g> </g> <g> <g> <path d="M415.806,96.194C373.12,53.508,316.366,30,256,30c-54.611,0-107.335,19.748-148.458,55.604 c-3.122,2.723-3.446,7.46-0.725,10.582c2.723,3.123,7.461,3.446,10.582,0.724C155.791,63.436,205.013,45,256,45 c116.346,0,211,94.654,211,211s-94.654,211-211,211S45,372.346,45,256c0-50.987,18.436-100.209,51.91-138.601 c2.723-3.122,2.398-7.859-0.724-10.582c-3.12-2.722-7.858-2.399-10.582,0.725C49.748,148.665,30,201.389,30,256 c0,60.366,23.508,117.12,66.194,159.806C138.88,458.492,195.634,482,256,482c60.366,0,117.12-23.508,159.806-66.194 C458.492,373.12,482,316.366,482,256C482,195.634,458.492,138.88,415.806,96.194z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
                                </i>Open 24h</span></li>}
                    {this.props.amenitiesSelfCheckin==='false' &&<li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Amenities__Item-sc-116xlka-1 kbnWwY" style={{textDecoration:"line-through"}}><span
                        color="gray900" fontSize="normal"
                        className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                            className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU">
                                <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" height="24px" width="24px" display="block" fill="rgb(255, 180, 0)"><path d="m21.43 9.9a2.03 2.03 0 0 0 -.51-.17l-.69-.12a1.87 1.87 0 0 0 -2.53-2.6.5.5 0 0 0 .5.87.88.88 0 0 1 1.28.98.88.88 0 0 1 -1.6.21.48.48 0 0 0 -.08-.09.48.48 0 0 0 -.02-.06 4.03 4.03 0 0 0 -2.05-1.92c-.05-.02-.11-.03-.16-.05l1.91-4.76a.5.5 0 0 0 -.28-.65l-2.5-1a .5.5 0 0 0 -.37.93l2.04.81-.55 1.36-1.63-.61a.5.5 0 0 0 -.35.94l1.61.6-.86 2.15a4.13 4.13 0 0 0 -2.36.44 2.47 2.47 0 0 0 -.29-1.57 1.67 1.67 0 0 0 -1.19-.97c-.66-.05-1.17.54-1.65 1.15l-1.35 1.71c-3.24 4.1-4.86 6.15-5.47 7.84a5.66 5.66 0 0 0 1.93 6.57.5.5 0 0 0 .6-.8 4.68 4.68 0 0 1 -1.59-5.43c.55-1.54 2.14-3.55 5.32-7.56l1.35-1.71c.57-.72.76-.77.79-.77 0 0 .06-.11.4.47a2.2 2.2 0 0 1 -.41 2.26l-2.59 3.81a.5.5 0 0 0 .05.62 9.74 9.74 0 0 1 1.87 3.52.5.5 0 1 0 .96-.29 11.18 11.18 0 0 0 -1.84-3.61l.99-1.45a3.88 3.88 0 0 0 .25 1.12 3.98 3.98 0 0 0 2.18 2.21 4.16 4.16 0 0 0 1.02.28.6.6 0 0 0 .07.01.5.5 0 0 0 .07-1 3.19 3.19 0 0 1 -.78-.22 2.99 2.99 0 0 1 -1.64-1.66 2.88 2.88 0 0 1 .04-2.24 3.1 3.1 0 0 1 4.03-1.56 3.03 3.03 0 0 1 1.55 1.44.49.49 0 0 0 .1.13.48.48 0 0 0 .03.07 1.86 1.86 0 0 0 .84.76 1.86 1.86 0 0 0 -.31.7 1.84 1.84 0 0 0 .07.99 1.98 1.98 0 0 0 -2.07 1.53 1.85 1.85 0 0 0 .07.99 2.01 2.01 0 0 0 -2.32 1.5 1.82 1.82 0 0 0 .27 1.4 2.01 2.01 0 0 0 1.3.85l.24.04c-1.39 1.42-3.92 3.67-5.51 3.67a.5.5 0 0 0 0 1c2.65 0 6.45-4.19 6.87-4.67a.5.5 0 0 0 -.04-.71.49.49 0 0 0 -.26-.11l-.01-.01-1.11-.21a1 1 0 0 1 -.66-.42.83.83 0 0 1 -.12-.65 1 1 0 0 1 1.19-.71l2.2.41h.02l.31.06a.52.52 0 0 0 .1.01.5.5 0 0 0 .09-.99l-.89-.17a.98.98 0 0 1 -.64-.42.87.87 0 0 1 -.13-.67.99.99 0 0 1 1.17-.73l2.02.39a.94.94 0 0 1 .79 1 .5.5 0 1 0 .99.11 1.87 1.87 0 0 0 -.25-1.14 1.92 1.92 0 0 0 1.22-1.4 1.9 1.9 0 0 0 -1.03-2.08zm.06 1.87a.97.97 0 0 1 -1.14.71l-1.07-.19a.96.96 0 0 1 -.62-.41.86.86 0 0 1 -.13-.65.95.95 0 0 1 .95-.73 1.07 1.07 0 0 1 .2.02l1.07.19a1.03 1.03 0 0 1 .26.09.9.9 0 0 1 .5.98zm-7.04-.82a.75.75 0 1 1 -.99-.39.75.75 0 0 1 .99.39" fill="#484848"></path></svg>
                                </i>Self check-in</span></li>}
                    </ul>
                </div>
                </div></span>
                        </span>
                        
                    </span>
                </div>
            </div>
        </div>
        <div className="ListingPage__sectionDescription__6XXH1">
                <div className="LocationDetails__OpeningHoursWrapper-sc-1iqdbdn-11 hyxQjs">
                    <div className="Group__Style-sc-1abhmg4-0 kPuqKI">
                                <h2 className="ListingPage__descriptionTitle__3QPwf">
                                    <span>Accommodating
                                    {/* {this.props.type} */}
                                    </span>
                                </h2>
                        <ul data-e2e="accommodates" className="ul1mhn-0 eIpbjZ List-sc-1kd8oyc-0 bHYACb">
                          <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Accommodates__Item-pponc5-0 iiwGOe"><span
                              direction="left" color="gray900" fontSize="normal"
                              className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                                className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                                  <path
                                    d="M2,9 L2,10 L22,10 L22,9 L2,9 Z M20.125,11 L20.9379826,17.5038611 C20.968219,17.7457522 20.796639,17.9663551 20.5547478,17.9965915 C20.5365869,17.9988616 20.5183023,18 20.5,18 C20.2143558,18 19.9734124,17.7872995 19.9379826,17.5038611 L19.375,13 L4.625,13 L4.06201737,17.5038611 C4.02658756,17.7872995 3.78564422,18 3.5,18 C3.25622642,18 3.05860889,17.8023825 3.05860889,17.5586089 C3.05860889,17.5403066 3.05974725,17.522022 3.06201737,17.5038611 L3.875,11 L2,11 C1.44771525,11 1,10.5522847 1,10 L1,9 C1,8.44771525 1.44771525,8 2,8 L22,8 C22.5522847,8 23,8.44771525 23,9 L23,10 C23,10.5522847 22.5522847,11 22,11 L20.125,11 Z M19.125,11 L4.875,11 L4.75,12 L19.25,12 L19.125,11 Z">
                                  </path>
                                </svg></i> At tables</span><span direction="right" color="gray900"
                              fontSize="normal" className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">{this.props.atTables}</span></li>
                          <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Accommodates__Item-pponc5-0 iiwGOe"><span
                              direction="left" color="gray900" fontSize="normal"
                              className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                                className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                                  <path
                                    d="M20.7324203,7 L22.0011115,7 C22.6391944,7 23.0006209,7.44832828 23.0006209,8 L23.0006209,11.5 C23.0006209,11.7070577 22.9155186,11.9143013 22.7798586,12.0859912 C22.9205612,12.3609414 23,12.6732394 23,13.0048815 L23,13.9951185 C23,15.102384 22.1103261,16 21.008845,16 L21,16 L21,17.5 C21,17.7761424 20.7761424,18 20.5,18 C20.2238576,18 20,17.7761424 20,17.5 L20,16 L4,16 L4,17.5 C4,17.7761424 3.77614237,18 3.5,18 C3.22385763,18 3,17.7761424 3,17.5 L3,16 L2.991155,16 C1.89147046,16 1,15.1061002 1,13.9951185 L1,13.0048815 C1,12.6736553 1.07961167,12.3611894 1.22068976,12.0858994 C1.08507198,11.9142274 1,11.7070208 1,11.5 L1,8 C1,7.44832828 1.36142656,7 1.99950944,7 L3.26520104,7 C3.60904616,6.40224702 4.25379689,6 4.99961498,6 L11.000385,6 C11.5971976,6 12.132943,6.26233695 12.4993254,6.67702505 C12.8655804,6.26187489 13.401379,6 13.9973917,6 L19.0026083,6 C19.7416654,6 20.3869724,6.4031863 20.7324203,7 Z M21,8 L21,10.0020869 C21,10.3655633 20.9027897,10.7063695 20.7330394,11 L21.008845,11 C21.3701552,11 21.7089886,11.0964968 22.0011115,11.2654851 L22.0011115,8 L21,8 Z M19.0026083,12 L13.9973917,12 L11.000385,12 L4.99961498,12 L2.991155,12 C2.44426356,12 2,12.4476051 2,13.0048815 L2,13.9951185 C2,14.5537792 2.44373385,15 2.991155,15 L21.008845,15 C21.5557364,15 22,14.5523949 22,13.9951185 L22,13.0048815 C22,12.4462208 21.5562661,12 21.008845,12 L19.0026083,12 Z M12,7.99791312 C12,7.44914471 11.551057,7 11.000385,7 L4.99961498,7 C4.44283624,7 4,7.44365855 4,7.99791312 L4,10.0020869 C4,10.5508553 4.448943,11 4.99961498,11 L11.000385,11 C11.5571638,11 12,10.5563414 12,10.0020869 L12,7.99791312 Z M3,8 L1.99950944,8 L1.99950944,11.265471 C2.29131663,11.0965845 2.62984047,11 2.991155,11 L3.26787751,11 C3.09751467,10.7059996 3,10.3650114 3,10.0020869 L3,8 Z M13,7.99791312 L13,10.0020869 C13,10.551104 13.4481955,11 13.9973917,11 L19.0026083,11 C19.5524733,11 20,10.5526033 20,10.0020869 L20,7.99791312 C20,7.44889595 19.5518045,7 19.0026083,7 L13.9973917,7 C13.4475267,7 13,7.44739669 13,7.99791312 Z">
                                  </path>
                                </svg></i> In lounge</span><span direction="right" color="gray900"
                              fontSize="normal" className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">{this.props.inLounge}</span></li>
                          <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Accommodates__Item-pponc5-0 iiwGOe"><span
                              direction="left" color="gray900" fontSize="normal"
                              className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                                className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                                  <path
                                    d="M9.05178108,11.4420919 C8.28609955,10.5019507 7.09527883,10 6,10 C3.8579145,10 2,11.5522266 2,14.5 C2,14.7761424 1.77614237,15 1.5,15 C1.22385763,15 1,14.7761424 1,14.5 C1,11.8250029 2.33406993,10.0546088 4.13162412,9.34730891 C3.44198206,8.7976511 3,7.95044077 3,7 C3,5.34314575 4.34314575,4 6,4 C7.65685425,4 9,5.34314575 9,7 C9,7.96029818 8.54880244,8.81521352 7.8468385,9.36431485 C8.43335977,9.60037036 8.98703045,9.94949771 9.45748204,10.4068947 C9.98813141,9.56178703 10.9284595,9 12,9 C13.0713733,9 14.0115751,9.56161172 14.5422695,10.4064991 C15.012668,9.94905928 15.5661434,9.59996121 16.1527328,9.36397943 C15.4510139,8.8148654 15,7.96010267 15,7 C15,5.34314575 16.3431458,4 18,4 C19.6568542,4 21,5.34314575 21,7 C21,7.95054269 20.5579231,8.7978328 19.868154,9.34748573 C21.6653825,10.054972 23,11.8255037 23,14.5 C23,14.7761424 22.7761424,15 22.5,15 C22.2238576,15 22,14.7761424 22,14.5 C22,11.552774 20.140924,10 18,10 C16.9028238,10 15.7138706,10.5015835 14.9481241,11.4415881 C14.9821838,11.6225158 15,11.8091773 15,12 C15,12.9505427 14.5579231,13.7978328 13.868154,14.3474857 C15.6653825,15.054972 17,16.8255037 17,19.5 C17,19.7761424 16.7761424,20 16.5,20 C16.2238576,20 16,19.7761424 16,19.5 C16,16.552774 14.140924,15 12,15 C9.8579145,15 8,16.5522266 8,19.5 C8,19.7761424 7.77614237,20 7.5,20 C7.22385763,20 7,19.7761424 7,19.5 C7,16.8250029 8.33406993,15.0546088 10.1316241,14.3473089 C9.44198206,13.7976511 9,12.9504408 9,12 C9,11.8093544 9.01778312,11.6228623 9.05178108,11.4420919 Z M6,9 C7.1045695,9 8,8.1045695 8,7 C8,5.8954305 7.1045695,5 6,5 C4.8954305,5 4,5.8954305 4,7 C4,8.1045695 4.8954305,9 6,9 Z M18,9 C19.1045695,9 20,8.1045695 20,7 C20,5.8954305 19.1045695,5 18,5 C16.8954305,5 16,5.8954305 16,7 C16,8.1045695 16.8954305,9 18,9 Z M12,14 C13.1045695,14 14,13.1045695 14,12 C14,10.8954305 13.1045695,10 12,10 C10.8954305,10 10,10.8954305 10,12 C10,13.1045695 10.8954305,14 12,14 Z">
                                  </path>
                                </svg></i> Maximum total</span><span direction="right" color="gray900"
                                fontSize="normal" className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">{this.props.atTables + this.props.inLounge}</span></li>
                          {/* <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 Accommodates__Item-pponc5-0 iiwGOe"><span
                              direction="left" color="gray900" fontSize="normal"
                              className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hpCteo"><i width="24px" height="24px"
                                className="sc-AykKC jROZdh Icon-sk9p0k-0 jYzuxU"><svg xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet">
                                  <path
                                    d="M17,10 L15,10 L15,10.5 C15,10.7761424 14.7761424,11 14.5,11 C14.2238576,11 14,10.7761424 14,10.5 L14,10 L12,10 L12,10.5 C12,10.7761424 11.7761424,11 11.5,11 C11.2238576,11 11,10.7761424 11,10.5 L11,10 L9,10 L9,10.5 C9,10.7761424 8.77614237,11 8.5,11 C8.22385763,11 8,10.7761424 8,10.5 L8,10 L6,10 L6,10.5 C6,10.7761424 5.77614237,11 5.5,11 C5.22385763,11 5,10.7761424 5,10.5 L5,10 L3,10 L3,14 L20,14 L20,10 L18,10 L18,10.5 C18,10.7761424 17.7761424,11 17.5,11 C17.2238576,11 17,10.7761424 17,10.5 L17,10 Z M3,9 L20,9 C20.5522847,9 21,9.44771525 21,10 L21,14 C21,14.5522847 20.5522847,15 20,15 L3,15 C2.44771525,15 2,14.5522847 2,14 L2,10 C2,9.44771525 2.44771525,9 3,9 Z"
                                    transform="rotate(-45 11.5 12)"></path>
                                </svg></i> Sq. ft.</span><span direction="right" color="gray900"
                              fontSize="normal" className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">966</span>
                          </li> */}
                        </ul>
                      </div>
                        <div className="Group__Style-sc-1abhmg4-0 kPuqKI">
                                <h2 className="ListingPage__descriptionTitle__3QPwf">
                                    <span>Open hours
                                    {/* {this.props.type} */}
                                    </span>
                                </h2>
                          <ul data-e2e="opening-hours" className="ul1mhn-0 eIpbjZ List-sc-1kd8oyc-0 bHYACb">
                            <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">mon</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">
                                {this.props.availableHoursMonday}
                              </span></li>
                              <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">tues</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">
                                {this.props.availableHoursTuesday}
                              </span></li>
                              <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">wed</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">
                                {this.props.availableHoursWednesday}
                              </span></li>
                              <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">thu</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">
                                {this.props.availableHoursThursday}
                              </span></li>
                              <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">fri</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">
                                {this.props.availableHoursFriday}
                              </span></li>
                              <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">sat</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">
                                {this.props.availableHoursSaturday}
                              </span></li>
                            <li className="biqtb1-0 grteUn Item-sc-18w7i8h-0 OpeningHours__Item-k3v5n8-0 fnHiVZ"><span
                                direction="left" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 hTRpNL">sun</span><span direction="right" color="gray900" fontSize="normal"
                                className="n6k0o4-0 rd1u8h-0 Text__Style-sc-11q9k6x-0 OmXvT">{this.props.availableHoursSunday}</span></li>
                          </ul>
                        </div>
                    </div>
                    </div>
        {/* {isMobile && <div className="ListingPage__sectionDescription__6XXH1">
            <h2 className="ListingPage__descriptionTitle__3QPwf Mobile__only">
                <span>Payment Info
                {this.props.type}
                </span>
            </h2>
            <div className="payment-support-div">
            <div className="ListingPage__author__3SbRu">
            <span>
                <span>
                    Now supporting 
                    <img className='payment-options' 
                    src={process.env.PUBLIC_URL+"/assets/Apple_Pay_Mark_RGB_041619.svg"} alt="Apple Pay"/> 
                    and 
                    <img className='payment-options' 
                    src={process.env.PUBLIC_URL+"/assets/google-pay-mark_800_gray.svg"} alt="Google Pay"/>
                </span>
            </span>
            </div>
        </div>
        </div>} */}
        {/* {isPrizePool()} */}
    {/* {this.props.type!=='event' && <div className="section__root__cgDzq">
        <h2 className="section__title__3SvlL">
            <span>Minimum people needed</span>
        </h2>
        <div className="section__content__25Ow3">
            <div>
                <span width="0">
                    <span>
                        <span>{this.props.flockSize} people minimum</span>
                    </span>
                </span>
            </div>
        </div>
    </div>} */}
    {/* <div className="SectionRulesMaybe__root__1PTcA">
        <h2 className="SectionRulesMaybe__title__d0wbN">
            <span>Merchant rules</span>
        </h2>
        <div className="SectionRulesMaybe__rules__SgDlV">
            <div>
                <span width="0">
                    <span>
                        <span>{this.props.merchantRules}</span>
                    </span>
                </span>
            </div>
        </div>
    </div> */}
     {/* <div className="section__root__cgDzq">
         <h2 className="section__title__3SvlL">
             <span>Payouts Cancellation Policy</span>
         </h2>
         <p className="section__content__25Ow3">
             <Link className="section__cancellationPolicyLink__1agIb" 
             onClick={() => this.recordCancellationClickAndPageView()}
             to="/cancellation-policy" role="button">Cancellation Policy</Link>
         </p>
     </div> */}
    {/* // <!-- <div className="ListingPage__sectionReviews__199DX">
    //     <h2 className="ListingPage__reviewsHeading__3Nacz">
    //         <span>Verified reviews (0)</span>
    //     </h2>
    //     <ul className="Reviews__root__27TeD"></ul>
    // </div> --> */}
                        {this.props.spaceStatus!=='Soon' && <div className="ListingPage__sectionDescription__6XXH1">
                        <h2 className="ListingPage__descriptionTitle__3QPwf">
                            <span>Already a member?
                            {/* {this.props.type} */}
                            </span>
                        </h2>
                        <div className="ListingPage__description__fuoXR">
                            <div>
                            <BookATour
                            spaceStatus={this.props.spaceStatus}
                            productName={this.props.productName}
                            productId={this.props.prodid}
                            />
                            </div>
                        </div>
                    </div>}
                      <div id="host" className="ListingPage__sectionHost__29aX6">
                    <h2 className="ListingPage__yourHostHeading__2jVfB"><span>Workspace hosted by</span></h2>
                    <div className="UserCard__root__1LIZe">
                      <div className="UserCard__content__3RLCr">
                          {/* <a className="Avatar__largeAvatar__1oPa0 UserCard__avatar__1VyCY" title="{this.props.merchantName}" target=""
                          href="/u/5be4f7a4-0253-4b81-bd3c-d3a7d7cddcbb">
                        <img src={process.env.PUBLIC_URL+"/assets/"
                          +this.props.type+"/"
                          +this.props.pictureId
                          +"-profile.jpg"}
                            className="Avatar__avatarImage__1IifJ" alt="{this.props.merchantName}"/>
                            </a> */}
                        <div className="UserCard__info__3Lf_c">
                          <div className="UserCard__headingRow__tUsf9">
                            <h3 className="UserCard__heading__3VOs_ mariapro bold color-dark"><span>{this.props.merchantName}</span></h3>
                          </div>
                          <div className="UserCard__hostStats__3d_HF"><span>Host response rate:</span><span
                              className="UserCard__hostStatsValue__2Fgc9"> 100%</span><span className="UserCard__hostStatsSeperator__2GCER">•</span><span>Host
                              response time:</span><span className="UserCard__hostStatsValue__2Fgc9"> within minutes</span></div>
                          <p className="UserCard__desktopBio__1pF8m">{this.props.aboutHost}</p>
                          {/* <p className="UserCard__links__zzu8p"><a className="UserCard__link__OWpZM" target=""
                              href={this.props.merchantWebsite}><span>View profile</span></a><span
                              className="UserCard__linkSeparator__1Rp-8">•</span><a href={"mailto:"+this.props.merchantEmail} target="_blank"
                              className="Button__inlineTextButton__3IeDs UserCard__contact__1GcNM"><span>Contact</span></a>
                          </p> */}
                        </div>
                      </div>
                      <p className="UserCard__mobileBio__2LzAI">{this.props.aboutHost}</p>
                    </div>
                    <div>
                      <div className="ListingPage__responseRateAndPopularityMobile__3uZ2C">
                        <div className="ListingPage__hostStatsHeading__1QBqY"><span>Host stats</span></div>
                        <div className="ListingPage__responseRateAndPopularityTableRow__2cKys">
                          <div className="ListingPage__left__d1j0Z"><span>Response rate</span></div><span
                            className="ListingPage__right__3DJq5">: 100
                            %</span>
                        </div>
                        <div className="ListingPage__responseRateAndPopularityTableRow__2cKys">
                          <div className="ListingPage__left__d1j0Z"><span>Response time</span></div><span
                            className="ListingPage__right__3DJq5">: within minutes</span>
                        </div>
                      </div>
                    </div>
                  </div>
    <div id="host" className="ListingPage__sectionHost__29aX6">
        {/* <h2 className="ListingPage__yourHostHeading__2jVfB">
            <span>{this.props.type} at</span>
        </h2> */}
        <div className="UserCard__root__1LIZe">
            <div className="UserCard__content__3RLCr">
                {/* <a className="Avatar__largeAvatar__1oPa0 UserCard__avatar__1VyCY"
                    title={this.props.merchantName} target="_blank"
                    href={this.props.merchantWebsite}>
                    <img src={this.props.merchantImage} data-savepage-src=""
                        className="Avatar__avatarImage__1IifJ" alt={this.props.merchantName}
                        srcSet="" sizes="96px"/>
                </a> */}
            </div>
        </div>
        <div>
        </div>
    </div>
    <div className="ListingPage__sectionMap__23r-z">
        <h2 className="ListingPage__locationTitle__2YP2z">
            <span>Location</span>
        </h2>
        <button className="ListingPage__map__1Biec">
            <div className="Map__root__3sHx2">
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
        </button>
    </div>
    </>
    )
  }
}