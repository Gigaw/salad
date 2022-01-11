import { CONFIG } from "../../../config";

const { SERVER_URL } = CONFIG;

export const fetchSalads = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(SERVER_URL + "/salads", { method: "GET" });
      const json = await response.json();
      if (response.status === 200) {
        dispatch({ type: "FETCH_SALADS", payload: json.result });
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

export const setSelectedSalad = (salad) => {
  return async (dispatch) => {
    dispatch({ type: "SET_SELECTED_SALAD", payload: salad });
  };
};
