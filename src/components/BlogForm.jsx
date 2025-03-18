import { useState } from "react";
import "./PropertyForm.css";
import Navbar from "./Navbar";
const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let sendtoken = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://workingbackend-i34e.onrender.com/api/blogs/createBlog",
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
          name: "",
          description: "",
          image: "",
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
      <div className="container5">
        <h2>Blog Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title:</label>
          <input
            type="text"
            id="name"
            name="title"
            value={formData.title}
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

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default BlogForm;
