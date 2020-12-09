import { combineReducers } from "redux";

import { headerReducer } from "./headerReducer";
import { featuresReducer } from "./featuresReducer";

export const rootReducer = combineReducers({
  headerReducer,
  featuresReducer
});
