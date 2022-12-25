import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  token: string | null;
};

type stateSelector = {
  auth: {
    token: string | null;
  };
};

const initialState: initialStateType = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: stateSelector) => state.auth.token;
