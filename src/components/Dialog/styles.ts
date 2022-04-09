import styled from 'styled-components'

export const Wrapper = styled.main`
  .modalBackground {
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalContainer {
    width: 500px;
    height: 500px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
  }

  .modalContainer .title {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }

  .titleCloseBtn {
    display: flex;
    justify-content: flex-end;
  }

  .titleCloseBtn button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }

  .modalContainer .body {
    flex: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
  }

  .modalContainer .footer {
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalContainer .footer button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }

  #cancelBtn {
    background-color: crimson;
  }
`