import { createAction } from "@reduxjs/toolkit";

export const PlanActions = {
  getPlans: createAction("plans/getPlans"),
  setPlans: createAction("plans/setPlans"),
  setSelectedPlan: createAction("plans/setSelectedPlan"),
  getApplicablePlanProducts: createAction("plans/getApplicablePlanProducts"),
  getPlansError: createAction("plans/getPlansError"),
};
