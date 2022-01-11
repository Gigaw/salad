import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import ScreenDefHeader from "../../components/ScreenDefHeader";
import {
  fetchMolecules,
  setSelectedMolecules,
} from "../../store/actions/molecules";
import Item from "./Item";
import "./styles.css";

const config = {
  title: "Molecules",
  description: `
  Here you can compose your own salad from the available molecules in
  stock. Click on a molecule to add it to your cart`,
};

function Molecules() {
  const { molecules, selectedMolecules } = useSelector(
    (state) => state.molecules
  );
  console.log("selectedMolecules", selectedMolecules);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMolecules());
  }, []);

  return (
    <Layout>
      <div className="molecules">
        <ScreenDefHeader
          title={config.title}
          description={config.description}
        />
        <ul className="molecules__list">
          {molecules.map((el) => (
            <Item
              key={el._id}
              data={el}
              onClick={() =>
                dispatch(
                  setSelectedMolecules({
                    selectedMolecules,
                    id: el._id,
                    maxCount: el.qty,
                  })
                )
              }
              addedCount={selectedMolecules[el._id]}
            />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Molecules;
