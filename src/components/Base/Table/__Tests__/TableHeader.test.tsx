import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import {TableHeader} from '../TableHeader';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;
beforeEach(()=>{
    control = shallow(<TableHeader />);
});

describe('TableHeader', ()=>{

    it('Renders a containing table head', ()=>{
        expect(control.find('thead').length).toBe(1);
    });

});