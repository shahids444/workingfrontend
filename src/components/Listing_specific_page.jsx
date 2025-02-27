import { Link, useLoaderData } from 'react-router-dom'
import Navbar from './Navbar'
import { FaEye, FaGlobe, FaHeart, FaLocationArrow, FaPhone, FaThumbsUp } from 'react-icons/fa'

function Listing_specific_page() {
   
  const {data,product} = useLoaderData()
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
 LOG IN POPUP END
    ===========================*/}
  {/*==========================
     MENU PART START
    ===========================*/}
  <Navbar/>
  {/*==========================
     MENU PART END
    ===========================*/}
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/custom-images/listing-banner-2024-07-08-09-27-26-1024.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>{data.name}</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item"><a href="">
                    Listing </a></li>
                <li className="breadcrumb-item active" aria-current="page">{data.name}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==========================
                                                                                                                              BREADCRUMB PART END
                                                                                                                      ===========================*/}
  {/*==========================
                                                                                                                              LISTING DETAILS START
                                                                                                                          ===========================*/}
  <section id="listing_details">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="listing_details_text">
            <div className="listing_det_header">
              <div className="listing_det_header_img">
                <img src={data.image} alt="logo" className="img-fluid w-100" />
              </div>
              <div className="listing_det_header_text">
                <h6>{data.name}</h6>
                <p className="host_name">Hosted by <a href="">{data.user}</a>
                </p>
            
                <ul>
                  <li><a href=""><FaThumbsUp style={{margin: "5px"}} className="far fa-check" aria-hidden="true" />
                      Verified</a></li>
                  <li><a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"><FaHeart style={{margin:"5px"}} className="fal fa-heart" aria-hidden="true" />
                      Add to Favorite</a></li>
                  <li><FaEye href=""><i className="fal fa-eye" aria-hidden="true" /> 4</FaEye>
                  </li>
                </ul>
              </div>
            </div>
            <div className="listing_det_text">
              <p>{data.description}</p>
            </div>
            <div className="listing_det_Photo" >
              <div className="row">
                <div className="col-xl-3 col-sm-6" >
                  <a className="venobox vbox-item" data-gall="gallery01" href="">
                    <img src={data.image} alt="gallery1" style={{height:"100%"}} className="img-fluid w-100" />
                    <div className="photo_overlay">
                      <i className="fal fa-plus" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
         
           
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="listing_details_sidebar">
            <div className="row">
              <div className="col-12">
                <div className="listing_det_side_address">
                  <a href=""><FaPhone style={{margin:"10px"}} className="fal fa-phone-alt" aria-hidden="true" />
                    {data.contact}</a>
                
                  <p><FaLocationArrow  style={{margin:"10px"}} className="fal fa-map-marker-alt" aria-hidden="true" /> {data.location}</p>
                  <p><FaGlobe style={{margin:"10px"}} className="fal fa-globe" aria-hidden="true" />{data.website}</p>
                  <ul>
                  </ul>
                </div>
              </div>
              <div className="col-12">
               
              </div>
              <div className="col-12">
                <div className="listing_det_side_add">
                  <h5>Recently Added</h5>
                  {product.filter(fil => fil.category === data.category).map(pro => (
  <div className="row" key={pro.id}>
    <div className="col-xl-12 col-md-6 col-lg-12">
      <div className="wsus__featured_single">
        <a className="list_images" href="">
          <img src={pro.image} alt="images" className="img-fluid w-100" />
        </a>
        <span className="love">
          <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="">
            <FaHeart className="fas fa-heart" aria-hidden="true" />
          </a>
        </span>
        <a className="map" data-bs-toggle="modal" data-bs-target="#listngPopUp-77" href="">
          <FaEye className="fal fas fa-eye" aria-hidden="true" />
        </a>
        <div className="wsus__featured_single_text">
          <h6><Link to={`/listing/${pro._id}`}>{pro.name}</Link></h6>
          <p className="address">{pro.location}</p>
        </div>
      </div>
    </div>
  </div>
))}

                 
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>
    </>
  )
}

export default Listing_specific_page