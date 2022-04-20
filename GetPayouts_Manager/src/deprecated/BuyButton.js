import React from 'react';

const BuyButton =(props)=>{
    if(props.productName==='TRYITNOWPREMIUM'){
    return <button 
            onClick={props.onOpenModal}
            className=""
            >
                FREE 7-DAY TRIAL
            </button>
    } else if(props.productName==='TRYITNOW'){
        return <button 
                onClick={props.onOpenModal}
                className=""
                >
                    FREE 7-DAY TRIAL
                </button>
    } else if(props.productName==='HOMEPAGE'){
        return (
        <div className="">
            <button 
            onClick={props.onOpenModal}
            className=""
            >
                <span>TRY IT FREE</span>
            </button> 
        </div>)
    } else if(props.productType==='private'){
        return (
            <div className="">
                <button 
                onClick={props.onOpenModal}
                className=""
                >
                    <span>RESERVE NOW</span>
                </button> 
            </div> 
        )
    } else if(props.productType==='subscription'){
        return (
            <span
            onClick={props.onOpenModal}
            class="bg-white radius_full open_menu"
            >
            Pay ${props.price/100} monthly
            </span> 
        )
    } else
        return (
            <span 
            onClick={props.onOpenModal}
            >
            Subscribe Now
            </span> 
    )
}
export default BuyButton