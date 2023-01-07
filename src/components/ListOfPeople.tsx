import React, { Component } from 'react';
import { Link } from 'react-router-dom'

interface IListOFPeople {
  list: {
    id: string,
    name: string,
    img: string

  }[]
}

const ListOfPeople: React.FC<IListOFPeople> = (props: IListOFPeople) => {

  return (
    <>
      <ul className='listOfElements'>
        {props.list.map((element: { id: string, name: string, img: string }) => <li key={element.id} className='elementOfList'>
          <Link className='linkOfElementList' to={`/people/${element.id}`}>
            <img className='imgOfElement' src={element.img} alt={element.name} />
            <p>{element.name}</p>
          </Link>
        </li>)}
      </ul>
    </>
  )

}

export default ListOfPeople;
