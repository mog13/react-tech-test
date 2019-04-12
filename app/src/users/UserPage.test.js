import React from 'react';
import { shallow } from 'enzyme';
import UserPage from './UserPage';
import "../setupTests";

describe("when using the Nav component",()=>{
    let wrapper;
    beforeEach(()=>{;
         jest.spyOn(UserPage.prototype, 'componentDidMount');
         jest.spyOn(UserPage.prototype, 'fetchUsers');
        wrapper = shallow(<UserPage />);
    });
    it('should render the component', () => {
        expect(wrapper.find(".UserPage").length).toBe(1);
    });

    it('should call fetch when the component mounts', () => {
        expect(UserPage.prototype.componentDidMount).toHaveBeenCalled();
        expect(UserPage.prototype.fetchUsers).toHaveBeenCalled();
    });


});

