import * as types from "../types";
import { IMAGE_ENDPOINT } from "../../config";

const initalState = {
  products: [],
  isLoading: false,
  error: false,
  errorMessage: "",
  addSuccess:false
};


export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PRODUCTS:
      return { ...state, isLoading: true };
    case types.FETCH_PRODUCTS_SUCCESS:
      const products = payload;
      console.log(products)
      return {
        ...state,
        isLoading: false,
        products: products
      };
      case types.FETCH_PRODUCTS_ERROR:
      return { ...state, error: true, errorMessage: payload };
      case types.CREATE_PRODUCT_SUCCESS:
      return { ...state, addSuccess: true };
    default:
      return state;
  }
};

export default productReducer;
