import { call, put, takeLatest } from "redux-saga/effects";
import { productActions } from "../actions/products";
import { UserActions } from "../actions/user";
import createApi from "@/api/api";
import { loginSuccess } from "../reducers/user";

// fetches all products
export function* login(action: any): Generator<any, void, any> {
  try {
    const { email, password } = action.payload;
    const api = createApi("OMS", "auth/login");
    const _payload = {
      payload: {
        email,
        password,
      },
    };
    const response = yield call(api.post, _payload);
    yield put(loginSuccess(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export function* userSagaWatchers() {
  yield takeLatest(UserActions.login, login);
}
