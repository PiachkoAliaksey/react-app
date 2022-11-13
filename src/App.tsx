import React, { Component } from 'react';
import{BrowserRouter, Route, Routes,redirect, Navigate} from 'react-router-dom';
import './sass/normalize.scss';
import './sass/style.scss';
import PeoplePage from './pages/PeoplePage';


 function App() {

    return (
        <PeoplePage/>
    )

}

export default App;
