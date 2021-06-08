import {
  ADD_HOUSES,
  ADD_HOUSES_DETAILS,
  CREATE_NEW_HOUSE,
  GET_HOUSE_DETAIL_ERRORS,
  GET_HOUSE_ERRORS,
  GET_NEW_HOUSE_ERRORS,
} from '../actions';

type houseAction = {
  type:
    | typeof ADD_HOUSES
    | typeof ADD_HOUSES_DETAILS
    | typeof CREATE_NEW_HOUSE
    | typeof GET_HOUSE_DETAIL_ERRORS
    | typeof GET_HOUSE_ERRORS
    | typeof GET_NEW_HOUSE_ERRORS;
  payload: { houses: Record<string, unknown> } & {
    errors: Record<string, unknown>;
  } & {
    house: Record<string, unknown>;
  };
};

type houseState = {
  state: Record<string, unknown>;
};

const initialValue = { state: {} };

const housesRed = (
  state: houseState = initialValue,
  action: houseAction,
) => {
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

  if (action.type === CREATE_NEW_HOUSE) {
    return { ...state, newHouse: action.payload.house };
  }

  if (action.type === GET_NEW_HOUSE_ERRORS) {
    return { ...state, newHouseError: action.payload.errors };
  }

  return state;
};

export default housesRed;
