import React from 'react';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';
// import ReactShallowRenderer from 'react-test-renderer/shallow';

test('should render Header component correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Hospital Feed Inputter');
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput()) 
});