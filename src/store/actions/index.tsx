import { ADD_PERSON_TO_FAVORITE,REMOVE_PERSON_FROM_FAVORITE } from "store/constant/actionTypes"



export const setPersonToFavorite = ():{type:string,payload:string} => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: ''
})

export const removePersonFromFavorite = () => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: ''
})

