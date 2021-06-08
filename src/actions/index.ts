/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

export const createUser = (user: Record<string, unknown>) => ({
  type: ADD_USER,
  payload: { user },
});

export const authSuccess = (user: Record<string, unknown>) => ({
  type: AUTH_SUCCESS,
  payload: { user },
});

export const getCurrentUser = (user: Record<string, unknown>) => ({
  type: GET_USER,
  payload: { user },
});

export const getUserFailure = (errors: Record<string, unknown>) => ({
  type: GET_USER_FAILURE,
  payload: { errors },
});

export const authFailure = (errors: Record<string, unknown>) => ({
  type: AUTH_FAILURE,
  payload: { errors },
});

export const signupFailure = (errors: Record<string, unknown>) => ({
  type: SIGNUP_FAILURE,
  payload: { errors },
});

export const addHouses = (houses: Record<string, unknown>) => ({
  type: ADD_HOUSES,
  payload: { houses },
});

export const getHousesErrors = (errors: Record<string, unknown>) => ({
  type: GET_HOUSE_ERRORS,
  payload: { errors },
});

export const addHouseDetails = (house: Record<string, unknown>) => ({
  type: ADD_HOUSES_DETAILS,
  payload: { house },
});

export const getHousesDetailsErrors = (
  errors: Record<string, unknown>,
) => ({
  type: GET_HOUSE_DETAIL_ERRORS,
  payload: { errors },
});

export const createNewHouse = (house: Record<string, unknown>) => ({
  type: CREATE_NEW_HOUSE,
  payload: { house },
});

export const getNewHouseError = (
  errors: Record<string, unknown>,
) => ({
  type: GET_NEW_HOUSE_ERRORS,
  payload: { errors },
});
