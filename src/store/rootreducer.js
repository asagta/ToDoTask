import { combineReducers } from 'redux';
import { tablesReducer } from './reducers/dashboard/tables';

const rootReducer = combineReducers({
  tab: tablesReducer,
});

export default rootReducer;
