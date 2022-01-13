const defaultState = {
  isActive: false,
  info: { title: "", text: "" },
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, isActive: true, info: action.payload};
    case "CLOSE_MODAL":
      return { ...state, isActive: false };
    default:
      return state;
  }
};
