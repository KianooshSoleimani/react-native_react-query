import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import UserReducer from './UserReducer';

const config = {
  key: 'primary',
  storage: AsyncStorage,
  blacklist: [''],
};

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default persistCombineReducers(config, {
  rehydrated,
  userData: UserReducer,
});
