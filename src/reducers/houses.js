import {
  ADD_HOUSES,
  ADD_HOUSES_DETAILS,
  GET_HOUSE_DETAIL_ERRORS,
  GET_HOUSE_ERRORS,
} from '../actions';

const housesRed = (state = {}, action) => {
  if (action.type === ADD_HOUSES) {
    return { ...state, houses: action.payload.houses };
  }

  if (action.type === GET_HOUSE_ERRORS) {
    return { ...state, errors: action.payload.errors };
  }

  if (action.type === ADD_HOUSES_DETAILS) {
    return { ...state, house: action.payload.house };
  }

  if (action.type === GET_HOUSE_DETAIL_ERRORS) {
    return { ...state, houseError: action.payload.errors };
  }

  return state;
};

export default housesRed;
