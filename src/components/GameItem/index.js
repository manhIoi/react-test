import React, {useCallback} from 'react';
import { Badge, Card, Image } from 'antd'

import { useSelector } from 'react-redux';
import styles from './styles.css'


const GameItem = ({ game, showBadge = true }) => {
  const { jackpots } = useSelector(state => state);
  const jackpotMatched = jackpots.find?.(jackpot => jackpot?.game === game?.id);
  const { amount } = jackpotMatched || {};
  const formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  });


  const AmountItem = useCallback(({ amount = 123456 }) => (
    <div className='jackpot-bar'>
      <p className='jackpot-bar__text'>{formatter.format(amount)}</p>
    </div>
  ),[]);

  const renderNormalGame = () => (
    <div>
      <>
       <Image
        fallback='/undefined_img.jpg'
        src={game?.image}
        preview={false}
      />
      </>
      {amount && <AmountItem/>}
    </div>
  )
  
  const renderGameWithBadge = (badgeContent) => (
    <Badge.Ribbon text={badgeContent}>
       {renderNormalGame()}
    </Badge.Ribbon>
  )

  return (
    <Card
      className={styles.itemCard}
      bordered={false}
    >
      {
        showBadge && game?.categories.includes('top') 
          ? renderGameWithBadge('TOP')
          : showBadge && game?.categories.includes('new') 
            ? renderGameWithBadge('NEW')
            : renderNormalGame()
      }

    </Card>
  );
};

export default GameItem;
