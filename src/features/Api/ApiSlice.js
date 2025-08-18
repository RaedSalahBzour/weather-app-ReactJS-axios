import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: "",
  weather: {},
  isLoading: false,
};
export const fetchWeather = createAsyncThunk(
  "weatherApi/fetchWeather",
  async () => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=32.45943&lon=35.30086&appid=5ba37f0acd4e396e46f41e0209bb9b94"
    );
    const temp = Math.round(response.data.main.temp - 272.15);
    const min = Math.round(response.data.main.temp_min - 272.15);
    const max = Math.round(response.data.main.temp_max - 272.15);
    const description = response.data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    //   setTemp({ num: tempr, min, max, description, icon });
    return { temp, min, max, description, icon };
  }
);
export const apiSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});
export const {} = apiSlice.actions;
export default apiSlice.reducer;
