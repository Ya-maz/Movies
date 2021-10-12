import { combineReducers } from "redux";
import { requestReducer } from "./requestReducer";
import { loadingAnimationReducer } from './loadingAnimationReducer'
import { movieReducer } from "./movieReducer";

export const rootReducer = combineReducers({
  search: requestReducer,
  loading: loadingAnimationReducer,
  movie: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>