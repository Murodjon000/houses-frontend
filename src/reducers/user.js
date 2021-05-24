import { ADD_USER, AUTH_SUCCESS, GET_USER } from '../actions';

const user = (state = {}, action) => {
  if (action.type === ADD_USER) {
    return { ...state, user: action.payload.user };
  }
  if (action.type === AUTH_SUCCESS) {
    return { ...state, user: action.payload.user };
  }

  if (action.type === GET_USER) {
    return { ...state, userData: action.payload.user };
  }

  return state;
};

export default user;
