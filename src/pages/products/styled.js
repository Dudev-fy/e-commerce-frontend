import styled, { keyframes } from 'styled-components';

export const MainDiv = styled.main`
  display: flex;
  justify-content: center;
  margin: 25px;
  height: 60vh;
  background-color: white;
  padding: 10px;
`;

export const MiniImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 8%;
  align-items: center;

  :nth-child(1) {
    margin-top: 0;
  }
  img {
    width: 60%;
    height: 100px;
    border: 2px solid black;
    margin-top: 5px;
    border-radius: 10px;
  }

  img:hover {
    border: 4px solid aqua;
  }
`;

export const ImageDiv = styled.div`
  width: 35%;

  img {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    top: 42%;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  :nth-child(1) {
    left: 25px;
  }

  :nth-child(3) {
    right: 25px;
  }
`;

export const DescDiv = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;
  :nth-child(1) {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
`;

export const PriceDiv = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: start;
  border: 2px solid #0f1111;
  width: 25%;
  padding: 20px;
  :nth-child(1) {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  :nth-child(2) {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  :nth-child(3) {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    height: 9%;

    :nth-child(1) {
      width: 10%;
      border: 1px solid #888c8c;
      border-top-left-radius: 100px;
      border-bottom-left-radius: 100px;
      border-right-width: 0;
      background-color: gainsboro;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    }

    :nth-child(1):disabled {
      background-color: rgba(400, 400, 400);
      cursor: default;
    }

    :nth-child(2) {
      width: 80%;
      border: 1px solid #888c8c;
      background-color: gainsboro;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    }

    :nth-child(3) {
      width: 10%;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #888c8c;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
      border-left-width: 0;
      background-color: gainsboro;
      height: 100%;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
    }
  }

  :nth-child(4) {
    margin-top: 10px;
    background-color: yellow;
    height: 10%;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
  }

  :nth-child(4):hover {
    background-color: darkorange;
  }
`;

export const OrderImage = styled.div`
  width: 20%;
  height: 25vh;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const OrderText = styled.h2`
  margin-top: 40px;
`;

export const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 40%;

  :nth-child(2) {
    border-radius: 20px;
    border: none;
    width: 50%;
    height: 25px;
    margin-top: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    background-color: yellow;
    font-size: 15px;
  }

  :nth-child(2):hover {
    background-color: darkorange;
  }
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadingBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  animation: ${pulse} 1s infinite;
`;
