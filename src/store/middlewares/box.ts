import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { getBox, setBox, getBoxError } from "../reducers/box";
import { boxActions } from "../actions/box";

export function* getBoxSaga(): Generator<any, void, any> {
  try {
    // some async logic here,
    // still pending
    yield put(setBox([]));
  } catch (error) {
    yield put(getBoxError({}));
  }
}

export function* addToBoxSaga(): Generator<any, void, any> {
  try {
    // some async logic here,
    // still pending
    // yield put(setBox([]));
  } catch (error) {
    yield put(getBoxError({}));
  }
}

export function* removeFromBoxSaga(): Generator<any, void, any> {
  try {
    // some async logic here,
    // still pending
    // yield put(setBox([]));
  } catch (error) {
    yield put(getBoxError({}));
  }
}

export function* getBoxSagaWatcher() {
  yield takeLatest(boxActions.getBox, getBoxSaga);
  yield takeLatest(boxActions.addToBox, addToBoxSaga);
  yield takeLatest(boxActions.removeFromBox , removeFromBoxSaga);
}
