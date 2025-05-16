import { NavLink } from "react-router";
import "./navigationBar.css";

export const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/mugLogo.png" width="48" height="48" alt="logo" />
        <p>JoeCuppa</p>
      </div>
      <div className="links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/catalog" className="nav-link">
          Catalog
        </NavLink>
        <NavLink to="/faq" className="nav-link">
          FAQ
        </NavLink>
      </div>
      <div className="other">Other</div>
    </nav>
  );
};
