import { call, put, takeLatest } from "redux-saga/effects";
import { setProducts } from "../reducers/products";
import { productActions } from "../actions/products";
import { getAllProducts } from "@/api/products";
import ProductApi from "@/api/productApi";

// fetches all products
export function* getProductsSaga(): Generator<any, void, any> {
  try {
    const data = yield call(ProductApi);
    yield put(setProducts(data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* productsSagaWatchers() {
  yield takeLatest(productActions.getProducts, getProductsSaga);
}
