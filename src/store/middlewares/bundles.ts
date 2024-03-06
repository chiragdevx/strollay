import { call, put, takeLatest } from "redux-saga/effects";
import { setBundles, getBundlesError } from "../reducers/bundles";
import { bundleActions } from "../actions/bundles";
import { getAllBundles } from "@/api/bundles";

export function* getBundlesSaga(): Generator<any, void, any> {
  try {
    const data = yield call(getAllBundles);
    yield put(setBundles(data));
  } catch (error) {
    yield put(getBundlesError(error));
  }
}

export function* bundlesSagaWatcher() {
  yield takeLatest(bundleActions.getBundles, getBundlesSaga);
}
