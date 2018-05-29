import * as React from 'react';

export interface TableHeaderProps {
    children?:any
}

export function TableHeader (props: TableHeaderProps) {
    return (
        <thead>
            <tr>
                {props.children}
            </tr>
        </thead>
    );
}