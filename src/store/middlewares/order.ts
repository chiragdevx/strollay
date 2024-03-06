import { call, put, takeLatest } from "redux-saga/effects";
import { orderInfoActions } from "../actions/order";
import { getOrderInfoError, setOrderInfo } from "../reducers/order";
import { fetchOrderInfoByID } from "@/api/order";

export function* fetchOrderDetails(action: {
  type: string;
  payload: { orderID: string };
}): Generator<any, void, any> {
  console.log();
  try {
    const { payload } = action;
    const { orderID } = payload;
    const data = yield call(fetchOrderInfoByID, orderID);
    yield put(setOrderInfo(data));
  } catch (error) {
    yield put(getOrderInfoError(error));
  }
}

export function* orderInfoSagaWatchers() {
  yield takeLatest(orderInfoActions.getOrderInfo, fetchOrderDetails);
}
