import { FaLock, FaUnlock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import axios from "axios";
import img from "./logo.jpg";
import SearchResults from "./SearchResults";
function Navbar() {
  const [authState, setAuthState] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    const checkuser = async () => {
      const response = await axios.get(
        "https://workingbackend-i34e.onrender.com/user-check",
        { withCredentials: true }
      );
      setName(response.data.name);
    };
    checkuser();
    const checkAuth = async () => {
      try {
        const response = await axios.get(
          "https://workingbackend-i34e.onrender.com/auth-check",
          { withCredentials: true } // Ensures cookies are sent
        );

        if (response.status === 200) {
          setAuthState(true);
          console.log(response);
        } else {
          setAuthState(false);
        }
      } catch (error) {
        setAuthState(false);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://workingbackend-i34e.onrender.com/logout",
        { withCredentials: true } // Ensures cookies are sent
      );
      setAuthState(false);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Something went wrong. Try again later."
      );
    }
  };
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Redirect to the search page with query as URL param
    navigate(`/search?name=${query}`);
  };
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "white",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Link to="/" style={{}}>
        <img src={img} style={{ height: "100%", width: "100%" }} alt="" />
      </Link>
      <input
        type="text"
        placeholder="Search for listings..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Search
      </button>
      <h4
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1rem",
          margin: 0,
          padding: 0,
        }}
      >
        <h4
          to="/profile"
          style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
        >
          Hello {name}
        </h4>
      </h4>

      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "1rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/listings"
            style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
          >
            Listings
          </Link>
        </li>
        <li>
          <Link
            to="/pricing"
            style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
          >
            Blogs
          </Link>
        </li>
        {/* <li><Link to="/custom" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Pages</Link></li> */}
        <li>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "#333", fontSize: "16px" }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div>
        {authState ? (
          <>
            {name !== "admin" ? (
              <Link to="/dashboard">
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  <FaUnlock style={{ marginRight: "5px" }} /> Dashboard
                </button>
              </Link>
            ) : (
              <Link to="/admindashboard">
                <button
                  style={{
                    backgroundColor: "#dc3545",
                    color: "white",
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "6px",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  <FaUnlock style={{ marginRight: "5px" }} /> Admin
                </button>
              </Link>
            )}

            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
            >
              <FaUnlock style={{ marginRight: "5px" }} /> Logout
            </button>
          </>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "6px",
                fontSize: "16px",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              <FaLock style={{ marginRight: "5px" }} /> Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
