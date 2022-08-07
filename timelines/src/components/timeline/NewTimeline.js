import React, { useContext } from "react";
import moment from "moment";
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";

import Navbar from "./navbar";

//context
import TimelineContext from "../../context/timelineContext";

var minTime = moment().add(-6, "months").valueOf();
var maxTime = moment().add(6, "months").valueOf();

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title",
};

export default function NewTimeline({ title, ...rest }) {
  const { datefilter, updateDate, onNextClick, onPrevClick, onNowClick } =
    useContext(TimelineContext);

  const handleTimeChange = (
    visibleTimeStart,
    visibleTimeEnd,
    updateScrollCanvas
  ) => {
    if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
      updateScrollCanvas(minTime, maxTime);
    } else if (visibleTimeStart < minTime) {
      updateScrollCanvas(
        minTime,
        minTime + (visibleTimeEnd - visibleTimeStart)
      );
    } else if (visibleTimeEnd > maxTime) {
      updateScrollCanvas(
        maxTime - (visibleTimeEnd - visibleTimeStart),
        maxTime
      );
    } else {
      updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
    }
  };

  return (
    <>
      <Navbar
        updateDate={updateDate}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        onNowClick={onNowClick}
      />

      <Timeline
        {...rest}
        visibleTimeStart={new Date(datefilter.start_time).getTime()}
        visibleTimeEnd={new Date(datefilter.end_time).getTime()}
        // onTimeChange={handleTimeChange}
        itemHeightRatio={0.75}>
        <TimelineHeaders>
          <SidebarHeader>
            {({ getRootProps }) => {
              return <h3 {...getRootProps()}>{title}</h3>;
            }}
          </SidebarHeader>
          <DateHeader unit="primaryHeader" />
          <DateHeader />
        </TimelineHeaders>
      </Timeline>
    </>
  );
}
