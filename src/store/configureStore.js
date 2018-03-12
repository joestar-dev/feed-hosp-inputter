import { createStore, combineReducers, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import { reduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
// import config from '../firebase.credential';


//store creation
export default () => {
  const store = createStore(
    combineReducers({
      firebase: firebaseStateReducer,
      expenses: expensesReducer,
      filters: filterReducer
    })
  );
  return store;
}

// export default store;