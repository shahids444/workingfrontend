import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Contact() {
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

  return (
    <>
      <div>
        <Navbar />

        <div
          id="breadcrumb_part"
          style={{
            backgroundImage:
              "url(https://dirlist.websolutionus.com/uploads/website-images/banner-2021-08-31-09-49-39-2671.jpg)",
          }}
        >
          <div className="bread_overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 text-center text-white">
                  <h4>Contact Us</h4>
                  <nav
                    style={{ "--bs-breadcrumb-divider": "'>'" }}
                    aria-label="breadcrumb"
                  >
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/">Home</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Contact Us
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="get_in_touch">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-md-6 col-lg-5">
                <h2>Contact Information</h2>
                <div className="contact_box">
                  <div className="contact_box_icon">
                    <i className="fal fa-phone-square-alt" />
                  </div>
                  <div className="contact_box_text">
                    <p>
                      (347) 430-9510
                      <br />
                      (587) 860-2590
                    </p>
                  </div>
                </div>
                <div className="contact_box">
                  <div className="contact_box_icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="contact_box_text">
                    <p>support@websolutionus.com</p>
                  </div>
                </div>
                <div className="contact_box">
                  <div className="contact_box_icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="contact_box_text">
                    <p>95 South Park Avenue, New York, USA</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-7 col-md-6 col-lg-7">
                <h2>Contact Here</h2>

                {error && <div className="alert alert-danger">{error}</div>}
                {success && (
                  <div className="alert alert-success">{success}</div>
                )}

                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact_input">
                        <input
                          type="text"
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact_input">
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact_input">
                        <input
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact_input">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
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
        </section>

        <Footer />
      </div>
    </>
  );
}
