import { combineReducers } from 'redux';
import { calenderReducer } from './calender/calenderReducer';
import { uiReducer } from './ui/uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  calender: calenderReducer,
});
