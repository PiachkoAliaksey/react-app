import React, { Component } from 'react';

interface IPersonPhoto {
  imgPerson:string,
  personName:string
}
const PersonPhoto: React.FC<IPersonPhoto> = ({imgPerson,personName}) => {

  return (
    <>
     <img className='imgOfPerson' src = {imgPerson} alt = {personName}/>
    </>
  )

}

export default PersonPhoto;
