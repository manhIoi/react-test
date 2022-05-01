import { JACKPOTS_TYPES } from '../types';

const jackpotRenderer = (state = [], action) => {
  switch (action.type) {
    case JACKPOTS_TYPES.SET_JACKPOTS:
      return action.payload;
    default:
      return state;
  }
};

export default jackpotRenderer;
