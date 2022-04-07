
/*
createInvoiceForOneTimeProduct
https://stripe.com/docs/billing/prices-guide
*/
async function createInvoiceForOneTimeProduct(stripe, customer_id, price_id){
 try{
     const invoiceItem = await stripe.invoiceItems.create({
                        customer: customer_id,
                        price: price_id,
                        });
    console.log(`created invoice Item for ${customer_id}`);
    console.log(invoiceItem);
    
    const invoice = await stripe.invoices.create({
    customer: customer_id,
    });
    
    console.log(`created invoice ${customer_id}`);
    const {id} = invoice;
    
    return id;
    
 } catch(error){
     console.log(error);
     throw new Error('err in creating invoice');
 }
}

module.exports = {
    createInvoiceForOneTimeProduct
}