import React, { Component } from 'react';
import ChooseSide from '../components/ChooseSide';


const HomePage = () => {

  return (
    <>
      <main className='home-page'>
        <h2 className='header-main-page'>Welcome to Universe of Star Wars</h2>
        <ChooseSide/>
      </main>
    </>
  )

}

export default HomePage;
