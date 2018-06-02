import * as React from 'react';
import { ActionButton } from '../Button';
import Icon from '../Icon';

export interface TableSearchProps {
}

export interface TableSearchState {
}

export default class TableSearch extends React.Component<TableSearchProps, TableSearchState> {
    constructor(props: TableSearchProps) {
        super(props);

        this.state = {
        }
    }

    render() {

        let styles = {
            root: {
                position: 'relative' as 'relative',
                height: '60px'
            },
            title: {
                marginTop: 0,
                marginBottom: 0,
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: '10px'
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
                <h2 className='table-title' style={{...styles.title}}>... selected</h2>
                <span className='table-actions' style={{...styles.actions}}>
                    <ActionButton onClick={null}><Icon icon='plus' size="small"/>Add Selected</ActionButton>
                </span>
            </div>
        );
    }
}
