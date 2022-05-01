import React from 'react';
import { Row, Col } from 'antd';
import GameItem from '../GameItem';

const GameContainer = ({ data = [], tabId = {} }) => {
  const showBadge = !['top', 'new'].includes(tabId)
  const renderItem = () => {
    console.log(showBadge)
    return data?.map?.((game, index) => (
      <Col
        key={game?.id || index}
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 4 }}>
        <GameItem game={game} showBadge={showBadge} />
      </Col>
    ));
  };
  return <Row gutter={[16, 16]}>{renderItem()}</Row>;
};

export default GameContainer;
