const defaultState = {
  salads: [],
};

const action = { type: "", payload: "" };

export const saladsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_SALADS":
      return { ...state, salads: action.payload };
    default:
      return state;
  }
};
