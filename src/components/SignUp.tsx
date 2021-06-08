import React, { Dispatch, useState } from 'react';
import { Link } from '@reach/router';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { authCalls } from '../helpers/api_calls';
import { createUser, signupFailure } from '../actions';
import { createUserSign } from '../helpers/upload_calls';
import Flash from './Flash';

const SignUp: React.FunctionComponent<any> = ({
  addUser,
  authError,
  errors,
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfiramtion] =
    useState('');
  const [file, setFile] = useState<any>('');

  const handleUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file !== '') {
      const user = {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
        image: file,
      };
      createUserSign(user, addUser, authError);
    } else {
      window.flash('Avatar shoud be selected!', 'warning');
    }
  };

  const fileChange = (files: any) => {
    setFile(files[0]);
  };

  return (
    <div className="signup__wrapper   d-flex flex-column flex-wrap">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className=" text-center text-font-md mb-2">Sign up</h1>
        <p className="text-center mb-2">
          Hi there! Sign up and start looking houses from anywhere
        </p>
        <Flash />
        <div className="errors w-100">
          {errors ? (
            <div>
              <Alert key="6" variant="danger">
                {errors.data.message.map((item: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <li key={Date.now() * Math.random()}>{item}</li>
                ))}
              </Alert>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="signup__wrapper-form w-100">
          <form
            className="d-flex flex-column my-3"
            onSubmit={handleUserSubmit}
          >
            <input
              type="text"
              placeholder="Enter your username"
              className="main-input"
              onChange={(e) => setUsername(e.target.value)}
            />
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
              type="password"
              className="main-input my-3"
              placeholder="Confirm your password"
              onChange={(e) =>
                setPasswordConfiramtion(e.target.value)
              }
            />
            <label htmlFor="avatar">
              Upload Avatar
              <input
                type="file"
                className="w-100 my-3"
                onChange={(e) => fileChange(e.target.files)}
                id="avatar"
              />
            </label>
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

type stateTypes = {
  user: {
    signupErrors: string[];
  };
};

const mapStateToProps = (state: stateTypes) => ({
  errors: state.user.signupErrors,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  addUser: (user: any) => dispatch(createUser(user)),
  authError: (error: any) => dispatch(signupFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
