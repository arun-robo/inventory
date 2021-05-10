import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
// import categoryReducer from "./categoryReducer";
// import subcategoryReducer from "./subcategoryReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  // category: categoryReducer,
  // subcategory: subcategoryReducer
});

export default rootReducer;
