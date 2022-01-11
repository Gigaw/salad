const defaultState = {
  salads: [],
  selectedSalad: "",
};


export const saladsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_SALADS":
      return { ...state, salads: action.payload };
    case "SET_SELECTED_SALAD":
        return {...state, selectedSalad: action.payload};
    default:
      return state;
  }
};
