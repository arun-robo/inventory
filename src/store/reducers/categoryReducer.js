const initState = {
  categories: null,
  category: null,
};

const categoryReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: payload,
      };
    case "GET_CATEGORY":
      return {
        ...state,
        category: payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
