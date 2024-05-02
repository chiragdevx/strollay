import { getRecordKey } from "@/common/util/helper";
import { createSlice, current } from "@reduxjs/toolkit";

// import { getCouponDiscount } from "~/utils/coupons";

interface CollectionState {
  data: Array<any>;
  loading: Boolean;
  selectedCollectionId: string | null;
  selectedCollectionProducts: Array<any>;
  error: any;
}

// Define the initial state
const initialState: CollectionState = {
  data: [],
  selectedCollectionId: null,
  selectedCollectionProducts: [],
  loading: false,
  error: null,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setSelectedCollectionId: (state, action) => {
      console.log("first", action.payload);
      state.selectedCollectionId = action.payload;
    },

    setCollections: (state, action) => {
      const collections = action.payload;
      const filteredCollections = collections.filter((collection: any) => {
        return collection.status === "ACTIVE";
      });
      state.data = filteredCollections;
      state.selectedCollectionId = filteredCollections[0].id;
    },

    setCollectionError: (state, action) => {
      state.error = action.payload;
    },

    setSelectedCollectionProducts: (state, action) => {
      state.selectedCollectionProducts = action.payload;
    },
  },
});

export const {
  setSelectedCollectionId,
  setCollections,
  setCollectionError,
  setSelectedCollectionProducts,
} = collectionSlice.actions;

export default collectionSlice.reducer;
