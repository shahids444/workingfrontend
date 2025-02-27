
import Footer from './Footer'
import Navbar from './Navbar'

function Custom_page() {
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
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-08-31-09-51-00-5708.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Custom Page 1</h4>
            <nav style={{"--bs-breadcrumb-divider":"'>'"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href=""> Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">Custom Page 1
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section id="wsus__custom_page">
    <div className="container">
      <div className="row">
        <div>The Customer Page on our business listing website is designed to provide users with a seamless experience while searching for businesses, reading reviews, and making informed decisions. It is a user-friendly and interactive platform that connects customers with the best service providers, stores, and businesses in their locality.</div>
        <div><br /></div>
        <div>With our advanced search and filter options, customers can effortlessly find businesses based on categories, location, ratings, and keywords. Whether looking for a nearby restaurant, a reliable plumber, or the best shopping outlets, our customer page simplifies the search process.</div>
        <div><br /></div>
        <div>
          <div>We understand the importance of an intuitive and easy-to-use interface. That’s why our customer page is designed with a simple yet effective search bar that allows users to enter business names, services, or locations to find the most relevant results quickly.</div><div><br /></div>
          <div>To make navigation even more convenient, we have categorized businesses into various industries such as food, health, real estate, education, and more. Customers can explore these categories to find services that match their needs.</div><div><br /></div>
          <div>
             <div>One of the most valuable features of our customer page is the review and rating system. Customers can read feedback from other users to gain insights into the quality of service, pricing, and overall experience before choosing a business.</div><div><br /></div>
             <div>Users can contribute to the community by leaving reviews and ratings based on their experiences with businesses. This helps others make better choices and encourages businesses to maintain high service standards.</div><div><br /></div>
          <div>
            <div>Customers dont have to search for business contact details separately. They can directly call, email, or visit business websites through their profiles on our platform, making communication quick and hassle-free.</div><div><br /></div>
            <div>We value user privacy. Customers can create secure accounts, manage their activity, track reviews, and access personalized recommendations while ensuring their personal information is protected.</div>
            <div><br /></div>
          <div>
            <div>If users need assistance with searching, reviewing, or reporting a business, our dedicated customer support team is available to help resolve issues and ensure a smooth experience.</div><div><br/></div>
            <div>Customers can engage with other users and business owners through our Q&A section, where they can ask questions about services, get recommendations, and interact with a vibrant online community.</div><div><br/></div>
            <div>Our customer page is optimized for desktop, mobile, and tablet users, ensuring a smooth browsing experience regardless of the device being used. Customers can access business listings anytime, anywhere.</div><div><br/></div>
            </div>
            </div></div></div></div>
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

export default Custom_page