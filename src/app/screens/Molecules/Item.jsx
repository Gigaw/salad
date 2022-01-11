import { CONFIG } from "../../../config";
const { SERVER_URL } = CONFIG;

function Item({ data, onClick, addedCount = 0 }) {
  const { title, image, price, discount_price, qty } = data;
  return (
    <li className="molecules__item molecules-item" onClick={onClick}>
      <h3 className="molecules-item__title">{title}</h3>
      <div className="molecules-item__image">
        <img className="molecules-item__image-pic" src={SERVER_URL + image} />
      </div>
      <div className="molecules-item__info-wrapper">
        <span className="molecules-item__info-row">old price: {price}</span>
        <span className="molecules-item__info-row">
          new price: {discount_price}
        </span>
        <span className="molecules-item__info-row">
          {addedCount || 0}/{qty}
        </span>
      </div>
    </li>
  );
}

export default Item;
