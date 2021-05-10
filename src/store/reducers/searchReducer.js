const initState = {
  searchParam: null,
};

const searchReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SEARCH_PARAM":
      return {
        ...state,
        searchParam: payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
