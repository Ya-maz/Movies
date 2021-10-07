import { Reducer } from "redux";
import {
  GET_MOVIES_FETCH_SUCCEED,
  GET_MOVIES_FETCH_FAILED,
} from "./../actions";
import {
  responseType,
  typeGetMoviesFetchSucceed,
  typeGetMoviesFetchFailed,
} from "./../type/actionsType";

interface typeInitial {
  data: responseType[];
  error: string;
}
type action = typeGetMoviesFetchSucceed | typeGetMoviesFetchFailed;

const initialState: typeInitial = {
  data: [],
  error: "null",
};

export const requestReducer: Reducer<typeInitial, action> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_MOVIES_FETCH_SUCCEED:
      return { ...state, data: action.payload };
    case GET_MOVIES_FETCH_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};