import { createStore } from 'redux';


//action creator generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = -1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }  
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 200 }));

store.dispatch(resetCount());

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 10
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 5
// });

// store.dispatch({
//   type: 'INCREMENT'
//});

//unsubscribe();

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'SET',
//   count: 100
// });

//unsubscribe();