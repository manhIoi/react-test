import { JACKPOTS_TYPES } from '../types';

const setJackpots = jackpots => {
  return {
    type: JACKPOTS_TYPES.SET_JACKPOTS,
    payload: jackpots,
  };
};

export { setJackpots };
