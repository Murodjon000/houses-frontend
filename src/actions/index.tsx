export const ADD_USER = 'ADD_USER';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const ADD_HOUSES = 'ADD_HOUSES';
export const GET_HOUSE_ERRORS = 'GET_HOUSE_ERRORS';
export const GET_HOUSE_DETAIL_ERRORS = 'GET_HOUSE_DETAIL_ERRORS';
export const GET_USER = 'GET_USER';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const ADD_HOUSES_DETAILS = 'ADD_HOUSES_DETAILS';
export const CREATE_NEW_HOUSE = 'CREATE_NEW_HOUSE';
export const GET_NEW_HOUSE_ERRORS = 'GET_NEW_HOUSE_ERRORS';

export const createUser = (user: object) => ({
  type: ADD_USER,
  payload: { user },
});

export const authSuccess = (user: object) => ({
  type: AUTH_SUCCESS,
  payload: { user },
});

export const getCurrentUser = (user: object) => ({
  type: GET_USER,
  payload: { user },
});

export const getUserFailure = (errors: object) => ({
  type: GET_USER_FAILURE,
  payload: { errors },
});

export const authFailure = (errors: object) => ({
  type: AUTH_FAILURE,
  payload: { errors },
});

export const signupFailure = (errors: object) => ({
  type: SIGNUP_FAILURE,
  payload: { errors },
});

export const addHouses = (houses: object) => ({
  type: ADD_HOUSES,
  payload: { houses },
});

export const getHousesErrors = (errors: object) => ({
  type: GET_HOUSE_ERRORS,
  payload: { errors },
});

export const addHouseDetails = (house: object) => ({
  type: ADD_HOUSES_DETAILS,
  payload: { house },
});

export const getHousesDetailsErrors = (errors: object) => ({
  type: GET_HOUSE_DETAIL_ERRORS,
  payload: { errors },
});

export const createNewHouse = (house: object) => ({
  type: CREATE_NEW_HOUSE,
  payload: { house },
});

export const getNewHouseError = (errors: object) => ({
  type: GET_NEW_HOUSE_ERRORS,
  payload: { errors },
});
