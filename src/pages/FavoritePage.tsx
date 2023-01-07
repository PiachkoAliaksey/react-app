import React, { Component } from 'react';
import { useSelector } from 'react-redux';

const FavoritePage = () => {
  const storeData = useSelector((state:{favoriteReducer:{}}) => state.favoriteReducer);
  console.log(storeData);

  return (
    <div>
      <h2>FavoritePage</h2>
    </div>
  )

}

export default FavoritePage;
