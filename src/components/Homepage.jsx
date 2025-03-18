import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import img from "./shahid.jpg";
import Cookies from "js-cookie";
import img1 from "./shahid.jpg";
import Footer from "./Footer";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaHeart,
  FaLocationArrow,
  FaMap,
  FaPhone,
  FaUser,
  FaUserLock,
} from "react-icons/fa";
import { FaArrowRightToCity, FaShopLock, FaTicket } from "react-icons/fa6";
import Listing_specific_page from "./Listing_specific_page";
import { Link, useLoaderData } from "react-router-dom";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [testinomal, setTestinomal] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let token = localStorage.getItem("token");
      try {
        // Define headers conditionally
        let headers = { "Content-Type": "application/json" };
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }
        const response0 = await fetch(
          "https://workingbackend-i34e.onrender.com/api/testinomals/",
          {
            method: "GET",
            headers: headers,
            credentials: "include",
          }
        );
        // Fetch products
        const response = await fetch(
          "https://workingbackend-i34e.onrender.com/api/products/",
          {
            headers: headers,
            credentials: "include",
          }
        );

        // Fetch blogs
        const response2 = await fetch(
          "https://backend-v0ii.onrender.com/api/blogs/"
        );

        // Check if both responses are OK
        if (!response0.ok) throw new Error("Failed to fetch TESTINOMAL");
        if (!response.ok) throw new Error("Failed to fetch products");
        if (!response2.ok) throw new Error("Failed to fetch blogs");

        // Parse JSON responses
        const data0 = await response0.json();
        const data = await response.json();
        const data2 = await response2.json();

        // Set state variables
        setProducts(data);
        setTestinomal(data0);
        setData(data2);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <>
        {/*==========================
  TOPBAR PART END
    ===========================*/}
        {/*==========================
  LOG IN POPUP START
    ===========================*/}
        <section id="wsus__login_popup">
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Sign In
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <ul
                    className="nav nav-pills mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Login
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Register
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Forgot Password
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form id="loginFormSubmit">
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8"
                          autoComplete="off"
                        />
                        <input
                          type="email"
                          placeholder="Email *"
                          name="email"
                        />
                        <input
                          type="password"
                          placeholder="Password *"
                          name="password"
                        />
                        <button
                          className="read_btn"
                          id="loginSubmitBtn"
                          type="submit"
                        >
                          <i
                            id="login-spinner"
                            className="loading-icon fas fa-sync fa-spin d-none"
                            aria-hidden="true"
                          />
                          Login
                        </button>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <form id="registerFormSubmit">
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8"
                          autoComplete="off"
                        />
                        <input type="text" placeholder="Name *" name="name" />
                        <input
                          type="email"
                          placeholder="Email *"
                          name="email"
                        />
                        <input
                          type="password"
                          placeholder="Password *"
                          name="password"
                        />
                        <input
                          type="password"
                          placeholder="Confirm Password *"
                          name="password_confirmation"
                        />
                        <button
                          id="registerBtn"
                          className="read_btn"
                          type="button"
                        >
                          <i
                            id="reg-spinner"
                            className="loading-icon fas fa-sync fa-spin d-none"
                            aria-hidden="true"
                          />
                          Register
                        </button>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <form id="forgetPassFormSubmit">
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="eootBvtHmgEjMZ54w6ri89Ai8jhQeVsHlGGy4YE8"
                          autoComplete="off"
                        />
                        <input
                          type="email"
                          placeholder="Email *"
                          name="email"
                        />
                        <button
                          id="forgetPassBtn"
                          className="read_btn"
                          type="submit"
                        >
                          <i
                            id="forget-spinner"
                            className="loading-icon fas fa-sync fa-spin d-none"
                            aria-hidden="true"
                          />
                          Send Email
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Navbar />
        <section
          className="wsus__banner_2"
          style={{
            background:
              'url("https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_261,w_5000,h_2812,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/manjeera-international-convention-centre/DSC01131_qemapt")',
          }}
        >
          <div className="wsus__banner_overlay_2">
            <div className="row">
              <div className="col-xxl-8 col-xl-10">
                <div className="wsus__banner_text_2">
                  <h5>WELCOME TO CONNECTRJY</h5>
                  <h1>Find Your Perfect Place.</h1>
                  <p>
                    Find your dream home or commercial space with our detailed
                    listings, high-quality images, and user-friendly interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wsus__category_2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 m-auto">
                <div className="wsus__section_heading mb-4">
                  <h5>CATEGORY</h5>
                  <h2>
                    Explore <span>Category</span> Type
                  </h2>
                </div>
              </div>
            </div>
            <div className="row category_2_slider slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 1320,
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    style={{ width: 220 }}
                  >
                    <div>
                      <div
                        className="col-xl-2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="wsus__single_category_2">
                          <span>
                            <svg
                              fill="#000000"
                              width="40px"
                              height="40px"
                              viewBox="-9.22 0 122.88 122.88"
                              id="Layer_1"
                              data-name="Layer 1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>apartment</title>
                              <path d="M3.55,119.32H0v3.56H92.49v-3.56h-2v-17a1.22,1.22,0,0,0-1.22-1.22H75.54a1.22,1.22,0,0,0-1.22,1.22v17H48.47V95.23a1.63,1.63,0,0,0-1.63-1.62H19.94a1.63,1.63,0,0,0-1.63,1.62v24.09H0V2.6A2.79,2.79,0,0,1,.82.85h0a2.84,2.84,0,0,1,2-.84H63.93a2.82,2.82,0,0,1,2,.84l.13.13a2.83,2.83,0,0,1,.72,1.89V34.57H102a2.39,2.39,0,0,1,1.69.7h0a2.36,2.36,0,0,1,.7,1.68v84.29a1.63,1.63,0,0,1-1.63,1.63H92.49v-3.56H101V38H66.79v81.34H63.23V3.56H3.55V119.32Zm84.54,0H76.76V103.5H88.09v15.82ZM85.45,45h8.81c.07,0,.13.1.13.22v5.71c0,.1-.06.21-.13.21H85.45c-.07,0-.13-.09-.13-.21V45.22c0-.12.06-.22.13-.22Zm0,39.6h8.81c.07,0,.13.1.13.21v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V84.81c0-.11.06-.21.13-.21Zm-14.85,0h8.8c.08,0,.14.1.14.21v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V84.81c0-.11.06-.21.14-.21ZM85.45,71.4h8.81c.07,0,.13.1.13.22v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V71.62c0-.13.06-.22.13-.22Zm0-13.2h8.81c.07,0,.13.1.13.22v5.71c0,.11-.06.22-.13.22H85.45c-.07,0-.13-.1-.13-.22V58.42c0-.12.06-.22.13-.22ZM70.6,45h8.8c.08,0,.14.1.14.22v5.71c0,.1-.06.21-.14.21H70.6c-.08,0-.14-.09-.14-.21V45.22c0-.12.06-.22.14-.22Zm0,26.4h8.8c.08,0,.14.1.14.22v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V71.62c0-.13.06-.22.14-.22Zm0-13.2h8.8c.08,0,.14.1.14.22v5.71c0,.11-.06.22-.14.22H70.6c-.08,0-.14-.1-.14-.22V58.42c0-.12.06-.22.14-.22ZM45.21,119.32H21.57V96.86H45.21v22.46ZM12.13,12.52h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27Zm32.94,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27Zm-16.47,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V12.79a.28.28,0,0,1,.27-.27ZM12.13,33.28h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27Zm32.94,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27Zm-16.47,0h9.58a.28.28,0,0,1,.27.27v9.59a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V33.55a.28.28,0,0,1,.27-.27ZM12.13,74.8h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H12.13a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27Zm32.94,0h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H45.07a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27Zm-16.47,0h9.58a.27.27,0,0,1,.27.27v9.58a.27.27,0,0,1-.27.27H28.6a.27.27,0,0,1-.27-.27V75.07a.27.27,0,0,1,.27-.27ZM12.13,54h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H12.13a.28.28,0,0,1-.27-.27V54.31a.27.27,0,0,1,.27-.27Zm32.94,0h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H45.07a.28.28,0,0,1-.27-.27V54.31a.27.27,0,0,1,.27-.27ZM28.6,54h9.58a.27.27,0,0,1,.27.27V63.9a.28.28,0,0,1-.27.27H28.6a.28.28,0,0,1-.27-.27V54.31A.27.27,0,0,1,28.6,54Z" />
                            </svg>
                          </span>
                          <a className="title" href=" " tabIndex={0}>
                            Apartments
                          </a>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={1}
                    aria-hidden="false"
                    style={{ width: 220 }}
                  >
                    <div>
                      <div
                        className="col-xl-2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="wsus__single_category_2">
                          <span>
                            <svg
                              fill="#000000"
                              version="1.1"
                              id="Capa_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 305.531 305.531"
                              xml:space="preserve"
                            >
                              <g>
                                <path
                                  d="M305.531,90.309L152.766,7.724L0,90.309v47.415l24.924-13.474v173.558h255.682V124.25l24.926,13.474V90.309z
		 M260.605,277.808h-81.84V170.466h-52v107.342H44.924v-164.37L152.766,55.14l107.84,58.298V277.808z"
                                />
                                <rect
                                  x="136.1"
                                  y="106.8"
                                  width="33.332"
                                  height="35.666"
                                />
                                <rect
                                  x="68.1"
                                  y="173.767"
                                  width="33.332"
                                  height="35.666"
                                />
                                <rect
                                  x="204.1"
                                  y="173.767"
                                  width="33.332"
                                  height="35.666"
                                />
                                <rect
                                  x="68.1"
                                  y="222.387"
                                  width="33.332"
                                  height="35.667"
                                />
                                <rect
                                  x="204.1"
                                  y="222.387"
                                  width="33.332"
                                  height="35.667"
                                />
                              </g>
                            </svg>
                          </span>
                          <a className="title" href=" " tabIndex={0}>
                            House
                          </a>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={2}
                    aria-hidden="false"
                    style={{ width: 220 }}
                  >
                    <div>
                      <div
                        className="col-xl-2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="wsus__single_category_2">
                          <span>
                            <svg
                              width="50px"
                              height="50px"
                              viewBox="0 0 64 64"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              class="iconify iconify--emojione"
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <path fill="#3e4347" d="M26 6h20v48H26z"></path>

                              <path fill="#dae3ea" d="M16 2h32v4H16z"></path>

                              <path fill="#3e4347" d="M4 6h10v46H4z"></path>

                              <path fill="#b2c1c0" d="M26 52h28v8H26z"></path>

                              <g fill="#b4d7ee">
                                <path d="M30 52h4v8h-4z"></path>

                                <path d="M38 52h4v8h-4z"></path>

                                <path d="M46 52h4v8h-4z"></path>

                                <path d="M46 42h10v4H46z"></path>

                                <path d="M46 32h10v4H46z"></path>

                                <path d="M46 22h10v4H46z"></path>

                                <path d="M46 12h10v4H46z"></path>

                                <path d="M38 42h4v4h-4z"></path>

                                <path d="M38 32h4v4h-4z"></path>

                                <path d="M38 22h4v4h-4z"></path>

                                <path d="M38 12h4v4h-4z"></path>

                                <path d="M30 42h4v4h-4z"></path>

                                <path d="M30 32h4v4h-4z"></path>

                                <path d="M30 22h4v4h-4z"></path>

                                <path d="M30 12h4v4h-4z"></path>
                              </g>

                              <g fill="#3e4347">
                                <path d="M26 46h32v6H26z"></path>

                                <path d="M26 36h32v6H26z"></path>

                                <path d="M26 26h32v6H26z"></path>

                                <path d="M26 16h32v6H26z"></path>

                                <path d="M26 6h32v6H26z"></path>
                              </g>

                              <g fill="#b4d7ee">
                                <path d="M14 8h12v44H14z"></path>

                                <path d="M4 52h22v10H4z"></path>
                              </g>

                              <path fill="#dae3ea" d="M2 50h24v2H2z"></path>

                              <g fill="#d6eef0">
                                <path d="M14 38h12v2H14z"></path>

                                <path d="M14 28h12v2H14z"></path>

                                <path d="M14 18h12v2H14z"></path>

                                <path d="M14 10h12v2H14z"></path>
                              </g>

                              <path fill="#f5f5f5" d="M14 6h12v2H14z"></path>

                              <path fill="#b2c1c0" d="M4 52h2v10H4z"></path>

                              <g fill="#f5f5f5">
                                <path d="M10 52h1.3v10H10z"></path>

                                <path d="M10 52h12v1.1H10z"></path>

                                <path d="M10 60.9h12V62H10z"></path>

                                <path d="M15.3 52h1.3v10h-1.3z"></path>

                                <path d="M20.7 52H22v10h-1.3z"></path>
                              </g>

                              <path fill="#83bf4f" d="M26 58h36v2H26z"></path>

                              <path fill="#dae3ea" d="M24 60h38v2H24z"></path>

                              <path
                                d="M61 57.8c.2-.3.3-.7.3-1.2c0-1.3-1-2.3-2.3-2.3h-.1V54c0-.6-.5-1.2-1.2-1.2c-.3 0-.5.1-.7.3c-.1-.8-.9-1.4-1.7-1.4c-1 0-1.7.8-1.7 1.8v.4c-.3-.2-.7-.4-1.1-.4c-.7 0-1.3.4-1.6 1c-.2-.1-.5-.1-.8-.1c-1.3 0-2.3 1-2.3 2.3c0 .5.2 1 .5 1.4c-.3.3-.5.7-.5 1.2c0 1 .8 1.8 1.7 1.8h9.2c.3.3.8.5 1.2.5c1.1 0 2-.9 2-2c.1-.8-.3-1.4-.9-1.8"
                                fill="#83bf4f"
                              ></path>

                              <g fill="#699635">
                                <path d="M51.7 59.6c0 .6.5-.3 1.2-.3c.6 0 1.2.9 1.2.3c0-.6-.5-1.2-1.2-1.2s-1.2.6-1.2 1.2"></path>

                                <path d="M55.1 57.6c0 .3.3 0 .6 0s.6.3.6 0s-.3-.6-.6-.6s-.6.2-.6.6"></path>

                                <path d="M59.4 59.7c0 .3.3 0 .6 0s.6.3.6 0s-.3-.6-.6-.6c-.3.1-.6.3-.6.6"></path>
                              </g>

                              <g fill="#b5f478">
                                <path d="M56.9 56c0 .3.3-.1.6-.1s.6.4.6.1c0-.3-.3-.6-.6-.6s-.6.2-.6.6"></path>

                                <path d="M58.9 57.7c0 .3.3-.1.6-.1s.6.4.6.1c0-.3-.3-.6-.6-.6c-.4 0-.6.2-.6.6"></path>
                              </g>

                              <g fill="#699635">
                                <path d="M49.2 56.6c0 .7.5-.4 1.2-.4s1.2 1 1.2.4s-.5-1.2-1.2-1.2s-1.2.5-1.2 1.2"></path>

                                <path d="M49.1 59.3c0 .3.3 0 .6 0s.6.3.6 0s-.3-.6-.6-.6c-.3.1-.6.3-.6.6"></path>
                              </g>

                              <path
                                d="M54.3 54.7c0 .4.3-.2.8-.2c.4 0 .8.7.8.2c0-.4-.3-.8-.8-.8c-.4 0-.8.3-.8.8"
                                fill="#b5f478"
                              ></path>

                              <path
                                d="M56.5 59.9c0 .4.3-.2.8-.2c.4 0 .8.7.8.2c0-.4-.3-.8-.8-.8s-.8.3-.8.8"
                                fill="#699635"
                              ></path>
                            </svg>
                          </span>
                          <a className="title" href=" " tabIndex={0}>
                            Office
                          </a>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={3}
                    aria-hidden="false"
                    style={{ width: 220 }}
                  >
                    <div>
                      <div
                        className="col-xl-2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="wsus__single_category_2">
                          <span>
                            <svg
                              fill="#000000"
                              height="50px"
                              width="50px"
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 512 512"
                              xml:space="preserve"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M486.4,460.8c-1.476,0-2.944,0.128-4.386,0.384c-5.888-10.607-17.092-17.451-29.747-17.451
				c-12.655,0-23.859,6.844-29.747,17.451c-1.442-0.256-2.91-0.384-4.386-0.384c-14.114,0-25.6,11.486-25.6,25.6
				c0,3.004,0.614,5.845,1.579,8.533H358.4v-51.2h42.667c4.71,0,8.533-3.823,8.533-8.533V93.867c0-4.71-3.823-8.533-8.533-8.533
				h-256c-4.71,0-8.533,3.823-8.533,8.533v409.6c0,4.71,3.823,8.533,8.533,8.533H486.4c14.114,0,25.6-11.486,25.6-25.6
				S500.514,460.8,486.4,460.8z M358.4,102.4h34.133v51.2H358.4V102.4z M358.4,170.667h34.133v51.2H358.4V170.667z M358.4,238.933
				h34.133v51.2H358.4V238.933z M358.4,307.2h34.133v51.2H358.4V307.2z M358.4,375.467h34.133v51.2H358.4V375.467z M187.733,494.933
				H153.6v-51.2h34.133V494.933z M187.733,426.667H153.6v-51.2h34.133V426.667z M187.733,358.4H153.6v-51.2h34.133V358.4z
				 M187.733,290.133H153.6v-51.2h34.133V290.133z M187.733,221.867H153.6v-51.2h34.133V221.867z M187.733,153.6H153.6v-51.2h34.133
				V153.6z M238.933,494.933H204.8v-51.2h34.133V494.933z M238.933,426.667H204.8v-51.2h34.133V426.667z M238.933,358.4H204.8v-51.2
				h34.133V358.4z M238.933,290.133H204.8v-51.2h34.133V290.133z M238.933,221.867H204.8v-51.2h34.133V221.867z M238.933,153.6
				H204.8v-51.2h34.133V153.6z M290.133,494.933H256v-51.2h34.133V494.933z M290.133,426.667H256v-51.2h34.133V426.667z
				 M290.133,358.4H256v-51.2h34.133V358.4z M290.133,290.133H256v-51.2h34.133V290.133z M290.133,221.867H256v-51.2h34.133V221.867
				z M290.133,153.6H256v-51.2h34.133V153.6z M341.333,494.933H307.2v-51.2h34.133V494.933z M341.333,426.667H307.2v-51.2h34.133
				V426.667z M341.333,358.4H307.2v-51.2h34.133V358.4z M341.333,290.133H307.2v-51.2h34.133V290.133z M341.333,221.867H307.2v-51.2
				h34.133V221.867z M341.333,153.6H307.2v-51.2h34.133V153.6z M486.4,494.933h-68.267c-4.702,0-8.533-3.831-8.533-8.533
				s3.831-8.533,8.533-8.533c1.638,0,3.191,0.469,4.625,1.391c2.338,1.502,5.257,1.775,7.834,0.734
				c2.577-1.041,4.48-3.277,5.103-5.982c1.801-7.774,8.619-13.21,16.572-13.21c7.953,0,14.771,5.436,16.572,13.21
				c0.623,2.705,2.526,4.941,5.103,5.982c2.577,1.041,5.495,0.768,7.834-0.734c5.547-3.584,13.167,0.802,13.158,7.142
				C494.933,491.102,491.102,494.933,486.4,494.933z"
                                    />
                                    <path
                                      d="M187.733,59.733v-25.6h59.733c4.71,0,8.533-3.823,8.533-8.533v-8.533h34.133V25.6c0,4.71,3.823,8.533,8.533,8.533H358.4
				V51.2H213.333c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h213.333v353.954c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V59.733c0-4.71-3.823-8.533-8.533-8.533h-59.733V25.6c0-4.71-3.823-8.533-8.533-8.533H307.2V8.533
				c0-4.71-3.823-8.533-8.533-8.533h-51.2c-4.71,0-8.533,3.823-8.533,8.533v8.533H179.2c-4.71,0-8.533,3.823-8.533,8.533v25.6
				h-59.733c-4.71,0-8.533,3.823-8.533,8.533v435.2H51.2v-34.995c19.447-3.968,34.133-21.197,34.133-41.805
				c0-1.109-0.486-110.933-42.667-110.933C0.486,307.2,0,417.024,0,418.133c0,20.608,14.686,37.837,34.133,41.805v34.995h-25.6
				c-4.71,0-8.533,3.823-8.533,8.533S3.823,512,8.533,512h102.4c4.71,0,8.533-3.823,8.533-8.533v-435.2H179.2
				C183.91,68.267,187.733,64.444,187.733,59.733z M17.067,418.133c0-42.513,11.418-93.867,25.6-93.867
				c14.182,0,25.6,51.354,25.6,93.867c0,14.114-11.486,25.6-25.6,25.6S17.067,432.247,17.067,418.133z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <a className="title" href=" " tabIndex={0}>
                            Commercial
                          </a>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={4}
                    aria-hidden="false"
                    style={{ width: 220 }}
                  >
                    <div>
                      <div
                        className="col-xl-2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="wsus__single_category_2">
                          <span>
                            <svg
                              width="50px"
                              height="50px"
                              viewBox="0 0 60.601 60.601"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:cc="http://creativecommons.org/ns#"
                              xmlns:dc="http://purl.org/dc/elements/1.1/"
                              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                            >
                              <metadata>
                                <rdf:rdf>
                                  <cc:work rdf:about>
                                    <dc:format>image/svg+xml</dc:format>
                                    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                                    <dc:title />
                                    <dc:source>
                                      http://www.mlit.go.jp/common/001245686.pdf
                                    </dc:source>
                                  </cc:work>
                                </rdf:rdf>
                              </metadata>
                              <path
                                d="m7.7855 56.032c-1.7762 0-3.2162-1.44-3.2162-3.2162v-45.03c0-1.7762 1.44-3.2162 3.2162-3.2162h45.031c1.775 0 3.215 1.44 3.215 3.2162v45.03c0 1.7762-1.44 3.2162-3.215 3.2162h-45.031z"
                                style={{
                                  fill: "#ffffff",
                                  "stroke-width": ".60625",
                                  stroke: "#000",
                                }}
                              />
                              <path d="m43.686 42.623c-1.4462 0-2.6175-1.1738-2.6175-2.6175 0-1.4475 1.1712-2.6188 2.6175-2.6188 1.4438 0 2.6175 1.1712 2.6175 2.6188 0 1.4438-1.1738 2.6175-2.6175 2.6175zm-19.098 0c-1.445 0-2.6175-1.1738-2.6175-2.6175 0-1.4475 1.1725-2.6188 2.6175-2.6188 1.4462 0 2.6175 1.1712 2.6175 2.6188 0 1.4438-1.1712 2.6175-2.6175 2.6175zm0.30375-13.666 0.07875-0.0088c3.03-0.315 6.1138-0.475 9.1662-0.475 3.0538 0 6.1388 0.16 9.17 0.47625l0.07875 0.0087 1.7988 6.26h-22.1l1.8075-6.2612zm21.878 6.2612-2.2-7.665c-3.4212-0.4025-6.9038-0.60875-10.432-0.60875-3.53 0-7.0112 0.20625-10.432 0.60875l-2.2012 7.665c-1.32 0-2.3838 1.07-2.3838 2.39v8.9088h2.3662l-0.0012 3.805c0.57875 0.20875 1.1888 0.325 1.8412 0.325 0.64125 0 1.27-0.11 1.84-0.315v-3.8162l17.94-0.0038v3.81c0.58 0.20875 1.1888 0.325 1.8412 0.325 0.64125 0 1.2688-0.11 1.84-0.315l0.0012-3.82h2.375v-8.9038c0-1.32-1.0725-2.39-2.3938-2.39" />
                              <path d="m16.538 19.054h1.4438c1.9262 0 3.4605-0.69225 3.4605-2.8882 0-2.1367-1.5344-2.8289-3.4605-2.8289h-1.4438zm-5.5965-9.688h6.6792c6.4087 0 9.4175 2.1667 9.4175 6.8897 0 4.2427-3.0987 6.7698-8.3342 6.7698h-2.166v7.3415h-5.5965v-21.001" />
                            </svg>
                          </span>
                          <a className="title" href=" " tabIndex={0}>
                            Parking Lot
                          </a>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={5}
                    aria-hidden="false"
                    style={{ width: 220 }}
                  >
                    <div>
                      <div
                        className="col-xl-2"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="wsus__single_category_2">
                          <span>
                            <svg
                              fill="#000000"
                              height="50px"
                              width="50px"
                              version="1.1"
                              id="Layer_1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 512 512"
                              xmlSpace="preserve"
                            >
                              <g>
                                <g>
                                  <g>
                                    <path
                                      d="M324.267,332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V332.8z"
                                    />
                                    <path
                                      d="M315.733,426.667c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V435.2
				C324.267,430.49,320.444,426.667,315.733,426.667z"
                                    />
                                    <path
                                      d="M358.4,230.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V230.4z"
                                    />
                                    <path
                                      d="M324.267,281.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M324.267,384c0-4.71-3.823-8.533-8.533-8.533S307.2,379.29,307.2,384v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V384z"
                                    />
                                    <path
                                      d="M358.4,281.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M290.133,230.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V230.4z"
                                    />
                                    <path
                                      d="M324.267,230.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V230.4z"
                                    />
                                    <path
                                      d="M358.4,145.067V128c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				S358.4,149.777,358.4,145.067z"
                                    />
                                    <path
                                      d="M290.133,281.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M392.533,128c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V128z"
                                    />
                                    <path
                                      d="M281.6,324.267c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V332.8
				C290.133,328.09,286.31,324.267,281.6,324.267z"
                                    />
                                    <path
                                      d="M426.667,384c0-4.71-3.823-8.533-8.533-8.533S409.6,379.29,409.6,384v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V384z"
                                    />
                                    <path
                                      d="M418.133,426.667c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V435.2
				C426.667,430.49,422.844,426.667,418.133,426.667z"
                                    />
                                    <path
                                      d="M452.267,324.267c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V332.8C460.8,328.09,456.977,324.267,452.267,324.267z"
                                    />
                                    <path
                                      d="M315.733,153.6c4.71,0,8.533-3.823,8.533-8.533v-36.002L409.6,87.731V230.4c0,3.558,2.21,6.741,5.538,7.996
				l62.729,23.518v87.953c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V256c0-3.558-2.21-6.741-5.538-7.996
				l-62.729-23.518V59.733c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v10.402l-95.94,23.987
				c-3.797,0.947-6.46,4.361-6.46,8.277v42.667C307.2,149.777,311.023,153.6,315.733,153.6z"
                                    />
                                    <path
                                      d="M460.8,281.6c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M426.667,281.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M358.4,384c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V384z"
                                    />
                                    <path
                                      d="M426.667,332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V332.8z"
                                    />
                                    <path
                                      d="M349.867,426.667c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V435.2
				C358.4,430.49,354.577,426.667,349.867,426.667z"
                                    />
                                    <path
                                      d="M358.4,332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V332.8z"
                                    />
                                    <path
                                      d="M384,477.867c4.71,0,8.533-3.823,8.533-8.533V196.267c0-3.917-2.671-7.33-6.46-8.277L249.54,153.856
				c-2.534-0.64-5.257-0.06-7.322,1.553c-2.074,1.613-3.285,4.096-3.285,6.724v187.733c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V173.065l119.467,29.867v266.402C375.467,474.044,379.29,477.867,384,477.867z"
                                    />
                                    <path
                                      d="M187.733,179.2c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V179.2z"
                                    />
                                    <path
                                      d="M187.733,128c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V128z"
                                    />
                                    <path
                                      d="M119.467,384c0-4.71-3.823-8.533-8.533-8.533S102.4,379.29,102.4,384v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V384z"
                                    />
                                    <path
                                      d="M42.667,307.2c4.71,0,8.533-3.823,8.533-8.533V256h85.333v213.333c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V247.467c0-4.71-3.823-8.533-8.533-8.533h-102.4c-4.71,0-8.533,3.823-8.533,8.533v51.2
				C34.133,303.377,37.956,307.2,42.667,307.2z"
                                    />
                                    <path
                                      d="M136.533,179.2v17.067c0,4.71,3.823,8.533,8.533,8.533c4.71,0,8.533-3.823,8.533-8.533V179.2
				c0-4.71-3.823-8.533-8.533-8.533C140.356,170.667,136.533,174.49,136.533,179.2z"
                                    />
                                    <path
                                      d="M187.733,76.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V76.8z"
                                    />
                                    <path
                                      d="M110.933,426.667c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V435.2
				C119.467,430.49,115.644,426.667,110.933,426.667z"
                                    />
                                    <path
                                      d="M503.467,494.933H486.4v-52.412c14.677-3.814,25.6-17.067,25.6-32.922c0-18.825-15.309-34.133-34.133-34.133
				s-34.133,15.309-34.133,34.133c0,15.855,10.923,29.107,25.6,32.922v52.412H256v-34.995c19.447-3.968,34.133-21.197,34.133-41.805
				c0-23.526-19.14-42.667-42.667-42.667c-23.526,0-42.667,19.14-42.667,42.667c0,20.608,14.686,37.837,34.133,41.805v34.995H51.2
				v-86.195c19.447-3.968,34.133-21.197,34.133-41.805c0-23.526-19.14-42.667-42.667-42.667C19.14,324.267,0,343.407,0,366.933
				c0,20.608,14.686,37.837,34.133,41.805v86.195h-25.6c-4.71,0-8.533,3.823-8.533,8.533S3.823,512,8.533,512h494.933
				c4.71,0,8.533-3.823,8.533-8.533S508.177,494.933,503.467,494.933z M17.067,366.933c0-14.114,11.486-25.6,25.6-25.6
				s25.6,11.486,25.6,25.6s-11.486,25.6-25.6,25.6S17.067,381.047,17.067,366.933z M221.867,418.133c0-14.114,11.486-25.6,25.6-25.6
				s25.6,11.486,25.6,25.6s-11.486,25.6-25.6,25.6S221.867,432.247,221.867,418.133z M460.8,409.6
				c0-9.412,7.654-17.067,17.067-17.067s17.067,7.654,17.067,17.067c0,9.412-7.654,17.067-17.067,17.067S460.8,419.012,460.8,409.6z
				"
                                    />
                                    <path
                                      d="M68.267,435.2v34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V435.2c0-4.71-3.823-8.533-8.533-8.533
				S68.267,430.49,68.267,435.2z"
                                    />
                                    <path
                                      d="M119.467,281.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M119.467,332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V332.8z"
                                    />
                                    <path
                                      d="M68.267,281.6v17.067c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V281.6c0-4.71-3.823-8.533-8.533-8.533
				S68.267,276.89,68.267,281.6z"
                                    />
                                    <path
                                      d="M187.733,332.8c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V332.8z"
                                    />
                                    <path
                                      d="M221.867,230.4c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V230.4z"
                                    />
                                    <path
                                      d="M221.867,179.2c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V179.2z"
                                    />
                                    <path
                                      d="M221.867,281.6c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M213.333,324.267c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V332.8C221.867,328.09,218.044,324.267,213.333,324.267z"
                                    />
                                    <path
                                      d="M221.867,128c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V128z"
                                    />
                                    <path
                                      d="M187.733,384c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V384z"
                                    />
                                    <path
                                      d="M110.933,221.867c4.71,0,8.533-3.823,8.533-8.533V150.34l29.414-14.703c2.893-1.451,4.719-4.403,4.719-7.637V56.474
				l42.667-21.333l42.667,21.333V128c0,4.71,3.823,8.533,8.533,8.533S256,132.71,256,128V51.2c0-3.234-1.826-6.187-4.719-7.637
				L204.8,20.326V8.533c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v11.793l-46.481,23.236
				c-2.893,1.451-4.719,4.403-4.719,7.637v71.526l-29.414,14.703c-2.893,1.451-4.719,4.403-4.719,7.637v68.267
				C102.4,218.044,106.223,221.867,110.933,221.867z"
                                    />
                                    <path
                                      d="M187.733,281.6c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V281.6z"
                                    />
                                    <path
                                      d="M179.2,426.667c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V435.2
				C187.733,430.49,183.91,426.667,179.2,426.667z"
                                    />
                                    <path
                                      d="M221.867,76.8c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V76.8z"
                                    />
                                    <path
                                      d="M187.733,230.4c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v17.067c0,4.71,3.823,8.533,8.533,8.533
				s8.533-3.823,8.533-8.533V230.4z"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </span>
                          <a className="title" href=" " tabIndex={0}>
                            Land
                          </a>
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wsus__popular_city_2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 m-auto">
                <div className="wsus__section_heading mb-4">
                  <h5>Cities</h5>
                  <h2>
                    Most Popular <span>Cities</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://teja12.kuikr.com/is/a/c/1200x500/gallery_images/original/cf62eb6be6bbd80.gif"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Morampudi</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://mightyhills.in/wp-content/uploads/2024/07/img13-1024x631.jpg"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Mighty Hills</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://is1-2.housingcdn.com/01c16c28/78bc2c00db3a9d55facfcc3102599d54/v0/fs/2_bhk_independent_house-for-sale-melakottaiyur-Chennai-others.jpg"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Kakinada</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2021/5/TA/UW/ZD/53256000/d9-500x500.jpg"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Danavaipeta</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_261,w_5000,h_2812,c_crop,q_80,fl_progressive/w_900,h_506,f_auto,c_fit/manjeera-international-convention-centre/DSC01131_qemapt"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Main Road Rajahmundry</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipNuq-7zBgSt4zBQvyCGV6YLVUltMgFaPjdru8r8=s1360-w1360-h1020"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Dowlaiswaram</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="data:image/jpeg;base64,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 "
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Prakasam Nagar</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>

              <div className="col-xl-3 col-sm-6 col-lg-4">
                <a className="wsus__single_cities_2" href=" ">
                  <img
                    src="https://www.deccanchronicle.com/h-upload/2025/01/01/1877835-apsrt.webp"
                    alt="cities"
                    className="img-fluid w-100"
                  />
                  <div className="text">
                    <p>Kotipalli Bus Stand</p>
                    <span>1 Listing</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="wsus__about_us">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-10">
                <div className="wsus__about_us_img">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="img_1">
                        <img
                          src=" https://www.holidify.com/images/bgImages/RAJAHAMUNDRY.jpg"
                          alt="About"
                          className="img-fluid w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img_2">
                        <img
                          src="https://images.trvl-media.com/lodging/17000000/16240000/16239000/16238972/2b766e53.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium "
                          alt="About"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="img_2 mt-4">
                        <img
                          src="https://images.pexels.com/photos/3013440/pexels-photo-3013440.jpeg?cs=srgb&dl=pexels-rafa-de-21730-3013440.jpg&fm=jpg"
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
                    <FaArrowRightToCity
                      style={{ margin: "5px" }}
                      className="fal fa-long-arrow-right"
                      aria-hidden="true"
                    />
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
                      <h3>
                        <span className="counter">100</span>+
                      </h3>
                      <p />
                    </li>
                    <li>
                      <h3>
                        <span className="counter">500</span>+
                      </h3>
                      <p />
                    </li>
                    <li>
                      <h3>
                        <span className="counter">120</span>+
                      </h3>
                      <p />
                    </li>
                    <li>
                      <h3>
                        <span className="counter">300</span>+
                      </h3>
                      <p />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured_listing_2">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 m-auto">
                <div className="wsus__section_heading mb-4">
                  <h5>LISTING</h5>
                  <h2>
                    Featured <span>Listing</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {products.map(
                (product) =>
                  product.status &&
                  product.featured && (
                    <>
                      <div className="col-xl-4 col-md-6">
                        <div className="featured_listing_item_2">
                          <div className="featured_listing_item_img">
                            <img
                              src={product.image}
                              alt="listing"
                              className="img-fluid w-100"
                            />
                            {product.featured ? (
                              <a className="green" href="">
                                Featured
                              </a>
                            ) : (
                              <></>
                            )}

                            {product.verified ? (
                              <a
                                className="red"
                                style={{
                                  position: "absolute",
                                  left: 300,
                                  width: "100px",
                                }}
                                href=""
                              >
                                Verified
                              </a>
                            ) : (
                              <></>
                            )}

                            <span className="love">
                              <a
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <FaShopLock
                                  className="fas fa-heart"
                                  aria-hidden="true"
                                />
                              </a>
                            </span>
                          </div>
                          <div className="featured_listing_item_text">
                            <span className="author">
                              <img
                                src={`https://backend-v0ii.onrender.com/uploads/${product.user}.jpg`}
                                alt="User"
                                className="img-fluid w-100"
                              />
                            </span>

                            <Link
                              className="title"
                              to={`/listing/${product._id}`}
                            >
                              {product.name}
                            </Link>
                            <ul>
                              <li>
                                <FaPhone
                                  style={{ margin: "5px" }}
                                  className="fas fa-phone-alt"
                                  aria-hidden="true"
                                />{" "}
                                Call :{product.contact}
                              </li>
                              <li>
                                <FaLocationArrow
                                  style={{ margin: "5px" }}
                                  className="fas fa-map-marker-alt"
                                  aria-hidden="true"
                                />{" "}
                                {product.location}
                              </li>
                              <li>
                                <FaUser
                                  style={{ margin: "5px" }}
                                  className="fas fa-calendar-alt"
                                  aria-hidden="true"
                                />
                                {product.user}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <section id="wsus__map_popup">
                          <div
                            className="modal fade"
                            id="listngPopUp-72"
                            tabIndex={-1}
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <button
                                  type="button"
                                  className="btn-close popup_close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <i
                                    className="far fa-times"
                                    aria-hidden="true"
                                  />
                                </button>
                                <div className="modal-body">
                                  <div className="row">
                                    <div className="col-12 col-xl-12 col-md-12">
                                      <div className="map_popup_content">
                                        <img
                                          src="./DirList - Home Page_files/listing-thumb-2024-07-08-09-27-26-6675.jpg"
                                          alt="images"
                                          className="img-fluid w-100"
                                        />
                                        <div className="map_popup_text">
                                          <span>
                                            <i
                                              className="far fa-star"
                                              aria-hidden="true"
                                            />
                                            Featured
                                          </span>
                                          <span className="red">
                                            <i
                                              className="far fa-check"
                                              aria-hidden="true"
                                            />
                                            Verified
                                          </span>
                                          <h5>Prime Realty</h5>
                                          <a
                                            className="call"
                                            href="callto:(212) 555-1234"
                                          >
                                            <i
                                              className="fal fa-phone-alt"
                                              aria-hidden="true"
                                            />
                                            (212) 555-1234
                                          </a>
                                          <a
                                            className="mail"
                                            href="mailto:info@primerealtyexample.com"
                                          >
                                            <i
                                              className="fal fa-envelope"
                                              aria-hidden="true"
                                            />
                                            info@primerealtyexample.com
                                          </a>
                                          <p>
                                            Residential and commercial
                                            properties in prime locations.
                                          </p>
                                          <a
                                            className="read_btn"
                                            href="https://demo.websolutionus.com/dirlist/listing/prime-realty"
                                          >
                                            Read More
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-12 col-xl-12 col-md-12">
                                      <div className="map_popup_content_map">
                                        <iframe
                                          src="./DirList - Home Page_files/embed.html"
                                          width={600}
                                          height={450}
                                          style={{ border: "0" }}
                                          allowFullScreen
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"
                                        />
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
              )}
            </div>
          </div>
        </section>
        <section className="wsus__pricing wsus__pricing_page_2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="wsus__section_heading mb-4">
                  <h5>PRICING</h5>
                  <h2>
                    Our <span>Pricing</span> Packages
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <div className="wsus__pricing_item">
                  <h6>Premium</h6>
                  <h2>
                    ₹499
                    <span> 1 Year</span>
                  </h2>
                  <ul>
                    <li>5 Listings Submission</li>
                    <li>360 Days Expiration</li>
                    <li>Unlimited Photos</li>
                    <li>Unlimited Videos</li>

                    <li>Featured Listing Available</li>
                    <li>verified badge Available</li>
                  </ul>
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    href=""
                    className="common_btn_2"
                  >
                    Get Started
                  </a>
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
                      {testinomal.map((testi) => (
                        <div
                          className="wsus__single_testimonial_2"
                          key={testi._id}
                        >
                          <p className="description">{testi.message}</p>
                          <div className="wsus__testimonial_footer">
                            <h3>{testi.name}</h3>
                          </div>
                        </div>
                      ))}
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
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wsus__blog_2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="wsus__section_heading mb-4">
                  <h5>RECENT POSTS</h5>
                  <h2>
                    Our Latest <span>News</span> Feed
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {data.map((pro) => (
                <>
                  <div className="col-xl-4 col-md-6 col-lg-6">
                    <div className="wsus__single_blog_2">
                      <div className="wsus__single_blog_2_img">
                        <img
                          src={pro.image}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="wsus__single_blog_2_text">
                        <ul className="d-flex flex-wrap">
                          <li>{pro.date.split("T")[0]}</li>
                          <li>By Admin</li>
                        </ul>
                        <a href=" " className="title">
                          {pro.title}
                        </a>
                        <p>{pro.description.slice(0, 100)}</p>
                        <Link to={`/blog/${pro._id}`} className="read_btn_2">
                          Read More
                          <FaArrowRight
                            style={{ margin: "5px" }}
                            className="fal fa-long-arrow-right"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/*==========================
   FOOTER PART START
    ===========================*/}
        <Footer />
        {/*==========================
   FOOTER PART END
    ===========================*/}
        {/*=============SCROLL BTN==============*/}
        <div className="scroll_btn" style={{ display: "block" }}>
          <i className="fas fa-chevron-up" aria-hidden="true" />
        </div>
        {/*=============SCROLL BTN==============*/}
        {/*bootstrap js*/}
        {/*font-awesome js*/}
        <link rel="stylesheet" href=" " media="all" />
        <link rel="stylesheet" href=" " media="all" />
        {/*slick js*/}
        {/*venobox js*/}
        {/*counter js*/}
        {/*nice select js*/}
        {/*isotope js*/}
        {/*summer_note js*/}
        {/*main/custom js*/}
        <iframe
          name="stripeXDM_default884613_provider"
          id="stripeXDM_default884613_provider"
          aria-hidden="true"
          src=" "
          frameBorder={0}
          style={{ position: "absolute", top: "-2000px", left: 0 }}
        />
        <iframe
          src=" "
          frameBorder={0}
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          style={{
            width: "1px !important",
            height: "1px !important",
            position: "fixed !important",
            visibility: "hidden !important",
            pointerEvents: "none !important",
          }}
        />
      </>
    </>
  );
}

export default Homepage;
