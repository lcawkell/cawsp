import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Example from './Example';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Example />);
});

describe('Example', ()=>{

    it('Renders a container div', ()=>{
        expect(control.find('div').length).toBeGreaterThanOrEqual(1);
    });

});