import { CONFIG } from "../config";

const { SERVER_URL } = CONFIG;

export const makeOrder = async (data) => {
  try {
    const response = await fetch(SERVER_URL + "/order", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log("makeOrder error", e.message);
    return null;
  }
};
