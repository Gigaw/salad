import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ScreenDefHeader from "../../components/ScreenDefHeader";
import AppBtn from "../../components/AppBtn";
import {
  fetchMolecules,
  incrementSelectedMolecules,
  decrementSelectedMolecules,
} from "../../store/actions/molecules";
import Item from "./Item";
import { makeOrder } from "../../utils";
import { showModal } from "../../store/actions/modal";
import "./styles.css";

const config = {
  title: "Molecules",
  description: `
  Here you can compose your own salad from the available molecules in
  stock.`,
};

const configureOrderData = (data) => {
  const arr = Object.entries(data).map((el) =>({ id: el[0], qty: el[1] }));
  return arr;
};

function Molecules() {
  const navigate = useNavigate();
  const { molecules, selectedMolecules } = useSelector(
    (state) => state.molecules
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMolecules());
  }, []);

  const handleMakeOrderClick = async () => {
    const response = await makeOrder({ molecules: configureOrderData(selectedMolecules) });
    if (response) {
      dispatch(
        showModal({
          title: "Order",
          text: "Your order was successful, we will deliver it in a while",
        })
      );
    }
  };

  return (
    <div className="molecules">
      <ScreenDefHeader title={config.title} description={config.description} />
      <p className="molecules__text">
        <span>Click on a molecule to add it to your salad or</span>
        <a
          href="/"
          className="link"
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
          }}
        >
          {" "}
          pick ready salad
        </a>{" "}
      </p>

      <ul className="molecules__list">
        {molecules.map((el) => (
          <Item
            key={el._id}
            data={el}
            onIncClick={() =>
              dispatch(
                incrementSelectedMolecules({
                  selectedMolecules,
                  id: el._id,
                  maxCount: el.qty,
                })
              )
            }
            onDecClick={() =>
              dispatch(
                decrementSelectedMolecules({
                  selectedMolecules,
                  id: el._id,
                })
              )
            }
            addedCount={selectedMolecules[el._id]}
          />
        ))}
      </ul>
      <div>
        {""}
        <AppBtn text={"Make order"} onClick={handleMakeOrderClick} />
      </div>
    </div>
  );
}

export default Molecules;
