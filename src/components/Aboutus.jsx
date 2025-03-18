import Footer from "./Footer";
import img from './shahid.jpg'
import img1 from './shahid.jpg'
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
function Aboutus() {
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
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-09-07-03-29-36-5355.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>About Us</h4>
            <nav style={{"--bs-breadcrumb-divider":"'>'"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="wsus__about_us">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-10">
              <div className="wsus__about_us_img">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="img_1">
                      <img
                        src= " https://www.holidify.com/images/bgImages/RAJAHAMUNDRY.jpg"
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img_2">
                      <img
                        src= "https://images.trvl-media.com/lodging/17000000/16240000/16239000/16238972/2b766e53.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium "
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="img_2 mt-4">
                      <img
                        src= "https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?cs=srgb&dl=pexels-rafa-de-21730-3013440.jpg&fm=jpg"
                        alt="About"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 m-auto">
              <div className="wsus__about_us_text">
                <div className="wsus__section_heading">
                  <h5>WHY CHOOSE US</h5>
                  <h2>
                    Find The Right <span>Selling</span> Option For You
                  </h2>
                </div>
                <p
                  style={{
                    margin: "22px 0px 0px",
                    padding: 0,
                    outline: 0,
                    color: "var(--paraColor)",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Find the perfect selling option with our expert guidance,
                  personalized service, and effective marketing strategies for
                  your property.
                </p>
                <ul
                  style={{
                    margin: "35px 0px 60px",
                    padding: 0,
                    outline: 0,
                    listStyle: "none",
                  }}
                >
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Personalized consultations
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Expert market analysis
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Effective marketing strategies
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    User-friendly platform
                  </li>
                  <li
                    style={{
                      color: "var(--paraColor)",
                      fontFamily: "Poppins, sans-serif",
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    Reach potential buyers easily
                  </li>
                  <li
                    style={{
                      margin: "15px 0px 0px",
                      padding: "0px 0px 0px 32px",
                      outline: 0,
                      position: "relative",
                    }}
                  >
                    <font>Track your selling progress seamlessly</font>
                  </li>
                </ul>
                <a href=" ">
                  Read More
                  <FaArrowRight  style={{margin:"5px"}}className="fal fa-long-arrow-right" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>      
  <section className="wsus__counter_2">
    <div className="wsus__counter_2_overlay">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex flex-wrap">
              <li>
                <h3><span className="counter">100</span>+</h3>
                <p />
              </li>
              <li>
                <h3><span className="counter">500</span>+</h3>
                <p />
              </li>
              <li>
                <h3><span className="counter">120</span>+</h3>
                <p />
              </li>
              <li>
                <h3><span className="counter">300</span>+</h3>
                <p />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
 <section className="wsus__testimonial_2">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="wsus__section_heading mb-4">
              <h5>TESTIMONIAL</h5>
              <h2>
                Our Customer <span>Feedback</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row testi_slider_2 slick-initialized slick-slider">
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 996,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{ width: 498 }}
              >
                <div>
                  <div
                    className="col-xl-4"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="wsus__single_testimonial_2">
                   
                      <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the when an unknown
                        printer took.
                      </p>
                      <div className="wsus__testimonial_footer">
                        <div className="img">
                          <img
                            src= {img}
                            alt="user"
                            className="img-fluid"
                          />
                        </div>
                        <h3>
                         Shahid
                          <span>Founder</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide slick-active"
                data-slick-index={1}
                aria-hidden="false"
                style={{ width: 498 }}
              >
                <div>
                  <div
                    className="col-xl-4"
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="wsus__single_testimonial_2">
                    
                      <p className="description">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the when an unknown
                        printer took.
                      </p>
                      <div className="wsus__testimonial_footer">
                        <div className="img">
                          <img
                            src= {img1}
                            alt="user"
                            className="img-fluid"
                          />
                        </div>
                        <h3>
                          Vinay
                          <span>CEO</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
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
  <div className="scroll_btn ">
    <i className="fas fa-chevron-up" aria-hidden="true" />
  </div>
</div>
       </>
    )
}

export default Aboutus
