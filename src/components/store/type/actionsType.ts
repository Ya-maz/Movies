export interface responseByIdType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [{ Source: string; Value: string }, { Source: string; Value: string }, { Source: string; Value: string }];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Search {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface responseSearchType {
  Response: string;
  Search: Search[];
  totalResults: string;
}

// responseType
export interface responseType {
  [key: string]: string;
}

// actionType
export interface typeGetMoviesFetchRequest {
  type: "GET_MOVIES_FETCH_REQUESTED";
  url: string;
}
export interface typeGetMovieByIdFetchRequest {
  type: "GET_MOVIE_BY_ID_FETCH_REQUESTED";
  url: string;
}
export interface typeGetMovieByIdFetchRequest {
  type: "GET_MOVIE_BY_ID_FETCH_REQUESTED";
  url: string;
}
export interface typeGetMoviesFetchSucceed {
  type: "GET_MOVIES_FETCH_SUCCEED";
  payload: responseSearchType;
}
export interface typeGetMovieByIdFetchSucceed {
  type: "GET_MOVIE_BY_ID_FETCH_SUCCEED";
  payload: responseByIdType;
}
export interface typeGetMoviesFetchFailed {
  type: "GET_MOVIES_FETCH_FAILED";
  error: string;
}
export interface typeShowLoading {
  type: "SHOW_LOADING";
}
export interface typeHideLoading {
  type: "HIDE_LOADING";
}

// type action for sort --> Selecet/option
export interface typeSortDefault {
  type: "SORT/DEFAULT";
}
export interface typeSortReverse {
  type: "SORT/REVERSE";
}
export interface typeSortByYear {
  type: "SORT/BY_YEAR";
}
export interface typeSortByYearReverse {
  type: "SORT/BY_YEAR_REVERSE";
}

export interface typeJustSortIt {
  type: "JUST_SORT_IT";
  payload: typePayload;
}

export type typePayload = "SORT/DEFAULT" | "SORT/REVERSE" | "SORT/BY_YEAR" | "SORT/BY_YEAR_REVERSE";

// actionCreatorType
export type typeGetMoviesFetchRequestCreator = (url: string) => typeGetMoviesFetchRequest;

export type typeGetMovieByIdFetchRequestCreator = (url: string) => typeGetMovieByIdFetchRequest;

export type typeGetMoviesFetchSucceedCreator = (data: responseSearchType) => typeGetMoviesFetchSucceed;

export type typeGetMovieByIDFetchSucceedCreator = (movie: responseByIdType) => typeGetMovieByIdFetchSucceed;

export type typeGetMoviesFetchFailedCreator = (error: string) => typeGetMoviesFetchFailed;

export type typeShowLoadingCreator = () => typeShowLoading;

export type typeHideLoadingCreator = () => typeHideLoading;

// export type typeSortDefaultCreator = () => typeSortDefault;
// export type typeSortReverseCreator = () => typeSortReverse;
// export type typeSortByYearCreator = () => typeSortByYear;
// export type typeSortByYearReverseCreator = () => typeSortByYearReverse;

export type typeJustSortItCreator = (value: typePayload) => typeJustSortIt;

export type typePushPayloadToTypeCreator = (
  payload: typePayload
) => typeSortDefault | typeSortReverse | typeSortByYear | typeSortByYearReverse;
