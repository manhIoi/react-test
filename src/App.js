import './App.css';
import React, { useEffect, useState } from 'react';
import RootRoute from './routes/RootRoute';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, NewGames, Slots } from './pages';
import { Navbar } from './components';
import { parseRouteToNavbar } from './helpers';
import { Layout } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import MyDrawer from './components/MyDrawer';
const { Header, Content } = Layout;

const ROUTES_CONFIG = [
  {
    id: 'top',
    path: '/',
    element: <Home />,
    sortOrder: 1,
    name: 'Top game',
    exact: true,
  },
  {
    id: 'new',
    path: '/new-games',
    element: <NewGames />,
    sortOrder: 2,
    name: 'New Games',
  },
  {
    id: 'slots',
    path: '/slots',
    element: <Slots />,
    sortOrder: 3,
    name: 'Slots',
  },
  {
    id: 'jackpots',
    path: '/jackpots',
    element: <Home />,
    sortOrder: 4,
    name: 'Jackpots',
  },
  {
    id: 'live',
    path: '/live',
    element: <Home />,
    sortOrder: 5,
    name: 'Live',
  },
  {
    id: 'blackjack',
    path: '/blackjack',
    element: <Home />,
    sortOrder: 6,
    name: 'Blackjack',
  },
  {
    id: 'roulette',
    path: '/roulette',
    element: <Home />,
    sortOrder: 7,
    name: 'Roulette',
  },
  {
    id: 'table',
    path: '/table',
    element: <Home />,
    sortOrder: 8,
    name: 'Table',
  },
  {
    id: 'poker',
    path: '/poker',
    element: <Home />,
    sortOrder: 9,
    name: 'Poker',
  },
  {
    id: 'ball',
    path: '/ball',
    element: <Home />,
    sortOrder: 10,
    name: 'Ball',
  },
  {
    id: 'virtual',
    path: '/virtual',
    element: <Home />,
    sortOrder: 11,
    name: 'Virtual',
  },
  {
    id: 'fun',
    path: '/fun',
    element: <Home />,
    sortOrder: 12,
    name: 'Fun',
  },
];

function App() {
  const routes = parseRouteToNavbar(ROUTES_CONFIG);
  const { lg } = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);
  const onOpenDrawer = () => {
    setIsOpen(true);
  };
  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <Layout className='app'>
        <Header className='header'>
          <Navbar routes={routes} onOpen={onOpenDrawer} />
          {!lg ? (
            <MyDrawer routes={routes} onClose={onCloseDrawer} isOpen={isOpen} />
          ) : null}
        </Header>
        <Content className='body'>
          <RootRoute routes={ROUTES_CONFIG} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
