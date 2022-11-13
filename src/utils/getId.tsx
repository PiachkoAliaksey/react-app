import React, { Component } from 'react';
import {apiPeople,HTTPS,baseUrl,urlImgPeople,imgExt} from '../constants/api'

const getId  = (url:string, category:string) => {
const id = url.replace(HTTPS+baseUrl+category,'')
.replace(/\//g,'');
return id;
} ;

export const getIdOfPeople = (url: string) => getId(url,apiPeople);

export const getPeopleImg = (id:string) => `${urlImgPeople}/${id}${imgExt}`;

