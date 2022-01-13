import React from "react";
import Price from "../../components/Price";
import saladPic from "./salad.jpg";

function Item({ data, isSelected, onClick }) {
  const className = isSelected
    ? "salads__item salads__item--selected"
    : "salads__item";
  const { title, price, discount_price } = data;
  // console.log("data", data);
  return (
    <li className={className} onClick={onClick}>
      <h3 className="">{title}</h3>
      <div className="salads__item-image">
        <img
          src={saladPic}
          className="salads__item-image-pic"
          alt={data.title + " picture"}
        />
      </div>
      <Price price={price} discount_price={discount_price} />
    </li>
  );
}

export default Item;
