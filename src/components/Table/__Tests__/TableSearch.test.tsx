import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import TableSearch from '../TableSearch';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<TableSearch />);
});

describe('TableSearch', ()=>{

    it('Renders a containing div', ()=>{
        expect(control.find('div').length).toBe(1);
    });

});