import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const DeleteItem = ({dispatch, id, description, note, genre, date}) => (
  <div className="table-body__cell--delete">
    <button 
    
    >
      Remove Item
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}; 
//onClick={props.dispatch(removeExpense(id))}
export default connect(mapStateToProps)(DeleteItem)