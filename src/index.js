import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
// import './index.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import configureStore from '../src/store/configureStore'

import { addExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { removeExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './style/style.scss'
import 'react-dates/lib/css/_datepicker.css';


// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import registerServiceWorker from './registerServiceWorker';

import validator from 'validator';
import Routes from './routes';

const store = configureStore();

// const feed1 = store.dispatch(addExpenses({ description: 'feed1', 
//                                             note: 'Welcome to the jungle1', 
//                                             date: '21032018', 
//                                             genre: 'genre1' }));

const feed2 = store.dispatch(addExpenses({ description: 'feed2', 
                                            note: 'Welcome to the jungle2', 
                                            date: '14032018', 
                                            genre: 'genre2' }));

// store.dispatch(setTextFilter('feed'));

// setTimeout(() => {
  const feed3 = store.dispatch(addExpenses({ description: 'feed3', 
                                note: 'Welcome to the jungle3', 
                                date: '20032018', 
                                genre: 'genre3' }));

  const feed4 = store.dispatch(addExpenses({ description: 'feed4', 
                                note: 'Welcome to the jungle4', 
                                date: '22032018', 
                                genre: 'genre4' }));
// }, 3000);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const provider = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
); 

ReactDOM.render(provider, document.getElementById('root'));
// registerServiceWorker();

// console.log(validator.isEmail('test@hotmail.com'));
