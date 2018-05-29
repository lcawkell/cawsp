import * as React from 'react';
import { ActionButton } from '../Button';
import Icon from '../Icon';

export interface TableSelectionProps {
    selected: number,
    children?: any
}

export interface TableSelectionState {
}

export default class TableSelection extends React.Component<TableSelectionProps, TableSelectionState> {
    constructor(props: TableSelectionProps) {
        super(props);

        this.state = {
        }
    }

    render() {

        let styles = {
            root: {
                position: 'relative' as 'relative',
                height: '60px',
                backgroundColor: '#fbe0ea'
            },
            title: {
                marginTop: 0,
                marginBottom: 0,
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: '20px',
                color: '#e10050'
            },
            actions: {
                position: 'absolute' as 'absolute',
                right: 0,
                top: 0,
                height: '60px',
                display: 'flex',
                flexWrap: 'nowrap' as 'nowrap',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: '0px 10px 0 10px'
            }
        }

        return (
            <div style={{...styles.root}}>
                <p className='table-title' style={{...styles.title}}>{this.props.selected} selected</p>
                <span className='table-actions' style={{...styles.actions}}>
                    {this.props.children}
                </span>
            </div>
        );
    }
}
