import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import ScreenDefHeader from "../../components/ScreenDefHeader";

const config = {
  title: "Basket",
  description: `
  creating an order with ready-made or composed salad`,
};
function Basket() {
  const { salads, selectedSalad } = useSelector((state) => state.salads);
  const { molecules, selectedMolecules } = useSelector(
    (state) => state.molecules
  );
  // const dispatch = useDispatch();

  const selectedSaladInfo = salads.find((el) => el._id === selectedSalad);

  const selectedMoleculesInfo = molecules
    .filter((el) => !!selectedMolecules[el._id])
    .map((el) => {
      return { ...el, count: selectedMolecules[el._id] };
    });
  console.log("selectedMoleculesInfo", selectedMoleculesInfo);

  return (
    <Layout>
      <ScreenDefHeader title={config.title} description={config.description} />
      <div className="basket">
        <div className="basket__salat">
          <h2>Salat</h2>
          <div>{selectedSaladInfo?._id}</div>
        </div>
        <div className="basket__moledules">
          <h2>Your salat</h2>
          <table>
            <tbody>
              <tr>
                <th>name</th>
                <th>count</th>
                <th>price</th>
              </tr>
              {selectedMoleculesInfo.map((el) => (
                <tr key={el._id}>
                  <td>{el.title}</td>
                  <td>{el.count}</td>
                  <td>{el.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Basket;
