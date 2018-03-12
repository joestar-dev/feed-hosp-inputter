import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectedExpense from '../selectors/expenses'
import OptionModal from './OptionModal';

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        className="big-button"
        disabled={props.checkItem.length === 0}
      >
        Delete Selected Item
      </button>  
      {/* <OptionModal {...props.expenses}/> */}
    </div>      
  )
};

// const mapStateToProps = (state) => {
//   return {
//     expenses: selectedExpense(state.expenses, state.filters)
//   }
// }

// export default connect(mapStateToProps)(Action);

export default Action;

/*
  expenses={this.state.expenses}
  selectedItem={this.state.selectedItem}
  handleClearSelectedItem={this.handleClearSelectedItem}
  handleCloseModal={this.handleCloseModal
*/