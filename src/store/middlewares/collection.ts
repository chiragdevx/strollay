import { call, put, takeLatest } from "redux-saga/effects";
import createApi from "@/api/api";
import {
  setCollectionError,
  setCollections,
  setSelectedCollectionProducts,
} from "../reducers/collection";
import { collectionActions } from "../actions/collection";

export function* getCollectionsSaga(): Generator<any, void, any> {
  try {
    const api = createApi("PIM", "collections");

    const response = yield call(api.get, {});
    yield put(setCollections(response.data.data.data));
  } catch (error) {
    yield put(setCollectionError(error));
  }
}

export function* getProductsByCollectionSaga(
  action: any,
): Generator<any, void, any> {
  try {
    const api = createApi("PIM", "collection");
    const collectionId = action.payload;
    const pathName = `/${collectionId}/products`;
    const response = yield call(api.get, {}, pathName);
    console.log("response====", response);
    yield put(setSelectedCollectionProducts(response.data.data.data));
  } catch (error) {
    yield put(setCollectionError(error));
  }
}

export function* collectionSagaWatcher() {
  //   yield takeLatest(cartActions.getCart, getCartSaga);
  yield takeLatest(collectionActions.getCollections, getCollectionsSaga);
  yield takeLatest(
    collectionActions.getProductsByCollection,
    getProductsByCollectionSaga,
  );
}
