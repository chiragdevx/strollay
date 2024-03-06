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
    /*
      getProducts -> Initiates getAllProducts promise, and starts loading true
      setProducts -> Set fetched products on the store, and stops loading
      getProductsError -> Set error on the store, and stops loading
    */
    getProducts: (state, action) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsError: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    },

    /* 
      getProductsByCategoryID -> Initiates getProductsByCategoryID promise, and starts loading true
      setProductsByCategoryID -> Set fetched products on the store, and stops loading
      getProductsByCategoryID -> Set error on the store, and stops loading
    */
    getProductsByCategoryID: (state) => {
      state.loadingByCategory = true;
    },
    setProductsByCategoryID: (state, action) => {
      state.loadingByCategory = false;
      state.productsByCategory = action.payload;
    },
    getProductsByCategoryError: (state, action) => {
      state.loadingByCategory = false;
      state.productsByCategory = [];
      state.errorByCategory = action.payload;
    },
    emptyProduct: (state) => {
      state.product = {};
    },

    /* 
      getProductsByBundleID -> Initiates getProductsByBundleID promise, and starts loading true
      setProductsByBundleID -> Set fetched products on the store, and stops loading
      getProductsByBundleError -> Set error on the store, and stops loading
    */
    getProductsByBundleID: (state) => {
      state.loading = true;
    },
    setProductsByBundleID: (state) => {
      state.loading = false;
    },
    getProductsByBundleError: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    },
    setFrequency: (state, action) => {
      state.frequency = action.payload;
    },
    getProductByID: (state, action) => {
      state.loading = true;
    },
    setProductByID: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    getProductByIdError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  // all products
  getProducts,
  setProducts,
  getProductsError,

  // products by category
  getProductsByCategoryID,
  setProductsByCategoryID,
  getProductsByCategoryError,

  // products by bundle
  getProductsByBundleID,
  setProductsByBundleID,
  getProductsByBundleError,
  getProductByIdError,
  setProductByID,
  emptyProduct,
  getProductByID,
} = productSlice.actions;
export default productSlice.reducer;
