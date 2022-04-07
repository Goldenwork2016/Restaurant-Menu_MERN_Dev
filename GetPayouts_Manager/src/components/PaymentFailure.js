import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const PaymentFailure =()=>
<div>
    <FontAwesomeIcon
    style={{
        color:'red'
    }} 
    icon={faExclamationTriangle}
    /> Payment declined <br></br>
       Please close and try again
</div>

export default PaymentFailure