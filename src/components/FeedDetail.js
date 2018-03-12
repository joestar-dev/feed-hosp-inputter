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


const FeedDetail = (props) => {
  // console.log(props);
  const { expenses } = props;
  return(
    <div>
      {/* <div>{props.id}</div> */}
      <FeedForm 
        expenses={expenses}
        onSubmit={(expenses) => {
          props.dispatch(updateExpense(props.match.params.id, expenses));
          props.history.push("/");
      }}/>
      {/* <h1>Feed Deatail! This is {props.match.params.id}</h1> */}
      {/* <Link to="/">home </Link> */}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  // console.log(`ownprops ${ownProps.id}`)
  return  {
    expenses: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(FeedDetail);