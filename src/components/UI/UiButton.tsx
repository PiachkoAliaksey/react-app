import React, { Component } from 'react';
import cn from 'classnames';
import './UiButton.css';

interface IUiButton {
  setCurrentPage:React.MouseEventHandler<HTMLButtonElement> | undefined,
  text:string,
  setDisable:string|null|boolean,
  theme:string,
}

const UiButton:React.FC<IUiButton> = ({setCurrentPage,text,setDisable, theme = 'dark'}) => {

  return (
    <button
     className={cn('btn-handler-page',theme)}
     onClick={setCurrentPage}
     disabled = {!setDisable}>
      {text}
    </button>
  )

}

export default UiButton;
