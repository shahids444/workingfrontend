import { useState, useEffect } from "react";
import axios from "axios";

function OtpVerification({ children }) {
  const [authState, setAuthState] = useState(false);
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
    const checkAdmin = () => {
      if (name === "admin") {
        setIsAdmin(true); // Update state if the password is correct
      } else {
      }
    };
    checkAdmin();
  });
  const [otp, setOtp] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // New state to track authentication

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "25rem",
    width: "30rem",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#f8fafc",
    marginTop: "4rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "12px",
    padding: "2rem",
  };

  const titleStyle = {
    fontWeight: "700",
    fontSize: "24px",
    marginBottom: "10px",
  };

  const subtitleStyle = {
    fontSize: "1rem",
    color: "#64748b",
    textAlign: "center",
    marginBottom: "1.5rem",
  };

  const inputStyle = {
    height: "3rem",
    width: "80%",
    border: "2px solid #94a3b8",
    outline: "none",
    transition: "border-color 0.3s",
    fontSize: "1.2rem",
    color: "#374151",
    textAlign: "center",
    borderRadius: "8px",
    marginBottom: "1.5rem",
  };

  const buttonStyle = {
    backgroundColor: "#3b82f6",
    padding: "0.75rem",
    width: "80%",
    color: "white",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  // If the admin is verified, show the children content
  if (isAdmin) {
    return children;
  }

  return (
    <div style={containerStyle}>
      <p style={subtitleStyle}>
        To Access The Admin page. You have to be the admin.
      </p>
    </div>
  );
}

export default OtpVerification;
