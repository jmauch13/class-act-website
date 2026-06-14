import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <div className="logo-icon">✂</div>

        <div>
          <span>CLASS ACT</span>
          <small>School of Cosmetology</small>
        </div>
      </NavLink>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/school">School</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;