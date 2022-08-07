import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  .d-flex {
    display: flex;
    flex-wrap: wrap;

    > div {
      flex: 1 0 200px;
      padding: 5px;
      label {
        font-weight: bold;
        text-transform: capitalize;
        text-align: left;
        display: block;
        margin-bottom: 8px;
      }
      input:not([type="checkbox"]),
      select,
      textarea {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid grey;
        border-radius: 3px;
        padding: 16px;
      }
      .checkbox {
        display: flex;
        justify-content: space-around;
        align-items: center;
        label {
          font-weight: initial;
          color: #333;
          display: block;
          :not(:last-of-type) {
            margin-right: 18px;
          }
          input {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;
