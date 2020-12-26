import { SET_LOGIN, SET_LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  isLogin: false,
  token: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin: true,
        token: action.payload.token,
      };
    case SET_LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: '',
      };

    default:
      return state;
  }
};
