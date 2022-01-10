import React, { useState, useEffect } from "react";
import "./styles.css";
import { fetchMolecules } from "./utils";
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

function Molecules() {
  const [molecules, setMolecules] = useState([]);
  const [selectedMolecules, setSelectedMolecules] = useState({});

  useEffect(() => {
    fetchMolecules().then((data) => {
      if (data) {
        setMolecules(data);
      }
    });
  }, []);

  const handleItemClick = (id, maxCount) => {
    if (selectedMolecules[id]) {
      if (selectedMolecules[id] < maxCount) {
        setSelectedMolecules((prev) => {
          const newObj = { ...prev };
          newObj[id]++;
          return newObj;
        });
      }
    } else {
      if (maxCount !== 0) {
        setSelectedMolecules((prev) => {
          const newObj = { ...prev };
          newObj[id] = 1;
          return newObj;
        });
      }
    }
  };

  return (
    <div className="molecules">
      <ul className="molecules__list">
        {molecules.map((el) => (
          <Item
            key={el._id}
            data={el}
            onClick={() => handleItemClick(el._id, el.qty)}
            addedCount={selectedMolecules[el._id]}
          />
        ))}
      </ul>
    </div>
  );
}

export default Molecules;