import React, { Component } from 'react';
import ConnectedItemList from './ItemList';
// import validator from 'validator';
import 'normalize.css/normalize.css';
import '../style/style.scss';
// import 'bootstrap/dist/css/bootstrap.css';


class Inputter extends Component {
  state = {
    expenses: [],
    filters: {}
  };
  // handlePick = () => {
  //   const randomNumber = Math.floor(Math.random() * this.state.expenses.id);
  //   // const randomNumber = Math.floor(Math.random() * this.state.it.length);
  //   console.log(randomNumber);
  //   //const option = this.state.options[randomNumber];
  //   const item = this.state.it.concat(randomNumber);

  //   this.setState(() => ({
  //     selectedItem: item
  //   }));
  // };
  // handleClearSelectedItem = () => {
  //   this.setState(() => ({
  //     selectedItem: undefined,
  //     expenses: []
  //   }));
  // };
  // handleCloseModal = () => {
  //   this.setState(() => ({
  //     selectedItem: undefined
  //   }));
  // };
  // handleDeleteItem = () => {
  //   const item = this.state.expenses.length;
  //   this.setState(() => ({
  //     expenses: []
  //   }));
  // };
  // handleSelectedAll = (e, expenses) => {
  //   const checkItem = this.state.checkItem;
  //   const checkState = e.target.checked;
  //   const selectedItem = expenses;
  //   let checkAll = this.state.checkAll;
  //   let checkStatus = this.state.checkStatus;
  //   let itemList = [];
  //   console.log(checkAll, expenses, e.target.checked, checkStatus);

  //   if(!checkAll) {
  //     console.log("true");
  //     itemList = [ ...checkItem, selectedItem ];
  //     for(let i=0;itemList.length>=i;i++) {
  //       checkStatus[i] = true;
  //     }
  //     console.log(itemList);
  //     checkAll = true;
  //   } else {
  //     console.log("false");
  //     for(let i=0;itemList.length>=i;i++) {
  //       checkStatus[i] = false;
  //       console.log(itemList[i])
  //     }
  //     checkAll = false;
  //     console.log(itemList);
  //   }
  //   this.setState(() => ({
  //     checkAll: checkAll,
  //     checkStatus: checkStatus,
  //     checkItem: itemList,
  //   }));
  // };
  // handleCheckSelectItem = (event, item, index) => {
  //   console.log(event, item, index);
  //   const checkItem = this.state.checkItem;
  //   const checkStatus = this.state.checkStatus;
  //   const checkedState = event.target.checked;
  //   const selectedItem = item;
  //   let itemList = [];

  //   if(checkedState === true) {
  //     itemList = [ ...checkItem, selectedItem ];
  //   } else {
  //     itemList = checkItem.filter(item => item.id !== selectedItem.id);
  //   }
  //   console.log(itemList);

  //   this.setState(() => ({
  //     checkItem: itemList,
  //     checkStatus: !checkStatus
  //   }))
  // };

  render() {
    return(
      <div>
        <ConnectedItemList />
      </div>
    );
  }
}
export default Inputter;