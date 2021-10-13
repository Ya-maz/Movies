import { takeEvery, put, call, ForkEffect } from "redux-saga/effects";
import { api } from "../../services";
import {
  getMoviesFetchFailedCreator,
  getMoviesFetchSucceedCreator,
  GET_MOVIES_FETCH_REQUESTED,
  showLoadingCreator,
  hideLoadingCreator,
  GET_MOVIE_BY_ID_FETCH_REQUESTED,
  getMovieByIdFetchSucceedCreator,
  JUST_SORT_IT,
  pushPayloadToTypeCreator,
} from "./actions";
import {
  typeGetMoviesFetchRequest,
  responseSearchType,
  responseByIdType,
  typeGetMovieByIdFetchRequest,
  typeJustSortIt,
} from "./type/actionsType";

export function* sagaWatcher(): Generator<ForkEffect<never>> {
  yield takeEvery(GET_MOVIES_FETCH_REQUESTED, sagaWorkerSearch);
  yield takeEvery(GET_MOVIE_BY_ID_FETCH_REQUESTED, sagaWorkerById);
  yield takeEvery(JUST_SORT_IT, sagaWorkerSort);
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

function* sagaWorkerSort(action: typeJustSortIt) {
  try {
    yield put(pushPayloadToTypeCreator(action.payload));
  } catch (error) {
    const result = (error as Error).message;
    yield put(getMoviesFetchFailedCreator(result));
  }
}
