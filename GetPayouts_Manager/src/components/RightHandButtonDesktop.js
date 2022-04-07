import React from 'react';

const RightHandButtonDesktop = ()=>{
    return(
       <>
        <span className="TopbarDesktop__createListingLink__2tk2Y">
            <a
                style={{
                    textDecoration:'none',
                }}
                href="/#pricing"
                className="TopbarDesktop__createListing__15U3c color-white">
                <span>Pricing</span>
            </a>
        </span>
        <span className="TopbarDesktop__createListingLink__2tk2Y">
            <a
                style={{
                    textDecoration:'none',
                }}
                href="/#pricing"
                className="TopbarDesktop__createListing__15U3c color-white">
                <span>Sign Up</span>
            </a>
        </span>
        <span className="TopbarDesktop__createListingLink__2tk2Y">
            <a
                style={{
                    textDecoration:'none',
                }}
                href="/dashboard/listings/empty"
                className="TopbarDesktop__createListing__15U3c color-white">
                <span>Login</span>
            </a>
        </span>
       {/* <span className="TopbarDesktop__createListingLink__2tk2Y">
                    <button 
                    className="TopbarDesktop__createListing__15U3c color-white" style={{border: 'none'}} 
                    onClick={() => {window.location.href="https://getpayouts.com/?ljs=en"}}
                    key="en"
                    >
                    EN</button>
        </span>
        <span className="TopbarDesktop__createListingLink__2tk2Y">
                    <button 
                    className="TopbarDesktop__createListing__15U3c color-white" style={{border: 'none'}} 
                    onClick={() => {window.location.href="https://getpayouts.com/?ljs=fr"}}
                    key="fr"
                    >FR
                    </button>
        </span> */}
        </> 
    );
}

export default RightHandButtonDesktop