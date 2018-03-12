import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByID, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = (props) => (
  <div>
    <div className="feed-form__input-filter">
      <span className="input-filter">Filter :</span>
      <input 
        placeholder="search title..."
        type="text" 
        value={props.filters.text} 
        onChange={(e) => {props.dispatch(setTextFilter(e.target.value))
      }} />
      <select 
        value={props.filters.sortBy}
        onChange={(e) => {
          if(e.target.value === 'date') {
            props.dispatch(sortByDate())
          } else if(e.target.value === 'id') {
            props.dispatch(sortByID())
          }
      }}
      >
        <option value="date">date</option>
        <option value="id">id</option>
      </select>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}; 

export default connect(mapStateToProps)(ExpenseListFilters);