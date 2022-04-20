import React from 'react';
import MerchantListingMainImage from './MerchantListingMainImage';

const getLowestPrice = ((pricing_info)=>{
    const prices = pricing_info.map( ({price_amount}) => price_amount )
    const lowestPrice = prices.sort((a, b) => {
        return a - b;
    })[0];
    return `$${lowestPrice/100}`;
})

const MerchantProductInfo=({themeColor, aboutHost, 
    merchantName, linkWebsite, linkFacebook, linkInstagram, 
    linkTwitter, linkYoutube, linkLinkedin, placeId, product_info, product_id })=>{
    return (
        <>
        <div class="color-heading text-adaptive text-left f-20">
                <span class="mr-10" style={{color:themeColor}}>
                    <i class="fa fa-shopping-cart"></i>
                </span>
                Shopping at
        </div>
        <span class="mb-10 f-32 text-left">
            <h2 class="bold pt-0 pb-0">{merchantName}</h2>
        </span>
        {/* <div class="d-flex flex-wrap align-items-end color_quantity">
            <div class="mt-20 mr-20 colors">
                <div class="mb-1 color-dark f-18 semibold label">
                    About
                </div>
            </div>
        </div> */}

        <div class="color-heading text-adaptive text-left">
                {aboutHost}
        </div>
        <div class="text-left mb-0 px-0 color-black advantages">
            <div class="mb-10">
                {linkWebsite && <a href={linkWebsite}>
                    <i class="fas fa-globe f-24 pr-10" style={{color:themeColor}}></i>
                </a>}
                {linkFacebook && <a href={linkFacebook}>
                    <i class="fab fa-facebook f-24 pr-10" style={{color:themeColor}}></i>
                </a>}
                {linkInstagram && <a href={linkInstagram}>
                    <i class="fab fa-instagram f-24 pr-10" style={{color:themeColor}}></i>
                </a>}
                {linkTwitter &&<a href={linkTwitter}>
                    <i class="fab fa-twitter f-24 pr-10" style={{color:themeColor}}></i>
                </a>}
                {linkYoutube &&<a href={linkYoutube}>
                    <i class="fab fa-youtube f-24 pr-10" style={{color:themeColor}}></i>
                </a>}
                {linkLinkedin &&<a href={linkLinkedin}>
                    <i class="fab fa-linkedin f-24 pr-10" style={{color:themeColor}}></i>
                </a>}

            {!linkWebsite 
            && !linkFacebook 
            && !linkInstagram
            && !linkTwitter 
            && !linkYoutube 
            && !linkLinkedin 
            && <span class="d-none"></span>}
            </div>
        </div>
        {/* START PRODUCT */}

        <div class="row justify-content-center products pt-30 product-block">
        {product_info.map( ({product_name, pricing_info, product_description, prodid, product_id})=>{
        return <div id="product">
            <MerchantListingMainImage
            class="product-image"
            type={'service'}
            // productName={'merchantInfo[0].product_name'}
            // prodid={merchantInfo[0].product_id}
            prodid={'prod_GQOh8qEmYJu3ne'}
            />
        <div class="mt-25 mb-45 col-12 product product-image pr-10 pl-10">
        <div class="mt-20 d-flex flex-wrap justify-content-between align-items-center">
            <a href="#" class="link color-main f-18 medium title">
                {product_name}
            </a>
            <div class="price bg-gray radius16 color-heading medium lh-30 px-2">
                {getLowestPrice(pricing_info)}
            </div>
        </div>
        {/* <div class="mt-10 d-flex flex-wrap colors">
        <label class="input-control input-radio mr-5">
            <input type="radio" name="ecommerce_7_product_1_color" value="#000000" checked="checked"/>
            <div class="input-control-box w-20 h-20 radius_full">
            <i class="fas fa-check input-control-icon f-12 color-white">
            </i>
            </div>
        </label>
        <label class="input-control input-radio mr-5">
            <input type="radio" name="ecommerce_7_product_1_color" value="#482BE7"/>
            <div class="input-control-box w-20 h-20 radius_full">
            <i class="fas fa-check input-control-icon f-12 color-white">
            </i>
            </div>
        </label>
        <label class="input-control input-radio mr-5">
            <input type="radio" name="ecommerce_7_product_1_color" value="#E93A7D"/>
            <div class="input-control-box w-20 h-20 radius_full">
            <i class="fas fa-check input-control-icon f-12 color-white">
            </i>
            </div>
        </label>
        <label class="input-control input-radio">
            <input type="radio" name="ecommerce_7_product_1_color" value="#FFFC00"/>
            <div class="input-control-box w-20 h-20 radius_full">
            <i class="fas fa-check input-control-icon f-12 color-main">
            </i>
            </div>
        </label>
        </div> */}

        <div class="mb-0 px-0 color-heading advantages text-left">
            <div class="mb-20">
                {product_description}
            </div>
            <div class="mb-20">
                <div id="options" class="mt-10 f-12">
                    {
                        pricing_info.map( ({price_description})=>{
                            return <a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading lh-30 bold radius10 link">
                            <i class="fas fa-check-circle mr-4"></i>&nbsp;{price_description}
                        </a>

                        })
                    }
                </div>
            </div>
        </div>
        </div>
        </div>
    })}            
    </div>

    {/* <div class="d-flex flex-wrap align-items-end color_quantity">
        <div class="mt-40 mr-20 colors">
            <div class="mb-1 f-24 semibold label">
            <span style={{color:themeColor}}>Shop</span>
            </div>
        </div>
    </div> */}


    {/* <div id="product">
        <div class="d-flex flex-wrap align-items-end color_quantity pt-30">
            <div class="mr-20 colors">
                <div class="mb-1 color-dark f-18 semibold label">
                    Cake
                </div>
            </div>
        </div>

        <div class="mb-0 px-0 color-heading advantages">
            <div class="mb-20">
                A delicious cake made with real fruits with a tasty chocolate topping.
            </div>
            <div class="mb-20">
                <div id="options" class="mt-10 f-12">
                    <a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading lh-30 bold radius10 link">
                        <i class="fas fa-check-circle mr-4"></i>&nbsp;Small
                    </a>

                    <a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading lh-30 bold radius10 link">
                        <i class="fas fa-check-circle mr-4"></i>&nbsp;Big
                    </a>
                    <a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading lh-30 bold radius10 link">
                        <i class="fas fa-check-circle mr-4"></i>&nbsp;Vanilla
                    </a>
                    <a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading lh-30 bold radius10 link">
                        <i class="fas fa-check-circle mr-4"></i>&nbsp;Chocolate
                    </a>
                    <a href="#" class="mr-15 mb-15 pl-10 pr-10 bg-gray color-heading lh-30 bold radius10 link">
                        <i class="fas fa-check-circle mr-4"></i>&nbsp;Strawberry
                    </a>

                </div>
            </div>
        </div>
        <MerchantListingMainImage
        type={'service'}
        // productName={'merchantInfo[0].product_name'}
        // prodid={merchantInfo[0].product_id}
        prodid={'prod_GQOh8qEmYJu3ne'}
        />
    </div> */}
    {/* END PRODUCT */}
    
    <div>
        {/* <div class="d-flex flex-wrap align-items-end text-left color_quantity">
            <div class="mt-20 mr-20 colors">
                <div class="mb-1 color-dark f-18 semibold label">
                    Business Hours
                </div>
            </div>
        </div>
        <span class="mb-0 px-0 color-heading advantages">
            <div class="row mb-10 ml-0">
            <span class="mb-0 px-0 color-heading advantages col-4">
                    <span class="">Monday</span>&nbsp;<br/>
                    <span class="">Tuesday</span>&nbsp;<br/>
                    <span class="">Wednesday</span>&nbsp;<br/>
                    <span class="">Thursday</span>&nbsp;<br/>
                    <span class="">Friday</span>&nbsp;<br/>
                    <span class="">Saturday</span>&nbsp;<br/>
                    <span class="">Sunday</span>&nbsp;<br/>
            </span>
            <span class="mb-0 px-0 color-heading advantages col-8">
                    <span class="text-right">{availableHoursMonday}</span><br/>
                    <span class="text-right">{availableHoursTuesday}</span><br/>
                    <span class="text-right">{availableHoursWednesday}</span><br/>
                    <span class="text-right">{availableHoursThursday}</span><br/>
                    <span class="text-right">{availableHoursFriday}</span><br/>
                    <span class="text-right">{availableHoursSaturday}</span><br/>
                    <span class="text-right">{availableHoursSunday}</span>
            </span>
            </div>
        </span> */}

        <div class="d-flex flex-wrap align-items-end color_quantity">
            <div class="mt-20 mr-20 colors">
                    <div class="mb-10 color-dark f-18 semibold label">
                        Location
                    </div>
            </div>
        </div>
        <div class="mb-0 px-0 color-black advantages">
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
                +placeId
                +"&key=AIzaSyC0BWK94NJzmqxvIhu1f-iJsyjjiwQEUkE"} 
                >
                </iframe>
            </div>
        </div>
    </div>
    </>
    )
}
export default MerchantProductInfo