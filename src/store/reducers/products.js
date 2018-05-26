import * as types from "../types";
import { IMAGE_ENDPOINT } from "../../config";
const initalState = {
  products: [],
  isLoading: false,
  error: false,
  errorMessage: ""
};

const addPrefixToImagePath = product => ({
  ...product,
  images_path: product.images_path.map(
    image_path => IMAGE_ENDPOINT + image_path
  )
});

export const productReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.FETCH_PRODUCTS:
      return { ...state, isLoading: true };
    case types.FETCH_PRODUCTS_SUCCESS:
      const products = payload;
      return {
        ...state,
        isLoading: false,
        products: [...products.map(addPrefixToImagePath)]
      };
    case types.FETCH_PRODUCTS_ERROR:
      return { ...state, error: true, errorMessage: payload };
    default:
      return state;
  }
};

export default productReducer;
