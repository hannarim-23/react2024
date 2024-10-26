import logo from "../../images/logo.jpg";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header wrapper">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div >
        <nav className="headerNavBar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Header;
