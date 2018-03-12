import 'react-dates/initialize';
import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { addExpenses, updateExpense } from '../actions/expenses';

class FeedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.expenses ? props.expenses.error : '',
      file: '',
      imagePreviewUrl: '',
      id: props.expenses ? props.expenses.id : '',
      description : props.expenses ? props.expenses.description : '',
      note: props.expenses ? props.expenses.note : '',
      genre: props.expenses ? props.expenses.genre : 'genre1',
      date: props.expenses ? moment(props.expenses.date, "DDMMYYYY") : moment(),
      calendarFocused: false
    }
  };
  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      error: nextProps.expenses ? nextProps.expenses.error : '',
      id: nextProps.expenses ? nextProps.expenses.id : '',
      description: nextProps.expenses ? nextProps.expenses.description : '',
      note: nextProps.expenses ? nextProps.expenses.note : '',
      genre: nextProps.expenses ? nextProps.expenses.genre : 'genre1',
      date: nextProps.expenses ? moment(nextProps.expenses.date, "DDMMYYYY") : moment()
    }));
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDateChange = (date) => {
    if(date) {
      this.setState(() => ({ date }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onGenreChange = (e) => {
    const genre = e.target.value;
    this.setState(() => ({ genre }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.id) {
      console.log(`update`)
      this.props.onResetForm(e)
    } else {
      console.log(`add`)
    }
    if(!this.state.description || !this.state.note) {
      this.setState(() => ({
        error: 'please fill something!'
      }));
    } else {
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        genre: this.state.genre,
        date: this.state.date.format('DDMMYYYY')
      });
    }
  };
  // resetState = () => {
  //   this.setState(() => ({
  //     error: '',
  //     file: '',
  //     imagePreviewUrl: '',
  //     id: '',
  //     description: '',
  //     note: '',
  //     genre: 'genre1',
  //     date: moment(),
  //     calendarFocused: false
  //   }));
  // }
  handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  };
  handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  };
  render() {
    const { onResetForm } = this.props;
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={ imagePreviewUrl } />);
    } else {
      $imagePreview = (<div className="previewText">Preview Image</div>);
    }
    return (
      <div>
      <div className="feed-form">
        <form onSubmit={ this.onSubmit }>
        <div className="feed-form__input">
        <div className="feed-form__input__add">
          <span className="span-label">Title :</span>
          <input 
            ref="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            type="text" 
            name="description" />
        </div>
        <div className="feed-form__input__add">
          <span className="span-label">Content :</span>
          <textarea 
            value={this.state.note}
            onChange={this.onNoteChange}
            rows="5" 
            placeholder="fill in contents..."></textarea>
        </div>
        <div className="feed-form__input__add">
          <span className="span-label">Date :</span>
          <SingleDatePicker 
            displayFormat="DD/MM/YYYY"
            numberOfMonths={1}
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          />
        </div>
        <div className="feed-form__input__add">
          <span className="span-label">Genre :</span>
          <select 
            value={this.state.genre}
            onChange={this.onGenreChange}>
            <option value="genre1">genre1</option>
            <option value="genre2">genre2</option>
            <option value="genre3">genre3</option>
            <option value="genre4">genre4</option>
          </select>
        </div>
        <div className="feed-form__input__add">
          <span className="span-label">Image :</span>
          <input 
            className="file-input" 
            type="file" 
            name="image"
            onChange={(e)=>this.handleImageChange(e)} />
        </div>
        </div>
        <div className="img-frame">
          <div className="img-preview">
            {$imagePreview}
          </div>
        </div>
        <div>
        <button 
          type="submit" 
          className="submit-button">Save
        </button>
        <button 
          type="button" 
          className="reset-button" 
          onClick={(e) => onResetForm(e) }>Reset
        </button>
          {this.state.error && <span className="input-error">{this.state.error}</span>}
          {/* {warning !== 'edit' && <span className="input-error">{warning}</span>} */}
        </div>
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(`ownprops ${ownProps.id}`)
  return  {
    expenses: state.expenses.find((expense) => expense.id === ownProps.id)
  };
};

export default connect(mapStateToProps)(FeedForm);


 