import logo from "../../images/logo.jpg";
import "./header.css";
import Navigation from "../../components/navigation";

const Header: React.FC = () => {
  return (
    <div className="header wrapper">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div >
      <Navigation />
      </div>
    </div>
  );
}

export default Header;
