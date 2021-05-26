// eslint-disable-next-line
import {
  ADD_USER,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  GET_USER,
  GET_USER_FAILURE,
  SIGNUP_FAILURE,
} from '../actions';

const user = (state = {}, action) => {
  if (action.type === ADD_USER) {
    return { ...state, user: action.payload.user };
  }
  if (action.type === AUTH_SUCCESS) {
    return { ...state, user: action.payload.user };
  }

  if (action.type === AUTH_FAILURE) {
    return { ...state, loginErrors: action.payload.errors };
  }

  if (action.type === SIGNUP_FAILURE) {
    return { ...state, signupErrors: action.payload.errors };
  }

  if (action.type === GET_USER) {
    return { ...state, userData: action.payload.user };
  }

  if (action.type === GET_USER_FAILURE) {
    return { ...state, userError: action.payload.errors };
  }
  return state;
};

export default user;
