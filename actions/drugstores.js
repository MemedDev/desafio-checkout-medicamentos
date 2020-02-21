import querystring from "querystring";
import actionTypes from "../constant/actionTypes";

export const url = `/api/drugstores`;

export const loading = () => ({
  type: actionTypes.FETCH_DRUGSTORES
});

export const succces = payload => ({
  type: actionTypes.FETCH_DRUGSTORES_SUCCESS,
  payload
});

export const error = () => ({
  type: actionTypes.FETCH_DRUGSTORES_ERROR
});

export const clear = () => ({
  type: actionTypes.CLEAR_DRUGSTORES
});

export const find = (params = {}) => dispatch => {
  dispatch(loading());
  return fetch(`${url}?${querystring.stringify(params)}`)
    .then(response => {
      /* istanbul ignore next */
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then(payload => dispatch(succces(payload)))
    .catch(err => dispatch(error(err)));
};
