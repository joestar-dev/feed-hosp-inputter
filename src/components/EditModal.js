import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import FeedForm from './FeedForm';

const EditModal = (props) => (
  <Modal
    isOpen={!!props.id}
    onRequestClose={props.handleCloseEditModal}
    contentLabel="Edit Item"
    ariaHideApp={false}
    closeTimeoutMS={300}
    className="modal">
    <h1 className="modal__title">Edit Item</h1>
    <div>
      {/* <p>{props.id}</p> */}
      <FeedForm 
        id={props.id}
        onSubmit={(expenses) => {
          this.props.dispatch(updateExpense(props.id, expenses));
      }}/>
    <button className="modal-close" onClick={props.handleCloseEditModal}>Close</button>
    </div>
  </Modal>
);

export default connect()(EditModal);