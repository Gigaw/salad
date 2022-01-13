import { CONFIG } from "../../../config";

const { SERVER_URL } = CONFIG;

export const fetchMolecules = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(SERVER_URL + "/molecules", {
        method: "GET",
      });
      const json = await response.json();

      if (response.status === 200) {
        dispatch({ type: "FETCH_MOLECULES", payload: json.result });
        // return json.result;
      } else {
        // return null;
      }
    } catch (e) {
      console.log("fetch salads error", e.message);
      // return null;
    }
  };
};

export const incrementSelectedMolecules = (props) => {
  const { selectedMolecules, id, maxCount } = props;
  return (dispatch) => {
    if (selectedMolecules[id]) {
      if (selectedMolecules[id] < maxCount) {
        const newObj = { ...selectedMolecules };
        newObj[id]++;
        dispatch({ type: "SET_SELECTED_MOLECULES", payload: newObj });
      }
    } else {
      if (maxCount !== 0) {
        const newObj = { ...selectedMolecules };
        newObj[id] = 1;
        dispatch({ type: "SET_SELECTED_MOLECULES", payload: newObj });
      }
    }
  };
};

export const decrementSelectedMolecules = (props) => {
  const { selectedMolecules, id } = props;
  console.log('dec')

  return (dispatch)=> {
    if (selectedMolecules[id]) {
      const newObj = { ...selectedMolecules };
      newObj[id]--;
      dispatch({ type: "SET_SELECTED_MOLECULES", payload: newObj });
    }
  };
};
