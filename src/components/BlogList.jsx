import { useState, useEffect } from "react";
import "./BlogList.css";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://backend-v0ii.onrender.com/api/blogs/");
        if (!response.ok) throw new Error("Failed to fetch blogs");

        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://backend-v0ii.onrender.com/api/blogs/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete blog");

      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog._id);
    setFormData(blog);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    try {
      const response = await fetch(`https://backend-v0ii.onrender.com/api/blogs/${editBlog}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update blog");

      setSuccessMessage("Blog updated successfully!");
      setBlogs(blogs.map((b) => (b._id === editBlog ? formData : b)));
      setEditBlog(null);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="container3">
      <h2>Blog List</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.title}</td>
              <td>{blog.description}</td>
              <td>{blog.image ? <img src={blog.image} alt={blog.title} width="50" height="50" /> : "No Image"}</td>
              <td>{new Date(blog.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleEdit(blog)}>Edit</button>
                <button onClick={() => handleDelete(blog._id)} style={{ marginLeft: "5px", color: "red" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editBlog && (
        <div>
          <h3>Edit Blog</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />

            <button type="submit">Update Blog</button>
            <button type="button" onClick={() => setEditBlog(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BlogList;