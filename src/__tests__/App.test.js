/* eslint linebreak-style: ["error", "windows"] */
import { shallow, mount, configure } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const wrapper = shallow(<App />);

  expect(1).toBe(1);
});
