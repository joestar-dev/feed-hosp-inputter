import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeExpense, selectItem, updateExpense } from '../actions/expenses';
import FeedForm from './FeedForm';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ItemListDetail extends Component {
  render() {
    const { dispatch, id, description, date, note, genre } = this.props;
    const { checkStatus, onEditItem, onDelete, onResetForm } = this.props;
    const dmy = this.props.date;
    const day = dmy.slice(0, 2);
    const month = dmy.slice(2, 4);
    const year = dmy.slice(4, 8);
    const formatDate = `${day}/${month}/${year}`
     
    return(
      <div className='body-row' key={id}>
        <div className="table-body__cell--checkbox">
          <input 
            key={id}
            value={description}
            checked={checkStatus[description]}
            onChange={(e) => this.props.onSelectItem(e, description)}
            type="checkbox" />
        </div>
        {/* <Link to={`feed/${id}`}> */}
        <div 
          className="table-body__cell__title" 
          onClick={(e) => {
            onEditItem({ id })
          }}>
          {description}
        </div>
        {/* </Link> */}
        <div className="cell">
          {note}
        </div>
        <div className="table-header__cell_date_genre">
          {formatDate}
        </div>
        <div className="table-header__cell_date_genre">
          {genre} 
        </div>
        <div 
          className="cell cell--delete" 
          onClick={(e) => {
            // warning ? 
            // onDelete({id}) 
            // : 
            dispatch(removeExpense({ id }))
            onResetForm(e)
          }}>
          delete 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expense: state.expenses
  }
}; 

export default connect(mapStateToProps)(ItemListDetail);
