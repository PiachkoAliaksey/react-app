import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface IListOFPeople {
  list: {
    id: string,
    name: string,
    img: string

  }[]
}

const ListOfPeople: React.FC<IListOFPeople> = ({list}) => {

  return (
      <ul className='listOfElements'>
        {list.map((element: { id: string, name: string, img: string }) => <li key={element.id} className='elementOfList'>
          <Link className='linkOfElementList' to={`/people/${element.id}`}>
            <img className='imgOfElement' src={element.img} alt={element.name} />
            <h2>{element.name}</h2>
          </Link>
        </li>)}
      </ul>
  )

}

export default ListOfPeople;
