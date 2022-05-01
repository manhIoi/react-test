import React from 'react';
import {Card, Image} from 'antd'

import { useSelector } from 'react-redux';
import styles from './styles.css'


const GameItem = ({ game }) => {
  const { jackpots } = useSelector(state => state);
  const jackpotMatched = jackpots.find?.(jackpot => jackpot?.game === game?.id);
  const { amount } = jackpotMatched || {};
  return (
    <div className="item">
      <Card 
        className={styles.itemCard}
        bordered={false}
    >
      <Image
        fallback='/undefined_img.jpg'
        src={game?.image} 
        preview={false}
      />
    </Card>
    </div>
    
  );
};

export default GameItem;  
