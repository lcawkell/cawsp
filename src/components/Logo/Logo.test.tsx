import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Logo from './Logo';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Logo />);
});

describe('Logo', ()=>{

    it('Renders a logo div', ()=>{

        expect(control.find('div#logo').length).toBe(1);

    });

});