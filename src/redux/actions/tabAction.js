import { TAB_ACTION_TYPES } from '../types';

const setTabAction = tab => {
  return {
    type: TAB_ACTION_TYPES.SET_CURRENT_TAB,
    payload: tab,
  };
};

export { setTabAction };
