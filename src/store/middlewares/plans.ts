import { getAllPlans, getProductsByPlan } from "@/api/plans";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getPlansError,
  setApplicablePlanProducts,
  setPlans,
} from "../reducers/plans";
import { PlanActions } from "../actions/plans";

export function* getPlansSaga(): Generator<any, void, any> {
  try {
    const data = yield call(getAllPlans);

    yield put(setPlans(data));
  } catch (error) {
    console.log("error", error);
    yield put(getPlansError(error));
  }
}

export function* getApplicablePlanProductsSaga(action: {
  type: string;
  payload: { planId: string };
}): Generator<any, void, any> {
  try {
    const { payload: planId } = action;
    const data = yield call(getProductsByPlan, planId);
    yield put(setApplicablePlanProducts(data));
  } catch (error) {
    console.log("error", error);
    yield put(getPlansError(error));
  }
}

export function* PlansSagaWatcher() {
  yield takeLatest(PlanActions.getPlans, getPlansSaga);
  yield takeLatest(
    PlanActions.getApplicablePlanProducts,
    getApplicablePlanProductsSaga
  );
}
