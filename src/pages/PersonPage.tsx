import React, { Component, useEffect, useState, Suspense } from 'react';
import { useParams } from "react-router-dom";
import { getApiRes, getCurrentRequest } from '../utils/network';
import { rootPeople } from '../constants/api';
import { withErrorApi } from '../hoc-helpers/withErrorApi';
import { getPeopleImg } from '../utils/getId';
import PersonInfo from '../components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '../components/PersonPage/PersonImage/PersonPhoto';
import PersonLinkBack from '../components/PersonPage/PersonLinkBack/PersonLinkBack';
import PersonMovies from '../components/PersonPage/PersonMovies/PersonMovies';
import UiLoadingPerson from '../components/UI/UiLoadingPerson/UiLoadingPerson';

//const PersonMovies = React.lazy(()=> import('../components/PersonPage/PersonMovies/PersonMovies'))
interface IPerson {
  title: string, data: string | number
}[]

interface IPersonPage {
  setErrorApi: React.Dispatch<React.SetStateAction<boolean>>
}

const PersonPage: React.FC<IPersonPage> = ({ setErrorApi }) => {
  const { id } = useParams();

  const [person, setPerson] = useState([{ title: '', data: '' }]);
  const [personName, setPersonName] = useState('');
  const [imgPerson, setImgPerson] = useState('');
  const [personMovies, setPersonMovies] = useState<Array<{ title: string, episode_id: number }>>([]);
  const [isLoadingMovies, setLoadingMovies] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingMovies(true);
      const data = await getApiRes(`${rootPeople}/${id}/`)
      if (data) {
        console.log(data);
        const image = getPeopleImg(id!);
        setImgPerson(image)
        setPersonName(data.name);
        setPerson([
          { title: 'Height', data: data.height },
          { title: 'Mass', data: data.mass },
          { title: 'Gender', data: data.gender },
          { title: 'Eye color', data: data.eye_color },
          { title: 'Birth year', data: data.birth_year },
        ]);
        //res.films
        //console.log(data.films)
        if (data.films.length) {
          const movies = await getCurrentRequest(data.films);
          console.log(movies);
          setLoadingMovies(false);
          setPersonMovies(movies);
        }
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    }
    fetchData();


  }, [])

  return (
    <>
      <div className='block-person-page'>
        <PersonLinkBack />
        <h2 className='name-of-person'>Name: {personName}</h2>
        <div className='block-person-properties'>
          <PersonPhoto imgPerson={imgPerson} personName={personName} />
          {person && (<PersonInfo arrPerson={person} />)}
          {isLoadingMovies?<UiLoadingPerson/>:(personMovies && <PersonMovies personMovies={personMovies} />)}
        </div>

      </div>
    </>
  )

}

export default withErrorApi(PersonPage);
