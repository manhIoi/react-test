import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { parseRouteToNavbar, transferDataByRoutes } from './helpers';
import { ROUTES_CONFIG } from './routes/RoutesConfig';
import { Layout } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import MainApi from '../src/api';
import { GameContainer, MyDrawer, Navbar } from './components';
import { useDispatch } from 'react-redux';
import { setJackpots } from './redux/actions/jackpotAction';
const { Header, Content } = Layout;

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
    console.log(tab.id)
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
          <GameContainer data={gameDisplay} tabId={selectedTab.id}/>;
        </Content>
      </Layout>
      </Router>
  );
}

export default App;
