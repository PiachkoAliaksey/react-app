import React, { Component } from 'react';
import { text } from 'stream/consumers';
import { THEME_LIGHT, THEME_DARK, THEME_NEUTRAL, useTheme, } from '../context/ThemeProvider'


interface IChooseSideItem {
  theme: string,
  text: string,
  style: string
}

const ChooseSideItem: React.FC<IChooseSideItem> = ({ theme, text, style }) => {

  const isTheme = useTheme();

  return (
    <div className='item-btn-choose-them'>
      <button className={`btn-choose-side ${style}`} onClick={() => isTheme?.change(theme)}></button>
      <span className='block-text-btn'>{text}</span>
    </div>
  )
}


const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      style: 'btn-light-side',
      text: 'Light Side'
    },
    {
      theme: THEME_DARK,
      style: 'btn-dark-side',
      text: 'Dark Side'
    },
    {
      theme: THEME_NEUTRAL,
      style: 'btn-neutral-side',
      text: 'Neutral Side'
    }
  ]

  return (
    <div className='block-choose-theme'>
      {elements.map((element) => <ChooseSideItem theme={element.theme} style={element.style} text={element.text} />)}
    </div>
  )

}

export default ChooseSide;
