import {
  ADD_USER,
  AUTH_FAILURE,
  AUTH_SUCCESS,
  GET_USER,
  GET_USER_FAILURE,
  SIGNUP_FAILURE,
} from '../actions';

export type userAction = {
  type:
    | typeof ADD_USER
    | typeof AUTH_SUCCESS
    | typeof SIGNUP_FAILURE
    | typeof AUTH_FAILURE
    | typeof GET_USER
    | typeof GET_USER_FAILURE;
  payload: { user: any } & { errors: any };
};

export type userState = {
  state:
    | {}
    | { user: any }
    | { loggedinUser: any }
    | { loginErrors: any }
    | { signupErrors: any }
    | { userData: any }
    | { userError: any };
};

const user = (state: any = {}, action: userAction) => {
  if (action.type === ADD_USER) {
    return { ...state, user: action.payload.user };
  }
  if (action.type === AUTH_SUCCESS) {
    return { ...state, loggedinUser: action.payload.user };
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
