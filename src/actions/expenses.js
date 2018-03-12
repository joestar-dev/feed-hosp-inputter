import uuid from 'uuid';

//action creator generator

//ADD_EXPENSE
export const addExpenses = (
  { 
    description = '', 
    note = '', 
    genre = '', 
    date = '' 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expenses: {
    id: uuid(),
    description,
    note,
    genre, 
    date
  }
}); 

//REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
export const updateExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});