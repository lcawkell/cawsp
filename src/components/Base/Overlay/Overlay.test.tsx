import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Overlay from './Overlay';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<Overlay visible={true} onClose={()=>{}} />);
});

describe('Overlay', ()=>{

    it('Renders a containing div', ()=>{
        expect(control.find('div.overlay-parent').length).toBe(1);
    })

});