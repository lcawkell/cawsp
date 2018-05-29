import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Table, {IColumn} from '../Table';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

let data = [
    {FirstName: "Lucas", LastName:'Cawkell'},
    {FirstName: "Brandon", LastName: 'Nam'}   
];

let columns:IColumn[] = [
    {
        title: 'First Name',
        name: 'FirstName'   
    },
    {
        title: 'Last Name',
        name: 'Last Name'
    }
]

let selected = [];

const updatedSelected = (newSelected) => {
    selected = newSelected;
}

Enzyme.configure({adapter:new EnzymeAdapter()})

let control:ShallowWrapper<undefined, undefined>;

beforeEach(()=>{
    control = shallow(<Table title="Test Table" data={data} columns={columns} selectedItems={selected} onSelectedChanged={updatedSelected} />);
});

describe('Table', ()=>{

    it('Renders a containing table', ()=>{
        expect(control.find('table').length).toBe(1);
    });

});