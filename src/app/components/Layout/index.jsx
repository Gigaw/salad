import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navData = [
  { name: "Home", path: "/" },
  { name: "Salads", path: "/salads" },
  { name: "Molecules", path: "/molecules" },
  { name: "Basket", path: "/basket" },
];

function Item({ data, isAcitive }) {
  const navigate = useNavigate();
  const { path, name } = data;
  const className = isAcitive
    ? "navigation__item navigation-item navigation-item--active"
    : "navigation__item navigation-item";
  const handleClick = () => {
    navigate(path);
  };
  return (
    <li className={className}>
      <a className="navigation-item__link" onClick={handleClick}>
        {name}
      </a>
    </li>
  );
}

function Layout({ children }) {
  const location = useLocation();
  return (
    <div className="app">
      <nav className="navigation">
        <ul className="navigation__list">
          {navData.map((el, i) => (
            <Item data={el} key={i} isAcitive={location.pathname === el.path} />
          ))}
        </ul>
      </nav>
      <main className="app-container">{children}</main>
      <div className="basket"></div>
    </div>
  );
}

export default Layout;
