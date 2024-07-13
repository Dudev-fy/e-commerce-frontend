import styled, { keyframes } from 'styled-components';

import { breakpoints } from '../../config/breakpoints';

export const OrderDiv = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30vh;
  margin: 15px auto;
  padding: 10px;

  :nth-child(1) {
    height: 25px;
  }

  button {
    margin-left: 10px;
    border: none;
    background-color: yellow;
    border-radius: 20px;
    width: 12%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    height: 25px;
    font-size: 15px;
    margin-top: 10px;
  }

  button:hover {
    background-color: darkorange;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  width: 75%;
  margin: 15px auto;
  padding: 10px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    height: 100%;
    width: 100%;
    padding: 0px 10px;
    margin: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 100%;
    width: 100%;
    padding: 0px 10px;
    margin: 0;
  }

  p {
    font-size: 18px;
  }
`;

export const H1 = styled.h1`
  margin: 10px 0px 10px 10px;
  margin-left: 15px;
  display: flex;
  align-self: flex-start;
`;

export const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 35vh;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
`;

export const ProductDesc = styled.div`
  padding: 20px;
  width: 50%;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const ProductImage = styled.div`
  width: 30%;
  background-color: white;
  padding: 10px;
  margin-left: 10px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 70%;
  }

  img {
    width: 80%;
    height: 100%;
  }
`;

export const ProductPrice = styled.div`
  padding: 20px;
  width: 20%;
  background-color: white;
  display: flex;
  justify-content: right;
`;

export const BorderTop = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  width: 97%;
  justify-content: right;

  p {
    margin-right: 5px;
  }
`;

export const BorderBottom = styled.div`
  width: 97%;
  border-bottom: 1px solid black;
`;

export const TotalValueDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    h2 {
      font-size: 18px;
      margin-top: 7px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    h2 {
      font-size: 18px;
      margin-top: 7px;
    }
  }

  button {
    margin-left: 25px;
    border: none;
    background-color: yellow;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    width: 20%;
    height: 30px;
    font-size: 15px;

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      width: 30%;
      height: 35px;
      margin-left: 5px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 30%;
      height: 35px;
      margin-left: 5px;
    }
  }

  button:hover {
    background-color: darkorange;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    justify-content: center;
  }

  i {
    background-color: black;
    width: 1px;
    height: 20px;
    align-self: center;
    margin: 17px 0 0 10px;
  }
`;

export const QuantityDiv = styled.span`
  display: flex;
  flex-direction: row;
  background-color: lightgrey;
  width: 17%;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid black;
  padding: 7px;
  margin-top: 20px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 30%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 30%;
  }

  :nth-child(1) {
    align-self: center;
    font-size: 14px;
  }

  :nth-child(2) {
    background-color: lightgrey;
    border: none;
    position: relative;
    cursor: pointer;

    option {
      font-size: 14px;
    }
  }
`;

export const ExcludeInput = styled.input`
  margin-left: 10px;
  margin-top: 18px;
  color: darkred;
  cursor: pointer;
  height: 15px;
  align-self: center;
  width: 12%;
  border: none;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    height: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 30px;
  }

  &:hover {
    color: rebeccapurple;
    border-bottom: 1px solid darkred;
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
