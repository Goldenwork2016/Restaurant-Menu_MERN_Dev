import React from 'react';
const DRIFT_URL = 'https://drift.me/respaced/meeting'

const BookATourButton =(props)=>
    <div className="">
        <button
        onClick={props.onOpenModal}  
        className=""
        style={{
            backgroundColor:'#FFFFFF',
            color:'#EF008F',
            // border: '1px solid #EF008F'
        }} 
        >
            <span>Check-In</span>
        </button> 
    </div> 

export default BookATourButton