import React from 'react';
import { Drawer, Button } from 'antd';
import './styles.css';

const MyDrawer = ({
  onClose,
  isOpen,
  onSelectTab,
  routes = [],
  selectedTab,
}) => {
  return (
    <Drawer
      className='my-drawer'
      placement='right'
      onClose={onClose}
      closable={true}
      visible={isOpen}>
      {routes?.map?.(route => {
        return (
          <div
            className={`my-drawer-item ${
              selectedTab?.id === route?.id ? 'my-drawer-item--selected' : ''
            }`}
            onClick={() => onSelectTab(route)}>
            <h2>{route?.name}</h2>
          </div>
        );
      })}
    </Drawer>
  );
};

export default MyDrawer;
