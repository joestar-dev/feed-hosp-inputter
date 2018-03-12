//get visible expenses
import moment from 'moment';

export default (expenses, { text, genre, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const dateAtMoment = moment(expense.date);
    // const startDateMatch = typeof startDate !== 'number' || expense.date >= startDate;
    // const endDateMatch = typeof endDate !== 'number' || expense.date <= endDate;
    const startDateMatch = startDate ? startDate.isSameOrBefore(dateAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(dateAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.date < b.date ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    } else if(sortBy === 'id') {
      return a.id < b.id ? 1 : -1;
    } 
  });
};

// export default getVisibleExpenses;