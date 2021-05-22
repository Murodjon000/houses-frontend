export const ADD_USER = 'ADD_USER';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const ADD_HOUSES = 'ADD_HOUSES';
export const ADD_HOUSES_DETAILS = 'ADD_HOUSES_DETAILS';
export const ADD_USER_FAVOURITES = 'ADD_USER_FAVOURITES';

/* eslint-disable */

export const createUser = (user) => ({
  type: ADD_USER,
  payload: { user },
});

export const authSuccess = (user) => ({
  type: AUTH_SUCCESS,
  payload: { user },
});

export const authFailure = (errors) => ({
  type: AUTH_FAILURE,
  payload: { errors },
});

export const addHouses = (houses) => ({
  type: ADD_HOUSES,
  payload: { houses },
});

export const addHouseDetails = (house) => ({
  type: ADD_HOUSES_DETAILS,
  payload: { house },
});

export const addUserFavourites = (houses) => ({
  type: ADD_USER_FAVOURITES,
  payload: { houses },
});
