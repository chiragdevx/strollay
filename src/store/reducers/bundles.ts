import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  bundles: any;
  loading: boolean;
  error: any;
}

export const initialState: InitialStateType = {
  bundles: [],
  error: null,
  loading: false,
};

export const bundlesSlice = createSlice({
  name: "bundles",
  initialState,
  reducers: {
    /*
      getProducts -> Initiates getAllProducts promise, and starts loading true
      setProducts -> Set fetched products on the store, and stops loading
      getProductsError -> Set error on the store, and stops loading
    */
    getBundles: (state) => {
      state.loading = true;
    },
    setBundles: (state, action) => {
      state.loading = false;
      state.bundles = action.payload;
    },
    getBundlesError: (state, action) => {
      state.loading = false;
      state.bundles = [];
      state.error = action.payload;
    },
  },
});

export const { 
  getBundles,
  setBundles, 
  getBundlesError,
} = bundlesSlice.actions;
export default bundlesSlice.reducer;
