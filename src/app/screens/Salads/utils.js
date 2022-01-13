import { CONFIG } from "../../../config";

const {SERVER_URL} = CONFIG;

export const fetchSalads = async () => {
  // console.log('fetchSalads')
  try {
    const response = await fetch(SERVER_URL + "/salads", { method: "GET" });
    const json = await response.json();

    if (response.status === 200) {
      return json.result;
    } else {
      return null;
    }
  } catch (e) {
    console.log("fetch salads error", e.message);
    return null;
  }
};