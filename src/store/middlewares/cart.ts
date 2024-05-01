import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { cartActions } from "../actions/cart";
import createApi from "@/api/api";
import {
  addToCartSuccess,
  clearCartSuccess,
  removeFromCartSuccess,
  setCartError,
} from "../reducers/cart";

// export function* getCartSaga(): Generator<any, void, any> {
//   try {
//     // some async logic here,
//     // still pending
//     yield put(setCart([]));
//   } catch (error) {
//     yield put(getCartError({}));
//   }
// }

export function* addToCartSaga(action: any): Generator<any, void, any> {
  try {
    const { id, variantId, quantity } = action.payload;
    const api = createApi("PIM", "add-to-cart");
    const _payload = {
      payload: {
        productId: id,
        variantId,
        quantity,
      },
    };
    yield call(api.put, _payload);

    yield put(addToCartSuccess(action.payload));
  } catch (error) {
    yield put(setCartError(action.payload));
  }
}

export function* removeFromCartSaga(action: any): Generator<any, void, any> {
  try {
    const { id, variantId, quantity } = action.payload;
    const api = createApi("PIM", "remove-from-cart");
    const _payload = {
      payload: {
        productId: id,
        variantId,
        quantity,
      },
    };

    yield call(api.put, _payload);

    yield put(removeFromCartSuccess(action.payload));
  } catch (error) {
    yield put(setCartError(action.payload));
  }
}

export function* clearCartSaga(action: any): Generator<any, void, any> {
  try {
    const { productId, variantId, quantity } = action.payload;
    const api = createApi("PIM", "remove-from-cart");
    const _payload = {
      payload: {
        productId,
        variantId,
        quantity,
      },
    };
    yield call(api.put, _payload);

    yield put(clearCartSuccess(action.payload));
  } catch (error) {
    yield put(setCartError(action.payload));
  }
}

export function* cartSagaWatcher() {
  //   yield takeLatest(cartActions.getCart, getCartSaga);
  yield takeLatest(cartActions.addToCart, addToCartSaga);
  yield takeLatest(cartActions.removeFromCart, removeFromCartSaga);
  yield takeLatest(cartActions.clearCart, clearCartSaga);
}
