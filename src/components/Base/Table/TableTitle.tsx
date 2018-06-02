import * as React from 'react';
import Icon from '../Icon';
import { IconButton } from '../Button';

let searchIcon = {
    svgCode: 'M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z',
    viewBox: '0 0 512 512'
}

export interface TableTitleProps {
    title?: string,
    filter?: boolean,
    onToggleFilter?: () => void
}

export interface TableTitleState {
}

export class TableTitle extends React.Component<TableTitleProps, TableTitleState> {
    constructor(props: TableTitleProps) {
        super(props);

        this.state = {
        }
    }

    openSearch = () => {

    }

    render() {

        let styles = {
            root: {
                position: 'relative' as 'relative',
                height: '60px',
                textTransform: 'uppercase' as 'uppercase'
            },
            title: {
                marginTop: 0,
                marginBottom: 0,
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginLeft: '20px'
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

        let filter = this.props.filter === undefined ? true : this.props.filter;

        return (
            <div style={{...styles.root}}>
                <h2 className='table-title' style={{...styles.title}}>{this.props.title}</h2>
                <span className='table-actions' style={{...styles.actions}}>
                    {filter && <IconButton onClick={this.openSearch}><Icon icon={searchIcon} size="small"/></IconButton>}
                </span>
            </div>
        );
    }
}
