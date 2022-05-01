import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { MenuOutlined } from '@ant-design/icons';

const NavbarItem = ({ route }) => {
  const { isOther = false } = route || {};
  if (isOther) {
    // return something other
    return <div className='navbar__item'>{route?.name || ''}</div>;
  }
  return (
    <Link className='navbar__item' to={route.path}>
      {route?.name || ''}
    </Link>
  );
};

const Navbar = ({ routes = [], onOpen }) => {
  const { lg } = useBreakpoint();

  return (
    <div className={`navbar ${!lg ? 'navbar--md' : ''}`}>
      <div className='navbar__container'>
        {routes?.map?.((route) => (
          <NavbarItem key={`NAVBAR_ITEM_${route?.id}`} route={route} />
        ))}
      </div>
      <button className='navbar__drawer-btn' onClick={onOpen}>
        <MenuOutlined className='navbar__drawer-btn__icon' />
      </button>
    </div>
  );
};

export default Navbar;
