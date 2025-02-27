
import Footer from './Footer'
import Navbar from './Navbar'

function Listing_categories() {
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
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <button className="read_btn" id="loginSubmitBtn" type="submit"><i id="login-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Login</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <form id="registerFormSubmit">
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input type="text" placeholder="Name *" name="name" />
                  <input type="email" placeholder="Email *" name="email" />
                  <input type="password" placeholder="Password *" name="password" />
                  <input type="password" placeholder="Confirm Password *" name="password_confirmation" />
                  <button id="registerBtn" className="read_btn" type="button"> <i id="reg-spinner" className="loading-icon fas fa-sync fa-spin d-none" aria-hidden="true" />
                    Register</button>
                </form>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <form id="forgetPassFormSubmit">
                  <input type="hidden" name="_token" defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8" autoComplete="off" />                                    <input type="email" placeholder="Email *" name="email" />
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
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-08-31-09-49-04-5316.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Listing Category</h4>
            <nav style={{"--bs-breadcrumb-divider":"'>'"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Listing Category</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="wsus__categoryes">
    <div className="wsus__categorye_overlay">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-sm-6">
            <a href="" className="wsus__category_single">
              <div className="wsus__category_img">
                <img src="" alt="img" className="img-fluid w-100" />
              </div>
              <div className="wsus__category_text">
                <div className="wsus__category_text_center">
                  <p>Apartments</p>
                  <span className="green">1
                    Listing</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a href="" className="wsus__category_single">
              <div className="wsus__category_img">
                <img src="" alt="img" className="img-fluid w-100" />
              </div>
              <div className="wsus__category_text">
                <div className="wsus__category_text_center">
                  <p>House</p>
                  <span className="red">1
                    Listing</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a href="" className="wsus__category_single">
              <div className="wsus__category_img">
                <img src="" alt="img" className="img-fluid w-100" />
              </div>
              <div className="wsus__category_text">
                <div className="wsus__category_text_center">
                  <p>Office</p>
                  <span className="purple">1
                    Listing</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a href="" className="wsus__category_single">
              <div className="wsus__category_img">
                <img src="" alt="img" className="img-fluid w-100" />
              </div>
              <div className="wsus__category_text">
                <div className="wsus__category_text_center">
                  <p>Commercial</p>
                  <span className="green2">2
                    Listing</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a href="" className="wsus__category_single">
              <div className="wsus__category_img">
                <img src="" alt="img" className="img-fluid w-100" />
              </div>
              <div className="wsus__category_text">
                <div className="wsus__category_text_center">
                  <p>Parking Lot</p>
                  <span className="green">0
                    Listing</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-sm-6">
            <a href="" className="wsus__category_single">
              <div className="wsus__category_img">
                <img src="" alt="img" className="img-fluid w-100" />
              </div>
              <div className="wsus__category_text">
                <div className="wsus__category_text_center">
                  <p>Land</p>
                  <span className="red">1
                    Listing</span>
                </div>
              </div>
            </a>
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

export default Listing_categories