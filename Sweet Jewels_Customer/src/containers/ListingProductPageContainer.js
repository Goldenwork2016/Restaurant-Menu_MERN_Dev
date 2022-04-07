import React, {useState} from 'react';
// import ListingMainImage from '../components/ListingMainImage';
import NoMatch404 from '../components/NoMatch404';
import Loading from '../components/Loading';
// import MainImageAndCarousel from '../components/MainImageAndCarousel';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { add2CartQty , setSelectedProductId} from '../actions';
import { getMatchingProduct, getMatchingPriceOption } from '../utils/utils';
import ProductNote from '../custom/ProductNote';

const ListingProductPageContainer = ({
  match,
  fetchMerchantPending,
  merchantProductInfo,
  add2CartQty,
  selected_product_id,
  setSelectedProductId,
  })=>{
  const [selectedPriceId, setPriceId] = useState();
  const [selectedPriceQty, setPriceQty] = useState();
  const [cartMsg, setCartMsg] = useState();

  const {product_info, merchant_info} = merchantProductInfo;
  if(fetchMerchantPending) return <Loading />
  
  let is404 = true;
  const {params} = match;

  product_info.forEach(product_price_info => {
      if(product_price_info.product.id.toLowerCase() === `prod_${params.id.toLowerCase()}`) {
        is404 = false;
      }
  });
  
  if(is404) return <NoMatch404/>

  const matching_product = getMatchingProduct(product_info, `prod_${params.id.toLowerCase()}`);
  if (!matching_product) return <NoMatch404/>
  
  const { prices, product } = matching_product;
  // console.log(matching_product);

  const product_name = product.name;
  const product_description = product.description;
  const product_images = product.images[0] ? product.images[0] : 'https://i.imgur.com/2UMCSXT.png';


  const price_options = prices.data;
  price_options.sort((priceA,priceB) => priceA.unit_amount - priceB.unit_amount);
  const lowest_price = price_options[0].unit_amount;

  const add2CartHandler = ()=>{
      add2CartQty({
        "price_id": selectedPriceId,
        "quantity": selectedPriceQty,
        "description":getMatchingPriceOption(price_options, selectedPriceId).metadata.description
      })
      setCartMsg('Added to cart!');
  }

  const setPriceHandler = (price_id)=>{
    setPriceId(price_id)
    setPriceQty(undefined);
    setCartMsg();
    if(!selectedPriceId) {
      setSelectedProductId(product.id);
      setPriceQty(undefined);
    }
  }

  const setQtyHandler = (qtyValue)=>{
    if(!selectedPriceId) return;
    setPriceQty(qtyValue);
    setCartMsg();
  }

  const getQtyOptions = () => {
    const qty_options_dropdown = [];
    if(!selectedPriceId) return qty_options_dropdown;
    const selected_price_option_data = getMatchingPriceOption(price_options, selectedPriceId);
    const quantity = selected_price_option_data.metadata.hasOwnProperty('quantity') ?
    selected_price_option_data.metadata.quantity : 0;
    if (!quantity) return qty_options_dropdown;

    for (let index = 1; index <= quantity; index++) {
      qty_options_dropdown.push(<option
      key={`${index}${selectedPriceId}`}
      value={index}
      >
        {index}
      </option>)
    }
    return qty_options_dropdown;
  }
  
  // const priceOptionsMinusCartItems = [...price_options];
  // priceOptionsMinusCartItems.filter( price_option => cart_items.includes(price_option.id));

  const getPriceOptions = (price_options) => price_options.map((price) =>
    price.metadata.price_active==='true' && <option
      key={price.id}
      value={price.id}
    >
      {price.metadata.hasOwnProperty('description') && price.metadata.description} - ${price.unit_amount/100}
    </option>
  );

  const qty_dropdown_class = selectedPriceId ? "btn btn-outline-action-1 d-inline-flex align-items-center me-4" : "btn btn-outline-action-1 d-inline-flex align-items-center me-4 disabled"
  const add_2_cart_btn_class = selectedPriceId 
                              && selectedPriceQty
                              && selectedPriceQty.toLowerCase() !== 'choose' ? "btn btn-action-1 d-inline-flex align-items-center me-4 mt-5" : "btn btn-action-1 d-inline-flex align-items-center me-4 mt-5 disabled"

  return merchantProductInfo && (
    <>
    <Navigation/>
    {/* <!-- Ecommerce 9 --> */}
    <section class="py-10 py-lg-20 bg-bg-3">
        <div class="container">
            <div class="row justify-content-between align-items-lg-center">
                <div class="col-md-12 col-lg-7 col-xxl-6 mb-12 mb-lg-0">
                    <div class="row g-0">
                      {/* <ListingMainImage
                      type={merchantProductInfo.product_type}
                      productName={merchantProductInfo.product_name}
                      pictureId={merchantProductInfo.picture_id}
                      prodid={merchantProductInfo.product_id}
                      /> */}
                      {product.images && <div>
                        <img class="img-forced-product" src={product_images}/>
                      </div>}
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="ps-lg-6">
                        <p class="fs-3 mb-6">
                          {lowest_price && 'Starting at '} <span class="fw-bolder color-main">{'$'+lowest_price/100}</span>
                        </p>
                        <h2 class="display-5 mb-6">
                          {product_name}
                        </h2>
                        <p class="remove-br fs-3 mb-8">
                           {product_description}
                        </p>
                        <div class="row">
                          {/* DROPDOWN FOR DIFFERENT PRICES */}
                          <div class="row">
                            <div class="col-7 text-start">
                              <select 
                              class="btn btn-outline-action-1 d-inline-flex align-items-center me-4"
                              style={{maxWidth:"200px", minWidth:"100%"}}
                              onChange={(e) => setPriceHandler(e.target.value)}>
                                  <option>Choose</option>
                                {getPriceOptions(price_options)}
                              </select>
                            </div>
                            {/* FOR VIPUL: note that the class "disabled" is added to the '<select>' (for subscriptions as there
                            is no quantity for subscriptions or if the product is out of inventory, that's how to easily
                            change the state to disabled, the CSS class is already there) */}
                            {<div class="col-3 text-start">
                              <select 
                              class={qty_dropdown_class}
                              style={{maxWidth:"200px", minWidth:"100%"}}
                              onChange={(e) => setQtyHandler(e.target.value)}
                              >
                                <option>Qty</option>
                                {getQtyOptions()}
                            </select>
                            </div>
                            }
                            {selectedPriceId && getQtyOptions().length ===0 && <div>Out of Stock</div>}
                            <div class="col-2"></div>
                          </div>
                          <div class="col-12">
                            <button
                            class={add_2_cart_btn_class}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#custom-id-3e86u4fq"
                            onClick={(e) => add2CartHandler()}
                            >
                              <svg width="20" height="22" viewBox="0 0 22 24" fill="none"
                                  xmlns="http://www.w3.org/2000/svg" class="fill-light-1 me-2">
                                  <path
                                      d="M0.5 6H21.5V21C21.5 21.7956 21.1839 22.5587 20.6213 23.1213C20.0587 23.6839 19.2956 24 18.5 24H3.5C2.70435 24 1.94129 23.6839 1.37868 23.1213C0.816071 22.5587 0.5 21.7956 0.5 21V6ZM11 2.25C10.0054 2.25 9.05161 2.64509 8.34835 3.34835C7.64509 4.05161 7.25 5.00544 7.25 6H5.75C5.75 4.60761 6.30312 3.27226 7.28769 2.28769C8.27226 1.30312 9.60761 0.75 11 0.75C12.3924 0.75 13.7277 1.30312 14.7123 2.28769C15.6969 3.27226 16.25 4.60761 16.25 6H14.75C14.75 5.00544 14.3549 4.05161 13.6517 3.34835C12.9484 2.64509 11.9946 2.25 11 2.25Z">
                                  </path>
                              </svg>
                                {cartMsg ? cartMsg : 'Add to cart'}
                            </button>
                          </div>
                          <div class="disabled mt-10 color-main">
                            <ProductNote/>
                          </div>
                        </div>
                        {/* DROPDOWN FOR DIFFERENT PRICES */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
     )
}

const mapStateToProps = state => {
    return {
      fetchMerchantPending: state.fetchMerchantPending,
      merchantProductInfo: state.merchantProductInfo,
      selected_product_id: state.selected_product_id,
    };
  };

const mapDispatchToProps = {
  add2CartQty,
  setSelectedProductId,
};

export default  withRouter( connect(mapStateToProps, mapDispatchToProps)(ListingProductPageContainer) );