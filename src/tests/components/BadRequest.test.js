import React from 'react';
import { shallow } from 'enzyme';
import BadRequest  from '../../components/BadRequest';

test('should render BadRequest corectly', () => {
  const wrapper = shallow(<BadRequest />);
  expect(wrapper).toMatchSnapshot();
});