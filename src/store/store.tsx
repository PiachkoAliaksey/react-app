import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import favoriteReducer from './reducers/favoriteReducer';
import { setLocalStorage } from '../utils/localStorage';

const store = createStore(favoriteReducer,composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(()=>{
  setLocalStorage('store',store.getState());
});

export default store;
