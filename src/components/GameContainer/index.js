import React from 'react';
import { Row, Col } from 'antd';
import GameItem from '../GameItem';

const GameContainer = ({ data = [] }) => {
  const renderItem = () => {
    return data?.map?.((game, index) => (
      <Col
        key={game?.id || index}
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 8 }}
        xl={{ span: 4 }}>
        <GameItem game={game} />
      </Col>
    ));
  };
  return <Row gutter={[16, 16]}>{renderItem()}</Row>;
};

export default GameContainer;
