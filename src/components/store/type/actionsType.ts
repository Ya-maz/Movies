export interface rightResponseType {
  Title?: string;
  Year?: string;
  Rated?: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Language?: string;
  Country?: string;
  Awards?: string;
  Poster?: string;
  Ratings?: [
    { Source: string; Value: string },
    { Source: string; Value: string },
    { Source: string; Value: string }
  ];
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  Type?: string;
  DVD?: string;
  BoxOffice?: string;
  Production?: string;
  Website?: string;
  Response?: string;
}

//responseType
export interface responseType {
  [key: string]: string;
}

//actionType
export interface typeGetMoviesFetchRequest {
  type: "GET_MOVIES_FETCH_REQUESTED";
  url: string;
}
export interface typeGetMoviesFetchSucceed {
  type: "GET_MOVIES_FETCH_SUCCEED";
  payload: rightResponseType;
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

//actionCreatorType
export type typeGetMoviesFetchRequestCreator = (
  url: string
) => typeGetMoviesFetchRequest;

export type typeGetMoviesFetchSucceedCreator = (
  data: rightResponseType
) => typeGetMoviesFetchSucceed;

export type typeGetMoviesFetchFailedCreator = (
  error: string
) => typeGetMoviesFetchFailed;

export type typeShowLoadingCreator = () => typeShowLoading;

export type typeHideLoadingCreator = () => typeHideLoading;
