import { GET_MOVIES_FETCH_SUCCEED, SORT_BY_YEAR, SORT_BY_YEAR_REVERSE, SORT_DEFAULT, SORT_REVERSE } from "../actions";
import { typeGetMoviesFetchSucceed, responseSearchType } from "../type/actionsType";

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
        Title: "",
        Type: "",
        Year: "",
        imdbID: "",
      },
    ],
    totalResults: "",
  },
};

export const requestReducer = (state = initialState, action: actions): typeInitial => {
  switch (action.type) {
    case GET_MOVIES_FETCH_SUCCEED:
      return { ...state, data: action.payload };
    case SORT_DEFAULT:
      return {
        ...state,
        data: {
          ...state.data,
          Search: state.data.Search.concat().sort((a: { Title: string }, b: { Title: string }) => {
            if (a.Title > b.Title) {
              return 1;
            }
  
            if (a.Title < b.Title) {
              return -1;
            }
  
            return 0;
          }),
        }
      };
    case SORT_REVERSE:
      return {
        ...state,
        data: {
          ...state.data,
          Search: state.data.Search.concat().sort((a: { Title: string }, b: { Title: string }) => {
            if (a.Title > b.Title) {
              return -1;
            }

            if (a.Title < b.Title) {
              return 1;
            }

            return 0;
          }),
        }
      };
    case SORT_BY_YEAR:
      return {
        ...state,
        data: {
          ...state.data,
          Search: state.data.Search.concat().sort(
            (a: { Year: string }, b: { Year: string }) => Number(b.Year) - Number(a.Year)
          ),
        }
      };
    case SORT_BY_YEAR_REVERSE:
        return {
          ...state,
          data: {
            ...state.data,
            Search: state.data.Search.concat().sort(
              (a: { Year: string }, b: { Year: string }) => Number(b.Year) - Number(a.Year)
            ),
        
          }
        };
    default:
      return state;
  }
};
