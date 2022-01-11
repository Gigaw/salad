const defaultState = {

  molecules: [],
};

const action = { type: "", payload: "" };

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_SALADS":
      return { ...state, salads: action.payload };
    default:
      return state;
  }
};
