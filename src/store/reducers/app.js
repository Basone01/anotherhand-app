import * as types from "../types";

const initalState = {
  redirect: null,
  isLoading: false
};

export const routerReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case types.REDIRECT:
      return { ...state, redirect: payload };
    case types.REDIRECT_SUCCESS:
      return { ...state, redirect: null };
    case types.DISPLAY_LOADING_SPINNER:
      return { ...state, isLoading: true };
    case types.HIDE_LOADING_SPINNER:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default routerReducer;
