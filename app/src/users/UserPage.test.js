import React from 'react';
import { mount } from 'enzyme';
import sinon from "sinon"
import UserPage from './UserPage';
import "../setupTests";

describe("when using the Nav component",()=>{
    let wrapper;
    beforeEach(()=>{;
         jest.spyOn(UserPage.prototype, 'componentDidMount');
         jest.spyOn(UserPage.prototype, 'fetchUsers');
        wrapper = mount(<UserPage />);
    });
    it('should render the component', () => {
        expect(wrapper.find(".UserPage").length).toBe(1);
    });

    it('should call fetch when the component mounts', () => {
        expect(UserPage.prototype.componentDidMount).toHaveBeenCalled();
        expect(UserPage.prototype.fetchUsers).toHaveBeenCalled();
    });


});

