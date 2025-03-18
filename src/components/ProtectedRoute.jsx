import { Navigate, useLoaderData, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const data = useLoaderData();
  const location = useLocation(); // ✅ Call hook at top level
  const [verified, setVerified] = useState(null); // ✅ Start with null (loading state)

  useEffect(() => {
    console.log("Loader Data:", data);

    const checkUser = async () => {
      try {
        const response = await axios.get(
          "https://workingbackend-i34e.onrender.com/user-check",
          { withCredentials: true }
        );
        if (response.data) {
          console.log("User verified");
          setVerified(true);
        } else {
          setVerified(false);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setVerified(false);
      }
    };

    checkUser();
  }, []);

  // ✅ Handle loading state
  if (verified === null) {
    return <p>Loading...</p>; // Or a spinner component
  }

  // ✅ Redirect if user is not authenticated
  if (!verified) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Return protected content if verified
  return children;
};

export default ProtectedRoute;
