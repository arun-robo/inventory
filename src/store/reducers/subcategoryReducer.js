const initState = {
    subcategories: null,
    subcategory: null,
  };
  
  const subcategoryReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "GET_SUBCATEGORIES":
        return {
          ...state,
          subcategories: payload,
        };
      case "GET_SUBCATEGORY":
        return {
          ...state,
          subcategory: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default subcategoryReducer;
  