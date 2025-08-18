import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/Api/ApiSlice";

export const Apistore = configureStore({
  reducer: { api: apiSlice },
});
