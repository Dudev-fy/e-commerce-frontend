import styled from 'styled-components';
import { breakpoints } from '../../config/breakpoints';

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 35px;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 0 auto;
  margin-top: 20px;
  width: 70%;

  button {
    background-color: yellow;
    font-size: 16px;
    color: black;
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    border: 0.5px solid rgba(0, 0, 0, 0.5);

    &:hover {
      background-color: darkorange;
    }
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProductDiv = styled.div``;

export const ImageDiv = styled.div`
  background-color: white;
  height: 284px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    padding: 5px;
  }
`;

export const SubDiv = styled.div`
  background-color: aliceblue;
  height: 40vh;
  padding: 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  :nth-child(1) {
    color: black;
  }
  :nth-child(1):hover {
    color: darkred;
  }
  :nth-child(3) {
    color: green;
  }

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    height: 30vh;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 30vh;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-top: 10px;
`;
