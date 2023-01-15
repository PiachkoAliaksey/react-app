import React, { Component, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UiButton from './UI/UiButton';
import FavoriteComponent from './FavoriteComponent';
import img_droid from '../assets/img/r2d2.png';
import img_vader from '../assets/img/darth-vader.png';
import img_jedi from '../assets/img/jedi-order.png';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL, useTheme, } from '../context/ThemeProvider'

const Navigation = () => {
  const [icon, setIcon] = useState(img_droid);
  const isTheme = useTheme();

  useEffect(() => {


    switch (isTheme?.theme) {
      case THEME_LIGHT: setIcon(img_jedi)

        break;
      case THEME_DARK: setIcon(img_vader)

        break;
      case THEME_NEUTRAL: setIcon(img_droid)

        break;

      default: setIcon(img_droid)
        break;
    }

  }, [isTheme])

  return (
    <>
      <nav className='navbar'>
        <img className='img-header-icon' src={icon} alt='icon' />
        <h1>STAR WARS</h1>
        <ul className='navigation-list'>
          <li className='nav-item'><NavLink className='link-item' to="/react-app/dist/" >Home</NavLink></li>
          <li className='nav-item' ><NavLink className='link-item' to="/people">People</NavLink></li>
          <li className='nav-item' ><NavLink className='link-item' to="/search">Search</NavLink></li>
        </ul>
        <Link to="/favorites"><FavoriteComponent /></Link>
      </nav>
    </>
  )

}

export default Navigation;
