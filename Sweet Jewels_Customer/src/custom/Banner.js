import React from 'react';

const Banner = (props)=>{
    return(
        <>
        {/* <!-- Application 3 --> */}
        <section class="">
            <div class="owl-item active" aria-hidden="false" focusable="true">
                <div class="item">
                    <article>
                        <p style={{margin:"15px", position:"absolute", top:"0", left:"0",color:"#ffffff"}}></p>
                        <h2 class="hero-1 text-center overlay" style={{fontWeight:"normal", fontStyle:"normal", color:"#ffffff"}}></h2>
                        <div class="hero-1 text-right ">
                            <div class="banner-text">
                                <h2>Love, Sweet Jewels</h2>
                                <p>GIFTS FOR HER</p>
                                <ul style={{margin:"2px;"}} class="list-inline list-btn">
                                    <li>
                                        <a class="" href="#saint-valentin">
                                            <button class="btn btn-action-1 initialism">
                                                Shop now
                                            </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p style={{margin:"15px", position:"absolute", bottom:"0",right:"0",fontSize:".3em;"}}></p>
                            <figure>
                                <a href="#trending">
                                <img
                                src="https://i.imgur.com/PNhYkPw.jpg"
                                alt="Choose love" width="1900" height="700" 
                                style={{objectPosition: "center center", objectFit:"cover", maxWidth:"100%"}}
                                class="" tabindex="-1" aria-hidden="true" focusable="false"/>
                                </a>
                            </figure>
                        </div>
                    </article>
                </div>
            </div>
		</section>
        </>
    )
}

export default Banner