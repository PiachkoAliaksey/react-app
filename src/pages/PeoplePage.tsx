import React, { Component,useEffect,useState } from 'react';

import ListOfPeople from '../components/ListOfPeople';
import {withErrorApi} from '../hoc-helpers/withErrorApi';
import getApiRes from '../utils/network';
import {getIdOfPeople,getPeopleImg} from '../utils/getId';
//import {rootPeople} from '../constants/api';
import {useQueryParam} from '../hooks/useQueryParam';

interface IElementOfObject{
name: string
url: string
}
interface IView {
  setErrorApi:React.Dispatch<React.SetStateAction<boolean>>,
}
const PeoplePage:React.FC<IView> = ({setErrorApi}) => {

  const[elements, setElement] = useState([]);
  //const[errorApi, setErrorApi] = useState(false);
  const[numberPage, setNumberPage] = useState(1);
  //const rootPeople = `https://swapi.dev/api/people/?page=${numberPage}`
  //console.log(numberPage);
  //console.log(rootPeople);



  const getResource = async(url:string) => {
    const body = await getApiRes(url);
    console.log(body);
    if(body) {
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
      setElement(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }


  }

  useEffect(()=>{
    getResource(`https://swapi.dev/api/people/?page=${numberPage}`);
  },[])

  function setHandleCurrentPage(){
    setNumberPage(numberPage+1);
    getResource(`https://swapi.dev/api/people/?page=${numberPage}`);
  }

  function setHandleCurrentPageBack(){
    numberPage===1?setNumberPage(1):setNumberPage(numberPage-1);
    getResource(`https://swapi.dev/api/people/?page=${numberPage}`);
  }




  return (
    <>
    <button onClick={() => setHandleCurrentPageBack()}>Previous</button>
    <button onClick={() =>setHandleCurrentPage()}>Next</button>

    <ListOfPeople list = {elements}/>
    </>

  )

}

export default withErrorApi(PeoplePage) ;
//<ListOfPeople list = {elements}/>
