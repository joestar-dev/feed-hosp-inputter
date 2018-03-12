import React from 'react';
import { shallow } from 'enzyme';
import ItemList from '../../components/ItemList';
import expenses from '../fixtures/expenses';

test('should render ItemList with expenses', () => {
  const wrapper = shallow(<ItemList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ItemList with empty array', () => {
  const wrapper = shallow(<ItemList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});