import { createSlice, current } from "@reduxjs/toolkit";

interface InitialStateType {
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
}

export const initialState: InitialStateType = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleAuth: (state, action) => {
      const data = current(state);
      console.log("User success Reducer:>> ", data, action);
      state.loading = false;
    },
    loginSuccess: (state, action) => {
      const data = current(state);
      state.isAuthenticated = true;
      console.log("action.payload", action.payload);
      const { data: _data } = action.payload;
      const { access_token } = _data;
      localStorage.setItem("access_token", access_token);
    },
  },
});

export const { toggleAuth, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
