import { ADD_HOUSES, ADD_HOUSES_DETAILS } from '../actions';

const housesRed = (state = {}, action) => {
  if (action.type === ADD_HOUSES) {
    return { ...state, houses: action.payload.houses };
  }

  if (action.type === ADD_HOUSES_DETAILS) {
    return { ...state, house: action.payload.house };
  }

  return state;
};

export default housesRed;
