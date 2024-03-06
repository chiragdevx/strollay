import { createSlice } from "@reduxjs/toolkit";
import { VariantOptionsActions } from "../actions/variant-option";

interface InitialStateType {
  variantOptions: any;
  loading: boolean;
  error: any;
}

export const initialState: InitialStateType = {
  variantOptions: [],
  error: null,
  loading: false,
};

export const variantOptionsSlice = createSlice({
  name: "variantOptions",
  initialState,
  reducers: {
    getVariantOptions: (state) => {
      state.loading = true;
    },
    setVariantOptions: (state, action) => {
      const data = action.payload.map((item, index) => {
        return {
          ...item,
          selected: index === 0,
          variantOptions: item.variantOptions.map((o, i) => ({
            ...o,
            selected: i === 0,
          })),
        };
      });
      state.loading = false;
      state.variantOptions = action.payload;
    },
  },
});

export const { getVariantOptions, setVariantOptions } =
  variantOptionsSlice.actions;

export default variantOptionsSlice.reducer;
