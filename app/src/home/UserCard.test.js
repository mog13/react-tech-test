import React from 'react';
import { mount } from 'enzyme';
import UserCard from './UserCard';
import "../setupTests";

describe("when using thge User Card component",()=>{

    describe("And i pass it props",()=>{
        let wrapper;
        let user = {
            name:"Morgan",
            email:"morgan@inflo.ai",
            phone:"01234 456543"
        };

        beforeEach(()=>{
            wrapper = mount(<UserCard name={user.name} />);
        });


        it('should display the given name', () => {
            expect(wrapper.find(".overview--container [data-hook='name']").text()).toBe(user.name);
        });
    });


});

