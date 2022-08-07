import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../features/modal/modalSlice";

//components
import NewTimeline from "../components/timeline/NewTimeline";
import Form from "../components/timeline/form";
import Table from "../components/timeline/table";

//context
import { TimelineProvider } from "../context/timelineContext";

export default function FlightSchedule() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAircrafts());
  // }, [dispatch]);
  const { aircrafts } = useSelector((store) => store.aircrafts);
  const { schedules } = useSelector((store) => store.schedules);
  console.log(aircrafts, schedules);
  return (
    <TimelineProvider>
      <NewTimeline
        title={"Flight App"}
        groups={aircrafts}
        items={schedules}
        itemHeightRatio={0.8}
        minZoom={24 * 60 * 60 * 1000}
        canResize={"both"}
        traditionalZoom={true}
        onItemSelect={(itemid, e, time) => {
          dispatch(modalOpen("<p>Here</p>"));
          console.log(itemid);
        }}
      />
      <button
        onClick={() =>
          dispatch(
            modalOpen(
              <>
                <Form /> <Table />
              </>
            )
          )
        }>
        New Schedule
      </button>
    </TimelineProvider>
  );
}
