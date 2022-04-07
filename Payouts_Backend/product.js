const { getPricesProduct } = require('./prices');

/**
 * create product
 * https://stripe.com/docs/api/products/create
 */
async function createProduct(stripe, event, connected_account_id){
    const {
        link_website, link_facebook, link_twitter,
        link_instagram, link_linkedin, link_youtube,
        merchant_id, theme_color, merchant_name, product_name,
        product_description,picture_id,place_id,about_host, collection_id
    } = event;

    try {
        const product = await stripe.products.create({
            name: product_name,
            active: true, // stripe default's active value is true
            description: product_description,
            metadata: {
                'product_active': true, // default, we would use product_active to hide/show product
                
                link_website,
                link_facebook,
                link_twitter,
                link_instagram,
                link_linkedin,
                link_youtube,
                
                picture_id,
                place_id,
                
                about_host,
                
                merchant_id,
                
                theme_color,
                collection_id
            },
            statement_descriptor: merchant_name},
            {stripeAccount: connected_account_id}
            );
        const {id} = product;
        console.log(product);
        console.log(`created product [product_id=${id}]`);

        return id
    } catch (error) {
        console.log(error);
        throw new Error('unable to create product')
    }
}

/***
 * fetchProduct
 */
async function fetchProduct(stripe, merchant_product_id, connected_account_id){
    try {
        let data = {};
        const product = await stripe
        .products
        .retrieve(
            merchant_product_id,
            {stripeAccount: connected_account_id}
        );
        const prices = await getPricesProduct(stripe, merchant_product_id, connected_account_id);

        data['product'] = product;
        data['prices'] = prices;
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('unable to fetchProduct')
    }
}

/***
 * fetchProductsMerchant
 */
function fetchProductsMerchant(stripe, products, connected_account_id){
    return new Promise( ( resolve, reject)=>{
      Promise.all(
       products.map(product_id => fetchProduct(stripe, product_id, connected_account_id))
      ).then(items =>resolve(items));
    });
}

module.exports = {
    createProduct,
    fetchProductsMerchant
}