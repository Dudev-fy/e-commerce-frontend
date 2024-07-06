import styled, { keyframes } from 'styled-components';

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

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    margin-top: 5px;
    font-size: 17px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
`;
