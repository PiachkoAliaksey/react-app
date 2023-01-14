import React, { Component, useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash'
import { getApiRes } from '../utils/network';
import { rootParamSearch } from '../constants/api';
import { withErrorApi } from '../hoc-helpers/withErrorApi';
import { getIdOfPeople, getPeopleImg } from '../utils/getId';
import SearchPageInfo from '../components/SearchPageInfo';

interface IView {
  setErrorApi: React.Dispatch<React.SetStateAction<boolean>>,
}

interface IElementOfObject {
  name: string
  url: string
}

interface ISearchPageInfo {
  list: {
    id: string,
    name: string,
    img: string

  }[]
}

const SearchPage: React.FC<IView> = ({ setErrorApi }) => {

  const [inputValue, setInputValue] = useState('');
  const [personages, setPersonages] = useState([]);

  const getResponseCharacters = async (parameter: string) => {
    const response = await getApiRes(rootParamSearch + parameter);

    if (response) {
      setErrorApi(false);
      const peopleList = response.results.map((element: IElementOfObject) => {
        const id = getIdOfPeople(element.url);
        const img = getPeopleImg(id);
        return {
          id: id,
          name: element.name,
          img: img
        }
      })
      setPersonages(peopleList)

    } else {
      setErrorApi(true);
    }

  }

  useEffect(() => {
    getResponseCharacters('')
  }, [])

  const debouncedGetResponse = useCallback(debounce(value => getResponseCharacters(value), 300), [])


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueOfCharacter = event.target.value;

    setInputValue(valueOfCharacter);
    debouncedGetResponse(valueOfCharacter)
  }



  return (
    <div className='block-of-search-page'>
      <h2 className='header-search-page'>Search Page</h2>
      <div className='block-input-element'>
        <input className='input-element-search-page' type='text' value={inputValue} onChange={handleInputChange} placeholder='Input charter`s name...' />
        <img onClick={()=> setInputValue('')} className={`img-cross ${!inputValue&&'img-cross-disabled'}`} src='../assets/img/close.png' alt = 'cross'/>
      </div>
      <SearchPageInfo list={personages} />
    </div>
  )

}

export default withErrorApi(SearchPage);
