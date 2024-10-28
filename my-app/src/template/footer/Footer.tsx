import "./footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer wrapper">
      <div className="footer__container">
        <nav className="footer__navBar">
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </nav>
        <div className="footer__contacts">
          <p>Adress</p>
          <p>Phone Number</p>
        </div>
        <div className="footer__links">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
