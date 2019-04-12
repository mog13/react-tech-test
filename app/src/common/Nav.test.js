import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';
import "../setupTests";

describe("when using the Nav component",()=>{
    it('should render the component', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper.text()).toBe('It Works!');
    });

});

