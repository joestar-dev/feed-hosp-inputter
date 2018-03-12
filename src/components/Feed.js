import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FeedForm from './FeedForm';
import { connect } from 'react-redux';
import moment from 'moment';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    // const { expense } = this.props;
    // console.log('feed' + expense) 
    // this.state = {
    //   id: this.props.expense ? this.props.expense.id : '',
    //   description : this.props.expense ? this.props.expense.description : '',
    //   note: this.props.expense ? this.props.expense.note : '',
    //   genre: this.props.expense ? this.props.expense.genre : 'genre1',
    //   date: moment()
    // };
  }
  render() {
    return (
      <div>
          <div></div>
        <div>
          <Link to="/feed/1">feed 1 </Link>
          <Link to="/feed/2">feed 2 </Link>
        </div>
      </div>
  )};
}

export default (Feed);