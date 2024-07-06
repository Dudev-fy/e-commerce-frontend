import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;

  a {
    margin-left: 100px;
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
