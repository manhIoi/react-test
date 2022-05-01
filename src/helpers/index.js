const MAX_NAVBAR_ITEM_SHOWN = 9;

const parseRouteToNavbar = routes => {
  if (!routes?.length) return [];
  const routesSort = routes?.sort?.((a, b) => a?.sortOrder - b?.sortOrder);
  const routesMapped = routesSort?.map?.(route => ({
    ...route,
    label: route?.name,
  }));
  const routeCombined = [
    ...routesMapped?.slice?.(0, MAX_NAVBAR_ITEM_SHOWN),
    {
      id: 'other',
      element: null,
      name: 'Other',
      label: 'Other',
      children: routesSort?.slice?.(MAX_NAVBAR_ITEM_SHOWN),
      isOther: true,
    },
  ];
  return routeCombined;
};

const convertRoutesToObject = routes => {
  let result = {};
  for (let index = 0; index < routes.length; index++) {
    const route = routes[index];
    result[route?.id] = {
      ...route,
    };
  }
  return result;
};

const transferDataByRoutes = (routes, data = []) => {
  let result = {};
  const routesObj = convertRoutesToObject(routes);
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    const { categories = [] } = item || {};
    for (let j = 0; j < categories.length; j++) {
      const category = categories[j];
      if (routesObj?.[category]?.id) {
        if (result?.[category]?.length) result?.[category]?.push?.(item);
        else result[category] = [item];
      } else {
        result[category] = [];
      }
    }
  }
  return result;
};

export { parseRouteToNavbar, transferDataByRoutes };
