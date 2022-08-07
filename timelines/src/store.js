import { configureStore } from "@reduxjs/toolkit";

//reducers
import modalReducer from "./features/modal/modalSlice.js";
import aircraftsReducer from "./features/aircraft/aircraftSlice";
import schedulesReducer from "./features/schedules/scheduleSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    aircrafts: aircraftsReducer,
    schedules: schedulesReducer,
  },
});

export default store;
