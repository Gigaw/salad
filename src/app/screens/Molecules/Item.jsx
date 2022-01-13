import { CONFIG } from "../../../config";
import Price from "../../components/Price";
const { SERVER_URL } = CONFIG;

function Item({ data, onIncClick, onDecClick, addedCount = 0 }) {
  const { title, image, price, discount_price, qty } = data;
  return (
    <li className="molecules__item molecules-item">
      <h3 className="molecules-item__title">{title}</h3>
      <div className="molecules-item__image">
        <img className="molecules-item__image-pic" src={SERVER_URL + image} />
      </div>
      <Price price={price} discount_price={discount_price} />
      <div className="adding">
        <button className="adding__button" onClick={onIncClick}>
          +
        </button>
        <button className="adding__button" onClick={onDecClick}>
          -
        </button>
        <span className="adding__count">
          {addedCount || 0}/{qty}
        </span>
      </div>
    </li>
  );
}

export default Item;
