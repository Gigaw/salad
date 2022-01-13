import React from "react";
import "./styles.css";

function Price({ price, discount_price }) {
  return (
    <div className="price">
      <span className="price__text">price:</span>
      {price === discount_price ? (
        <>
          <span className="price__current">{discount_price}</span>
        </>
      ) : (
        <>
          <span className="price__prev">{price}</span>
          <span className="price__current">{discount_price}</span>
        </>
      )}
    </div>
  );
}

export default Price;
