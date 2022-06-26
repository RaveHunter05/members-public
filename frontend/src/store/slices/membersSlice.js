import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  membersData: [],
};

export const membersSlice = createSlice({
  name: "membersData",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.membersData.push(action.payload);
    },
    setData: (state, action) => {
      state.membersData = action.payload;
    },
  },
});

export const { updateData, setData } = membersSlice.actions;

export default membersSlice.reducer;
