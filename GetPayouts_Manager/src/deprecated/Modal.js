import React from 'react';
import 'react-dates/initialize';

export default class Modal extends React.Component {

    getActivityDate = ()=>{
        const {activityDateEpoch} = this.props
        const activityDate=new Date(activityDateEpoch*1000)
        return activityDate.toDateString().replace(/\d{4}/,'')
      }
       
      getNumOfMiliSeconds = () => {
        return this.props.flockDeadline *  24 * 60 * 60 * 1000
      }
      
      getTicketsSold=()=>{
        const {ticketsSold,customGoing} = this.props
        if(customGoing === 0) return ticketsSold
        else if(!customGoing) return ticketsSold
        return customGoing
    }

    render() {
    const {quantity} = this.props
    // const expiredMsg = ticketsAvailable === 0 ? 'Sold Out': 'No more time'
    // const Expired = () => <span>{expiredMsg}</span>;
    // const countdownDate = new Date(this.props.countdownEpoch*1000)
    const totalOrPerPersonText = quantity.value > 1 ? 'Total' : 'per month'
    const totalDaily = quantity.value > 1 ? 'Total' : 'per day'
    // const renderer = ({ days, hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //         // Render a completed state
    //         return <Expired />;
    //     } else {
    //         // Render a countdown
    //         const countDownString = days+"d "+hours+"h "+minutes+"m "+seconds+"s"
    //         return <span>{countDownString}</span>;
    //     }
    //     };
    return (
        <>
        {this.props.type=='private' && <div className="ListingPage__membershipHeading__9sHfE">
            <div className="ListingPage__desktopPriceContainer__2dGdE">
                <div className="ListingPage__desktopPriceValue__1T4VV"
                    title={this.props.price}><span className="f-28">CAD </span>{this.props.price}
                </div>
                <div className="ListingPage__desktopPerUnit__2vTgM">
                    <span>per day</span>
                </div>
            </div>
        </div>}
        {this.props.type=='spaces' && <div className="ListingPage__membershipHeading__9sHfE">
            <div className="ListingPage__desktopPriceContainer__2dGdE">
                <div className="ListingPage__desktopPriceValue__1T4VV"
                    title={this.props.price}><span className="f-28">CAD </span>{this.props.price}
                </div>
                <div className="ListingPage__desktopPerUnit__2vTgM">
                    <span>per month</span>
                </div>
            </div>
        </div>}
        {this.props.spaceStatus!=='Full' && this.props.type==='spaces' &&<div><h2 class="bold section__title text-align-center">A workspace for every need.</h2>
        <p class="c-location-pricing-feature__content">You'll have a membership that is as flexible as you are. Month-to-month.</p>
        <ul>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                Access to space
            </span>
            </li>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                Unlimited coffee/tea
            </span>
            </li>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                Cancel anytime
            </span>
            </li>
        </ul>
        </div>}
        {this.props.spaceStatus!=='Full' && this.props.type==='private' &&<div><h2 class="bold section__title text-align-center">Daily access space.</h2>
        <p class="c-location-pricing-feature__content">You can book this space for a single day use. Easy access to a private workspace.</p>
        <ul>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                Access to space
            </span>
            </li>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                Unlimited coffee/tea
            </span>
            </li>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                A la carte food and beverages
            </span>
            </li>
            <li style={{paddingBottom: "10px"}}>
            <svg height="22px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
            <span style={{paddingLeft: "15px"}}>
                One-time purchase
            </span>
            </li>
        </ul>
        </div>}
        {this.props.spaceStatus==='Full' &&<div><h2 class="bold section__title text-align-center">Opening soon!</h2>
        <p class="c-location-pricing-feature__content">This space is about to open. To make sure we can save you a seat, sign up to the waitlist below.</p>
        </div>}



        {/* <div className="DateHourPicker__hourRow__9XK0b">
            <div className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3Q">
                <label htmlFor="firstDate.hourStart">Going</label>
                <span className="FieldSelect__select__2OoZT DateHourPicker__hourStartSelect__2Zbza">
                    <p className="ListingPage__desktopPriceValue__25AnS">
                        {this.props.ticketsSold}
                        {this.getTicketsSold()}
                    </p>
                </span>
            </div>
            <div className="FieldSelect__root__Tva6Y DateHourPicker__hourEnd__3Nh3Q">
                <label htmlFor="firstDate.hourStart">Minimum Required</label>
                <span className="FieldSelect__select__2OoZT DateHourPicker__hourStartSelect__2Zbza">
                    <p className="ListingPage__desktopPriceValue__25AnS">{this.props.flockSize}</p>
                </span>
            </div>
        </div> */}
    </>
    )
  }
}