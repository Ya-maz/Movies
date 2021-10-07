import {
  typeGetMoviesFetchRequestCreator,
  typeGetMoviesFetchSucceedCreator,
  typeGetMoviesFetchFailedCreator,
  typeShowLoadingCreator,
  typeHideLoadingCreator,
} from "./type/actionsType";

export const GET_MOVIES_FETCH_REQUESTED: string = "GET_MOVIES_FETCH_REQUESTED";
export const GET_MOVIES_FETCH_SUCCEED: string = "GET_MOVIES_FETCH_SUCCEED";
export const GET_MOVIES_FETCH_FAILED: string = "GET_MOVIES_FETCH_FAILED";
export const SHOW_LOADING: string = "SHOW_LOADING";
export const HIDE_LOADING: string = "HIDE_LOADING";

export const getMoviesFetchRequestedCreator: typeGetMoviesFetchRequestCreator =
  (url) => {
    return {
      type: "GET_MOVIES_FETCH_REQUESTED",
      url,
    };
  };

export const getMoviesFetchSucceedCreator: typeGetMoviesFetchSucceedCreator = (
  data
) => {
  return {
    type: "GET_MOVIES_FETCH_SUCCEED",
    data,
  };
};

export const getMoviesFetchFailedCreator: typeGetMoviesFetchFailedCreator = (
  error
) => {
  return {
    type: "GET_MOVIES_FETCH_FAILED",
    error,
  };
};

export const showLoadingCreator: typeShowLoadingCreator = () => {
  return {
    type: "SHOW_LOADING",
    isLoading: true,
  };
};

export const hideLoadingCreator: typeHideLoadingCreator = () => {
  return {
    type: "HIDE_LOADING",
    isLoading: false,
  };
};
