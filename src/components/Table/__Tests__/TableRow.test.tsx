import * as React from 'react';
import { render, mount, shallow, ShallowWrapper } from 'enzyme';

import { TableRow } from '../TableRow';
import { IColumn } from '../Table';

import * as Enzyme from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
import { TableCell } from '../TableCell';

Enzyme.configure({adapter:new EnzymeAdapter()})

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

let control;
beforeEach(()=>{
    control = mount(
        <table>
            <tbody>
                <TableRow id="Row1">
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </tbody>
        </table>
    );
});

describe('TableRow', ()=>{

    it("Renders a containing table row", ()=>{
        expect(control.find('tr').length).toBe(1);
    })

    describe('The table row', ()=>{

        it('Contains a number of data elements equal to the number of columns + a selection row', ()=>{
            expect(control.find('tr').find('td').length).toBe(columns.length+1);
        });

    });

});