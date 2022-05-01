import React, { memo, useCallback } from 'react';
import { Card, Image } from 'antd';
import { useSelector } from 'react-redux';
import { IMAGE_SOURCE } from '../../constants';
import styles from './styles.css'

const {
  NEW_TAG,
  TOP_TAG,
  FALL_BACK,
  PLAY
} = IMAGE_SOURCE;

const GameItem = memo(({ game, showBadge = true }) => {
  const { jackpots } = useSelector((state) => state);
  const jackpotMatched = jackpots.find?.(
    (jackpot) => jackpot?.game === game?.id
  );
  const { amount } = jackpotMatched || {};
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
  });

  const AmountItem = useCallback(({ amount = 0 }) => (
    <div className='game-item__jackpot-bar'>
      <p>{formatter.format(amount)}</p>
    </div>
  ), []);

  const GameName = useCallback(({ name = '' }) => (
    <div className='game-item__name'>
      <p>{name}</p>
    </div>
  ), []);

  const NormalGame = useCallback(() => (
    <div className='game-item'>
      <div className='game-item__image'>
        <div className='game-item__image--normal'></div>
        <Image
          fallback={FALL_BACK}
          src={game?.image}
          preview={false}
          onError={() => true}
        />
      </div>
      <div className='game-item__image--hidden'>
        <Image
          fallback={FALL_BACK}
          src={PLAY}
          preview={false}
        />
      </div>
      {amount && <AmountItem amount={amount} />}
      {game?.name && <GameName name={game?.name} />}
    </div>
  ), [amount]);

  const ItemBadge = useCallback(({ imgSrc }) => (
    <div className='game-item__badge'>
      <img src={imgSrc} alt='' />
    </div>
  ), []);

  return (
    <Card className='my-card' bordered={false}>
      <NormalGame />
      {
        (showBadge && game?.categories.includes('top'))
          ? <ItemBadge imgSrc={NEW_TAG} />
          : (showBadge && game?.categories.includes('new'))
            ? <ItemBadge imgSrc={TOP_TAG} />
            : null
      }
    </Card>
  );
});

export default GameItem;
