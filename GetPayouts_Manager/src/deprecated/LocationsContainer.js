import React from 'react';
import LazyLoad from 'react-lazy-load';
import {Link} from 'react-router-dom';

export default class LocationsContainer extends React.Component {
    render(){
        return(
          <>
            <li className="LandingPage__section__1ZxoF">
             <div className="LandingPage__sectionContent__2emkg">
                  <div className="SectionThumbnailLinks__root__3Qh75">
                    <h2 className="LandingPage__exploreCitiesHeading__1K6bj">Coming Soon</h2>
                    <p className="SectionThumbnailLinks__subHeading__2tWn6">You'll have access to spaces in these locations very soon</p>
                    <div className="SectionThumbnailLinks__links__hJHzO">
                    <Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        // to="/atwater"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Atwater</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-atwater.webp"}
                                    alt="Atwater"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-atwater.jpg"}
                                    alt="Atwater"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-atwater.jpg"} 
                                    alt="Atwater"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link>
                      <Link
                        className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY" target=""
                        // to="/berri"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Berri UQAM</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-berri.webp"}
                                    alt="Berri UQAM"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-berri.jpg"}
                                    alt="Berri UQAM"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-berri.jpg"} 
                                    alt="Berri UQAM"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link><Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        // to="/square-victoria-oaci"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Square Victoria</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-square-victoria.webp"}
                                    alt="Square Victoria"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-square-victoria.jpg"}
                                    alt="Square Victoria"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-square-victoria.jpg"} 
                                    alt="Square Victoria"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link>
                      <Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        // to="/place-d'armes"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Place d'Armes</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-place-d'armes.webp"}
                                    alt="Place D'Armes"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-place-d'armes.jpg"}
                                    alt="Place D'Armes"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-place-d'armes.jpg"} 
                                    alt="Place D'Armes"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link>
                      <Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        // to="/place-des-arts"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Place des Arts</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-place-des-arts.webp"}
                                    alt="Place des Arts"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-place-des-arts.jpg"}
                                    alt="Place des Arts"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-place-des-arts.jpg"} 
                                    alt="Place des Arts"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link>
                      <Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        // to="/guy-concordia"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Guy Concordia</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-guy-concordia.webp"}
                                    alt="Guy Concordia"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-guy-concordia.jpg"}
                                    alt="Guy Concordia"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-guy-concordia.jpg"} 
                                    alt="Guy Concordia"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link>
                      {/* <Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        to="/peel"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Peel</div>
                            <LazyLoad>
                            <picture>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-peel.webp"}
                                    alt="Peel"
                                    type="image/webp"/>
                                <source
                                srcSet={process.env.PUBLIC_URL+"/assets/respaced-peel.jpg"}
                                    alt="Peel"
                                    type="image/jpg" />
                                <img src={process.env.PUBLIC_URL+"/assets/respaced-peel.jpg"} 
                                    alt="Peel"
                                    className="SectionThumbnailLinks__image__Up7Vm"/>
                            </picture>
                            </LazyLoad>
                          </div>
                        </div>
                      </Link> */}
                      {/* <Link className="SectionThumbnailLinks__link__1WFL- SectionThumbnailLinks__link3Columns__2n2lY"
                        target=""
                        to="/"
                        >
                        <div className="SectionThumbnailLinks__imageWrapper__10dwX">
                          <div className="SectionThumbnailLinks__aspectWrapper__3Pg7R">
                            <div className="SectionThumbnailLinks__text__12rGE">Lionel Groulx</div>
                            // <LazyLoad>
                            <img
                              src={process.env.PUBLIC_URL+"/assets/respaced-metro.jpg"} 
                             
                                alt="London" className="SectionThumbnailLinks__image__Up7Vm"/>
                            // </LazyLoad>
                              </div>
                        </div>
                      </Link> */}
                      </div>
                  </div>
                  <div className="LandingPage__moreStudiosContainer__1RS7u"><Link className="LandingPage__moreStudios__1xKYu"
                      target="" to="/spaces/GnkpDBlj1kZ83n"><span>Check out our featured space</span></Link></div>
                </div>
         </li>
         </>
        )
    }

}