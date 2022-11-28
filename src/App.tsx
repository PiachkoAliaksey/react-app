import React, { Component } from 'react';
import{BrowserRouter, Route, Routes,redirect, Navigate,Link} from 'react-router-dom';
import PeoplePage from './pages/PeoplePage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';

import routesConfig from './routes/routesConfig';

import './sass/normalize.scss';
import './sass/style.scss';


 function App() {
    return (
      <>

<BrowserRouter>
      <Navigation/>
      <Routes>
        {routesConfig.map((route,id) => (
          <Route key = {id} path = {route.path} element={<route.component/>}></Route>
        ))}
      </Routes>
</BrowserRouter>

      </>
    )
}

export default App;
