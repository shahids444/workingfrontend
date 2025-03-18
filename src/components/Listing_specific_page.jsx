import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import {
  FaEye,
  FaFacebook,
  FaGlobe,
  FaHeart,
  FaInstagram,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaThumbsUp,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useState, useEffect } from "react";

function Listing_specific_page() {
  const { data, product } = useLoaderData();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(
        "https://workingbackend-i34e.onrender.com/api/contacts/createContact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Something went wrong");

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contact data from the API
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://workingbackend-i34e.onrender.com/api/contacts"
        );
        setContacts(response.data); // Set contacts in state
      } catch (err) {
        console.log(err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <div>
        <section id="wsus__topbar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-7 d-none d-lg-block"></div>
            </div>
          </div>
        </section>

        <Navbar />
        {/*==========================
     MENU PART END
    ===========================*/}
        <div
          id="breadcrumb_part"
          style={{ "background-image": `url(${data.image})` }}
        >
          <div className="bread_overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center text-white">
                  <h4>{data.name}</h4>
                  <nav
                    style={{ "--bs-breadcrumb-divider": "''" }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a>Home </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a>{data.category} </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {data.name}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="listing_details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="listing_details_text">
                  <div className="listing_det_header">
                    <div className="listing_det_header_img">
                      <img
                        src={data.image}
                        alt="logo"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="listing_det_header_text">
                      <h6>{data.name}</h6>
                      <p className="host_name">
                        Hosted by <a>{data.user}</a>
                      </p>

                      <ul>
                        {data.verified && (
                          <li>
                            <a>
                              <FaThumbsUp
                                style={{ margin: "5px" }}
                                className="far fa-check"
                                aria-hidden="true"
                              />
                              Verified
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="listing_det_text">
                    <p>{data.description}</p>
                  </div>
                  <div className="listing_det_Photo">
                    <div className="row">
                      <div className="col-xl-3 col-sm-6">
                        <a className="venobox vbox-item" data-gall="gallery01">
                          <img
                            src={data.image}
                            alt="gallery1"
                            style={{ height: "100%" }}
                            className="img-fluid w-100"
                          />
                          <div className="photo_overlay">
                            <i className="fal fa-plus" aria-hidden="true" />
                          </div>
                        </a>
                      </div>
                      <div className="container5">
                        <h2>Recent Reviews</h2>
                        <table>
                          <thead>
                            <tr>
                              <th>Reviews</th>
                            </tr>
                          </thead>
                          <tbody>
                            {contacts.map((contact) => (
                              <tr key={contact._id}>
                                <td>{contact.message || "No message"}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="col-xl-7 col-md-6 col-lg-7">
                        <h2>Write A Review</h2>

                        {error && (
                          <div className="alert alert-danger">{error}</div>
                        )}
                        {success && (
                          <div className="alert alert-success">{success}</div>
                        )}

                        <form id="contactForm" onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-xl-12">
                              <div className="contact_input">
                                <textarea
                                  name="message"
                                  cols={3}
                                  rows={5}
                                  placeholder="Message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-xl-12">
                              <div className="contact_input">
                                <button
                                  id="contactBtn"
                                  className="read_btn"
                                  type="submit"
                                  disabled={loading}
                                >
                                  {loading ? (
                                    <i className="fas fa-sync fa-spin" />
                                  ) : (
                                    "Send Message"
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
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
                        <a>
                          <FaPhone
                            style={{ margin: "10px" }}
                            className="fal fa-phone-alt"
                            aria-hidden="true"
                          />
                          {data.contact}
                        </a>

                        <a>
                          <FaLocationArrow
                            style={{ margin: "10px" }}
                            className="fal fa-map-marker-alt"
                            aria-hidden="true"
                          />{" "}
                          {data.location}
                        </a>
                        <a
                          href={data.website}
                          target="_blank"
                          style={{ color: "blue" }}
                        >
                          <FaGlobe
                            style={{ margin: "10px" }}
                            className="fal fa-globe"
                            aria-hidden="true"
                          />
                          {data.website}
                        </a>
                        <a
                          href={`mailto:${
                            data?.email || "support@example.com"
                          }`}
                          target="_blank"
                          style={{ color: "blue" }}
                        >
                          <FaMailBulk
                            style={{ margin: "10px" }}
                            className="fal fa-globe"
                            aria-hidden="true"
                          />
                          {data.email}
                        </a>
                        <a
                          href={`https://www.facebook.com/${data.facebook}/`}
                          target="_blank"
                          style={{ color: "blue" }}
                        >
                          {" "}
                          <FaFacebook
                            style={{ margin: "10px" }}
                            className="fal fa-globe"
                            aria-hidden="true"
                          />
                          {data.facebook}
                        </a>
                        <a
                          href={`https://www.instagram.com/${data.instagram}/`}
                          target="_blank"
                          style={{ color: "blue" }}
                        >
                          <FaInstagram
                            style={{ margin: "10px" }}
                            className="fal fa-globe"
                            aria-hidden="true"
                          />
                          {data.instagram}
                        </a>
                        <a>
                          <FaWhatsapp
                            style={{ margin: "10px" }}
                            className="fal fa-globe"
                            aria-hidden="true"
                          />
                          {data.whatsapp}
                        </a>
                        <ul></ul>
                      </div>
                    </div>
                    <div className="col-12"></div>
                    <div className="col-12">
                      <div className="listing_det_side_add">
                        <h5>Recently Added {data.category}</h5>
                        {product
                          .filter((fil) => fil.category === data.category)
                          .map((pro) => (
                            <div className="row" key={pro.id}>
                              <div className="col-xl-12 col-md-6 col-lg-12">
                                <div className="wsus__featured_single">
                                  <a className="list_images">
                                    <img
                                      src={pro.image}
                                      alt="images"
                                      className="img-fluid w-100"
                                    />
                                  </a>
                                  <span className="love">
                                    <a
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                    >
                                      <FaHeart
                                        className="fas fa-heart"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </span>
                                  <a
                                    className="map"
                                    data-bs-toggle="modal"
                                    data-bs-target="#listngPopUp-77"
                                  >
                                    <FaEye
                                      className="fal fas fa-eye"
                                      aria-hidden="true"
                                    />
                                  </a>
                                  <div className="wsus__featured_single_text">
                                    <h6>
                                      <Link to={`/listing/${pro._id}`}>
                                        {pro.name}
                                      </Link>
                                    </h6>
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
  );
}

export default Listing_specific_page;
