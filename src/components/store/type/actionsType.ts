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
  data: responseType;
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
  data: responseType
) => typeGetMoviesFetchSucceed;

export type typeGetMoviesFetchFailedCreator = (
  error: string
) => typeGetMoviesFetchFailed;

export type typeShowLoadingCreator = () => typeShowLoading;

export type typeHideLoadingCreator = () => typeHideLoading;
