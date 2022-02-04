import { combineReducers } from 'redux';
import { tablesReducer } from './tables';

const tablesReducer = combineReducers({
  tab: tablesReducer,
});

export default dashboardReducer;
