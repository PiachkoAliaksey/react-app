import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

const PersonLinkBack = () => {
  const navigate = useNavigate();
  const handleGoBack = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <a href='#' onClick={handleGoBack} className='link-btn-go-back'>
      <span>Go Back</span>
    </a>
  )

}

export default PersonLinkBack;
