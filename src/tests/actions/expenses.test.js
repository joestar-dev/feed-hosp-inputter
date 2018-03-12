import { addExpenses, removeExpense, updateExpense } from '../../actions/expenses';

test('should setup remove expense action object',() => {
  const action = removeExpense({'id': '123abc'});
  expect(action).toEqual({
    id: '123abc',
    type: 'REMOVE_EXPENSE'
  });
})

test('should setup update expense action object', () => {
  const action = updateExpense('123abc', { note: 'test update' });
  expect(action).toEqual({
    id: '123abc',
    type: 'EDIT_EXPENSE',
    update: {
      note: 'test update'
    }
  });
});

test('should setup add expense action object with providing value', () => {
  const expenseData = { 
    description: 'test add description', 
    note: 'test add note', 
    genre: 'test add genre', 
    date: '20180202'
  };
  const action = addExpenses(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default value', () => {
  const action = addExpenses();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expenses: {
      id: expect.any(String),
      description: '',
      note: '',
      genre: '',
      date:''
    }
  });
});