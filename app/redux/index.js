import { combineReducers } from 'redux';
import { authReducer } from './AuthRedux';

export default combineReducers({
  auth: authReducer
});
