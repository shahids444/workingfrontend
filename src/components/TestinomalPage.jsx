import { useEffect, useState } from "react";

const API_URL = "https://workingbackend-i34e.onrender.com/api/testinomals";

const TestinomalPage = () => {
  const [testinomals, setTestinomals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch all testinomals
  const fetchTestinomals = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTestinomals(data);
    } catch (error) {
      console.error("Error fetching testinomals:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestinomals();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name: "shahid", message: "hai" };
    console.log("Sending Form Data:", formData); // Debugging Log

    try {
      const response = await fetch(
        "https://workingbackend-i34e.onrender.com/api/testinomals/createTestinomal",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Server Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Handle edit
  const handleEdit = (testinomal) => {
    setFormData({ name: testinomal.name, message: testinomal.message });
    setEditingId(testinomal._id);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete testinomal");
      fetchTestinomals(); // Refresh list
    } catch (error) {
      console.error("Error deleting testinomal:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Testinomals</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="name"
          required
          className="border p-2 w-full mb-2"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="message"
          required
          className="border p-2 w-full mb-2"
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {editingId ? "Update Testinomal" : "Add Testinomal"}
        </button>
      </form>

      {/* List of Testinomals */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Partner</th>
              <th className="border p-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {testinomals.map((testinomal) => (
              <tr key={testinomal._id} className="border">
                <td className="border p-2">{testinomal.name}</td>
                <td className="border p-2">{testinomal.message}</td>

                <td className="border p-2">
                  <button
                    onClick={() => handleEdit(testinomal)}
                    className="bg-yellow-500 text-white px-2 py-1 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(testinomal._id)}
                    className="bg-red-500 text-white px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TestinomalPage;
