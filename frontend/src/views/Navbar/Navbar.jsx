import { useUserContext } from "../../context/UserContext";
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart, getTotal } = useCart();
  const { token, logout } = useUserContext(); 
  const total = getTotal();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-title d-none d-lg-block text-decoration-none">¡Pizzería Mamma Mia!</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="btn btn-link nav-link btn btn-outline-success">🍕Home</Link>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <Link to="/profile" className="btn btn-link nav-link btn btn-outline-success">🔓Profile</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-link nav-link" onClick={logout}>🔒Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="btn btn-link nav-link btn btn-outline-success">🔐Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="btn btn-link nav-link btn btn-outline-success">🔏Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/cart" className="btn btn-link total-button nav-link btn btn-outline-success">
            🛒 Total: ${total}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;