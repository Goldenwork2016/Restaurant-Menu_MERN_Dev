import React from 'react';
import Listing from '../components/Listing';
import CardSoon from '../components/CardSoon';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazy-load';

export default class SpacesContainer extends React.Component {
    renderCards=()=>{
        const {skuData} = this.props
        const cards = skuData
        .sort((a, b) => parseInt(a.activity_date_epoch) - parseInt(b.activity_date_epoch))
        .map((cardInfo) =>{
          return cardInfo.product_type==='subscription' && cardInfo.space_status==='Available' &&
          <Listing
          key={cardInfo.sku_id}
          productName={cardInfo.product_name}
          price={cardInfo.sku_price}
          skuQuantity={cardInfo.sku_quantity}
          duration={`${cardInfo.activity_duration} minutes`}
          ticketsSold={parseInt(cardInfo.flock_size)-cardInfo.sku_quantity}
          ticketsAvailable={cardInfo.sku_quantity}
          flockSize={parseInt(cardInfo.flock_size)}
          skuid={cardInfo.sku_id}
          created={cardInfo.sku_created}
          flockDeadline={cardInfo.flock_deadline}
          activityDeadline={cardInfo.activity_deadline}
          currency={cardInfo.sku_currency}
          type={cardInfo.sku_type}
          prodid={cardInfo.product_id}
          merchantName={cardInfo.merchant_name}
          merchantLocation={cardInfo.merchant_location}
          offsetHours={parseInt(cardInfo.offset_hours)}
          offsetHoursCountdown={parseInt(cardInfo.offset_hours_countdown)}
          productType={cardInfo.product_type}
          productDescription={cardInfo.product_description}
          updated={cardInfo.updated}
          activityDateEpoch={cardInfo.activity_date_epoch}
          merchantPrice={parseInt(cardInfo.merchant_price)/100}
          regularPrice={parseInt(cardInfo.regular_price)/100}
          customGoing={parseInt(cardInfo.custom_going)}
          prize={parseInt(cardInfo.prize)}
          atTables={parseInt(cardInfo.at_tables)}
          inLounge={parseInt(cardInfo.in_lounge)}
          listingArea={cardInfo.listing_area}
          pictureId={cardInfo.picture_id}
          metroStation={cardInfo.metro_station}
          spaceStatus={cardInfo.space_status}
          liveSeats={cardInfo.live_seats}
          />})
        return cards
      }
      renderFullCards=()=>{
        const {skuData} = this.props
        const cards = skuData
        .sort((a, b) => parseInt(a.activity_date_epoch) - parseInt(b.activity_date_epoch))
        .map((cardInfo) =>{
          return cardInfo.product_type==='subscription' && cardInfo.space_status==='Full' &&
          <Listing
          key={cardInfo.sku_id}
          productName={cardInfo.product_name}
          price={cardInfo.sku_price}
          skuQuantity={cardInfo.sku_quantity}
          duration={`${cardInfo.activity_duration} minutes`}
          ticketsSold={parseInt(cardInfo.flock_size)-cardInfo.sku_quantity}
          ticketsAvailable={cardInfo.sku_quantity}
          flockSize={parseInt(cardInfo.flock_size)}
          skuid={cardInfo.sku_id}
          created={cardInfo.sku_created}
          flockDeadline={cardInfo.flock_deadline}
          activityDeadline={cardInfo.activity_deadline}
          currency={cardInfo.sku_currency}
          type={cardInfo.sku_type}
          prodid={cardInfo.product_id}
          merchantName={cardInfo.merchant_name}
          merchantLocation={cardInfo.merchant_location}
          offsetHours={parseInt(cardInfo.offset_hours)}
          offsetHoursCountdown={parseInt(cardInfo.offset_hours_countdown)}
          productType={cardInfo.product_type}
          productDescription={cardInfo.product_description}
          updated={cardInfo.updated}
          activityDateEpoch={cardInfo.activity_date_epoch}
          merchantPrice={parseInt(cardInfo.merchant_price)/100}
          regularPrice={parseInt(cardInfo.regular_price)/100}
          customGoing={parseInt(cardInfo.custom_going)}
          prize={parseInt(cardInfo.prize)}
          atTables={parseInt(cardInfo.at_tables)}
          inLounge={parseInt(cardInfo.in_lounge)}
          listingArea={cardInfo.listing_area}
          pictureId={cardInfo.picture_id}
          metroStation={cardInfo.metro_station}
          spaceStatus={cardInfo.space_status}
          liveSeats={cardInfo.live_seats}
          />})
        return cards
      }
      renderSoonCards=()=>{
        const {skuData} = this.props
        const cards = skuData
        .sort((a, b) => parseInt(a.activity_date_epoch) - parseInt(b.activity_date_epoch))
        .map((cardInfo) =>{
          return cardInfo.product_type==='subscription' && cardInfo.space_status==='Soon' &&
          <Listing
          key={cardInfo.sku_id}
          productName={cardInfo.product_name}
          price={cardInfo.sku_price}
          skuQuantity={cardInfo.sku_quantity}
          duration={`${cardInfo.activity_duration} minutes`}
          ticketsSold={parseInt(cardInfo.flock_size)-cardInfo.sku_quantity}
          ticketsAvailable={cardInfo.sku_quantity}
          flockSize={parseInt(cardInfo.flock_size)}
          skuid={cardInfo.sku_id}
          created={cardInfo.sku_created}
          flockDeadline={cardInfo.flock_deadline}
          activityDeadline={cardInfo.activity_deadline}
          currency={cardInfo.sku_currency}
          type={cardInfo.sku_type}
          prodid={cardInfo.product_id}
          merchantName={cardInfo.merchant_name}
          merchantLocation={cardInfo.merchant_location}
          offsetHours={parseInt(cardInfo.offset_hours)}
          offsetHoursCountdown={parseInt(cardInfo.offset_hours_countdown)}
          productType={cardInfo.product_type}
          productDescription={cardInfo.product_description}
          updated={cardInfo.updated}
          activityDateEpoch={cardInfo.activity_date_epoch}
          merchantPrice={parseInt(cardInfo.merchant_price)/100}
          regularPrice={parseInt(cardInfo.regular_price)/100}
          customGoing={parseInt(cardInfo.custom_going)}
          prize={parseInt(cardInfo.prize)}
          atTables={parseInt(cardInfo.at_tables)}
          inLounge={parseInt(cardInfo.in_lounge)}
          listingArea={cardInfo.listing_area}
          pictureId={cardInfo.picture_id}
          metroStation={cardInfo.metro_station}
          spaceStatus={cardInfo.space_status}
          liveSeats={cardInfo.live_seats}
          />})
        return cards
      }

    render(){
        return(
            <>
            <div class="row justify-content-center align-items-center align-items-lg-end">
                <div class="col-lg-7 col-md-8 col-sm-7 text-sm-left">
                    <h2 class="bold small">
                    Create a page like these ones
                    </h2>
                </div>
            <div class="col-lg-3 col-md-4 col-sm-5 text-sm-right hide-mobile">
                <a href="/login" class="btn mt-30 mt-sm-0 size50 action-4 px-3 color-black">
                  List your products
                </a>
            </div>
            </div>
            <div class="row justify-content-center">
                {this.renderCards()} {this.renderFullCards()} 
                {/* {this.renderSoonCards()} */}
            </div>
            </>
        )
    }

}