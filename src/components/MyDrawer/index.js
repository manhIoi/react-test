import React from 'react';
import { Drawer, Button } from 'antd';

const MyDrawer = ({ onClose, isOpen, onSelectTab }) => {
  return (
    <Drawer
      className='my-drawer'
      placement='right'
      onClose={onClose}
      closable={true}
      visible={isOpen}>
      {/* render route here */}
    </Drawer>
  );
};

export default MyDrawer;
