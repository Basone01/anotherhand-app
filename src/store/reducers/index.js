import { combineReducers } from "redux";
import productReducer from "./products";
import appReducer from "./app";

export default combineReducers({
  product: productReducer,
  app: appReducer
});
