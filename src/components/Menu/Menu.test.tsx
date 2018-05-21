import * as React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';

import Menu, { MenuItem } from './Menu';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control;

control = mount(
    <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
    </Menu>    
);


describe('Menu', ()=>{

    it("Renders a containing menu unordered list", ()=>{

        expect(control.find('ul#Menu').length).toBe(1);

    });

    describe("The containing unordered list", ()=>{

        

        var ul = control.find('ul#Menu');

        it("Contains two list items", ()=>{

            expect(ul.find('li').length).toBe(2);

        });

    });

});