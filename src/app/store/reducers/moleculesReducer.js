const defaultState = {
  molecules: [],
};

const action = { type: "", payload: "" };

export const moleculesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_SALADS":
      return { ...state, salads: action.payload };
    default:
      return state;
  }
};
