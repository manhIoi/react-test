import React from 'react';
import { useSelector } from 'react-redux';

const GameItem = ({ game }) => {
  const { jackpots } = useSelector(state => state);
  const jackpotMatched = jackpots.find?.(jackpot => jackpot?.game === game?.id);
  const { amount } = jackpotMatched || {};
  return (
    <div style={{ backgroundColor: 'red' }}>
      {game?.name}
      {amount ? <h1>{amount}</h1> : null}
    </div>
  );
};

export default GameItem;
