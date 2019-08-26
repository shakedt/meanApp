/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ToDoList from '../components/ToDoList';


configure({ adapter: new Adapter() });

describe('ToDoList', () => {
  it('Should mount without errors', () => {
    const wrapper = shallow(<ToDoList />);

    expect(wrapper.html().indexOf('ToDoList') >= 0).toBe(true);
  });

  it('should call deleteItem on DeleteSharpIcon click', () => {
   // to do add login here 
  });

});
