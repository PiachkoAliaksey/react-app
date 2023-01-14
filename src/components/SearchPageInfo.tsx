import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface ISearchPageInfo {
  list: {
    id: string,
    name: string,
    img: string

  }[]
}

const SearchPageInfo: React.FC<ISearchPageInfo> = ({ list }) => {

  return (
    <ul className='listOfElements'>
      {list.length ? list.map((element: { id: string, name: string, img: string }) => <li key={element.id} className='elementOfList personImg'>
        <Link className='linkOfElementList' to={`/people/${element.id}`}>
          <img className='imgOfElement' src={element.img} alt={element.name} />
          <h2 className='header-search-person'>{element.name}</h2>
        </Link>
      </li>) : <h3>No results...</h3>}
    </ul>
  )

}

export default SearchPageInfo;
