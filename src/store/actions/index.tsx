import { ADD_PERSON_TO_FAVORITE,REMOVE_PERSON_FROM_FAVORITE } from "../constant/actionTypes"


interface IActionTypes {
  [personId:string]:{
    name:string,
    img:string
  }
}
export const setPersonToFavorite = (person:IActionTypes) => {
  return {
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
  }
}



export const removePersonFromFavorite = (personId:string) => ({
  type: REMOVE_PERSON_FROM_FAVORITE,
  payload: personId
})

