export const closeModal = () => {
  return async (dispatch) => {
    dispatch({ type: "CLOSE_MODAL", payload: false });
  };
};

export const showModal = (data) => {
  return async (dispatch) => {
    dispatch({type: "SHOW_MODAL", payload: data})
  }
}