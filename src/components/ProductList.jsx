import { useState, useEffect } from "react";
import "./ProductList.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://backend-v0ii.onrender.com/api/products/"
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
  // Handle delete product
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://backend-v0ii.onrender.com/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to delete product");

      setProducts(products.filter((product) => product._id !== id)); // Remove from UI
    } catch (error) {
      setError(error.message);
    }
  };

  // Handle Edit button click
  const handleEdit = (product) => {
    setEditProduct(product._id);
    setFormData(product);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle update submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    try {
      const response = await fetch(
        `https://backend-v0ii.onrender.com/api/products/${editProduct}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to update product");

      setSuccessMessage("Product updated successfully!");

      // Update product list
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
    <div className="container2">
      <h2>Businesses List</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      {/* Product Table */}
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Contact</th>
            <th>Website</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.location}</td>
              <td>{product.description}</td>
              <td>{product.contact}</td>
              <td>
                {product.website ? (
                  <a href={product.website}>Website</a>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    width="50"
                    height="50"
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button
                  onClick={() => handleDelete(product._id)}
                  style={{ marginLeft: "5px", color: "red" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form */}
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
              <option value="apartments">Apartments</option>
              <option value="houses">Houses</option>
              <option value="offices">Offices</option>
              <option value="commercial_spaces">Commercial Spaces</option>
              <option value="parking_lots">Parking Lots</option>
              <option value="restaurants">Restaurants</option>
              <option value="businesses">Businesses</option>
              <option value="land_businesses">Land Businesses</option>
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

export default ProductList;
