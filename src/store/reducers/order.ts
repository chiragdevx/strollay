import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  orderInfo: any;
  error: any;
  loading: boolean;
}

export const initialState: InitialStateType = {
  orderInfo: {},
  error: null,
  loading: false,
};

export const orderInfoSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    // Action initiates category fetch promise
    getOrderInfo: (state, action) => {
      state.loading = true;
    },
    // Action sets fetched categories on state
    setOrderInfo: (state, action) => {
      state.loading = false;
      state.orderInfo = action.payload;
    },
    // Action sets categories fetching error on state
    getOrderInfoError: (state, action) => {
      state.loading = false;
      state.orderInfo = {};
      state.error = action.payload;
    },
  },
});

export const { getOrderInfo, setOrderInfo, getOrderInfoError } =
  orderInfoSlice.actions;
export default orderInfoSlice.reducer;
