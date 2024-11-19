import { combineReducers } from 'redux';
import planReducer from '../modules/plan';

const rootReducer = combineReducers({
  plan: planReducer,
});

export default rootReducer;
