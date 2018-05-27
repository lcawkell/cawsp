import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Letter from './Letter';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Letter>A</Letter>);
});

describe('Letter', ()=>{

    it('Has a containing div', ()=>{

        expect(control.find('div').length).toBe(1);

    });

});