import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import { reduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import thunk from 'redux-thunk';
// import config from '../firebase.credential';


const composeEnhancer = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

//store creation
export default () => {
  const store = createStore(
    combineReducers({
      firebase: firebaseStateReducer,
      expenses: expensesReducer,
      filters: filterReducer
    }),
    composeEnhancer(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

// export default store;