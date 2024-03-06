import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  categories: any[];
  error: any;
  loading: boolean;
}

export const initialState: InitialStateType = {
  categories: [],
  error: null,
  loading: false,
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Action initiates category fetch promise
    getCategories: (state, action) => {
      state.loading = true;
    },
    // Action sets fetched categories on state
    setCategories: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    // Action sets categories fetching error on state
    getCategoriesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCategories, setCategories, getCategoriesError } =
  categorySlice.actions;
export default categorySlice.reducer;
