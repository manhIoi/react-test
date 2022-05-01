import { TAB_ACTION_TYPES } from '../types';

const tabReducer = (state = '/', action) => {
  switch (action.type) {
    case TAB_ACTION_TYPES.SET_CURRENT_TAB:
      return action.payload;
    default:
      return state;
  }
};

export default tabReducer;
