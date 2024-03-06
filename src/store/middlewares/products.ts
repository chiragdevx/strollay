import { call, put, takeLatest } from "redux-saga/effects";
import {
  setProducts,
  getProductsError,
  setProductsByCategoryID,
  getProductsByCategoryError,
  setProductsByBundleID,
  getProductsByBundleError,
  setProductByID,
  getProductByIdError,
} from "../reducers/products";
import { productActions } from "../actions/products";
import {
  getAllProducts,
  getProductById,
  getProductsByBundleID,
  getProductsByCategoryID,
} from "@/api/products";
import { addToBox, emptyBox } from "../reducers/box";

// fetches all products
export function* getProductsSaga(): Generator<any, void, any> {
  try {
    const data = yield call(getAllProducts);
    yield put(setProducts(data));
  } catch (error) {
    console.log("error", error);
    yield put(getProductsError(error));
  }
}

export function* getProductByIdSaga(action: {
  type: string;
  payload: { productID: string };
}): Generator<any, void, any> {
  try {
    const {
      payload: { productID = "" },
    } = action;
    const data = yield call(getProductById, productID);

    if (!data) throw new Error("No product found");

    yield put(setProductByID(data));
  } catch (error) {
    yield put(getProductByIdError(error));
  }
}

// fetches products based on category
export function* getProductsByCategoriesSaga(action: {
  type: string;
  payload: { categoryID: string };
}): Generator<any, void, any> {
  try {
    const {
      payload: { categoryID = "" },
    } = action;
    const data = yield call(getProductsByCategoryID, categoryID);
    yield put(setProductsByCategoryID(data));
  } catch (error) {
    yield put(getProductsByCategoryError(error));
  }
}

// fetches products based on bundle
export function* getProductsByBundlesSaga(action: {
  type: string;
  payload: { bundleID: string };
}): Generator<any, void, any> {
  try {
    const {
      payload: { bundleID = "" },
    } = action;
    // fetching products based on bundle id
    const data = yield call(getProductsByBundleID, bundleID);
    // doing addToBox only for the products belong to same bundle id
    yield put(emptyBox());
    for (const p of data) {
      yield put(addToBox(p));
    }
    // finally setting loading false to stop UI loading
    yield put(setProductsByBundleID());
  } catch (error) {
    yield put(getProductsByBundleError(error));
  }
}

export function* productsSagaWatchers() {
  yield takeLatest(productActions.getProducts, getProductsSaga);
  yield takeLatest(productActions.getProductByID, getProductByIdSaga);
  yield takeLatest(
    productActions.getProductsByCategoryID,
    getProductsByCategoriesSaga
  );
  yield takeLatest(
    productActions.getProductsByBundleID,
    getProductsByBundlesSaga
  );
}
