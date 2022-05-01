import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { parseRouteToNavbar, transferDataByRoutes } from './helpers';
import { Layout } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import MainApi from '../src/api';
import { GameContainer, MyDrawer, Navbar } from './components';
import { useDispatch } from 'react-redux';
import { setJackpots } from './redux/actions/jackpotAction';
const { Header, Content } = Layout;

const ROUTES_CONFIG = [
  {
    id: 'top',
    sortOrder: 1,
    name: 'Top Game',
    label: 'in top',
  },
  {
    id: 'new',
    sortOrder: 2,
    name: 'New Games',
    label: 'new release',
  },
  {
    id: 'slots',
    sortOrder: 3,
    name: 'Slots',
    label: 'slots',
  },
  {
    id: 'jackpots',
    sortOrder: 4,
    name: 'Jackpots',
    label: 'test',
  },
  {
    id: 'live',
    sortOrder: 5,
    name: 'Live',
    label: 'test',
  },
  {
    id: 'blackjack',
    sortOrder: 6,
    name: 'Blackjack',
    label: 'test',
  },
  {
    id: 'roulette',
    sortOrder: 7,
    name: 'Roulette',
    label: 'test',
  },
  {
    id: 'table',
    sortOrder: 8,
    name: 'Table',
    label: 'test',
  },
  {
    id: 'poker',
    sortOrder: 9,
    name: 'Poker',
    label: 'test',
  },
  {
    id: 'ball',
    sortOrder: 10,
    name: 'Ball',
    label: 'test',
  },
  {
    id: 'virtual',
    sortOrder: 11,
    name: 'Virtual',
    label: 'test',
  },
  {
    id: 'fun',
    sortOrder: 12,
    name: 'Fun',
    label: 'test',
  },
];

function App() {
  const routes = parseRouteToNavbar(ROUTES_CONFIG);
  const { lg } = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(routes?.[0]);
  const [games, setGames] = useState();
  const gameDisplay = games?.[selectedTab?.id] || [];
  const dispatch = useDispatch();
  const onOpenDrawer = () => {
    setIsOpen(true);
  };
  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const onSelectTab = tab => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    MainApi.getGames().then(gamesData => {
      const gamesTransfer = transferDataByRoutes(ROUTES_CONFIG, gamesData);
      setGames(gamesTransfer);
    });

    const reloadJackpots = setInterval(() => {
      MainApi.getJackpots().then(data => {
        dispatch(setJackpots(data));
      });
    }, 2000);
    return () => {
      clearInterval(reloadJackpots);
    };
  }, []);

  return (
    <Router>
      <Layout className='app'>
        <Header className='header'>
          <Navbar
            selectedTab={selectedTab}
            onSelectTab={onSelectTab}
            routes={routes}
            onOpen={onOpenDrawer}
          />
          {!lg ? (
            <MyDrawer
              selectedTab={selectedTab}
              onSelectTab={onSelectTab}
              routes={ROUTES_CONFIG}
              onClose={onCloseDrawer}
              isOpen={isOpen}
            />
          ) : null}
        </Header>
        <Content className='body'>
          <GameContainer data={gameDisplay} />;
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
