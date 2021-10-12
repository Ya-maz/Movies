import { takeEvery, put, call, ForkEffect } from "redux-saga/effects";
import {
  getMoviesFetchFailedCreator,
  getMoviesFetchSucceedCreator,
  GET_MOVIES_FETCH_REQUESTED,
  showLoadingCreator,
  hideLoadingCreator,
  GET_MOVIE_BY_ID_FETCH_REQUESTED,
  getMovieByIdFetchSucceedCreator,
} from "./actions";
import { api, falseAPI } from "./../../services";
import {
  responseType,
  typeGetMoviesFetchRequest,
  typeGetMoviesFetchFailed,
  typeGetMoviesFetchSucceed,
  typeHideLoadingCreator,
  typeShowLoadingCreator,
  responseSearchType,
  responseByIdType,
  typeGetMovieByIdFetchRequest,
} from "./type/actionsType";

export function* sagaWatcher(): Generator<ForkEffect<never>> {
  yield takeEvery(GET_MOVIES_FETCH_REQUESTED, sagaWorkerSearch);
  yield takeEvery(GET_MOVIE_BY_ID_FETCH_REQUESTED, sagaWorkerById);
}

function* sagaWorkerSearch(action: typeGetMoviesFetchRequest) {
  try {
    yield put(showLoadingCreator());
    const moviesFromServer: responseSearchType = yield call(api, action.url);
    yield put(getMoviesFetchSucceedCreator(moviesFromServer));
    yield put(hideLoadingCreator());
  } catch (error) {
    const result = (error as Error).message;
    yield put(getMoviesFetchFailedCreator(result));
  }
}

function* sagaWorkerById(action: typeGetMovieByIdFetchRequest) {
  try {
    yield put(showLoadingCreator());
    const movie: responseByIdType = yield call(api, action.url);
    yield put(getMovieByIdFetchSucceedCreator(movie));
    yield put(hideLoadingCreator());
  } catch (error) {
    const result = (error as Error).message;
    yield put(getMoviesFetchFailedCreator(result));
  }
}
