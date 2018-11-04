import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas';

export default function configureStore(prerenderedState = {}) {
  const sagaMiddleware = createSagaMiddleware({})

  const persistedState = {};
  const state = { ...prerenderedState, ...persistedState };

  const store = createStore(rootReducer, state, applyMiddleware(sagaMiddleware));

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };
  store.runSagaTask();

  return store;
}
