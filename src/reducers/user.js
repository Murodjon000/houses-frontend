import { ADD_USER, AUTH_SUCCESS } from '../actions';

const user = (state = {}, action) => {
  if (action.type === ADD_USER) {
    return { ...state, user: action.payload.user };
  }
  if (action.type === AUTH_SUCCESS) {
    return { ...state, user: action.payload.user };
  }

  return state;
};

export default user;
