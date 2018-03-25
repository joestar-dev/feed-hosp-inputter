// import React, { Component, PropTypes } from 'react';
import React from 'react';
import FeedForm from './FeedForm';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { updateExpense } from '../actions/expenses';
// import { firebaseConnect, helpers } from 'react-redux-firebase'
// const { isLoaded, isEmpty, dataToJS } = helpers


//change to class component
const AddItem = (props) => {
  // const { idp } = props;
  // console.log(props.id);
  // const { expenses } = props;
  // class AddItem extends Component {
    // render() {
      const expenses = props;
      console.log(expenses)
      console.log(props.id)
      const id = props.id ? props.id : undefined
      return (
        <div>
        <FeedForm 
          expenses={expenses}
          onSubmit={(expenses) => {
            // id ? 
            // props.dispatch(addExpenses(expenses)) : 
            props.dispatch(updateExpense(id, expenses))
            props.history.push("/");
          }} 
          /*onSubmit={(expense) => {
            console.log('update', expense)
          }} */
          />
      </div>
      )
    // };
  }
 

const mapStateToProps = (state, props) => {
  return  {
    expenses: state.expenses.find((expense) => expense.id === props.id)
  };
};

export default connect(mapStateToProps)(AddItem);