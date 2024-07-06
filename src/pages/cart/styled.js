import styled, { keyframes } from 'styled-components';

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
`;

export const ProductDesc = styled.div`
  padding: 20px;
  width: 50%;
  background-color: white;
`;

export const ProductImage = styled.div`
  width: 30%;
  background-color: white;
  padding: 10px;
  margin-left: 10px;

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
  background-color: red;
  width: 97%;
  border-bottom: 1px solid black;
`;

export const TotalValueDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  button {
    margin-left: 25px;
    border: none;
    background-color: yellow;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    width: 20%;
    height: 30px;
    font-size: 15px;
  }

  button:hover {
    background-color: darkorange;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: row;

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
