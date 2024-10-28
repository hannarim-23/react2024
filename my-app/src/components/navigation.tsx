import React, { Component } from "react";
import { Link } from "react-router-dom";

import Home from "../pages/Home";
/* import About from "./pages/About";
import Services from "./pages/Services";
import Error from "./pages/Error"; */

const navItems = [
  { name: "Home", path: "/", el: Home },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            {<Link to={item.path}>{item.name}</Link>}
            {/* <Link to={item.path}>{item.el}</Link> */}
            <component = {item.el} />

          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
