import * as React from 'react';
import Icon from '../Icon';

let sortAscIcon = {
    svgCode: 'M204.485 392l-84 84.485c-4.686 4.686-12.284 4.686-16.971 0l-84-84.485c-4.686-4.686-4.686-12.284 0-16.97l7.07-7.071c4.686-4.686 12.284-4.686 16.971 0L95 419.887V44c0-6.627 5.373-12 12-12h10c6.627 0 12 5.373 12 12v375.887l51.444-51.928c4.686-4.686 12.284-4.686 16.971 0l7.07 7.071c4.687 4.686 4.687 12.284 0 16.97zm100.492-220.355h61.547l15.5 44.317A12 12 0 0 0 393.351 224h11.552c8.31 0 14.105-8.243 11.291-16.062l-60.441-168A11.999 11.999 0 0 0 344.462 32h-16.924a11.999 11.999 0 0 0-11.291 7.938l-60.441 168c-2.813 7.82 2.981 16.062 11.291 16.062h11.271c5.12 0 9.676-3.248 11.344-8.088l15.265-44.267zm10.178-31.067l18.071-51.243c.853-2.56 1.776-5.626 2.668-8.743.871 3.134 1.781 6.219 2.644 8.806l17.821 51.18h-41.204zm-3.482 307.342c4.795-6.044-1.179 2.326 92.917-133.561a12.011 12.011 0 0 0 2.136-6.835V300c0-6.627-5.373-12-12-12h-113.84c-6.627 0-12 5.373-12 12v8.068c0 6.644 5.393 12.031 12.037 12.031 81.861.001 76.238.011 78.238-.026-2.973 3.818 4.564-7.109-92.776 133.303a12.022 12.022 0 0 0-2.142 6.847V468c0 6.627 5.373 12 12 12h119.514c6.627 0 12-5.373 12-12v-8.099c0-6.627-5.373-12-12-12-87.527-.001-81.97-.01-84.084.019z',
    viewBox: '0 0 448 512'
}

let sortDscIcon = {
    svgCode: 'M19.515 120l84-84.485c4.686-4.686 12.284-4.686 16.971 0l84 84.485c4.686 4.686 4.686 12.284 0 16.97l-7.07 7.071c-4.686 4.686-12.284 4.686-16.971 0L129 92.113V468c0 6.627-5.373 12-12 12h-10c-6.627 0-12-5.373-12-12V92.113l-51.444 51.928c-4.686 4.686-12.284 4.686-16.971 0l-7.07-7.071c-4.687-4.686-4.687-12.284 0-16.97zm285.462 51.645h61.547l15.5 44.317A12 12 0 0 0 393.351 224h11.552c8.31 0 14.105-8.243 11.291-16.062l-60.441-168A11.999 11.999 0 0 0 344.462 32h-16.924a11.999 11.999 0 0 0-11.291 7.938l-60.441 168c-2.813 7.82 2.981 16.062 11.291 16.062h11.271c5.12 0 9.676-3.248 11.344-8.088l15.265-44.267zm10.178-31.067l18.071-51.243c.853-2.56 1.776-5.626 2.668-8.743.871 3.134 1.781 6.219 2.644 8.806l17.821 51.18h-41.204zm-3.482 307.342c4.795-6.044-1.179 2.326 92.917-133.561a12.011 12.011 0 0 0 2.136-6.835V300c0-6.627-5.373-12-12-12h-113.84c-6.627 0-12 5.373-12 12v8.068c0 6.644 5.393 12.031 12.037 12.031 81.861.001 76.238.011 78.238-.026-2.973 3.818 4.564-7.109-92.776 133.303a12.022 12.022 0 0 0-2.142 6.847V468c0 6.627 5.373 12 12 12h119.514c6.627 0 12-5.373 12-12v-8.099c0-6.627-5.373-12-12-12-87.527-.001-81.97-.01-84.084.019z',
    viewBox: '0 0 448 512'
}

export interface TableHeadingCellProps {
    sort?: 'asc' | 'dsc' | '',
    hovering?: boolean,
    displayShadow?: boolean,
    onHover?: () => void,
    onHoverLeave?: () => void,
    onClick?: ()=>void,
    sortable?: boolean | 'disabled',
    children?:any,
    tableStyle?: 'normal' | 'light'
}

export function TableHeadingCell (props: TableHeadingCellProps) {
    let sortable = props.sortable !== undefined ? props.sortable : true;

    let normalStyles = {
        normal: {
            color: '#fff',
            background: '#002145',
            textTransform: 'uppercase' as 'uppercase',
            fontSize: '12px',
            border: '1px solid #eee',
            padding: '12px 35px',
            borderCollapse: 'collapse' as 'collapse',
            cursor: sortable ? sortable === 'disabled' ? 'default' : 'pointer' : 'not-allowed',
            position: 'relative' as 'relative',
            userSelect: 'none' as 'none'
        },
        sortAsc: {
            boxShadow: ' 0px -3px 0px #97D4E9'
        },
        sortDsc: {
            boxShadow: ' 0px 4px 0px #97D4E9'
        }
    }

    let lightStyles = {
        normal: {
            color: '#fff',
            background: '#002145',
            textTransform: 'uppercase' as 'uppercase',
            fontSize: '12px',
            border: '1px solid #eee',
            padding: '10px 15px',
            borderCollapse: 'collapse' as 'collapse',
            cursor: sortable ? sortable === 'disabled' ? 'default' : 'pointer' : 'not-allowed',
            position: 'relative' as 'relative',
            userSelect: 'none' as 'none'
        },
        sortAsc: {
            boxShadow: ' 0px -3px 0px #97D4E9'
        },
        sortDsc: {
            boxShadow: ' 0px 4px 0px #97D4E9'
        }
    }

    let styles = props.tableStyle === 'light' ? lightStyles : normalStyles;

    //let sortStyle = props.sort === 'asc' ? {...styles.sortAsc} : props.sort === 'dsc' ? {...styles.sortDsc} : {}
    let sortIcon = props.sort === 'asc' ? <Icon icon={sortAscIcon} size="small" color="#fff" /> : props.sort === 'dsc' ? <Icon icon={sortDscIcon} size="small" color="#fff" /> : props.hovering && props.displayShadow ? <Icon icon={sortAscIcon} size="small" color="#ccc" /> : null
    

    
    let sortFunctions = sortable ? {
        onClick: props.onClick,
        onMouseEnter: props.onHover,
        onMouseLeave: props.onHoverLeave
    } : {};


    return (
        <th style={{...styles.normal}} {...sortFunctions}>
            {props.children}
            <span style={{position:'absolute', top: '8px', right: '10px'}}>
                {sortIcon}
            </span>
        </th>
    );
}