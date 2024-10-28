import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>{<Link to={item.path}>{item.name}</Link>}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
