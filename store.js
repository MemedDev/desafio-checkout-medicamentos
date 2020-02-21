import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import redux from "./redux";

export const initializeStore = state =>
  createStore(redux, state, applyMiddleware(thunk));
