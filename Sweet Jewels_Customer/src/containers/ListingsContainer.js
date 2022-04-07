import React from 'react';
import Listing from '../components/Listing';
// import { Link } from "react-router-dom";
// import LazyLoad from 'react-lazy-load';

const ListingsContainer = ({merchantProductInfo})=>{
  const {product_info } = merchantProductInfo;

  const renderListings=()=>{
    return product_info
    .map((product_price_info) =>
    <>
    {product_price_info.product.metadata.product_active==='true' &&
      <Listing 
      key={product_price_info.product.id}
      productName={product_price_info.product.name}
      prices={product_price_info.prices}
      prodid={product_price_info.product.id}
      product_image_link={product_price_info.product.images[0]}
      description={product_price_info.product.description}
      />
      }
      </>
      )
  }
    return(
        <>
        <div class="row justify-content-center justify-content-md-start">
            {renderListings()}
        </div>
        </>
    )
}

export default ListingsContainer;
