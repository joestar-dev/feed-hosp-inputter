import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses.total';

export const ItemSummary = ({ itemCount, itemTotal }) => {
  const unit = itemCount <= 1 ? 'unit' : 'units';
  const formattedTotal = numeral(itemTotal / 100).format('$0,0.00');
  return (
    <div>
      <p>amount {itemCount} {unit} total {formattedTotal}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    itemCount: visibleExpenses.length,
    itemTotal: selectExpensesTotal(visibleExpenses)
  };  
}

export default connect(mapStateToProps)(ItemSummary);