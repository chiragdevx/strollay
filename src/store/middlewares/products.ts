import { call, put, takeLatest } from "redux-saga/effects";
import { setProducts } from "../reducers/products";
import { productActions } from "../actions/products";

// fetches all products
export function* getProductsSaga(): Generator<any, void, any> {
  try {
    // const data = yield call(getAllProducts);
    yield put(setProducts(""));
  } catch (error) {
    console.log("error", error);
    // yield put(getProductsError(error));
  }
}

export function* productsSagaWatchers() {
  yield takeLatest(productActions.getProducts, getProductsSaga);
}
