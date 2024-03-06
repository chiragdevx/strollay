import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  collections: any[];
  error: any;
  loading: boolean;
}

export const initialState: InitialStateType = {
  collections: [],
  error: null,
  loading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // Action initiates collections fetch promise
    getCollections: (state, action) => {
      state.loading = true;
    },
    // Action sets fetched collections on state
    setCollections: (state, action) => {
      state.loading = false;
      state.collections = action.payload;
    },
    getCollectionsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCollections, setCollections, getCollectionsError } =
  categorySlice.actions;
export default categorySlice.reducer;
