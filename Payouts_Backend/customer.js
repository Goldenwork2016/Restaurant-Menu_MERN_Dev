

/**
 * updateMetaData
 * 
 * @param {String} customerId
 * @param {String} phoneNumber
 * @param {String} stripeToken
 */
function updatePhoneNumberAndCard(stripe, customerId,phoneNumber,stripeToken){
  return new Promise( (resolve,reject)=>{
    stripe.customers.update(
      customerId,
      {
        source: stripeToken,
        metadata: 
        {
          "phone_number":phoneNumber
        }
      },
        (err, customer) =>{
        console.log(err);
          if(!err) resolve(`phone Number updated for ${customer.id}`)
          else reject(`err in updating customer ${customerId}`)
      }
    );
  })
}

/**
 * get customer id using email id
 * limit: 1, since email id is unique for each customer
 * 
 * @param {String} email 
 * @param {String} phoneNumber 
 * @param {String} stripeToken 
 * @returns {String} customerId
 */
 function getCustomerAndUpdatePhoneCard(stripe, email,phoneNumber,stripeToken) {
    return new Promise( (resolve,reject) =>{
        stripe.customers.list(
            { limit: 1, email}, 
            (err, customer) => {
              // asynchronously called
              console.log(err);
              if(!err){
                const {id} = customer.data[0];
                
                updatePhoneNumberAndCard(stripe, id,phoneNumber,stripeToken)
                .then(success=>resolve(id))
                .catch(err=>reject(err))
              }
              else reject(`err: problem in fetching customer id ${email}`)
            }
          )
    });
}

/**
 * Check if customer exists using  email
 * limit: 1, since email id is unique for each customer
 * 
 * @param {String} email 
 * @returns {Boolean} 
 */
function checkIfCustomerExists(stripe, email){
    return new Promise( (resolve,reject) => {
        stripe.customers.list(
            { limit: 1, email}, 
            (err, customer) => {
            console.log(err);
              // asynchronously called
              if(!err) {
                console.log('No error found in checkIfCustomerExists');
                if(customer.data.length === 0) { 
                    console.log('No customer found');
                    resolve(undefined);
                } else {
                    console.log('customer found, logging customer');
                    console.log(customer);
                    console.log(`customer_id = ${customer.data[0].id}`);
                    resolve(customer.data[0].id)    
                }
              }
              else reject(`err: problem in checking if customer is existing ${email}`)
            }
          )
    })
}


/**
 * Create Customer and return customer id
 * 
 * @param {String} email 
 * @param {String} stripeToken
 * @param {String} phoneNumber
 * @return {String} customerid
 */
function createCustomerAndReturnCustId(stripe, email,phoneNumber, stripeToken){
    return new Promise( (resolve,reject) =>{
        stripe.customers.create({
            email: email,
            source: stripeToken,
            metadata: 
              {
                "phone_number":phoneNumber
              }
            }, (err,customer)=>{
                console.log(err);
                if(!err){
                    const {id} = customer
                    resolve(id)
                } else {
                  console.log(err);
                  reject(`err in creating customer and getting customer id ${email}`)
                }
         })
    });
}

/*
customerHandler
*/
async function customerHandler(stripe, email, phone, stripeToken){
    const customer_id_existing = await checkIfCustomerExists(stripe, email)

    if(customer_id_existing) {
        console.log('customer_id_existing ifff');
        const customer_id  = await getCustomerAndUpdatePhoneCard(stripe, email, phone, stripeToken)
        return customer_id;
    } else {
        const new_customer_id = await createCustomerAndReturnCustId(stripe, email, phone, stripeToken);
        return new_customer_id;
    }
}

module.exports = {
    customerHandler
}