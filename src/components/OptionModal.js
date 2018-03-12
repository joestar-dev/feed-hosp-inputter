import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    onRequestClose={props.handleCloseModal}
    contentLabel="Select Item"
    ariaHideApp={false}
    closeTimeoutMS={300}
    className="modal">
    <h1 className="modal__title">Selected Item</h1>
    {props.selectedItem !== 0 && <p className="modal__body">Do You Want To Remove Item(s)? Total {props.selectedItem}</p>}
    <div>
      <button className="modal-close" onClick={props.handleClearSelectedItem}>Delete</button>
      <button className="modal-close" onClick={props.handleCloseModal}>Close</button>
    </div>
  </Modal>
);

export default connect()(OptionModal);