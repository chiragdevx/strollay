import { createAction } from "@reduxjs/toolkit";

export const paymentInfoActions = {
  setAddress: createAction<{}>("paymentInfo/setAddress"),
  setContactInfo: createAction<{}>("paymentInfo/setContactInfo"),
  setFlag: createAction<{}>("paymentInfo/setFlag"),
  unsetFlag: createAction<{}>("paymentInfo/unsetFlag"),
  setShippingMethod: createAction<{}>("paymentInfo/setShippingMethod"),
  clearAddress: createAction("paymentInfo/clearAddress"),
  setPaymentPartner: createAction<{}>("paymentInfo/setPaymentPartner"),
  clearPaymentPartner: createAction("paymentInfo/clearPaymentPartner"),
  submitPaymentInfo: createAction<{}>("paymentInfo/submitPaymentInfo"),
  paymentInfoSubmissionCompleted: createAction<{}>(
    "paymentInfo/paymentInfoSubmissionCompleted"
  ),
  paymentInfoSubmissionFailed: createAction<{}>(
    "paymentInfo/paymentInfoSubmissionFailed"
  ),
};
