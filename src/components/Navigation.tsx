import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UiButton from './UI/UiButton';
import FavoriteComponent from './FavoriteComponent';

const Navigation = () => {

  return (
    <>
      <nav className='navbar'>
        <h1>STAR WARS</h1>
        <ul className='navigation-list'>
          <li className='nav-item'><NavLink to="/" >Home</NavLink></li>
          <li className='nav-item' ><NavLink to="/people">People</NavLink></li>
        </ul>
        <Link to="/favorites"><FavoriteComponent /></Link>
      </nav>
    </>
  )

}

export default Navigation;
