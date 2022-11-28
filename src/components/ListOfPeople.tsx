import React, { Component } from 'react';

interface IListOFPeople{
  list:{
    id:string,
    name:string,
    img:string

  }[]
}

const ListOfPeople:React.FC<IListOFPeople> = (props:IListOFPeople) => {

  return (
    <>
    <ul className='listOfElements'>
      {props.list.map((element:{id:string,name:string,img:string})=> <li key ={element.id} className='elementOfList'>
        <a className='linkOfElementList' href=''>
          <img className='imgOfElement' src = {element.img} alt = {element.name}/>
          <p>{element.name}</p>
          </a>
        </li>)}
    </ul>
    </>
  )

}

export default ListOfPeople;
