import styled from 'styled-components';

import { breakpoints } from '../../config/breakpoints';

export const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;

  a {
    margin-left: 100px;

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      margin-left: 30px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-left: 30px;
    }
  }

  .icon {
    color: white;
    width: 30px;
    font-size: 20px;
  }

  ul {
    display: flex;
    height: 100%;
    align-items: center;
    margin-right: 100px;

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      display: none;
    }

    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }

    @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
      display: none;
    }

    a {
      color: white;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 100%;
      margin-left: 0px;
    }

    a:hover {
      border: 1px solid aliceblue;
    }

    button {
      border: none;
      height: 70%;
      background-color: black;
      color: white;
      font-size: 17px;
      padding: 0 1rem;
      height: 90%;
      display: flex;
      align-items: center;
    }

    button:hover {
      border: 1px solid aliceblue;
    }
  }

  li {
    height: 100%;
    padding: 3px 0;
  }

  h1 {
    color: white;
  }

  h2 {
    color: white;
    font-size: 17px;
    margin-right: 15px;
  }
`;

export const MobileIcons = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  display: flex;
  align-items: center;
`;

export const HamburgerIcon = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  font-size: 28px;
  color: #fff;
  cursor: pointer;
  margin-right: 50px;
`;

export const Overlay = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;

export const MobileMenu = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;

  ul {
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    font-size: 18px;
    color: #000;
    cursor: pointer;
    padding: 0px 20px;
    align-items: center;
    height: 100%;
  }

  li {
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    height: 35px;
  }
`;

export const CloseIcon = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  padding: 0 20px;
  align-self: flex-end;
  font-size: 24px;
  cursor: pointer;
`;

export const MobileCartIcon = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }

  :nth-child(1) {
    font-size: 28px;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;
