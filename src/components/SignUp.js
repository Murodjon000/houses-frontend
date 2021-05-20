import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { authCalls } from '../helpers/api_calls';
import { createUser } from '../actions';

const SignUp = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfiramtion] = useState('');

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
      passwordConfirmation,
    };
    authCalls('signup', user);
    addUser(user);
  };

  const onUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  };

  const onEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const onPasswordConfChange = (e) => {
    const { value } = e.target;
    setPasswordConfiramtion(value);
  };

  return (
    <div className="signup__wrapper  d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-font-md mb-2">Sign up</h1>
      <p className="w-25 text-center">
        Hi there! Sign up and start looking houses from anywhere
      </p>
      <form className="d-flex flex-column my-3" onSubmit={handleUserSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          className="main-input "
          onChange={onUsernameChange}
        />
        <input
          type="email"
          className="main-input my-3"
          placeholder="Enter your email"
          onChange={onEmailChange}
        />
        <input
          type="password"
          className="main-input "
          placeholder="Enter your password"
          onChange={onPasswordChange}
        />
        <input
          type="password"
          className="main-input my-3"
          placeholder="Confirm your password"
          onChange={onPasswordConfChange}
        />
        <input
          type="submit"
          className="main-btn primary-shadow"
          value="Sign up"
        />
      </form>
      <p>Have an account?</p>
      <Link to="/login" className="text-decoration-none text-hover">
        Login
      </Link>
    </div>
  );
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(SignUp);
