import {
  typeGetMoviesFetchRequestCreator,
  typeGetMoviesFetchSucceedCreator,
  typeGetMovieByIDFetchSucceedCreator,
  typeGetMoviesFetchFailedCreator,
  typeShowLoadingCreator,
  typeHideLoadingCreator,
  typeGetMovieByIdFetchRequestCreator,
  // typeSortDefaultCreator,
  // typeSortReverseCreator,
  // typeSortByYearCreator,
  // typeSortByYearReverseCreator,
  typePayload,
  typePushPayloadToTypeCreator,
  typeJustSortItCreator,
} from "./type/actionsType";

export const GET_MOVIES_FETCH_REQUESTED = "GET_MOVIES_FETCH_REQUESTED";
export const GET_MOVIES_FETCH_SUCCEED = "GET_MOVIES_FETCH_SUCCEED";
export const GET_MOVIES_FETCH_FAILED = "GET_MOVIES_FETCH_FAILED";
export const GET_MOVIE_BY_ID_FETCH_REQUESTED = "GET_MOVIE_BY_ID_FETCH_REQUESTED";
export const GET_MOVIE_BY_ID_FETCH_SUCCEED = "GET_MOVIE_BY_ID_FETCH_SUCCEED";
export const SHOW_LOADING = "SHOW_LOADING";
export const HIDE_LOADING = "HIDE_LOADING";

export const SORT_DEFAULT = "SORT/DEFAULT";
export const SORT_REVERSE = "SORT/REVERSE";
export const SORT_BY_YEAR = "SORT/BY_YEAR";
export const SORT_BY_YEAR_REVERSE = "SORT/BY_YEAR_REVERSE";
export const JUST_SORT_IT = "JUST_SORT_IT";

export const getMoviesFetchRequestedCreator: typeGetMoviesFetchRequestCreator = (url) => ({
    type: "GET_MOVIES_FETCH_REQUESTED",
    url,
  });

export const getMovieByIdFetchRequestedCreator: typeGetMovieByIdFetchRequestCreator = (url) => ({
    type: "GET_MOVIE_BY_ID_FETCH_REQUESTED",
    url,
  });

export const getMoviesFetchSucceedCreator: typeGetMoviesFetchSucceedCreator = (data) => ({
    type: "GET_MOVIES_FETCH_SUCCEED",
    payload: data,
  });

export const getMovieByIdFetchSucceedCreator: typeGetMovieByIDFetchSucceedCreator = (movie) => ({
    type: "GET_MOVIE_BY_ID_FETCH_SUCCEED",
    payload: movie,
  });

export const getMoviesFetchFailedCreator: typeGetMoviesFetchFailedCreator = (error) => ({
    type: "GET_MOVIES_FETCH_FAILED",
    error,
  });

export const showLoadingCreator: typeShowLoadingCreator = () => ({
    type: "SHOW_LOADING",
    isLoading: true,
  });

export const hideLoadingCreator: typeHideLoadingCreator = () => ({
    type: "HIDE_LOADING",
    isLoading: false,
  });

// export const sortDefaultCreator: typeSortDefaultCreator = () => {
//   return {
//     type: "SORT/DEFAULT",
//   };
// };
// export const sortReverseCreator: typeSortReverseCreator = () => {
//   return {
//     type: "SORT/REVERSE",
//   };
// };
// export const sortByYearCreator: typeSortByYearCreator = () => {
//   return {
//     type: "SORT/BY_YEAR",
//   };
// };
// export const sortByYearReverseCreator: typeSortByYearReverseCreator = () => {
//   return {
//     type: "SORT/BY_YEAR_REVERSE",
//   };
// };

export const justSortItCreator: typeJustSortItCreator = (value: typePayload) => ({
    type: "JUST_SORT_IT",
    payload: value,
  });

export const pushPayloadToTypeCreator: typePushPayloadToTypeCreator = (payload: typePayload) => ({
    type: payload,
  });
