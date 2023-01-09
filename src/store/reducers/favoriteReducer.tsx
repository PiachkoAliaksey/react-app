import { AnyAction } from 'redux';
import { omit } from 'lodash';

import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from '../constant/actionTypes';
import { getLocalStorage } from '../../utils/localStorage';

interface IActionType {
  type:string,
  payload:{}
}

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action:AnyAction) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return {
        ...state,
        ...action.payload
      }
    case REMOVE_PERSON_FROM_FAVORITE:
      return omit(state,[action.payload])

    default:
      return state;
  }
}

export default favoriteReducer;
