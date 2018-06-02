import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Toggle from './Toggle';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Toggle onClick={()=>{}} />);
});

describe('Toggle', ()=>{

    it('renders a containing div', ()=>{
        expect(control.find('div.ToggleContainer').length).toBe(1);
    });

});