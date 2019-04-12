import React from 'react';
import {shallow} from 'enzyme';
import UserPage from './UserPage';
import "../setupTests";

describe("when using the User Page component", () => {
    let wrapper;
    let match = {params: {id: 1}};

    let success = true;
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    const mockFetchFail = Promise.reject("it went wrong");

    jest.spyOn(UserPage.prototype, 'componentDidMount');
    jest.spyOn(UserPage.prototype, 'fetchUsers');
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        if (success) return mockFetchPromise;
        return mockFetchFail;
    });

    beforeEach(() => {

        global.fetch.mockClear()
        wrapper = shallow(<UserPage match={match}/>);

    });
    it('should render the component', () => {
        expect(wrapper.find(".UserPage").length).toBe(1);
    });

    describe('and the component mounts and calls a successful fetch', () => {


        it("should perform a fetch", () => {
            expect(UserPage.prototype.componentDidMount).toHaveBeenCalled();
            expect(UserPage.prototype.fetchUsers).toHaveBeenCalled();
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
        });


    });

    describe('and the component mounts and calls has an error on fetch', () => {

        beforeEach(() => {
            success = false;
        });

        it("should perform a fetch", () => {
            expect(wrapper.find(".Error").length).toBe(0)
        });


    });


});

