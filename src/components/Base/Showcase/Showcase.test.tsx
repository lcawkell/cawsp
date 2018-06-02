import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Showcase from './Showcase';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Showcase />);
});

describe('Showcase', ()=>{

    it('Renders a container div', ()=>{
        expect(control.find('div.showcase-container').length).toBe(1);
    });

});