
import { useState, useEffect } from "react";
import { FaBusinessTime, FaHeart ,FaLocationArrow,FaPhone,FaUser, FaUsers} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaAccessibleIcon, FaAmazon } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Listing_page() {
  const [products, setProducts] = useState([]);
 
    useEffect(() => {

      const fetchProducts = async () => {
        try {
          const response = await fetch("https://backend-v0ii.onrender.com/api/products/");
          if (!response.ok) throw new Error("Failed to fetch products");
  
          const data = await response.json();
          setProducts(data);
          
        } catch (error) {
          console.log(error)
        }
      };
  
      fetchProducts();
    }, []);
  return (
<>
<div>
  <section id="wsus__topbar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
      
        </div>
   
      </div>
    </div>
  </section>
  {/*==========================
  TOPBAR PART END
    ===========================*/}
  {/*==========================
  LOG IN POPUP START
    ===========================*/}
  <section id="wsus__login_popup">
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Sign In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Forgot Password</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <form id="loginFormSubmit">
                  <input type="hidden" name="_token" defaultValue="OVKgoiBy67CAOS795E1tP9CewlhSjwBX99KggYWS" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <button className="read_btn" id="loginSubmitBtn" type="submit"><i id="login-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Login</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <form id="registerFormSubmit">
                  <input type="hidden" name="_token" defaultValue="OVKgoiBy67CAOS795E1tP9CewlhSjwBX99KggYWS" autoComplete="off" />                                    <input type="text" placeholder="Name *" name="name" />
                  <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <input type="password" placeholder="Confirm Password *" name="password_confirmation" />
                  <button id="registerBtn" className="read_btn" type="button"> <i id="reg-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Register</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <form id="forgetPassFormSubmit">
                  <input type="hidden" name="_token" defaultValue="OVKgoiBy67CAOS795E1tP9CewlhSjwBX99KggYWS" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
                  <button id="forgetPassBtn" className="read_btn" type="submit"><i id="forget-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Send Email</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==========================
 LOG IN POPUP END
    ===========================*/}
  {/*==========================
     MENU PART START
    ===========================*/}
  <Navbar/>
  {/*==========================
     MENU PART END
    ===========================*/}
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-09-08-12-45-32-8135.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Listing</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Listing </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="listing_grid" className="list_view">
    <div className="container list_padding">
      <div className="row">
        <div className="col-xl-3 col-lg-4">
         
        </div>
        <div className="col-xl-9 col-lg-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="wsus__property_topbar">
              
                
              </div>
            </div>
            
            {products.map((product) => (
              <>
                 <div className="col-xl-12">
                 <div className="featured_listing_item_2 list_view">
                   <div className="featured_listing_item_img">
                     <img src={product.image} alt="listing" className="img-fluid w-100" />
                     <a className="green" href="">Featured</a>
                     <span className="love"><a data-bs-toggle="modal" data-bs-target="#exampleModal" href=""><FaHeart className="text-red-500" /></a></span>
                     <a className="map" data-bs-toggle="modal" data-bs-target="#listngPopUp-72" href=""><FaBusinessTime className="fal fas fa-eye" aria-hidden="true" /></a>
                     
                   </div>
                   <div className="featured_listing_item_text">
                     <Link to={`/listing/${product._id}`} className="title" href="">{product.name}</Link>
                     <ul>
                       <li><FaPhone className="fas fa-phone-alt" style={{margin:"5px"}}  aria-hidden="true" />
                         Call : {product.contact}</li>
                       <li><FaLocationArrow className="fas fa-map-marker-alt" aria-hidden="true" /> {product.location}
                       </li>
                     
                     </ul>
                     <a className="future_verify" href=""><FaHeart style={{margin:"5px"}} className="far fa-star" aria-hidden="true" />
                       Featured</a>
                     <a className="future_verify red" href=""><FaUser style={{margin:"5px"}} className="far fa-check" aria-hidden="true" />
                       Verified</a>
                   </div>
                 </div>
               </div>
              </>

          ))}
       
         
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-72" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><FaUser className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Prime Realty</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (212) 555-1234</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@primerealtyexample.com</a>
                              <p>Residential and commercial properties in prime locations.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-73" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Urban Nest Realty</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (415) 555-5678</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@urbannestexample.com</a>
                              <p>Modern urban living spaces with top-notch amenities.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-74" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Luxury Living Estates</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (310) 555-7890</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@luxurylivingexample.com</a>
                              <p>Exclusive luxury homes and estates with premium features.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-75" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Green Acres Realty</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (512) 555-2345</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@greenacresexample.com</a>
                              <p>Rural and farm properties with serene countryside views.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-76" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Coastal Homes Real Estate</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (305) 555-5678</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@coastalhomesexample.com</a>
                              <p>Beachfront and coastal properties with stunning ocean views.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="wsus__map_popup">
              <div className="modal fade" id="listngPopUp-77" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <button type="button" className="btn-close popup_close" data-bs-dismiss="modal" aria-label="Close"><i className="far fa-times" aria-hidden="true" /></button>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content">
                            <img src="" alt="images" className="img-fluid w-100" />
                            <div className="map_popup_text">
                              <span><i className="far fa-star" aria-hidden="true" />
                                Featured</span>
                              <span className="red"><i className="far fa-check" aria-hidden="true" />
                                Verified</span>
                              <h5>Skyline Properties</h5>
                              <a className="call" href=""><i className="fal fa-phone-alt" aria-hidden="true" />
                                (312) 555-8901</a>
                              <a className="mail" href=""><i className="fal fa-envelope" aria-hidden="true" />
                                info@skylinepropertiesexample.com</a>
                              <p>High-rise and city living with breathtaking cityscape views.</p>
                              <a className="read_btn" href="">Read More</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-xl-12 col-md-12">
                          <div className="map_popup_content_map">
                            <iframe src="" width={600} height={450} style={{"border":"0"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==========================
   FOOTER PART START
    ===========================*/}
<Footer/>
  {/*==========================
   FOOTER PART END
    ===========================*/}
  {/*=============SCROLL BTN==============*/}
  <div className="scroll_btn " style={{"display":"none"}}>
    <i className="fas fa-chevron-up" aria-hidden="true" />
  </div>
  {/*=============SCROLL BTN==============*/}
</div>
</>
  )
}

export default Listing_page