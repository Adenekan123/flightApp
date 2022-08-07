import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  ${"" /* height: 100vh; */}
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .content {
    width: 70%;
    background-color: #fff;
    box-shadow: 0 25px 30px rgba(0, 0, 0, 6%);
    text-align: center;

    .body {
      padding: 2rem;
    }
    .header {
      padding: 20px;
      background-color: crimson;
      color: #fff;
      position: relative;
      display: flex;
      justify-content: space-between;

      ${
        "" /* .close {
        position: absolute;
        right: 8px;
        top: 8px;
      } */
      }
    }
    .footer {
      padding: 16px;
      border-top: 1px solid;
    }

    button{
      bac
    }
  }
`;
