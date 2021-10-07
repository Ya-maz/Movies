import { combineReducers } from "redux";
import { requestReducer } from "./requestReducer";
import { loadingAnimationReducer } from './loadingAnimationReducer'

export const rootReducer = combineReducers({
  request: requestReducer,
  loading: loadingAnimationReducer,
});