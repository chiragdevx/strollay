import { all, fork } from "redux-saga/effects";
import { productsSagaWatchers } from "../middlewares/products";
import { cartSagaWatcher } from "../middlewares/cart";
import { userSagaWatchers } from "../middlewares/user";

function* rootSaga() {
  yield all([
    fork(productsSagaWatchers),
    fork(cartSagaWatcher),
    fork(userSagaWatchers),
  ]);
}

export default rootSaga;
