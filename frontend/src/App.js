import React from 'react';
import Routes from './routes';
import './global.css';
import Menu from './components/menu';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
