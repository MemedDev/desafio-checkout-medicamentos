import { combineReducers } from "redux";
import actionTypes from "../constant/actionTypes";

const isError = (state = false, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_DRUGSTORES:
    case actionTypes.FETCH:
      return false;
    case actionTypes.FETCH_DRUGSTORES_ERROR:
      return true;
    default:
      return state;
  }
};
const isLoading = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DRUGSTORES_SUCCESS:
    case actionTypes.FETCH_DRUGSTORES_ERROR:
      return false;
    case actionTypes.FETCH_DRUGSTORES:
      return true;
    default:
      return state;
  }
};
const data = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DRUGSTORES:
    case actionTypes.CLEAR_DRUGSTORES:
      return {};
    case actionTypes.FETCH_DRUGSTORES_SUCCESS:
      return action.payload.data;
    default:
      return state;
  }
};

export default combineReducers({ data, isLoading, isError });
