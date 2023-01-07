import React, { Component, useState, useEffect } from 'react';
import { getCurrentRequest } from '../../../utils/network';

interface IPersonMovies {
  personMovies: Array<{ title: string, episode_id: number }>
}

const PersonMovies: React.FC<IPersonMovies> = ({ personMovies }) => {

  return (
    <ul className='itemsOfListPerson'>
      {personMovies.sort((a, b) => a.episode_id - b.episode_id).map(({ title, episode_id }) => <li className='itemOfListMovies' key={title}>
        <span className='itemOfListMovies-episode-id'>Episode {episode_id}</span>
        <span className='itemOfListMovies-colon'>:</span>
        <span className='itemOfListMovies-title'> {title}</span>
      </li>)}
    </ul>
  )

}

export default PersonMovies;
