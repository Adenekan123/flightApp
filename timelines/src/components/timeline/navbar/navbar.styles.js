import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  background-color: #eee;
  padding: 16px;
  .navigate {
    display: flex;
    align-items: center;
    margin-right: 48px;

    button {
      background-color: #fff;
      box-shadow: 0px 20px 25px rgba(0, 0, 0, 5%);
      font-size: 16px;
      border: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      cursor: pointer;
      padding: 8px 16px;
      color: #111;

      :nth-of-type(2) {
        font-size: 16px;
        font-weight: bold;
        margin: 0 16px;
      }
    }
  }
  .zoom {
    display: inlein-flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    button {
      background-color: #fff;
      box-shadow: 0px 20px 25px rgba(0, 0, 0, 5%);
      font-size: 16px;
      border: 0px;
      display: inlein-flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      cursor: pointer;
      padding: 8px 16px;
      color: #111;
      :nth-of-type(2) {
        font-size: 16px;
        font-weight: bold;
        margin: 0 16px;
      }
    }
  }
  form {
    margin: 0 48px;
    display: flex;
    align-items: center;
    input {
      border-radius: 5px;
      padding: 12px 16px;
      border: 0px;
      box-shadow: 0px 20px 25px rgba(0, 0, 0, 5%);

      :first-of-type {
        margin-right: 24px;
      }
    }
    label {
      font-weight: 600;
      text-transform: capitalize;
      margin-right: 15px;
    }
  }

  select {
    padding: 12px 48px;
    border-radius: 5px;
    border: 0px;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 5%);
  }

  button.refresh {
    background-color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 5%);
    font-size: 24px;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: crimson;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: tomato;
    }
  }

  button.publish {
    padding: 8px 24px;
    font-size: 16px;
    margin-right: 48px;
    border-radius: 5px;
    border: 0px;
    background-color: crimson;
    color: white;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 20px 25px rgba(0, 0, 0, 5%);
    :hover {
      background-color: tomato;
    }
  }
`;
