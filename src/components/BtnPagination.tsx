import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UiButton from './UI/UiButton';

interface IBtnPagination {
  setCurrentPagePrev: React.MouseEventHandler<HTMLButtonElement> | undefined
  numberOfPage: number,
  setCurrentPageNext: React.MouseEventHandler<HTMLButtonElement> | undefined,
  prevPage: string | null,
  nextPage: string | null
}
const BtnPagination: React.FC<IBtnPagination> = ({ setCurrentPagePrev, numberOfPage, setCurrentPageNext, prevPage, nextPage }) => {

  return (

    <div className='block-of-btn'>
      <UiButton text='Previous' setCurrentPage={setCurrentPagePrev} setDisable={prevPage} theme={'dark'} />
      <p className='block-number-of-page'>{numberOfPage}</p>
      <UiButton text='Next' setCurrentPage={setCurrentPageNext} setDisable={nextPage} theme={'dark'} />
    </div>
  )

}

export default BtnPagination;
