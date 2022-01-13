import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBtn from "../../components/AppBtn";
import ScreenDefHeader from "../../components/ScreenDefHeader";
import { fetchSalads, setSelectedSalad } from "../../store/actions/salads";
import Item from "./Item";
import "./styles.css";
import { makeOrder } from "../../utils";
import { showModal } from "../../store/actions/modal";

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

  const handleMakeOrderClick = async () => {
    const response = await makeOrder({ salads: selectedSalad });
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
    <div className="salads">
      <ScreenDefHeader title={config.title} description={config.description} />
      {!selectedSalad && (
        <p className="salads__text">
          <span>Pick one of this salads or</span>
          <Link className="link" to="/molecules">
            {" "}
            make your own salad
          </Link>{" "}
        </p>
      )}

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
      {selectedSalad && (
        <div>
          <AppBtn
            text={"Make order"}
            onClick={handleMakeOrderClick}
          />{" "}
          <span>or</span>{" "}
          <Link className="link" to="/molecules">
            {" "}
            make your own salad
          </Link>{" "}
        </div>
      )}
    </div>
  );
}

export default Salads;
