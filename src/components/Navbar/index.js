import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { MenuOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const NavbarItem = ({ route, isActive = false, onSelectTab }) => {
  const { isOther = false } = route || {};
  const classNameNavbarItem = `navbar__item ${isActive ? 'selected' : ''}`;
  const handleSelectTab = () => {
    onSelectTab(route);
  };
  if (isOther) {
    return <div className={classNameNavbarItem}>{route?.name || ''}</div>;
  }
  return (
    <div className={classNameNavbarItem} onClick={handleSelectTab}>
      {route?.name || ''}
    </div>
  );
};

const Navbar = ({ routes = [], onOpen, onSelectTab, selectedTab }) => {
  const { lg } = useBreakpoint();

  return (
    <div className={`navbar ${!lg ? 'navbar--md' : ''}`}>
      <div className='navbar__container'>
        {routes?.map?.((route, index) => (
          <NavbarItem
            onSelectTab={onSelectTab}
            isActive={selectedTab?.id === route?.id}
            key={`NAVBAR_ITEM_${route?.id}`}
            route={route}
          />
        ))}
      </div>
      <button className='navbar__drawer-btn' onClick={onOpen}>
        <MenuOutlined className='navbar__drawer-btn__icon' />
      </button>
    </div>
  );
};

export default Navbar;
