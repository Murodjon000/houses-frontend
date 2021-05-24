import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { authCalls } from '../helpers/api_calls';
import { authSuccess } from '../actions';

const Login = ({ loginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    authCalls('login', user);
    loginSuccess(user);
  };

  const onEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const onPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  return (
    <div className="signup__wrapper  d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-font-md mb-2">Log in</h1>
      <p className=" text-center">
        Hi there! Log in and start looking houses from anywhere
      </p>
      <div id="auth-error" />
      <form className="d-flex flex-column my-3" onSubmit={handleUserSubmit}>
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
          type="submit"
          className="main-btn primary-shadow my-3"
          value="Log in"
        />
      </form>
      <p>Don`t have an account?</p>
      <Link to="/signup" className="text-decoration-none text-hover">
        Sign up
      </Link>
    </div>
  );
};

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (user) => dispatch(authSuccess(user)),
});

export default connect(null, mapDispatchToProps)(Login);
