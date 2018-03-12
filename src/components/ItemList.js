import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectedExpense from '../selectors/expenses'
import ExpenseListFilters from '../components/ItemListFilters';
import { addExpenses, updateExpense } from '../actions/expenses';
import DeleteItem from '../components/DeleteItem';
import ItemListDetail from '../components/ItemListDetail';
import Action from './Action';
import OptionModal from './OptionModal';
import AddItem from './AddItem';
import FeedForm from './FeedForm';
import Feed from './Feed';
import EditModal from './EditModal';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


class ItemList extends Component {
  state = {
    checkAll: false,
    checkItem: [],
    checkStatus: [],
    id: '',
    editData: false
  }
  onSelectItem = (e, item) => {
    const checkItem = this.state.checkItem;
    const checkStatus = this.state.checkStatus;
    const checkedState = e.target.checked;
    const selectedItem = item;
    let itemList = [];

    if(checkedState) {
      itemList = [ ...checkItem, selectedItem ];
    } else {
      itemList = checkItem.filter(item => item !== selectedItem);
    }

    this.setState(() => ({
      checkItem: itemList,
      checkStatus: !checkStatus
    }))
  };
  handlePick = () => {
    // const randomNumber = Math.floor(Math.random() * this.state.checkItem.length);
    // const randomNumber = Math.floor(Math.random() * this.state.it.length);
    // console.log(randomNumber, this.state.checkItem.length);
    //const option = this.state.options[randomNumber];
    // const item = this.state.it.concat(randomNumber);

    this.setState(() => ({
      selectedItem: this.state.checkItem.length
    }));
  };
  handleClearSelectedItem = () => {
    this.setState(() => ({
      selectedItem: undefined,
      // expenses: []
    }));
  };
  handleCloseModal = () => {
    this.setState(() => ({
      selectedItem: undefined
    }));
  };
  handleCloseEditModal = () => {
    this.setState(() => ({
      id: ''
    }));
  }
  onSelectAllItem = (e) => {
    const checkState = e.target.checked;
    this.setState(() => ({
      checkState
    }));
  };
  onEditItem = ({ id }) => {
    this.setState(() => ({
      id
    }));
  };
  onResetForm = (e) => {
    console.log(e)
    this.setState(() => ({
      error: '',
      id: '',
      description: '',
      note: '',
      genre: 'genre1',
      date: moment(),
      editData: false
    }));
  };
  render() {
    const { expenses } = this.props;
    // const id = this.state.id ? this.state.id : ''
    const { id } = this.state;
    const ItemListHeader = () => (
      <div className="table">
      <div className="group">
        <div className="row">
          <div className="table-header__cell--checkbox">
            <input 
              onChange={this.onSelectAllItem}
              checked={this.state.checkState}
              value={this.state.checkState}
              type="checkbox"/>
          </div>
          <div className="table-header__cell__title">Feed Title</div>
          <div className="cell">Feed Detail</div>
          <div className="table-header__cell_date_genre">Feed Date</div>
          <div className="table-header__cell_date_genre">Feed Genre</div>
          <div className="table-header__cell--delete">x</div>
        </div>
      </div>
    </div>
    );
    return (
      <div> 
        <div className="feed-form__input-filter">
          { id ? <span><h3>Edit Item</h3></span> : <span><h3>Add Item</h3></span> }
        </div>
        <FeedForm 
          id={id}
          onResetForm={this.onResetForm}
          onSubmit={(expenses) => {
              id ? this.props.dispatch(updateExpense(id, expenses)) : 
            this.props.dispatch(addExpenses(expenses));
            this.onResetForm
          }}/>
        <ExpenseListFilters />
        <ItemListHeader />
        <div className="table">
          {expenses.length !== 0 ? expenses.map((exp) => (
          <ItemListDetail 
            onResetForm={this.onResetForm}
            onSelectItem={this.onSelectItem}
            onEditItem={this.onEditItem}
            checkStatus={this.state.checkStatus}
            key={exp.id} 
            { ...exp }/>)) : <div className="caption">no result</div>
          }
        </div>
        <Action 
          handlePick={this.handlePick}
          checkItem={this.state.checkItem}
        />
        <OptionModal
          selectedItem={this.state.selectedItem}
          handleClearSelectedItem={this.handleClearSelectedItem}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
   }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectedExpense(state.expenses, state.filters)
  }
}
export default connect(mapStateToProps)(ItemList);