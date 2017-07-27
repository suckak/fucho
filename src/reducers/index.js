import { combineReducers } from 'redux';

import futbolReducer from './futbolReducer';

const rootReducer = combineReducers({
  futbol: futbolReducer
});

export default rootReducer;
