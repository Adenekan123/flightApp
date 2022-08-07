import React from "react";
import { BiRefresh } from "react-icons/bi";
import { Wrapper } from "./navbar.styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Navbar({
  updateDate,
  onPrevClick,
  onNextClick,
  onNowClick,
}) {
  return (
    <Wrapper>
      <button className="refresh">
        <BiRefresh />
      </button>
      <form action="#">
        <label htmlFor="start_time">From</label>
        <input type="date" id="start_time" onChange={(e) => updateDate(e)} />
        <label htmlFor="end_time">To</label>
        <input type="date" id="end_time" onChange={(e) => updateDate(e)} />
      </form>
      <div className="navigate">
        <button onClick={onPrevClick}>
          <BsArrowLeft />
        </button>
        <button onClick={onNowClick}>Now</button>
        <button onClick={onNextClick}>
          <BsArrowRight />
        </button>
      </div>
      <div className="zoom">
        <button>+</button>
        <button>-</button>
      </div>
      <button className="publish">Pulish</button>
      <select name="" id="utc">
        <option value="0">UTC</option>
        <option value="1">test</option>
      </select>
    </Wrapper>
  );
}
