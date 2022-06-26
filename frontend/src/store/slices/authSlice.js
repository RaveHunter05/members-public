import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignedIn: false,
  token: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
      state.isSignedIn = true;
    },
    signOut: (state) => {
      state.token = null;
      state.isSignedIn = false;
    },
    authenticateError(state, action) {
      state.token = null;
      state.error = action.payload;
    },
  },
});

export const { signIn, signOut, authenticateError } = authSlice.actions;

export default authSlice.reducer;
