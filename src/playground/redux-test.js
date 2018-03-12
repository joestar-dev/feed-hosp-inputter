import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//action creator generator

//ADD_EXPENSE
const addExpenses = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
}); 

//REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
const updateExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

//SET_TEXT
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      //return state.concat(action.expenses); //same result
      return [
        ...state,
        action.expenses
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expenses) => {
        if(expenses.id === action.id) {
          return { 
            ...expenses, 
            ...action.update
          }
        } else { 
          return expenses;
        }
      });
    default: 
      return state;
  }
};

//Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
}

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // console.log(textMatch);

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createAt < b.createAt ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

//send action to action creator
const expenseOne = store.dispatch(addExpenses({ description: 'Rent', amount: 3200, createAt: 1000}));
const expenseTwo = store.dispatch(addExpenses({ description: 'Coffee', amount: 3000, createAt: 2000}));

// const removeExpenseOne = store.dispatch(removeExpense({ id: expenseOne.expenses.id }));
// const updateExpenseTwo = store.dispatch(updateExpense(expenseTwo.expenses.id, { amount: 220 }));

// const setTextFilterOne = store.dispatch(setTextFilter('rent'));
// const setTextFilterTwo = store.dispatch(setTextFilter());

// const sortByAmountResult = store.dispatch(sortByAmount());
// const sortByDateResult = store.dispatch(sortByDate());

// const startDateResult = store.dispatch(setStartDate(0));
// const startDateResult2 = store.dispatch(setStartDate());
// const endDateResult = store.dispatch(setEndDate(999));

const demoState = {
  expenses: [{
    id: 'dgdfgdsdf',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 1122, 
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}