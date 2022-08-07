import { createContext, useState } from "react";
import moment from "moment";

const TimelineContext = createContext();
const default_datefilter = {
  start_time: moment().add(-12, "hour"),
  end_time: moment().add(12, "hour"),
};

export function TimelineProvider({ children }) {
  const [datefilter, setdatefilter] = useState(default_datefilter);

  function updateDate(e) {
    setdatefilter({ ...datefilter, [e.target.id]: e.target.value });
  }

  function onPrevClick() {
    const zoom = datefilter.end_time - datefilter.start_time;
    setdatefilter({
      ...datefilter,
      start_time: datefilter.start_time - zoom,
      time_end: datefilter.end_time - zoom,
    });
  }

  function onNextClick() {
    const zoom = datefilter.end_time - datefilter.start_time;
    setdatefilter({
      ...datefilter,
      start_time: datefilter.start_time + zoom,
      end_time: datefilter.end_time + zoom,
    });
  }

  function onNowClick() {
    setdatefilter({
      ...datefilter,
      start_time: default_datefilter.start_time,
      end_time: default_datefilter.end_time,
    });
  }

  return (
    <TimelineContext.Provider
      value={{ datefilter, updateDate, onPrevClick, onNextClick, onNowClick }}>
      {children}
    </TimelineContext.Provider>
  );
}

export default TimelineContext;
