import React, { useDispatch } from "react-redux";
import { modalClose } from "../../features/modal/modalSlice";

import { Wrapper } from "./modal.styles";

export default function Modal({ children, size = "small" }) {
  const dispatch = useDispatch();
  return (
    <Wrapper size={size}>
      <div className="content">
        <div className="header">
          <span>New Scedule</span>
          <button className="close" onClick={() => dispatch(modalClose())}>
            Close
          </button>
        </div>
        <div className="body">{children}</div>
        <div className="footer">
          <button>Add Schedule</button>
        </div>
      </div>
    </Wrapper>
  );
}
