import { Reducer } from "redux";
import {
  GET_MOVIES_FETCH_SUCCEED,
  GET_MOVIES_FETCH_FAILED,
} from "./../actions";
import {
  rightResponseType,
  typeGetMoviesFetchSucceed,
  typeGetMoviesFetchFailed,
} from "./../type/actionsType";

interface typeInitial {
  data: rightResponseType[]
  // error: string;
}
type action = typeGetMoviesFetchSucceed;

const initialState: typeInitial = {
  data: [],
  // error: "null",
};

export const requestReducer: Reducer<typeInitial, action> = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_MOVIES_FETCH_SUCCEED:
      return { ...state, data: [...state.data, action.payload] };
    // case GET_MOVIES_FETCH_FAILED:
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
};
