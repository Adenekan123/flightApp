import styled from "styled-components";

export const Wrapper = styled.table`
  margin-top: 3rem;
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  border-top: 1px solid grey;
  font-size: 12px;

  th,
  td {
    border-top: 1px solid grey;
    padding: 8px;
  }
  input,
  select {
    width: 80px;
  }
`;
