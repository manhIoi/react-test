import React from 'react';
import {Card, Image} from 'antd'


const GameItem = ({
   game 
  }) =>
  <Card
  >
    <Image
      src={game.image} 
    />
     {game.name}
  </Card>
  ;

export default GameItem;  
