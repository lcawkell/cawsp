import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Demo } from './Demo';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Demo />);
});

describe('Demo', ()=>{

    it('Renders a containing div', ()=>{
        expect(control.find('div').length).toBeGreaterThan(0);
    });

});