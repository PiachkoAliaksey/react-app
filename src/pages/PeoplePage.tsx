import React, { Component,useEffect,useState } from 'react';
import getApiRes from '../utils/network';
import { rootPeople} from '../constants/api';
import {getIdOfPeople,getPeopleImg} from '../utils/getId';

interface IElementOfObject{
name: string
url: string
}
const PeoplePage = () => {

  const[elements, setElement] = useState([])
  const getResource = async(url:string) => {
    const body = await getApiRes(url);
    const peopleList = body.results.map((element: IElementOfObject)=>{
      const id = getIdOfPeople(element.url);
      const img = getPeopleImg(id);
      return {
        id:id,
        name:element.name,
        img:img
      }
    }
    )
    setElement(peopleList)
  }

  useEffect(()=>{
    getResource(rootPeople);
  },[])

  return (
    <>
    <ul className='listOfElements'>
      {elements!.map((element:{id:string,name:string,img:string})=> <li key ={element.id} className='elementOfList'>
        <img className='imgOfElement' src = {element.img} alt = 'img'/>
        <p>{element.name}</p>
        </li>)}
    </ul>
    </>
  )

}

export default PeoplePage;
