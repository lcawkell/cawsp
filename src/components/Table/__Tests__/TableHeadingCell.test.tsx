import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { TableHeadingCell } from '../TableHeadingCell';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<TableHeadingCell />);
});

describe('TableHeadingCell', ()=>{

    it('Renders a containing heading cell', ()=>{
        expect(control.find('th').length).toBe(1);
    });

});