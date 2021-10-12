import { Reducer } from "redux";
import { GET_MOVIE_BY_ID_FETCH_SUCCEED } from "./../actions";
import {
  responseByIdType,
  typeGetMovieByIdFetchSucceed,
} from "./../type/actionsType";

interface typeInitial {
  movie: responseByIdType;
}
type actions = typeGetMovieByIdFetchSucceed;

const initialState: typeInitial = {
  movie: {
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Ratings: [
      { Source: "", Value: "" },
      { Source: "", Value: "" },
      { Source: "", Value: "" },
    ],
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: "",
  },
};

export const movieReducer: Reducer<typeInitial, actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID_FETCH_SUCCEED:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
};
