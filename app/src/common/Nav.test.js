import React from 'react';
import { mount } from 'enzyme';
import Nav from './Nav';
import "../setupTests";

describe("when using the Nav component",()=>{
    beforeEach(()=>{

    });
    it('should render the component', () => {
        const wrapper = mount(<Nav />);
        expect(wrapper.text()).toBe('It Works!');;
    });

});

