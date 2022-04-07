import React from 'react';

const AsSeenOn=()=>{
    return (
        <li className="LandingPage__section__1ZxoF">
                            <div className="LandingPage__sectionContentNarrow__3WnPV LandingPage__sectionContent__2emkg LandingPage__asSeenOnWrapper__149m-">
                                <h1 className="LandingPage__sectionTitle__kBCVT LandingPage__asSeenOnTitle__yfKG3">
                                    <span>As Seen On</span>
                                </h1>
                                <ul className="LandingPage__seenOnList__3JTmb">
                                    <li className="LandingPage__seenOnItem__1gc48">
                                        <img className="LandingPage__hypebeast__3QaM2" 
                                        src={process.env.PUBLIC_URL+"/assets/seenon/hypebeast.png"} 
                                        alt="hypebeast"/>
                                    </li>
                                    <li className="LandingPage__seenOnItem__1gc48">
                                        <img className="LandingPage__bbc__1gqId" 
                                        src={process.env.PUBLIC_URL+"/assets/seenon/bbc.png"} 
                                        alt="BBC"/>
                                    </li>
                                    <li className="LandingPage__seenOnItem__1gc48">
                                        <img 
                                        className="LandingPage__productHunt__3isYo" 
                                        src={process.env.PUBLIC_URL+"/assets/seenon/producthunt.png"} 
                                        srcSet="" 
                                        alt="Product Hunt"/>
                                    </li>
                                    <li className="LandingPage__seenOnItem__1gc48">
                                        <img className="LandingPage__fader__1p42E" 
                                        src={process.env.PUBLIC_URL+"/assets/seenon/fader.png"} 
                                        alt="Fader"/>
                                    </li>
                                    <li className="LandingPage__seenOnItem__1gc48">
                                        <img 
                                        className="LandingPage__vice__1y---" 
                                        src={process.env.PUBLIC_URL+"/assets/seenon/vice.png"} 
                                        srcSet="" 
                                        alt="Vice"/>
                                    </li>
                                    <li className="LandingPage__seenOnItem__1gc48">
                                        <img 
                                        className="LandingPage__forbes__3dodX" 
                                        src={process.env.PUBLIC_URL+"/assets/seenon/forbes.png"} 
                                        srcSet="" 
                                        alt="Forbes"/>
                                    </li>
                                </ul>
                            </div>
                        </li>
    )
}

export default AsSeenOn