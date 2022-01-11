import React from "react";
import { useNavigate } from "react-router-dom";

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

export default Item;
