export const getSubCategories = (categoryId) => {
  return (dispatch, getState) => {
    fetch("http://localhost:8000/subcategories?categoryid=" + categoryId, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        data.length && dispatch({ type: "GET_SUBCATEGORIES", payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_ERROR", payload: true });
      });
  };
};
