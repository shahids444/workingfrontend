import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import "./Dashboard.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/contactdata">Contact Data</Link></li>
        <li><Link to="/blogedit">Edit Blogs</Link></li>
        <li><Link to="/createblog">Create Blog</Link></li>
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
          const response = await fetch("https://backend-v0ii.onrender.com/api/products/");
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
        const response = await fetch(`https://backend-v0ii.onrender.com/api/products/${id}`, {
          method: "DELETE",
        });
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
        const response = await fetch(`https://backend-v0ii.onrender.com/api/products/${editProduct}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error("Failed to update product");
        setSuccessMessage("Product updated successfully!");
        setProducts(products.map((prod) => (prod._id === editProduct ? formData : prod)));
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
            <button className="edit" onClick={() => handleEdit(product)}>✏️</button>
            <button className="delete" onClick={() => handleDelete(product._id)}>🗑️</button>
          </div>
        </div>
      ))}
      {editProduct && (
        <div>
          <h3>Edit Business</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} required>
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
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />

            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

            <label htmlFor="contact">Contact:</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />

            <label htmlFor="website">Website:</label>
            <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} />

            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />

            <button type="submit">Update Business</button>
            <button type="button" onClick={() => setEditProduct(null)}>Cancel</button>
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
       <Listings/>
      </div>
  );
}

export default Admindashboard;