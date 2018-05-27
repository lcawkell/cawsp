import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import MobileMenu from './MobileMenu';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<MobileMenu />);
});

describe('MobileMenu', ()=>{

    it('renders a containing div', ()=>{
        expect(control.find('div#burger').length).toBe(1);
    });

});