const defaultState = {
  salads: [],
  selectedSalad: "",
  showModal: false,
};


export const saladsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_SALADS":
      return { ...state, salads: action.payload };
    case "SET_SELECTED_SALAD":
        return {...state, selectedSalad: action.payload};
    case "SET_SHOW_MODAL":
        return 
    default:
      return state;
  }
};
