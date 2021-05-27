import { combineReducers } from 'redux';
import user from './user';
import houses from './houses';

export default combineReducers({
  user,
  houses,
});
