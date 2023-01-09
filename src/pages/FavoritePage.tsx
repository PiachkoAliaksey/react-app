import React, { Component, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ListOfPeople from '../components/ListOfPeople';

interface IRootState {
  name: 'string'
}

const FavoritePage = () => {
  const [people, setPeople] = useState<never | {
    id: string;
    name: any;
    img: any;
  }[]>([])
  const storeData = useSelector((state: IRootState) => {
    return state
  });

  useEffect(() => {
    const arrOfStoreData = Object.entries(storeData);
    if (arrOfStoreData.length) {
      const resArrOfStoreData = arrOfStoreData.map((value) => {
        return {
          id: value[0],
          name: value[1].name,
          img: value[1].img
        }
      })

      setPeople(resArrOfStoreData)
    }

  }, [])



  return (
    <div>
      <h2 className='header-favorite-page'>Favorite Page</h2>
      {people.length?<ListOfPeople list={people} />:<h2 className='header-favorite-page'>Nothing favorites peoples</h2>}

    </div>
  )

}

export default FavoritePage;
