import React from 'react';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Listing =(props)=>{
    const { 
            productName,
            prices,
            prodid,
            product_image_link = 'https://i.imgur.com/2UMCSXT.png',
        } = props

        const price_options = prices.data;
        price_options.sort((priceA,priceB) => priceA.unit_amount - priceB.unit_amount);
        // const lowest_price = price_options[0].unit_amount;

        const getPriceOptions = (price_options) => price_options.map((price) =>
            <span
            key={price.id}
            value={price.id}
            >
            {/* {price.metadata.hasOwnProperty('description') && price.metadata.description} -  */}
            ${price.unit_amount/100}
            </span>
        );

        return (
            <div class="mt-10 col-sm-8 col-md-6 col-lg-3">
                <Link 
                to={`/shop/${prodid
                        .replace('prod_','')
                        .toLowerCase()
                        +'#'}`
                    }
                >
                        <img src={product_image_link}
                            class="img-fluid mb-4 img-forced" alt="no-image"/>
                    <div class="d-block font-heading text-dark-1 text-center mb-2">
                        {productName}
                    </div>
                    <p class="font-heading text-action-1 mb-0 text-center">
                        Starting at {getPriceOptions(price_options)[0]}
                    </p>
                </Link>
            </div>
        );
    }
export default Listing 
