import { combineReducers } from "redux";

import drugstores from "./drugstores";
import prescription from "./prescription";

export default combineReducers({ drugstores, prescription });
