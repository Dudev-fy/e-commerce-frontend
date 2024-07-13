/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';

import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import {
  Nav,
  HamburgerIcon,
  Overlay,
  MobileMenu,
  CloseIcon,
  MobileCartIcon,
  MobileIcons,
} from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [customer, setCustomer] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function getCustomerName() {
      try {
        const response = await axios.get('customers');
        setCustomer(response.data);
      } catch {
        setCustomer('');
      }
    }

    if (isLoggedIn) {
      getCustomerName();
    }
  }, [isLoggedIn]);

  function handleLogOut() {
    dispatch(actions.loginFailure());
    history.push('/login');
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      {isLoggedIn ? (
        <>
          <Nav>
            <Link to="/">
              <h1>Duduzon</h1>
            </Link>
            <MobileIcons>
              <MobileCartIcon>
                <Link to="/cart">
                  <IoMdCart className="icon" />
                </Link>
              </MobileCartIcon>
              <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
            </MobileIcons>
            <ul>
              {customer && <h2>Hello, {customer.firstName}</h2>}
              <li>
                <Link to="/cart">
                  <IoMdCart className="icon" />
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/order">Orders</Link>
              </li>
              <button type="button" onClick={handleLogOut}>
                <BiLogOut className="icon" />
                Log Out
              </button>
            </ul>
          </Nav>
          {isOpen && (
            <>
              <Overlay onClick={toggleMenu} />
              <MobileMenu>
                <CloseIcon onClick={toggleMenu}>✕</CloseIcon>
                <ul>
                  <li>
                    <Link to="/order" onClick={toggleMenu}>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={toggleMenu}>
                      About
                    </Link>
                  </li>
                </ul>
              </MobileMenu>
            </>
          )}
        </>
      ) : (
        <>
          <Nav>
            <Link to="/">
              <h1>Duduzon</h1>
            </Link>
            <HamburgerIcon onClick={toggleMenu}>☰</HamburgerIcon>
            <ul>
              <li>
                <Link to="/login">
                  <BiLogIn className="icon" />
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <BiLogIn className="icon" />
                  Sign Up
                </Link>
              </li>
            </ul>
          </Nav>
          {isOpen && (
            <>
              <Overlay onClick={toggleMenu} />
              <MobileMenu>
                <CloseIcon onClick={toggleMenu}>✕</CloseIcon>
                <ul>
                  <li>
                    <Link to="/login" onClick={toggleMenu}>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" onClick={toggleMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </MobileMenu>
            </>
          )}
        </>
      )}
    </header>
  );
}
