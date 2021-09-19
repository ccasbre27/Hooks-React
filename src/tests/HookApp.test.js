import React from 'react';
import { shallow } from "enzyme";
import { App } from '../App';

describe('Tests on Hook App', () => {
   
    test('should render the component', () => {
       
        const wrapper = shallow( <App /> );
        expect( wrapper ).toMatchSnapshot();

    });
    

});
