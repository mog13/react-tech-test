import React from 'react';
import {mount, shallow} from 'enzyme';
import UserCard from './UserCard';
import "../setupTests";

describe("when using the User Card component",()=>{

    describe("And i pass it props",()=>{
        let wrapper;
        let user = {
            name:"Morgan",
            email:"morgan@inflo.ai",
            phone:"01234 456543",
            id:1
        };

        beforeEach(()=>{
            wrapper = shallow(
               <UserCard name={user.name} email={user.email} phone={user.phone} id={user.id} />);
        });

        it('should display the given name', () => {
            expect(wrapper.find(".overview--container [data-hook='name']").text()).toBe(user.name);
        });

        it('should display the given email', () => {
            expect(wrapper.find(".overview--container [data-hook='email']").text()).toBe(user.email);
        });

        it('should display the given [phone]', () => {
            expect(wrapper.find(".overview--container [data-hook='phone']").text()).toBe(user.phone);
        });

        it("shouldn't have a redirect when rendered normally",()=>{
            expect(wrapper.find("redirect").length).toBe(0);
        });
        describe("should go to user page when clicked",()=>{
        beforeEach(()=>{
            wrapper.find(".UserCard").simulate("click");
            wrapper.instance().forceUpdate();
            wrapper.update();

        });

            it('should now show a redirect', function () {
                // expect(wrapper.find("redirect").length).toBe(1);
                expect(wrapper.state("toUser")).toBe(true)
            });

        })
    });


});

