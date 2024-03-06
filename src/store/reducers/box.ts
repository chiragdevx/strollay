import { getRecordKey, getRelatedVariant } from "@/common/util/helper";
import { createSlice, current } from "@reduxjs/toolkit";

interface InitialStateType {
  data: any;
  frequency: any;
  loading: boolean;
  error: any;
}

export const initialState: InitialStateType = {
  data: [],
  frequency: "",
  error: null,
  loading: false,
};

export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    addToBox: (state, action) => {
      const box = current(state);
      const { payload: product } = action;

      if (!product) return box;

      const { id, title, ...variant } = getRelatedVariant(product) || {};

      const _product = { ...product, ...variant, variantId: id };

      const recordKey = getRecordKey(product);

      if (box.data.some((item) => item.recordKey === recordKey)) {
        const data = box.data.reduce((acc, cur) => {
          if (cur.recordKey === recordKey) {
            acc.push({
              ...cur,
              recordKey,
              quantity: parseInt(cur.quantity) + parseInt(_product.quantity),
            });
          } else {
            acc.push({ ...cur });
          }

          return acc;
        }, []);

        state.data = data;
      } else {
        state.data = [
          ...box.data,
          { ...product, recordKey: getRecordKey(product) },
        ];
      }
    },
    removeFromBox: (state, action) => {
      const box = current(state);
      const { payload: product } = action;

      if (!product) return box;

      const recordKey = getRecordKey(product);
      const existing = box.data.find((b) => b.recordKey === recordKey);

      if (existing) {
        if (
          !product.quantity ||
          parseInt(existing.quantity) - parseInt(product.quantity) < 1
        ) {
          state.data = box.data.filter((b) => b.recordKey !== recordKey);
        } else {
          state.data = box.data.map((p) => {
            if (p.recordKey === recordKey) {
              return {
                ...p,
                quantity:
                  parseInt(existing.quantity) - parseInt(product.quantity),
              };
            }
            return p;
          });
        }
      }
      return state;
    },
    deleteItem: (state, action) => {
      const box = current(state);
      const { payload: product } = action;

      if (!product) return box;

      const recordKey = getRecordKey(product);

      state.data = box.data.filter((b) => b.recordKey !== recordKey);

      return state;
    },

    getBox: (state) => {
      state.loading = true;
    },
    setBox: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    getBoxError: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
    emptyBox: (state) => {
      state.loading = false;
      state.data = [];
      localStorage.clear();
    },
    setFrequency: (state, action) => {
      state.frequency = action.payload;
    },
  },
});

export const {
  getBox,
  setBox,
  getBoxError,
  addToBox,
  deleteItem,
  removeFromBox,
  emptyBox,
  setFrequency,
} = boxSlice.actions;
export default boxSlice.reducer;
