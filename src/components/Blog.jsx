import { Link, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FaArrowRight } from "react-icons/fa";
function Blog() {
  const datas = useLoaderData()
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
  {/*==========================
          BREADCRUMB PART START
          ===========================*/}
  <div id="breadcrumb_part" style={{"background-image":"url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-08-31-09-49-24-9055.jpg)"}}>
    <div className="bread_overlay">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center text-white">
            <h4>Blog</h4>
            <nav style={{"--bs-breadcrumb-divider":"''"}} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">
                    Home </a></li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blog </li>
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
               BLOG PART START
          ===========================*/}
  <section id="blog_part">
    <div className="blog_part_overlay">
      <div className="container">
        <div className="row">
          {datas.map((data)=>(
            <>
              <div className="col-xl-4 col-md-6 col-lg-6">
            <div className="wsus__single_blog_2">
              <div className="wsus__single_blog_2_img">
                <img src={data.image}  alt="blog" className="img-fluid w-100" />
              </div>
              <div className="wsus__single_blog_2_text">
                <ul className="d-flex flex-wrap">
                  <li>
                 
                    {data.date.split("T")[0]}
                  </li>
              
                </ul>
                <a href="" className="title">{data.title}</a>
                <p>{(data.description).slice(0,100)}</p>
                <Link to = {`/blog/${data._id}`} className="read_btn_2" >Read More  <FaArrowRight  style={{margin:"5px"}}className="fal fa-long-arrow-right" aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
            </>
          ))}
        
        
          <div className="col-12">
            <div id="pagination">
              <nav aria-label>
                <ul className="pagination">
                  <li className="page-item active" aria-current="page">
                    <a className="page-link " href="">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="">2</a></li>
                  <li className="page-item">
                    <a className="page-link" href=""><i className="fas fa-chevron-right" aria-hidden="true" /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==========================
               BLOG PART END
          ===========================*/}
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
  {/*=============SCROLL BTN==============*/}
</div>
    </>
  )
}

export default Blog