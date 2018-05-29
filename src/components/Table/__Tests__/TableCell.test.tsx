import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { TableCell } from '../TableCell';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<TableCell />);
});

describe('TableCell', ()=>{

    it('Renders a containing table data cell', ()=>{
        expect(control.find('td').length).toBe(1);
    });

});