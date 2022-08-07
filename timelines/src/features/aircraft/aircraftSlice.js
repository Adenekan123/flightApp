import { createSlice } from "@reduxjs/toolkit";

const data = [
  { id: 1, title: "Airport1" },
  { id: 2, title: "Airport2" },
  { id: 3, title: "Airport3" },
  { id: 4, title: "Airport4" },
  { id: 5, title: "Airport5" },
];
const initialState = {
  aircrafts: data,
  isLoading: false,
  error: false,
};

// export const getAircrafts = createAsyncThunk(
//   "flight/airctafts",
//   async (id, thunkAPI) => {
//     try {
//       //   const response = await fetch("src/aircrats.json");
//       //   const res = await response.json();
//       //   console.log(res);
//       return data;
//     } catch (e) {
//       thunkAPI.rejectWithValue(e);
//     }
//   }
// );

const flightScheduleSlice = createSlice({
  name: "aircrafts",
  initialState,
  reducers: {
    getAircraftById: (state, { payload }) => {
      return state.aircafts.filter((aircaft) => aircaft.id === payload);
    },
  },
});

export const { getAircraftById } = flightScheduleSlice.actions;
export default flightScheduleSlice.reducer;

// extraReducers: (builder) => {
//   builder.addCase(getAircrafts.pending, (state, action) => {
//     console.log("pending");
//     return (state.isLoading = true);
//   });
//   builder.addCase(getAircrafts.fulfilled, (state, action) => {
//     console.log("Fulfilled");
//   });

//   builder.addCase(getAircrafts.rejected, (state, action) => {
//     console.log("rejected");
//     return (state.error = true);
//   });
// },
