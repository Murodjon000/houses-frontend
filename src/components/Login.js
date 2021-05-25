import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { authCalls } from '../helpers/api_calls';
import { authFailure, authSuccess } from '../actions';

const Login = ({ loginSuccess, authError, errors }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    authCalls('login', user, authError);
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
    <div className="signup__wrapper  row">
      <div className="col-md-6 mx-auto">
        <h1 className=" text-center text-font-md mb-2">Log in</h1>
        <p className=" text-center mb-2">
          Hi there! Log in and start looking houses from anywhere
        </p>
        <div className="errors">
          {errors ? (
            <div>
              <Alert key="7" variant="danger">
                <li>Invalid email or password</li>
              </Alert>
            </div>
          ) : (
            ''
          )}
        </div>
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
    </div>
  );
};

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
  errors: PropTypes.any, // eslint-disable-line
  authError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.user.errors,
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (user) => dispatch(authSuccess(user)),
  authError: (error) => dispatch(authFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
