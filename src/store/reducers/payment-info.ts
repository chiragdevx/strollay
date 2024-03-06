import { createSlice, current } from "@reduxjs/toolkit";

interface InitialStateType {
  address: any;
  paymentPartner: any;
  loadingPayment: boolean;
  error: any;
  redirectURI: string;
  contact: string;
  shippingMethod: string;
  shippingFlag: boolean;
  paymentFlag: boolean;
}

export const initialState: InitialStateType = {
  address: {
    email: "",
    firstName: "",
    lastName: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    country: "US",
    postalCode: "",
    shippingMethod: "",
  },
  paymentPartner: "STRIPE",
  error: null,
  loadingPayment: false,
  redirectURI: "",
  contact: "",
  shippingMethod: "Free shipping",
  shippingFlag: false,
  paymentFlag: false,
};

export const paymentInfo = createSlice({
  name: "paymentInfo",
  initialState,
  reducers: {
    // Below 2 `clearAddress` & `setAddress` are responsible to set and clear address
    clearAddress: (state) => {
      state.address = {};
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },

    setContactInfo: (state, action) => {
      state.contact = action.payload;
    },

    setFlag: (state, action) => {
      if (action.payload === "shipping") {
        state.shippingFlag = true;
      } else if (action.payload === "payment") {
        state.paymentFlag = true;
      }
    },

    unsetFlag: (state, action) => {
      if (action.payload === "shipping") {
        state.shippingFlag = false;
      } else if (action.payload === "payment") {
        state.paymentFlag = false;
      }
    },

    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },

    // Below 2 `clearPaymentPartner` & `setPaymentPartner` are responsible for setting and clearing Payment partner
    clearPaymentPartner: (state, action) => {
      state.paymentPartner = "";
    },

    setPaymentPartner: (state, action) => {
      state.paymentPartner = action.payload;
    },

    // Below 3 APIs are responsible for calling checkout API
    // `submitPaymentInfo` will start Promise of calling order API
    // `paymentInfoSubmissionCompleted` is successor and will set redirectURI
    // `paymentInfoSubmissionFailed` is failure and set Error
    submitPaymentInfo: (state, action) => {
      state.loadingPayment = true;
    },
    paymentInfoSubmissionCompleted: (state, action) => {
      state.loadingPayment = false;
      state.redirectURI = action.payload;
      state.error = {};
    },
    paymentInfoSubmissionFailed: (state, action) => {
      state.loadingPayment = false;
      state.redirectURI = "";
      state.error = action.payload;
    },
  },
});

export const {
  // address specific
  clearAddress,
  setAddress,

  // Page routing specific
  setFlag,

  // payments partner specific
  clearPaymentPartner,
  setPaymentPartner,

  // API calls
  submitPaymentInfo,
  paymentInfoSubmissionCompleted,
  paymentInfoSubmissionFailed,

  setContactInfo,
  setShippingMethod,
} = paymentInfo.actions;
export default paymentInfo.reducer;
