import "./App.css";
import FlightSchedule from "./pages/FlightSchedule";
import Modal from "./components/modal";

import { useSelector } from "react-redux";

//custom hooks
function App() {
  const { isOpen, content } = useSelector((store) => store.modal);

  return (
    <>
      {isOpen && <Modal>{content}</Modal>}
      <FlightSchedule />
    </>
  );
}

export default App;
