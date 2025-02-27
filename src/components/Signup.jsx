import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

function Signup() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

    // Handle profile image selection
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(file); // Store the file instead of base64
        }
    };
    

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);
    
        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            setLoading(false);
            return;
        }
    
        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("password", formData.password);
            if (profileImage) {
                formDataToSend.append("profileImage", profileImage);
            }
    
             await axios.post("https://backend-v0ii.onrender.com/api/users/register", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            setSuccess("User registered successfully!");
            setFormData({ name: "", email: "", password: "", confirmPassword: "" });
            setProfileImage(null);
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong!");
        }
    
        setLoading(false);
    };
    

    return (
        <div style={containerStyle}>
            <div style={leftStyle}>
                <p style={{ fontWeight: "700", fontSize: "32px", marginBottom: "10px", color: "white" }}>Register</p>
            </div>
            <div style={rightStyle}>
                <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Link to="/login">
                        <button style={buttonStyle2} type="button">Login</button>
                    </Link>
                    {/* Profile Picture Upload */}
                    <div style={profileContainerStyle}>
                        {profileImage ? (
                            <img src={profileImage} alt="Profile" style={profileImageStyle} />
                        ) : (
                            <div style={{ ...profileImageStyle, backgroundColor: "#cbd5e1", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "14px", color: "#64748b" }}>
                                Only JPG
                            </div>
                        )}
                        <input type="file" accept="*" onChange={handleImageChange} />
                    </div>

                    <input style={inputStyle} type="text" name="name" placeholder="Enter Your Full Name" value={formData.name} onChange={handleChange} required />
                    <input style={inputStyle} type="email" name="email" placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} required />
                    
                    <div style={passwordContainerStyle}>
                        <input style={passwordInputStyle} type={passwordVisible ? "text" : "password"} name="password" placeholder="Create New Password" value={formData.password} onChange={handleChange} required />
                        {passwordVisible ? <FaEyeSlash style={eyeIconStyle} onClick={togglePasswordVisibility} /> : <FaEye style={eyeIconStyle} onClick={togglePasswordVisibility} />}
                    </div>

                    <div style={passwordContainerStyle}>
                        <input style={passwordInputStyle} type={confirmPasswordVisible ? "text" : "password"} name="confirmPassword" placeholder="Re-Enter New Password" value={formData.confirmPassword} onChange={handleChange} required />
                        {confirmPasswordVisible ? <FaEyeSlash style={eyeIconStyle} onClick={toggleConfirmPasswordVisibility} /> : <FaEye style={eyeIconStyle} onClick={toggleConfirmPasswordVisibility} />}
                    </div>

                    {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
                    {success && <p style={{ color: "green", marginBottom: "10px" }}>{success}</p>}

                    <button style={buttonStyle} type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>

                   
                </form>
            </div>
        </div>
    );
}

// Styles (Same as before)
const containerStyle = { display: "flex", height: "60rem", width: "50rem", boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)", backgroundColor: "#f8fafc", marginTop: "2rem", marginLeft: "auto", marginRight: "auto", borderRadius: "12px", overflow: "hidden" };
const leftStyle = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg, #3b82f6, #1e40af)", width: "40%", color: "white", padding: "2rem", textAlign: "center" };
const rightStyle = { display: "flex", flexDirection: "column", alignItems: "center", width: "60%", padding: "2rem" };
const inputStyle = { height: "2.5rem", width: "90%", border: "none", borderBottom: "2px solid #94a3b8", outline: "none", transition: "border-color 0.3s", fontSize: "1rem", color: "#374151", padding: "0.5rem 0", backgroundColor: "transparent", marginBottom: "1rem" };
const passwordContainerStyle = { position: "relative", width: "90%" };
const passwordInputStyle = { ...inputStyle, width: "100%" };
const eyeIconStyle = { position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#64748b" };
const buttonStyle = { backgroundColor: "#1e40af", padding: "0.75rem", width: "90%", color: "white", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "1rem", borderRadius: "8px", transition: "all 0.3s ease", marginTop: "1rem" };
const buttonStyle2 = { backgroundColor: "#1e40af", padding: "0.75rem", width: "90px", color: "white", fontWeight: "bold", border: "none", cursor: "pointer", fontSize: "1rem", borderRadius: "8px", transition: "all 0.3s ease", };
const profileContainerStyle = { display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "1rem" };
const profileImageStyle = { width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover", marginBottom: "0.5rem", border: "2px solid #3b82f6" };

export default Signup;
