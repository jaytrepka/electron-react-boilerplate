// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import user from './user';

const rootReducer = combineReducers({
  counter,
  router,
  user,
});

export default rootReducer;
