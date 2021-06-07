import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { Link } from '@reach/router';
import { authCalls } from '../helpers/api_calls';
import { authFailure, authSuccess } from '../actions';

const Login: React.FunctionComponent<any> = ({
  loginSuccess,
  authError,
  errors,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserSubmit = (e: any) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    authCalls('login', user, loginSuccess, authError);
  };

  return (
    <div className="signup__wrapper  d-flex flex-column flex-wrap">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className=" text-center text-font-md mb-2">Log in</h1>
        <p className=" text-center mb-2">
          Hi there! Log in and start looking houses from anywhere
        </p>
        <div className="errors w-100">
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
        <form
          className="d-flex flex-column my-3 w-100"
          onSubmit={handleUserSubmit}
        >
          <input
            type="email"
            className="main-input my-3"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="main-input "
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="submit"
            className="main-btn primary-shadow my-3"
            value="Log in"
          />
        </form>
        <p>Don`t have an account?</p>
        <Link
          to="/signup"
          className="text-decoration-none text-hover"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  errors: state.user.loginErrors,
});

const mapDispatchToProps = (dispatch: any) => ({
  loginSuccess: (user: any) => dispatch(authSuccess(user)),
  authError: (error: any) => dispatch(authFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
