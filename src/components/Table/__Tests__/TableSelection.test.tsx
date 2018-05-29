import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import TableSelection from '../TableSelection';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<TableSelection selected={1} />);
});

describe('TableSelection', ()=>{
    it('Renders a containing div', ()=>{
        expect(control.find('div').length).toBe(1);
    });
});