import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import ScreenDefHeader from "../../components/ScreenDefHeader";
import { fetchSalads, setSelectedSalad } from "../../store/actions/salads";
import Item from "./Item";
import "./styles.css";

const config = {
  title: "Salads",
  description: `
  selection of ready-made salad from the list of available ones`,
};

function Salads() {
  const { salads, selectedSalad } = useSelector((state) => state.salads);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSalads());
  }, []);

  return (
    <Layout>
      <div className="salads">
        <ScreenDefHeader
          title={config.title}
          description={config.description}
        />
        <ul className="salads__list">
          {salads.map((el) => (
            <Item
              key={el._id}
              data={el}
              isSelected={el._id === selectedSalad}
              onClick={() => dispatch(setSelectedSalad(el._id))}
            />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Salads;
