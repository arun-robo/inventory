export const getCategories = () => {
  return (dispatch, getState) => {
    console.log("get categories");
    fetch("http://localhost:8000/categories", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "GET_CATEGORIES", payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_ERROR", payload: true });
      });
  };
};

export const getCategory = (categoryId) => {
  return (dispatch, getState) => {
    console.log("get category");
    fetch("http://localhost:8000/categories/" + categoryId, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: "GET_CATEGORY", payload: data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "FETCH_ERROR", payload: true });
      });
  };
};
