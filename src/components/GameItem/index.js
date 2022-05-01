import React from 'react';
import { Badge, Card, Image } from 'antd'

import { useSelector } from 'react-redux';
import styles from './styles.css'


const GameItem = ({ game, showTag = false }) => {
  const { jackpots } = useSelector(state => state);
  const jackpotMatched = jackpots.find?.(jackpot => jackpot?.game === game?.id);
  const { amount } = jackpotMatched || {};

  const renderGameImage = () =>

    <Image
      fallback='/undefined_img.jpg'
      src={game?.image}
      preview={false}
    />

  return (
      <Card
        className={styles.itemCard}
        bordered={false}
      >
        <Badge.Ribbon text="Hippies">
          {renderGameImage()}
        </Badge.Ribbon>

      </Card>

  );
};

export default GameItem;
