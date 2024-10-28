import logo from "../../images/logo.jpg";
import "./header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header wrapper">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div >
        <nav className="headerNavBar">
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
      </div>
    </div>
  );
}

export default Header;
