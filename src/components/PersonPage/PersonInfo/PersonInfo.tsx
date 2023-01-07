import React, { Component } from 'react';

interface IPersonInfo {
  arrPerson: { title: string, data: string | number }[]
}
const PersonInfo: React.FC<IPersonInfo> = ({ arrPerson }) => {

  return (
    <>
      <ul className='itemsOfListPerson'>
        {arrPerson.map(({ title, data }) => data && (<li className='itemOfListPerson' key={title}>{title}: {data}</li>))}
      </ul>
    </>
  )

}

export default PersonInfo;
