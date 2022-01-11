import React from "react";

function Item({ data, isSelected, onClick }) {
  const className = isSelected
    ? "salads__item salads__item--selected"
    : "salads__item";
  const { title } = data;
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
}

export default Item;
