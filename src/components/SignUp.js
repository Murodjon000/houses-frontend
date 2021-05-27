import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { authCalls } from '../helpers/api_calls';
import { createUser, signupFailure } from '../actions';

const SignUp = ({ addUser, authError, errors }) => {
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
      password_confirmation: passwordConfirmation,
    };
    authCalls('signup', user, addUser, authError);
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
    <div className="signup__wrapper   d-flex flex-column flex-wrap">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className=" text-center text-font-md mb-2">Sign up</h1>
        <p className="text-center mb-2">
          Hi there! Sign up and start looking houses from anywhere
        </p>
        <div className="errors w-100">
          {errors ? (
            <div>
              <Alert key="6" variant="danger">
                {errors.data.message.map((item) => (
                  // eslint-disable-next-line react/jsx-key
                  <li key={Date.now() * Math.random(2)}>{item}</li>
                ))}
              </Alert>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="signup__wrapper-form w-100">
          <form className="d-flex flex-column my-3" onSubmit={handleUserSubmit}>
            <input
              type="text"
              placeholder="Enter your username"
              className="main-input"
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
        </div>

        <p>Have an account?</p>
        <Link
          to="/login"
          className="text-decoration-none text-center text-hover"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  addUser: PropTypes.func.isRequired,
  errors: PropTypes.object, // eslint-disable-line
  authError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.user.signupErrors,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(createUser(user)),
  authError: (error) => dispatch(signupFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
