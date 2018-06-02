import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { TableBody } from '../TableBody';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<TableBody />);
});

describe('TableBody', ()=>{

    it('Renders a containing table body', ()=>{
        expect(control.find('tbody').length).toBe(1);
    });

});