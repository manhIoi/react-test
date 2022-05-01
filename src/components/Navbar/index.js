import React from 'react';
import './styles.css';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const NavbarItem = ({ route, selectedTab, onSelectTab }) => {
  const { isOther = false, children = [] } = route || {};
  const classNameNavbarItem = `navbar__item ${
    selectedTab?.id === route?.id ? 'selected' : ''
  }`;
  const handleSelectTab = () => {
    onSelectTab(route);
  };
  if (isOther) {
    return (
      <Menu className={classNameNavbarItem}>
        <Menu.SubMenu key='SubMenu' title={route?.name}>
          {children?.map?.(item => (
            <Menu.Item
              onClick={() => onSelectTab(item)}
              className={`navbar__item ${
                item?.id === selectedTab?.id ? 'selected' : ''
              }`}
              key={item?.id}>
              {item?.name || ''}
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      </Menu>
    );
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
            selectedTab={selectedTab}
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
