import React, { useState } from 'react';
import ReactGA from 'react-ga';

/**
 * record search btn event
 */
// function recordSearchBtnEvent(props){
//     if(props){
//         const{productName}=props
//         if(productName){
//             console.log('Clicked on search on product page on mobile from '+productName)
//             ReactGA.pageview(`/`);
//             ReactGA.event({
//             category: 'SEARCH_PRODUCT_PAGE_MOBILE',
//             action:    'Clicked on search on product page on mobile from '+productName,
//             label: 'SEARCH_PRODUCT_PAGE_MOBILE'
//             });
//         } else {
//             console.log('Clicked on search on home page on mobile')
//             ReactGA.event({
//             category: 'SEARCH_HOME_PAGE_MOBILE',
//             action:    'Clicked on search on home page on mobile',
//             label: 'SEARCH_HOME_PAGE_MOBILE'
//             });
//         }
//     }
//   }

  function recordPromoteBtnEvent(props){
    if(props){
        // const{productName}=props

        // if(productName){
        //     ReactGA.pageview(`/`);
        //     ReactGA.event({
        //     category: 'PROMOTE_PRODUCT_PAGE_MOBILE',
        //     action:    'Clicked on Promote on product page on mobile from '+productName,
        //     label: 'PROMOTE_PRODUCT_PAGE_MOBILE'
        //     });
        // } else {
        //     ReactGA.event({
        //     category: 'PROMOTE_HOME_PAGE_MOBILE',
        //     action:    'Clicked on Promote on home page on mobile',
        //     label: 'PROMOTE_HOME_PAGE_MOBILE'
        //     });
        // }
    }
  }

const SearchButtonMobile = (props)=>{
    // const [language, setLanguage] = useState('en');
    return(
        <>
        {/* <button className="Topbar__searchMenu__uopbZ" title="Open search"
         onClick={()=>recordSearchBtnEvent(props)}
        >
            <svg className="Topbar__rootSearchIcon__2k42f Topbar__searchMenuIcon__3l7kV" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(-1 0 0 1 17 1)" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11.733 11.733l3.727 3.727"></path>
                    <circle cx="6.4" cy="6.4" r="6.4"></circle>
                </g>
            </svg>
        </button> */}
        <div className="ml_-10vw">
        <span className="TopbarDesktop__createListingLink__2tk2Y" 
        // onClick={()=>window.location.href=`http://localhost:3000/?ljs=${language}`}
        >

        <div
            style={{
                textDecoration:'none',
                fontSize:'16px',
                padding:'0',
                width:'inherit'
            }}
            // href="/host"
            // onChange={e => setLanguage(e.target.value)}
            // onClick={() => window.location.href=`http://localhost:3000/?ljs=en`}
            className="TopbarDesktop__createListing__15U3c color-white">
            <button 
                className="TopbarDesktop__createListing__15U3c color-white"
                onClick={() => window.location.href="/dashboard/listings/empty"}
                value="fr"
                style={{border:'none'}}
                >
                    Login
            </button>
        </div>
        </span>
        </div>
        </>
    )
}

export default SearchButtonMobile