import React from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const aircrafts = [
  { id: 1, title: "Airport1" },
  { id: 2, title: "Airport2" },
  { id: 3, title: "Airport3" },
  { id: 4, title: "Airport4" },
  { id: 5, title: "Airport5" },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "item 1",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
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
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 5,
    group: 2,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 5,
    group: 4,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 5,
    group: 5,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
];

export default function FlightSchedule() {
  return (
    <Timeline
      groups={aircrafts}
      items={items}
      defaultTimeStart={moment().add(-12, "hour")}
      defaultTimeEnd={moment().add(12, "hour")}
    />
  );
}
