import * as React from 'react';

export interface TableBodyProps {
    children?:any
}

export function TableBody (props: TableBodyProps) {
    return (
        <tbody>
            {props.children}
        </tbody>
    );
}