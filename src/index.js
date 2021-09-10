import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import {allReducer} from './store/';

import reportWebVitals from './reportWebVitals';

//import {actionHi} from './store/index'

const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


/*store.dispatch(actionHi('hi'));
store.dispatch(actionHi({
  first: 'like',
  second: [0,2,4,5]
}));
store.dispatch(actionHi({isDone: true}));*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
