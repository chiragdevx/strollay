import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import {
  getCategoriesError,
  setCategories,
} from "../reducers/categories";
import {categoryActions} from "../actions/categories";
import { getAllCategories } from "@/api/categories";

export function* getCategoriesSaga(): Generator<any, void, any> {
  try {
    const data = yield call(getAllCategories);
    yield put(setCategories(data));
  } catch (error) {
    yield put(getCategoriesError(error));
  }
}

export function* getCategoriesSagaWatcher() {
  yield takeLatest(categoryActions.getCategories, getCategoriesSaga);
}
