import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'

const PaymentSuccess =(props)=>
<div>
    Thank you <span role="img" aria-label="invoice">&#9989;</span> Invoice id below<br></br>
    <FontAwesomeIcon
    style={{
        color:'6772E5'
    }} 
    icon={faReceipt}
    />{props.orderid}
</div>

export default PaymentSuccess