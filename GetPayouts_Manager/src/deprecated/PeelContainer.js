import React from 'react';
import Card from '../components/Card';
import {Link} from 'react-router-dom';

export default class PeelContainer extends React.Component {
    renderCards=()=>{
        const {skuData} = this.props
        const cards = skuData
        .sort((a, b) => parseInt(a.activity_date_epoch) - parseInt(b.activity_date_epoch))
        .map((cardInfo) =>{
          return cardInfo.metro_station==='Peel' &&
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
          prize={parseInt(cardInfo.prize)}
          atTables={parseInt(cardInfo.at_tables)}
          inLounge={parseInt(cardInfo.in_lounge)}
          listingArea={cardInfo.listing_area}
          pictureId={cardInfo.picture_id}
          metroStation={cardInfo.metro_station}
          spaceStatus={cardInfo.space_status}
          />})
        return cards
      }

    render(){
        window.scrollTo(0, 0)
        return(
            <li className="LandingPage__section__1ZxoF">
                <div className="LandingPage__sectionContentNarrow__3WnPV LandingPage__sectionContent__2emkg LandingPage__premiumListingWrapper__3ZrH3">
                    <div>
                    <h2 className="LandingPage__sectionTitle__kBCVT LandingPage__premiumListingsTitle__3PcWu">
                            <span>Peel</span>
                    </h2>
                    <p className="LandingPage__premiumListingsSubtitle__eos5d">
                            <span>Find hot-desks in beautiful homes near Metro Peel</span>
                    </p>
                    <div className="LandingPage__premiumListings__1N3tq">
                        {this.renderCards()}
                        <Link to={`/host`} className="ListingCard__root__3tK5n LandingPage__listingCard__1GV46">
                            <div className="ListingCard__threeToTwoWrapper__KPJGV">
                                <div className="ListingCard__aspectWrapper__3yQza">
                                <picture>
                                    <source
                                    srcSet={process.env.PUBLIC_URL+"/assets/respaced-collaborate.webp"}
                                        alt="Payouts listing"
                                        type="image/webp"/>
                                    <source 
                                    srcSet={process.env.PUBLIC_URL+"/assets/respaced-collaborate.jpg"}
                                        alt="Payouts listing"
                                        type="image/jpg" />
                                    <img src={process.env.PUBLIC_URL+"/assets/respaced-collaborate.jpg"} 
                                        alt="Payouts listing"
                                        className="SectionThumbnailLinks__image__Up7Vm"/>
                                </picture>
                                </div>
                            </div>
                            <div className="ListingCard__info__1p2HA">
                                <div className="ListingCard__tags__2gPsy">
                                    {/* {isPrizePool()} */}
                                </div>
                                <div className="ListingCard__infoRow__1E-N2">
                                    <div className="ListingCard__price__1yHBA">
                                    </div>
                                    <div className="ListingCard__mainInfo__1aMXU">
                                        <div className="ListingCard__title__GnsN2">Your space here</div>
                                        <div className="ListingCard__reviewInfoRow__34Ai0">
                                            {/* <span className="ListingCard__reviewStars__1ykvy">
                                                <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                                </svg>
                                                <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                                </svg>
                                                <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                                </svg>
                                                <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                                </svg>
                                                <svg className="IconReviewStar__filled__2ykNO ListingCard__reviewStar__37vHI" width="23" height="23" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.938 8.008c-.15-.412-.544-.69-.985-.69H14.38L12.507.758C12.377.31 11.967 0 11.5 0c-.467 0-.88.31-1.006.76L8.618 7.317H1.046c-.442 0-.833.278-.983.69-.15.414-.025.876.314 1.16l5.7 4.75L3.2 21.59c-.16.43-.02.916.346 1.196.362.28.87.29 1.242.02l6.71-4.79 6.713 4.79c.375.27.88.26 1.245-.02.366-.28.504-.765.343-1.196l-2.875-7.67 5.7-4.75c.34-.284.463-.746.315-1.16" fillRule="evenodd"></path>
                                                </svg>
                                            </span> */}
                                            <span>
                                                {/* <span className="ListingCard__bullet__23N0F">•</span> */}
                                                <span className="ListingCard__membershipscount__19MHs">
                                                {/* <span className="ListingCard__membershipscount__19MHs">
                                                {getTicketsSold(props) >= 4 && getTicketsSold(props) + ' going '} </span> */}
                                                Host a workspace and earn
                                                {/* {getActivityDate(props)} */}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
             </div>
         </li>
        )
    }

}