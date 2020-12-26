import { SET_LOGIN, SET_LOGOUT } from './types';

export const setLogin = (data) => {
  return {
    type: SET_LOGIN,
    payload: data,
  };
};

export const setLogout = () => {
  return {
    type: SET_LOGOUT,
  };
};
