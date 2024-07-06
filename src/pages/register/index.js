/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { isEmail } from 'validator';

import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';

import { Form, Main, Label } from './styled';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFirstNameError, setFirstNameError] = useState(false);
  const [isLastNameError, setLastNameError] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isCpfError, setCpfError] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isSuccess, setSuccess] = useState(false);
  const [isAccountError, setAccountError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleCpfChange(e) {
    const input = e.target.value;
    const newInput = input.replace(/[^0-9]/g, '');
    setCpf(newInput);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errors = [];
    let isError = false;

    if (firstName.length < 3 || firstName.length > 255) {
      setFirstNameError(true);
      isError = true;
    } else {
      setFirstNameError(false);
    }

    if (lastName.length < 3 || lastName.length > 255) {
      setLastNameError(true);
      isError = true;
    } else {
      setLastNameError(false);
    }

    if (cpf.length < 3 || cpf.length > 255) {
      setCpfError(true);
      isError = true;
    } else {
      setCpfError(false);
    }

    if (!isEmail(email)) {
      setEmailError(true);
      isError = true;
    } else {
      setEmailError(false);
    }

    if (password.length < 12 || cpf.length > 50) {
      errors.push('*Password must have between 12 and 50 characters');
      isError = true;
    } else {
      if (!/[A-Z]/.test(password)) {
        errors.push('*Password must have at least one uppercase letter');
        isError = true;
      }
      if (!/[0-9]/.test(password)) {
        errors.push('*Password must have at least one number');
        isError = true;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('*Password must have at least one special character');
        isError = true;
      }
    }

    setPasswordErrors(errors);

    if (!isError) {
      const data = {
        firstName,
        lastName,
        cpf,
        email,
        password,
      };

      try {
        setIsLoading(true);
        await axios.post('/customers', data);
        setTimeout(() => {
          setSuccess(true);
          history.push('/login');
          setIsLoading(false);
        }, 3000);
      } catch (error) {
        setAccountError(true);
      }
    }
  }

  function goToLogin(e) {
    e.preventDefault();

    history.push('/login');
  }

  function refreshPage(e) {
    e.preventDefault();

    history.go(0);
  }

  if (isSuccess) {
    return (
      <Main>
        <h2>Your account was created successfully!</h2>
        <h2>Redirecting you to the login page ...</h2>
      </Main>
    );
  }

  if (isAccountError) {
    return (
      <Main>
        <h2>Account already exists</h2>
        <button type="button" onClick={(e) => goToLogin(e)}>
          Go to login page
        </button>
        <button type="button" onClick={(e) => refreshPage(e)}>
          Try Again
        </button>
      </Main>
    );
  }

  return (
    <Main>
      <Loading isLoading={isLoading} />

      <h2>Create your account</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName" isError={isFirstNameError}>
          First name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Label>
        {isFirstNameError && (
          <p>*First name must have between 3 and 255 characters</p>
        )}
        <Label htmlFor="lastName" isError={isLastNameError}>
          Last name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Label>
        {isLastNameError && (
          <p>*Last name must have between 3 and 255 characters</p>
        )}
        <Label htmlFor="cpf" isError={isCpfError}>
          CPF:
          <input type="text" value={cpf} onChange={(e) => handleCpfChange(e)} />
        </Label>
        {isCpfError && <p>*Invalid CPF</p>}
        <Label htmlFor="email" isError={isEmailError}>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        {isEmailError && <p>*Invalid email</p>}
        <Label htmlFor="password" isError={passwordErrors}>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        {passwordErrors && passwordErrors.length > 0 && (
          <ul>
            {passwordErrors.map((error, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
        <button type="submit">Create account</button>
      </Form>
    </Main>
  );
}
