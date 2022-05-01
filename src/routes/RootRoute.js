import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router';

const RootRoute = ({ routes = [] }) => {
  const location = useLocation();
  useEffect(() => {
    const currentIndexRoute = routes.findIndex(
      (item, index) => item?.path === location.pathname
    );
    console.log(currentIndexRoute);
    // set active tab here
  }, [location]);
  return (
    <Routes>
      {routes?.map?.((route) => (
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
