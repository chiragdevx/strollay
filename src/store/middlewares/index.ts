import { all, fork } from "redux-saga/effects";
import { productsSagaWatchers } from "./products";
import { getCategoriesSagaWatcher } from "./categories";
import { getBoxSagaWatcher } from "./box";
import { bundlesSagaWatcher } from "./bundles";
import { PlansSagaWatcher } from "./plans";
import { paymentInfoSagaWatchers } from './payment-info';
import { orderInfoSagaWatchers } from './order';
import { variantSagaWatcher } from "./variantOptions";

function* rootSaga() {
  yield all([
    fork(productsSagaWatchers),
    fork(variantSagaWatcher),
    fork(getCategoriesSagaWatcher),
    fork(getBoxSagaWatcher),
    fork(bundlesSagaWatcher),
    fork(PlansSagaWatcher),
    fork(paymentInfoSagaWatchers),
    fork(orderInfoSagaWatchers),
  ]);
}

export default rootSaga;
