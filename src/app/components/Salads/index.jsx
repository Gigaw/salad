import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./styles.css";
import { fetchSalads } from "./utils";

function Salads() {
  const [salads, setSalads] = useState([]);
  const [selectedSalad, setSelectedSalad] = useState("");

  useEffect(() => {
    fetchSalads().then((data) => {
      if (data) {
        setSalads(data);
      }
    });
  }, []);

  return (
    <div className="salads">
      <ul className="salads__list">
        {salads.map((el) => (
          <Item
            key={el._id}
            data={el}
            isSelected={el._id === selectedSalad}
            onClick={() => setSelectedSalad(el._id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Salads;
