import * as types from "../types";

export const redirect = to => ({ type: types.REDIRECT, payload: to });
export const redirectSuccess = () => ({ type: types.REDIRECT_SUCCESS });

export const displayLoadingSpinner = () => ({
  type: types.DISPLAY_LOADING_SPINNER
});
export const hideLoadingSpinner = () => ({ type: types.HIDE_LOADING_SPINNER });
