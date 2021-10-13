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
  payload,
  typePushPayloadToTypeCreator,
  typeJustSortItCreator,
} from "./type/actionsType";

export const GET_MOVIES_FETCH_REQUESTED: string = "GET_MOVIES_FETCH_REQUESTED";
export const GET_MOVIES_FETCH_SUCCEED: string = "GET_MOVIES_FETCH_SUCCEED";
export const GET_MOVIES_FETCH_FAILED: string = "GET_MOVIES_FETCH_FAILED";
export const GET_MOVIE_BY_ID_FETCH_REQUESTED: string =
  "GET_MOVIE_BY_ID_FETCH_REQUESTED";
export const GET_MOVIE_BY_ID_FETCH_SUCCEED: string =
  "GET_MOVIE_BY_ID_FETCH_SUCCEED";
export const SHOW_LOADING: string = "SHOW_LOADING";
export const HIDE_LOADING: string = "HIDE_LOADING";

export const SORT_DEFAULT: string = "SORT/DEFAULT";
export const SORT_REVERSE: string = "SORT/REVERSE";
export const SORT_BY_YEAR: string = "SORT/BY_YEAR";
export const SORT_BY_YEAR_REVERSE: string = "SORT/BY_YEAR_REVERSE";
export const JUST_SORT_IT: string = "JUST_SORT_IT";

export const getMoviesFetchRequestedCreator: typeGetMoviesFetchRequestCreator =
  (url) => {
    return {
      type: "GET_MOVIES_FETCH_REQUESTED",
      url,
    };
  };

export const getMovieByIdFetchRequestedCreator: typeGetMovieByIdFetchRequestCreator =
  (url) => {
    return {
      type: "GET_MOVIE_BY_ID_FETCH_REQUESTED",
      url,
    };
  };

export const getMoviesFetchSucceedCreator: typeGetMoviesFetchSucceedCreator = (
  data
) => {
  return {
    type: "GET_MOVIES_FETCH_SUCCEED",
    payload: data,
  };
};

export const getMovieByIdFetchSucceedCreator: typeGetMovieByIDFetchSucceedCreator =
  (movie) => {
    return {
      type: "GET_MOVIE_BY_ID_FETCH_SUCCEED",
      payload: movie,
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

export const justSortItCreator: typeJustSortItCreator = (value: payload) => {
  return {
    type: "JUST_SORT_IT",
    payload: value
  }
}

export const pushPayloadToTypeCreator: typePushPayloadToTypeCreator = (payload: payload) => {
  return {
    type: payload,
  };
};