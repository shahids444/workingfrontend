import { FaLock, FaUnlock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Navbar.css'
import img from './logo.jpg'
function Navbar() {
  const [authState, setAuthState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthState(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem 2rem', backgroundColor: 'white', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
    }}>
        <Link to="/" style={{}}>
          <img src={img} style={{height: "100%", width: "100%"}} alt="" />
        </Link>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', margin: 0, padding: 0 }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Home</Link></li>
        <li><Link to="/listings" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Listings</Link></li>
        <li><Link to="/pricing" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Pricing</Link></li>
        <li><Link to="/about" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>About</Link></li>
        <li><Link to="/blog" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Blogs</Link></li>
        {/* <li><Link to="/custom" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Pages</Link></li> */}
        <li><Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontSize: '16px' }}>Contact</Link></li>
      </ul>
      <div>
        {authState ? (
      <>
        <Link to = '/dashboard'>
         <button  style={{
            backgroundColor: '#dc3545', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '6px',
            fontSize: '16px', cursor: 'pointer', transition: 'background 0.3s'
          }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}>
            <FaUnlock style={{ marginRight: '5px' }} /> Dashboard
          </button>
          </Link>
          <button onClick={handleLogout} style={{
            backgroundColor: '#dc3545', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '6px',
            fontSize: '16px', cursor: 'pointer', transition: 'background 0.3s'
          }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}>
            <FaUnlock style={{ marginRight: '5px' }} /> Logout
          </button>
        </>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '6px',
              fontSize: '16px', cursor: 'pointer', transition: 'background 0.3s'
            }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
              <FaLock style={{ marginRight: '5px' }} /> Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
