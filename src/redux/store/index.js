import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import reducers from '../reducers/index';

const middleware = [thunk];
middleware.push(createLogger());

const store = createStore(
  reducers,
  {},
  compose(applyMiddleware(...middleware)),
);

persistStore(store, null, () => store.getState());

export default store;
