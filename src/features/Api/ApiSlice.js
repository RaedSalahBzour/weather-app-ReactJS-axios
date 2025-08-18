import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
});
export const {} = apiSlice.actions;
export default apiSlice.reducer;
