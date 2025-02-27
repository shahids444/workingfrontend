import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async () => {
       
        try {
            const response = await fetch('https://backend-v0ii.onrender.com/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Login Successful');
                navigate('/');
            } else {
                alert(data.message || 'Invalid Credentials');
            }
        } catch (error) {
            alert('Something went wrong. Try again later.');
        }
    };

    const containerStyle = {
        display: 'flex',
        height: '30rem',
        flexWrap: "wrap",
        width: '45rem',
        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#f8fafc',
        marginTop: '2rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '12px',
    };

    const leftStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
        width: '40%',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
    };

    const rightStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        padding: '2rem',
    };

    const inputStyle = {
        height: '2.5rem',
        width: '90%',
        border: 'none',
        borderBottom: '2px solid #94a3b8',
        outline: 'none',
        transition: 'border-color 0.3s',
        fontSize: '1rem',
        color: '#374151',
        padding: '0.5rem 0',
        backgroundColor: 'transparent',
        marginBottom: '1rem',
    };

    const passwordContainerStyle = {
        position: 'relative',
        width: '90%',
    };

    const passwordInputStyle = {
        ...inputStyle,
        width: '100%',
    };

    const eyeIconStyle = {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#64748b',
    };

    const buttonStyle = {
        backgroundColor: '#1e40af',
        padding: '0.75rem',
        width: '90%',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        marginTop: '1rem',
    };

    return (
        <div style={containerStyle}>
            <div style={leftStyle}>
                <p style={{ fontWeight: '700', fontSize: '32px', marginBottom: '10px', color: 'white' }}>Login</p>
            </div>
            <div style={rightStyle}>
                <input
                    style={inputStyle}
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                    onBlur={(e) => (e.target.style.borderColor = '#94a3b8')}
                />
                <div style={passwordContainerStyle}>
                    <input
                        style={passwordInputStyle}
                        type={passwordVisible ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={(e) => (e.target.style.borderColor = '#3b82f6')}
                        onBlur={(e) => (e.target.style.borderColor = '#94a3b8')}
                    />
                    {passwordVisible ? (
                        <FaEyeSlash style={eyeIconStyle} onClick={togglePasswordVisibility} />
                    ) : (
                        <FaEye style={eyeIconStyle} onClick={togglePasswordVisibility} />
                    )}
                </div>
                <button
                    style={buttonStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#f97316')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#ea580c')}
                    onClick={handleLogin}
                >
                    Login
                </button>
                <Link to="/signup">
                    <button
                        style={buttonStyle}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#f97316')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#ea580c')}
                    >
                        Signup
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
