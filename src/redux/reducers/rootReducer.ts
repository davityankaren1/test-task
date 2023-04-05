import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import catsReducer from "./cats";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  cats: catsReducer,
});

export default rootReducer;
