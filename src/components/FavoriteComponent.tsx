import React, { Component, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface IRootState {
  [num: string]: { name: string, img: string }
}


const FavoriteComponent = () => {
  const [count, setCount] = useState<number | string>(0);
  const storeData = useSelector((state: IRootState) => {
    return state
  });

  useEffect(() => {
    const lengthNum = Object.keys(storeData).length;
    lengthNum.toString().length > 2 ? setCount('...') : setCount(lengthNum);

  })

  return (
    <div className='block-of-favorite-page'><img className='img-star' src='../assets/img/star.png' alt='star' /> <div className='block-of-number-favorites'>{count}</div></div>
  )

}

export default FavoriteComponent;
