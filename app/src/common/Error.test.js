import React from 'react';
import {shallow} from 'enzyme';
import Error from './Error';
import "../setupTests";

describe("when using the Error component",()=>{

    describe("And i pass it props",()=>{
        let wrapper;
      let error = "something has gone wrong!";
        beforeEach(()=>{
            wrapper = shallow(
                <Error error={error}/>);
        });

        it('should display the given error proceeded by "Error: "', () => {
            expect(wrapper.find(".Error [data-hook='error']").text()).toBe(`Error: ${error}`);
        });

    });


});

