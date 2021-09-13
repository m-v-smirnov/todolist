
import { createStore } from 'redux';
import {reducer} from './reducer';
import { combineReducers } from "redux";



export const allReducer = combineReducers({
  todoStore: reducer,
});

export const store = createStore(
  allReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

