import { Reducer } from "redux";
import {
  GET_MOVIES_FETCH_SUCCEED,
} from "./../actions";
import {
  typeGetMoviesFetchSucceed,
  responseSearchType,
} from "./../type/actionsType";

interface typeInitial {
  data: responseSearchType
}
type actions = typeGetMoviesFetchSucceed;

const initialState: typeInitial = {
  data: {
    Response: "",
    Search: [],
    totalResults: "",
  },
  // movieById: {
  //   Title: "",
  //   Year: "",
  //   Rated: "",
  //   Released: "",
  //   Runtime: "",
  //   Genre: "",
  //   Director: "",
  //   Writer: "",
  //   Actors: "",
  //   Plot: "",
  //   Language: "",
  //   Country: "",
  //   Awards: "",
  //   Poster: "",
  //   Ratings: [
  //     { Source: "", Value: "" },
  //     { Source: "", Value: "" },
  //     { Source: "", Value: "" },
  //   ],
  //   Metascore: "",
  //   imdbRating: "",
  //   imdbVotes: "",
  //   imdbID: "",
  //   Type: "",
  //   DVD: "",
  //   BoxOffice: "",
  //   Production: "",
  //   Website: "",
  //   Response: "",
  // },
};

export const requestReducer: Reducer<typeInitial, actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_MOVIES_FETCH_SUCCEED:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
