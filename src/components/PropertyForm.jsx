import { useState } from "react";
import "./PropertyForm.css";
import Navbar from "./Navbar";
const PropertyForm = () => {
  const [formData, setFormData] = useState({
    category: "apartments",
    name: "",
    location: "",
    description: "",
    contact: "",
    website: "",
    image: "",
    email: "",
    instagram: "",
    facebook: "",
    whatsapp: "",
    user: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let sendtoken = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://workingbackend-i34e.onrender.com/api/products/createProduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sendtoken}`,
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Form submitted successfully");
        setFormData({
          category: "apartments",
          name: "",
          location: "",
          description: "",
          contact: "",
          website: "",
          image: "",
          email: "",
          instagram: "",
          facebook: "",
          whatsapp: "",
          user: "",
        });
      } else {
        alert("Business Already Exists");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container2">
        <h2>Property Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="apartments">Apartments</option>
            <option value="houses">Houses</option>
            <option value="offices">Offices</option>
            <option value="commercial_spaces">Commercial Spaces</option>
            <option value="parking_lots">Parking Lots</option>
            <option value="restaurants">Restaurants</option>
            <option value="businesses">Businesses</option>
            <option value="land_businesses">Land Businesses</option>
          </select>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label htmlFor="website">Website:</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <label htmlFor="email">Email id:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="instagram">Instagram id:</label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
          <label htmlFor="instagram">Facebook id:</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />
          <label htmlFor="whatsapp">Whatsapp number :</label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default PropertyForm;
