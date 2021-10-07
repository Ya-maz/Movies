import { takeEvery, put, call } from "redux-saga/effects";
import {
  getMoviesFetchFailedCreator,
  getMoviesFetchSucceedCreator,
  GET_MOVIES_FETCH_REQUESTED,
  showLoadingCreator,
  hideLoadingCreator
} from "./actions";
import { api } from "./../../services";
import {
  responseType,
  typeGetMoviesFetchRequest,
  typeGetMoviesFetchFailed,
  typeGetMoviesFetchSucceed,
  typeHideLoadingCreator,
  typeShowLoadingCreator,
} from "./type/actionsType";

type action = typeGetMoviesFetchRequest



export function* sagaWatcher() {
  yield takeEvery(GET_MOVIES_FETCH_REQUESTED, sagaWorker);
}

function* sagaWorker(action: action) {
  try {
    yield put(showLoadingCreator());
    const moviesFromServer: responseType = yield call(api, action.url);
    yield put(getMoviesFetchSucceedCreator(moviesFromServer));
    yield put(hideLoadingCreator());
  } catch (error) {
    yield put(getMoviesFetchFailedCreator(error.message));
  }
}
