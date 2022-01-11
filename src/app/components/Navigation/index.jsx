import React from "react";
import { useLocation } from "react-router-dom";
import Item from "./Item";
import "./styles.css";

const navData = [
  // { name: "Home", path: "/" },
  { name: "Salads", path: "/" },
  { name: "Molecules", path: "/molecules" },
  // { name: "Basket", path: "/basket" },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navData.map((el, i) => (
          <Item data={el} key={i} isAcitive={location.pathname === el.path} />
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
