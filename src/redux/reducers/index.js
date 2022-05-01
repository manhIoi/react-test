import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import jackpotReducer from './jackpotReducer';

const rootReducer = combineReducers({
  tab: tabReducer,
  jackpots: jackpotReducer,
});

export default rootReducer;
