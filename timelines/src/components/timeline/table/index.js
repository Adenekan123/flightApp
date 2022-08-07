import React from "react";

import { Wrapper } from "./table.styles";

export default function Table() {
  return (
    <Wrapper>
      <thead>
        <tr>
          <th>Day Shift</th>
          <th>Flight No</th>
          <th>STD</th>
          <th>ADEP</th>
          <th>ADES</th>
          <th>STA</th>
          <th>ALTN</th>
          <th>Distance</th>
          <th>Ferry</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" name="" id="" value="N/A" readonly />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <select name="" id="">
              <option value="1">option 1</option>
            </select>
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <select name="" id="">
              <option value="1">option 1</option>
            </select>
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="text" name="" id="" />
          </td>
          <td>
            <input type="checkbox" name="" id="" />
          </td>
          <td>
            <button>+</button>
            <button>del</button>
          </td>
        </tr>
      </tbody>
    </Wrapper>
  );
}
