import { createSlice, current } from "@reduxjs/toolkit";

interface InitialStateType {
  products: any;
  productsByCategory: [];
  loading: boolean;
  loadingByCategory: boolean;
  errorByCategory: any;
  error: any;
  frequency: any;
  product: any;
}

export const initialState: InitialStateType = {
  products: [],
  productsByCategory: [],
  loadingByCategory: false,
  error: null,
  errorByCategory: {},
  loading: false,
  frequency: "",
  product: {},
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

export const { getProducts, setProducts } = productSlice.actions;
export default productSlice.reducer;
