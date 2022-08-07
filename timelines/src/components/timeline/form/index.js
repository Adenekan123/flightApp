import React from "react";
import { Wrapper } from "./form.styles";

function Form() {
  return (
    <Wrapper>
      <div className="d-flex">
        <div>
          <label htmlFor="from">From</label>
          <input type="date" name="from" id="from" />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input type="date" name="to" id="to" />
        </div>
        <div>
          <label htmlFor="aircraft">aircraft</label>
          <select name="aircraft" id="aircraft">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label htmlFor="triptype">trip type</label>
          <select name="triptype" id="triptype">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label htmlFor="icadtype">icad type</label>
          <select name="icadtype" id="icadtype">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label htmlFor="client">Client</label>
          <input type="text" name="client" id="client" />
        </div>
        <div>
          <label htmlFor="client">repeat schedule</label>
          <div className="checkbox">
            <label>
              Mon
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Tue
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Wed
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Thur
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Fri
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Sat
              <input type="checkbox" name="" id="" />
            </label>
            <label>
              Sun
              <input type="checkbox" name="" id="" />
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="icadtype">commercial</label>
          <select name="icadtype" id="icadtype">
            <option>Yes</option>
          </select>
        </div>
      </div>
    </Wrapper>
  );
}

export default Form;
