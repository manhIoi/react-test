import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { tabAction } from '../redux/actions';

const RootRoute = ({ routes = [] }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const currentIndexRoute = routes.findIndex(
      (item, index) => item?.path === location.pathname
    );
    // set active tab here
    if (currentIndexRoute > -1) {
      dispatch(tabAction.setTabAction(location.pathname));
    }
  }, [location]);
  return (
    <Routes>
      {routes?.map?.(route => (
        <Route
          key={`ROUTE_${route?.id}`}
          {...route}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};

export default RootRoute;
