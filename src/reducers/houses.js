import { ADD_HOUSES } from '../actions';

const housesRed = (state = {}, action) => {
  if (action.type === ADD_HOUSES) {
    return { ...state, houses: action.payload.houses };
  }

  return state;
};

export default housesRed;
