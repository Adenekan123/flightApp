import moment from "moment";
import { createSlice } from "@reduxjs/toolkit";
const data = [
  {
    id: 1,
    group: 1,
    title: "item here",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      "data-custom-attribute": "Random content",
      "aria-hidden": true,
      onDoubleClick: () => {
        console.log("You clicked double!");
      },
      className: "weekend",
      dragSnap: true,
    },
  },
  {
    id: 2,
    group: 2,
    title: "item 2",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour"),
  },
  {
    id: 3,
    group: 3,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 4,
    group: 1,
    title: "item 4",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 5,
    group: 2,
    title: "item 5",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 6,
    group: 4,
    title: "item 6",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 7,
    group: 5,
    title: "item 7",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
];

const initialState = {
  schedules: data,
  isLoading: false,
  error: false,
};

const scheduleSlice = createSlice({
  name: "schedules",
  initialState,
});

export default scheduleSlice.reducer;
