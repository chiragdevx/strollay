import { call, put, takeLatest } from "redux-saga/effects";
import { VariantOptionsActions } from "../actions/variant-option";
import { getVariantOptions } from "@/api/variantOptions";
import { setVariantOptions } from "../reducers/variant-options";

export function* getVariantOptionsSaga(): Generator<any, void, any> {
  try {
    const data = yield call(getVariantOptions);

    yield put(setVariantOptions(data));
  } catch (error) {
    console.log("error", error);
    // yield put(getPlansError(error));
  }
}

export function* variantSagaWatcher() {
  yield takeLatest(
    VariantOptionsActions.getVariantOptions,
    getVariantOptionsSaga
  );
}
