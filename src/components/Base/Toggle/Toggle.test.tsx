import * as React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';

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

    describe('Label', ()=>{

        it('Accepts on and off label props', ()=>{
            expect.assertions(2);

            let testOn = 'testOn';
            let testOff = 'testOff';
            let onToggle = shallow(<Toggle onClick={()=>{}} onLabel={testOn} active />);
            let offToggle = shallow(<Toggle onClick={()=>{}} offLabel={testOff} />);

            expect(onToggle.find('.toggle-label').text()).toBe(testOn);
            expect(offToggle.find('.toggle-label').text()).toBe(testOff);
        });

        it('Uses "On" and "Off" if not label values are given', ()=>{
            expect.assertions(2);

            let onToggle = shallow(<Toggle onClick={()=>{}} active />);
            let offToggle = shallow(<Toggle onClick={()=>{}} />);

            expect(onToggle.find('.toggle-label').text()).toBe('On');
            expect(offToggle.find('.toggle-label').text()).toBe('Off');
        });

    })

    it('Gives a next value when clicked (on -> off)', ()=>{

        let clickFunction = jest.fn();
        let onToggle = mount(<Toggle onClick={clickFunction} active />);

        onToggle.find('.ToggleContainer').simulate('click');

        expect(clickFunction.mock.calls.length).toBe(1);
        expect(clickFunction.mock.calls[0][0]).toBe(false);

    });

});