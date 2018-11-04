import { combineReducers } from 'redux';

import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  statsReducer,
});

export default rootReducer;
