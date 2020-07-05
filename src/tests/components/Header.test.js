// react-test-renderer
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';
import Header from '../../components/Header';

test('should render header correctly', () => {

    const wrapper = shallow(<Header />);

    //expect(wrapper.find('h1').text()).toBe('EXPENsify');
    expect(toJSON(wrapper)).toMatchSnapshot();



    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
})

             