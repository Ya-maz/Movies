import { Reducer } from "redux";
import { GET_MOVIES_FETCH_SUCCEED, SORT_BY_YEAR, SORT_BY_YEAR_REVERSE, SORT_DEFAULT, SORT_REVERSE } from "./../actions";
import {
  typeGetMoviesFetchSucceed,
  responseSearchType,
  Search,
} from "./../type/actionsType";

interface typeInitial {
  data: responseSearchType;
}
type actions = typeGetMoviesFetchSucceed;

const initialState: typeInitial = {
  data: {
    Response: "",
    Search: [
      {
        Poster: "",
        Title: "title",
        Type: "",
        Year: "",
        imdbID: "",
      },
    ],
    totalResults: "",
  },
};

export const requestReducer: Reducer<typeInitial, actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_MOVIES_FETCH_SUCCEED:
      return { ...state, data: action.payload };
    case SORT_DEFAULT:
      return {
        ...state,
        data: state.data.Search.sort(
          (a: Search, b: Search): boolean => a.Title > b.Title
        ),
      };
      case SORT_REVERSE:
        return {
          ...state,
          data: state.data.Search.sort(
            (a: Search, b: Search): boolean => !(a[Title] > b[Title])
          ),
      };
      case SORT_BY_YEAR:
      return {
        ...state,
        data: state.data.Search.sort(
          (a: Search, b: Search): boolean =>  Number(b[Year]) - Number(a[Year])
        ),
      };
      case SORT_BY_YEAR_REVERSE:
        return {
          ...state,
          data: state.data.Search.sort(
            (a: Search, b: Search): boolean =>  Number(a[Year]) - Number(b[Year]) 
          ),
        };
    default:
      return state;
  }
};
