import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '../../../store/actions/index'


interface IPersonPhoto {
  setPersonFavorite: React.Dispatch<React.SetStateAction<boolean>>,
  personFavorite: boolean,
  personId: string,
  imgPerson: string,
  personName: string
}
const PersonPhoto: React.FC<IPersonPhoto> = ({ personFavorite, setPersonFavorite, personId, imgPerson, personName }) => {
  const dispatchColorOfStar = useDispatch();

  const dispatchFavorite = () => {
    if (personFavorite) {
      dispatchColorOfStar(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatchColorOfStar(setPersonToFavorite({ [personId]: { 'name': personName, 'img': imgPerson } }));
      setPersonFavorite(true);
    }
  }

  return (
    <div className='block-of-image-person'>
      <img className='imgOfPerson' src={imgPerson} alt={personName} />
      <button className='btn-add-to-favorite' onClick={dispatchFavorite}>{personFavorite ? <div className='img-favorite-active'></div> : <div className='img-favorite-inactive'></div>}</button>
    </div>
  )

}

export default PersonPhoto;
