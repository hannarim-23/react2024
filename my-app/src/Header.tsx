import logo from './images/logo.jpg';
import './header.css';

function Header() {
  return (
    <div className='header wrapper'>
      <div className='logo'>
      <img src = {logo} alt='Logo'></img>
      </div>

    <nav className='headerNavBar'>
      <li><a href="/">Page1</a></li>
      <li><a href="/Page2">Page2</a></li>
      <li><a href="/Page3">Page3</a></li>
    </nav>

    </div>
  );
}

export default Header;
