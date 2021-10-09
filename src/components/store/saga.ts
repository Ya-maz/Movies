import { takeEvery, put, call, ForkEffect, delay } from "redux-saga/effects";
import {
  getMoviesFetchFailedCreator,
  getMoviesFetchSucceedCreator,
  GET_MOVIES_FETCH_REQUESTED,
  showLoadingCreator,
  hideLoadingCreator
} from "./actions";
import { api, falseAPI } from "./../../services";
import {
  responseType,
  typeGetMoviesFetchRequest,
  typeGetMoviesFetchFailed,
  typeGetMoviesFetchSucceed,
  typeHideLoadingCreator,
  typeShowLoadingCreator,
} from "./type/actionsType";

type action = typeGetMoviesFetchRequest



export function* sagaWatcher(): Generator<ForkEffect<never>> {
  yield takeEvery(GET_MOVIES_FETCH_REQUESTED, sagaWorker);
}

function* sagaWorker(action: action) {
  try {
    yield put(showLoadingCreator());
    const moviesFromServer: responseType = yield call(falseAPI, action.url);
    yield put(getMoviesFetchSucceedCreator(moviesFromServer));
    yield put(hideLoadingCreator());
  } catch (error) {
    const result = (error as Error).message; 
    yield put(getMoviesFetchFailedCreator(result));
  }
}
