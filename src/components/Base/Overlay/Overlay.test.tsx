import * as React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';

import Overlay from './Overlay';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control;
beforeEach(()=>{
    control = mount(<Overlay visible={true} onClose={()=>{}}>test</Overlay>);
});

describe('Overlay', ()=>{

    it('Renders a containing div', ()=>{
        expect(control.find('div').length).toBeGreaterThan(1);
    })

});