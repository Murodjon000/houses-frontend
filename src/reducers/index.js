import { combineReducers } from 'redux';
import user from './user';
import houses from './houses';
import favourites from './favourites';

export default combineReducers({
  user,
  houses,
  favourites,
});
