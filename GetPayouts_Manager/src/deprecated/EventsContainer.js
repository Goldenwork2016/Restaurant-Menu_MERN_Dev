import React from 'react';
import Card from '../components/Card';

export default class EventsContainer extends React.Component {
    renderCards=()=>{
        const {skuData} = this.props
        const cards = skuData
        .sort((a, b) => parseInt(a.activity_date_epoch) - parseInt(b.activity_date_epoch))
        .map((cardInfo) =>{
          return cardInfo.product_type==='event' &&
          <Card
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
          spaceStatus={cardInfo.space_status}
          />})
        return cards
      }

    render(){
        return(
            <li className="LandingPage__section__1ZxoF">
                <div className="LandingPage__sectionContentNarrow__3WnPV LandingPage__sectionContent__2emkg LandingPage__premiumListingWrapper__3ZrH3">
                    <div>
                    <h2 className="LandingPage__sectionTitle__kBCVT LandingPage__premiumListingsTitle__3PcWu">
                            <span>Featured</span>
                    </h2>
                    <p className="LandingPage__premiumListingsSubtitle__eos5d">
                            <span>Browse our events coming up next</span>
                    </p>
                    <div className="LandingPage__premiumListings__1N3tq">
                        {this.renderCards()}
                    </div>
                </div>
             </div>
         </li>
        )
    }

}