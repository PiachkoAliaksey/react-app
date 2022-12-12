import React, { Component,useEffect,useState } from 'react';
import {useParams} from "react-router-dom";
import getApiRes from '../utils/network';
import { rootPeople } from '../constants/api';
import { withErrorApi } from '../hoc-helpers/withErrorApi';
import { getPeopleImg } from '../utils/getId';
import PersonInfo from '../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../components/PersonPage/PersonImage/PersonPhoto';

interface IPerson {
  title:string, data:string|number
}[]

interface IPersonPage {
  setErrorApi:React.Dispatch<React.SetStateAction<boolean>>
}

const PersonPage:React.FC<IPersonPage> = ({setErrorApi}) => {
  const {id} = useParams();

  const[person, setPerson] = useState([{title:'', data:''}]);
  const [personName, setPersonName] = useState('');
  const [imgPerson, setImgPerson] = useState('');

  useEffect(()=>{
    const fetchData = async() =>{

      const data = await getApiRes(`${rootPeople}/${id}/`)

      if(data) {
        const image = getPeopleImg(id!);
        setImgPerson(image)
        setPersonName(data.name);
        setPerson([
          {title:'Height', data:data.height},
          {title:'Mass', data:data.mass},
          {title:'Gender', data:data.gender},
          {title:'Eye color', data:data.eye_color},
          {title:'Birth year', data:data.birth_year},
        ]);
        //res.films
        setErrorApi(false);
      }else{
        setErrorApi(true);
      }
    }
    fetchData();

  },[])

  return (
    <>
    <div className='block-person-page'>
      <h2>Name: {personName}</h2>
      <img className='imgOfPerson' src = {imgPerson} alt = {personName}/>
      {person && (<PersonInfo arrPerson = {person} />)}
    </div>
    </>
  )

}

export default withErrorApi(PersonPage);
