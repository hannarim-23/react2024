import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer wrapper">
      <div className="footer__container">
        <nav className="footer__navBar">
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
