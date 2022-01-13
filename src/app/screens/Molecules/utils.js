import { CONFIG } from "../../../config";

const {SERVER_URL} = CONFIG;

export const fetchMolecules = async () => {
  // console.log('fetchMolecules')
  try {
    const response = await fetch(SERVER_URL + "/molecules", { method: "GET" });
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