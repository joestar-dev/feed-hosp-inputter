import React from 'react';
import { shallow } from 'enzyme';
import ItemListDetail from '../../components/ItemListDetail';
import expenses from '../fixtures/expenses';

test('should render ItemListDetail with expenses', () => {
  const wrapper = shallow(<ItemListDetail {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});