import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Dashboard.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="/contactdata">Contact Data</Link>
        </li>
        <li>
          <Link to="/usersdata">Users Data</Link>
        </li>
        <li>
          <Link to="/testinomals">Add Testinomals</Link>
        </li>
        <li>
          <Link to="/testinomals">Add Partners</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews Data</Link>
        </li>
        <li>
          <Link to="/blogedit">Edit Blogs</Link>
        </li>
        <li>
          <Link to="/createblog">Create Blog</Link>
        </li>
      </ul>
    </div>
  );
}

const Listings = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://workingbackend-i34e.onrender.com/api/products/"
        );
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://workingbackend-i34e.onrender.com/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete product");
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product._id);
    setFormData(product);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    try {
      const response = await fetch(
        `https://workingbackend-i34e.onrender.com/api/products/${editProduct}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Failed to update product");
      setSuccessMessage("Product updated successfully!");
      setProducts(
        products.map((prod) => (prod._id === editProduct ? formData : prod))
      );
      setEditProduct(null);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSubmitrm = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    try {
      const response = await fetch(
        `https://workingbackend-i34e.onrender.com/clear-category/`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Failed to update product");
      setSuccessMessage("Product updated successfully!");
      setProducts(
        products.map((prod) => (prod._id === editProduct ? formData : prod))
      );
      setEditProduct(null);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="main-content">
      <h2>Active Listings</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {products.map((product) => (
        <div key={product._id} className="listing">
          <h3>{product.name}</h3>
          <p>{product.location || "No Address"}</p>
          <div className="actions">
            <button className="edit" onClick={() => handleEdit(product)}>
              ✏️
            </button>
            <button
              className="delete"
              onClick={() => handleDelete(product._id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
      {editProduct && (
        <div>
          <h3>Edit Business</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              {[...new Set(products.map((product) => product.category))].map(
                (category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                )
              )}
            </select>

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
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value={true}>Open</option>
              <option value={false}>Close</option>
            </select>
            <label htmlFor="verified">Verified:</label>
            <select
              id="verified"
              name="verified"
              value={formData.verified}
              onChange={handleChange}
              required
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
            <label htmlFor="featured">Featured :</label>
            <select
              id="featured"
              name="featured"
              value={formData.featured}
              onChange={handleChange}
              required
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </select>
            <label htmlFor="whatsapp">Add / Remove A Category :</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />

            <button onClick={handleSubmitrm}>Remove Category</button>
            <button type="submit">Add Category</button>
            <button type="submit">Update Business</button>
            <button type="button" onClick={() => setEditProduct(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

function Admindashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Listings />
    </div>
  );
}

export default Admindashboard;
