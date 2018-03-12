import React from 'react';
import { shallow } from 'enzyme';
import FeedForm from '../../components/FeedForm';
import expenses from '../fixtures/expenses';

test('should render FeedForm correctly', () => {
  const wrapper = shallow(<FeedForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render FeedForm with data', () => {
  const wrapper = shallow(<FeedForm expense={expenses[1]}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<FeedForm />);
  wrapper.find('form').simulate('submit', { 
    preventDefault: () => {} 
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'test text';
  const wrapper = shallow(<FeedForm />);
  wrapper.find('input').at(0).simulate('change', { 
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set description on textarea', () => {
  const wrapper = shallow(<FeedForm />);
  wrapper.find('textarea').simulate('change', { 
    target: { value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount if valid input', () => {
  const valid = '23.5';
  const wrapper = shallow(<FeedForm />);
  wrapper.find('input').at(1).simulate('change', { 
    target: { value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
  const valid = '13.5';
  const wrapper = shallow(<FeedForm />);
  wrapper.find('input').at(1).simulate('change', { 
    target: { value }
  });
  expect(wrapper.state('amount')).toBe('');
});