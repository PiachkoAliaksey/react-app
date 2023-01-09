import React, { Component, useEffect, useState } from 'react';

import ListOfPeople from '../components/ListOfPeople';
import { withErrorApi } from '../hoc-helpers/withErrorApi';
import { getApiRes } from '../utils/network';
import { getIdOfPeople, getPeopleImg } from '../utils/getId';
import { rootPeople } from '../constants/api';
import BtnPagination from '../components/BtnPagination';
import UiLoading from '../components/UI/UiLoading/UiLoading';

interface IElementOfObject {
  name: string
  url: string
}
interface IView {
  setErrorApi: React.Dispatch<React.SetStateAction<boolean>>,
}
const PeoplePage: React.FC<IView> = ({ setErrorApi }) => {

  const [element, setElement] = useState([]);
  //const[errorApi, setErrorApi] = useState(false);
  const [numberPage, setNumberPage] = useState(1);
  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const getResource = async (url: string) => {
    setLoading(true);
    const body = await getApiRes(url);
    if (body) {
      const peopleList = body.results.map((element: IElementOfObject) => {
        const id = getIdOfPeople(element.url);
        const img = getPeopleImg(id);
        return {
          id: id,
          name: element.name,
          img: img
        }
      }
      )
      setPrevPage(body.previous);
      setNextPage(body.next);
      setElement(peopleList);
      setErrorApi(false);
      setLoading(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResource(`${rootPeople}/?page=${numberPage}`);
  }, [numberPage])

  const setHandleCurrentPage = () => setNumberPage(numberPage + 1);
  const setHandleCurrentPageBack = () => setNumberPage(numberPage - 1 || 1);

  return (
    <>
      <BtnPagination setCurrentPagePrev={() => setHandleCurrentPageBack()} setCurrentPageNext={() => setHandleCurrentPage()} numberOfPage={numberPage} prevPage={prevPage} nextPage={nextPage} />
      {isLoading ? (<UiLoading />) : <ListOfPeople list={element} />}
    </>

  )

}

export default withErrorApi(PeoplePage);
