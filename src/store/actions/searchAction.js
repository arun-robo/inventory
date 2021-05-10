export const setSearchParam = (param) => {
  return (dispatch, getState) => {
    dispatch({ type: "SET_SEARCH_PARAM", payload: param });
  };
};