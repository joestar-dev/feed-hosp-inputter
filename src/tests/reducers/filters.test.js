import filterReducer from '../../reducers/filters';
import moment from 'moment';
// import expenses from '../fixtures/expenses';

test('should setup default filter value', () => {
  const state = filterReducer(undefined, { type: '@@INIT'})

  expect(state).toEqual({
    id: '',
    text: '',
    sortBy: 'date', 
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sort by amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
});

test('should set text filter', () => {
  const text = 'This is my filter';
  const action = { 
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filterReducer(undefined, action)
  expect(state.text).toEqual(text)
});

test('should set sort by date', () => {
  const currentState = {
    id: '',
    text: '',
    sortBy: 'amount', 
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE' }
  const state = filterReducer(currentState, action)
  expect(state.sortBy).toBe('date')
})

test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filterReducer(undefined ,action);
  expect(state.startDate).toEqual(startDate)
});

test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filterReducer(undefined ,action);
  expect(state.endDate).toEqual(endDate)
});