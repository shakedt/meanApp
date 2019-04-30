import React from 'react';
import {mount, unmount, shallow, configure} from 'enzyme';
import RegistartionForm from '../components/RegistartionForm';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter()});

describe('Register Form Tests', () => {
    it('Should have a login button', () => {
       const wrapper = shallow(<RegistartionForm/>);

       expect(wrapper.find('.login-button').exists()).toBe(true);
    });

    it('Test handle Login Click', () => {

    });

    it('Test handle Registration Click', () => {

    });

    it('Should have a registration button', () => {
        const wrapper = shallow(<RegistartionForm/>);

        expect(wrapper.find('.registration-button').exists()).toBe(true);
    });

    it('Should registration button trigger something on click?_?', () => {

    });

    it('Should have 2 inputs One For UserName one for password', () => {
       const wrapper = shallow(<RegistartionForm/>);

       expect(wrapper.find('.user-name').exists()).toBe(true);
       expect(wrapper.find('.password').exists()).toBe(true);
    });

    it('Should have title', () => {
        const wrapper = shallow(<RegistartionForm/>);

        expect(wrapper.find('.login-title').exists()).toBe(true);
    })
});