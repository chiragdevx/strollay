import { call, put, takeLatest } from "redux-saga/effects";
import { paymentInfoActions } from "../actions/payment-info";
import { submitOrderPaymentDetails } from "@/api/payments";
import {
  paymentInfoSubmissionCompleted,
  paymentInfoSubmissionFailed,
} from "../reducers/payment-info";
import { toast } from "react-toastify";

// fetches products based on bundle
export function* submitOrderPaymentInfo(action: {
  type: string;
  payload: object;
}): Generator<any, void, any> {
  console.log();
  try {
    const { payload } = action;
    // call submit payment info API with payload
    const data = yield call(submitOrderPaymentDetails, payload);
    console.log("data in middlware >>>>>", data);
    yield put(paymentInfoSubmissionCompleted(data));
    window.location.href = data.sessionUrl;
  } catch (error) {
    toast.error(error.message);
    yield put(paymentInfoSubmissionFailed(error));
  }
}

export function* paymentInfoSagaWatchers() {
  yield takeLatest(
    paymentInfoActions.submitPaymentInfo,
    submitOrderPaymentInfo
  );
}
