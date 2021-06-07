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

export const createUser = (user: any) => ({
  type: ADD_USER,
  payload: { user },
});

export const authSuccess = (user: any) => ({
  type: AUTH_SUCCESS,
  payload: { user },
});

export const getCurrentUser = (user: any) => ({
  type: GET_USER,
  payload: { user },
});

export const getUserFailure = (errors: any) => ({
  type: GET_USER_FAILURE,
  payload: { errors },
});

export const authFailure = (errors: any) => ({
  type: AUTH_FAILURE,
  payload: { errors },
});

export const signupFailure = (errors: any) => ({
  type: SIGNUP_FAILURE,
  payload: { errors },
});

export const addHouses = (houses: any) => ({
  type: ADD_HOUSES,
  payload: { houses },
});

export const getHousesErrors = (errors: any) => ({
  type: GET_HOUSE_ERRORS,
  payload: { errors },
});

export const addHouseDetails = (house: any) => ({
  type: ADD_HOUSES_DETAILS,
  payload: { house },
});

export const getHousesDetailsErrors = (errors: any) => ({
  type: GET_HOUSE_DETAIL_ERRORS,
  payload: { errors },
});

export const createNewHouse = (house: any) => ({
  type: CREATE_NEW_HOUSE,
  payload: { house },
});

export const getNewHouseError = (errors: any) => ({
  type: GET_NEW_HOUSE_ERRORS,
  payload: { errors },
});
