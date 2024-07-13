import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../config/breakpoints';

export const MainDiv = styled.main`
  display: flex;
  justify-content: center;
  margin: 25px;
  height: 100vh;
  height: 100%;
  background-color: white;
  padding: 10px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 20px 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 20px 10px;
  }
`;

export const MiniImages = styled.div`
  display: flex;
  flex-direction: column;
  width: 8%;
  align-items: center;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    flex-direction: row;
    width: 30%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    width: 30%;
  }

  :nth-child(1) {
    margin-top: 0;
  }

  img {
    width: 60%;
    height: 100px;
    border: 2px solid black;
    margin-top: 5px;
    border-radius: 10px;

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      width: 70%;
      margin: 0px 5px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 70%;
      margin: 0px 5px;
    }
  }

  img:hover {
    border: 4px solid aqua;
  }
`;

export const ImageDiv = styled.div`
  width: 35%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    margin: 15px auto;
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 15px auto;
    width: 80%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DescDiv = styled.div`
  background-color: white;
  width: 40%;
  padding: 20px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

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

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 100%;
    height: 100%;
    height: 35vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 100%;
    height: 35vh;
  }

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

      @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        height: 5vh;
      }

      @media (max-width: ${breakpoints.mobile}) {
        height: 5vh;
      }
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

      @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        width: 100%;
        height: 5vh;
      }

      @media (max-width: ${breakpoints.mobile}) {
        width: 100%;
        height: 5vh;
      }
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

      @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
        height: 5vh;
      }

      @media (max-width: ${breakpoints.mobile}) {
        height: 5vh;
      }
    }
  }

  :nth-child(4) {
    margin-top: 10px;
    background-color: yellow;
    height: 10%;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      height: 5vh;
      margin-top: 30px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      height: 5vh;
      margin-top: 30px;
    }
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
