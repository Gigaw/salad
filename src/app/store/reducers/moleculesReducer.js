const defaultState = {
  molecules: [],
  selectedMolecules: {},
};

export const moleculesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_MOLECULES":
      return { ...state, molecules: action.payload };
    case "SET_SELECTED_MOLECULES":
      return { ...state, selectedMolecules: action.payload };
    default:
      return state;
  }
};
