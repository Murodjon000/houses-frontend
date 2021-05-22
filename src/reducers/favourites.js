import { ADD_USER_FAVOURITES } from '../actions';

const userFavourites = (state = {}, action) => {
  if (action.type === ADD_USER_FAVOURITES) {
    return { ...state, favourites: action.payload.houses };
  }

  return state;
};

export default userFavourites;
