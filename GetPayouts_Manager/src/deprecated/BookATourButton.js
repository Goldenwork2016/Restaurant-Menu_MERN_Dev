import React from 'react';
const DRIFT_URL = 'https://drift.me/respaced/meeting'

const BookATourButton =(props)=>
    <div className="">
        <button
        onClick={props.onOpenModal}  
        className=""
        style={{
            backgroundColor:'#FFFFFF',
            color:'#CA14B8',
            // border: '1px solid #CA14B8'
        }} 
        >
            <span>Check-In</span>
        </button> 
    </div> 

export default BookATourButton