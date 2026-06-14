import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>CLASS ACT</h2>
          <p>School of Cosmetology</p>

          <div className="footer-contact">
            <p>49 E Main Street</p>
            <p>Chillicothe, Ohio 45601</p>
            <p>740-773-2611</p>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/school">School</Link>
          <Link to="/services">Services</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/share/1BK3TbMTB5/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Class Act School of Cosmetology.
        All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;