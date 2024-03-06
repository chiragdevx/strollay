import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  plans: any;
  loading: boolean;
  loadingPlans: boolean;
  selectedPlan: any;
  applicablePlanProducts: any;
  error: any;
}

export const initialState: InitialStateType = {
  plans: [],
  selectedPlan: {},
  applicablePlanProducts: [],
  error: null,
  loading: false,
  loadingPlans: false,
};

export const PlansSlice = createSlice({
  name: "plans",
  initialState,
  reducers: {
    getPlans: (state) => {
      state.loadingPlans = true;
    },
    setPlans: (state, action) => {
      state.loadingPlans = false;
      state.plans = action.payload;
    },

    setSelectedPlan: (state, action) => {
      state.loadingPlans = false;
      state.selectedPlan = action.payload;
    },
    setApplicablePlanProducts: (state, action) => {
      state.loading = false;
      state.applicablePlanProducts = action.payload;
    },

    getApplicablePlanProducts: (state, action) => {
      state.loading = true;
    },
    getPlansError: (state, action) => {
      state.loading = false;
      state.plans = [];
      state.error = action.payload;
    },
  },
});

export const {
  getPlans,
  setPlans,
  setSelectedPlan,
  setApplicablePlanProducts,
  getApplicablePlanProducts,
  getPlansError,
} = PlansSlice.actions;
export default PlansSlice.reducer;
