import React from 'react';
import { shallow } from 'enzyme';
import ItemSumary from '../../components/ItemSumary';

test('should correctly render ItemSummary with 1 expense', () => {
  const wrapper = shallow(<ItemSumary itemCount={1} itemTotal={235} />)
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ItemSummary with multiple expenses', () => {
  const wrapper = shallow(<ItemSumary itemCount={23} itemTotal={2334265756}/>)
  expect(wrapper).toMatchSnapshot();
});