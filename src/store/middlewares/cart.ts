import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { cartActions } from "../actions/cart";

// export function* getCartSaga(): Generator<any, void, any> {
//   try {
//     // some async logic here,
//     // still pending
//     yield put(setCart([]));
//   } catch (error) {
//     yield put(getCartError({}));
//   }
// }

export function* addToCartSaga(): Generator<any, void, any> {
  try {
    // some async logic here,
    // still pending
    // yield put(setCart([]));
  } catch (error) {
    // yield put(getCartError({}));
  }
}

// export function* removeFromCartSaga(): Generator<any, void, any> {
//   try {
//     // some async logic here,
//     // still pending
//     // yield put(setCart([]));
//   } catch (error) {
//     yield put(getCartError({}));
//   }
// }

export function* getCartSagaWatcher() {
//   yield takeLatest(cartActions.getCart, getCartSaga);
  yield takeLatest(cartActions.addToCart, addToCartSaga);
//   yield takeLatest(cartActions.removeFromCart , removeFromCartSaga);
}
