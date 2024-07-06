/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';
import { isEmail } from 'validator';

import Loading from '../../components/Loading';
import { Main, Form, Label } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, 'location.state.prevPath', '/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmptyFields, setEmptyFields] = useState(false);
  const [isUnauthorized, setUnauthorized] = useState(false);
  const [isInvalidEmail, setInvalidEmail] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isLoading = useSelector((state) => state.auth.isLoading);

  async function handleSubmit(e) {
    e.preventDefault();
    setEmptyFields(false);
    setUnauthorized(false);
    setInvalidEmail(false);

    if (!email || !password) {
      setEmptyFields(true);
    } else if (!isEmail(email)) {
      setInvalidEmail(true);
    } else {
      dispatch(actions.loginRequest({ email, password, prevPath }));
    }

    if (!isLoggedIn && !isLoading) {
      setTimeout(() => {
        setUnauthorized(true);
      }, 1000);
    }
  }

  function handleClick() {
    history.push('/signup');
  }

  return (
    <Main>
      <Loading isLoading={isLoading} />

      <h2>Sign in with your account</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email" isError={isEmptyFields || isInvalidEmail}>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        {isEmptyFields && <p>*Please insert an email address</p>}
        {isInvalidEmail && <p>*Invalid email address</p>}
        <Label htmlFor="password" isError={isEmptyFields || isUnauthorized}>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        {isEmptyFields && <p>*Please insert a password</p>}
        {isUnauthorized && <p>*Invalid email or password</p>}
        <button type="submit">Sign in</button>
      </Form>
      <p>Don&apos;t have an account yet?</p>
      <button type="button" onClick={handleClick}>
        Create account
      </button>
    </Main>
  );
}
