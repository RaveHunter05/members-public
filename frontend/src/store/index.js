import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

import membersReducer from "./slices/membersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    members: membersReducer,
  },
});
