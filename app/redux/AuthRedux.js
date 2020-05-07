import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  authRequest: ['username', 'password'],
  authSuccess: ['data'],
  authFailure: ['error']
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  user: null,
  fetching: null,
  error: null
});

/* ------------- Selectors ------------- */
export const AuthSelectors = {
  getData: state => state.data
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({ fetching: true });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    user: data
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error });
};

/* ------------- Hookup Reducers To Types ------------- */

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.AUTH_FAILURE]: failure
});
