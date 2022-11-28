import React, { Component } from 'react';
import{NavLink} from 'react-router-dom';

const Navigation = () => {

  return (
    <>
      <nav className='navbar'>
        <h1>STAR WARS</h1>
        <ul className='navigation-list'>
          <li className='nav-item'><NavLink to="/">Home</NavLink></li>
          <li className='nav-item' ><NavLink to="/people">People</NavLink></li>
        </ul>
        <img className='img-star' src='../assets/img/star.png' alt = 'star'/>
      </nav>
    </>
  )

}

export default Navigation;
