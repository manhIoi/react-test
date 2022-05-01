const MAX_NAVBAR_ITEM_SHOWN = 9;

const parseRouteToNavbar = (routes) => {
  if (!routes?.length) return [];
  const routesSort = routes?.sort?.((a, b) => a?.sortOrder - b?.sortOrder);
  const routesMapped = routesSort?.map?.((route) => ({
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

export { parseRouteToNavbar };
