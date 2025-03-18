import { useState, useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UserEdit = () => {
  const [userId, setuserid] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkuser = async () => {
      const response = await axios.get(
        "https://workingbackend-i34e.onrender.com/user-check",
        { withCredentials: true }
      );
      setuserid(response.data.id);
    };
    checkuser();
    axios
      .get(`https://workingbackend-i34e.onrender.com/api/users/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        response.data.password = "";
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, [userId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://workingbackend-i34e.onrender.com/api/users/${userId}`, user)
      .then((response) => setMessage("User updated successfully!"))
      .catch((error) => setMessage("Error updating user.", error));
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h2>My Profile</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          New Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserEdit;
