import * as React from 'react';
import { IColumn } from './Table';
import { TableCell } from './TableCell';
import Checkbox from '../Checkbox';

export interface TableRowProps {
    id: string,
    hovering?: boolean,
    onHover?: ()=>void,
    onLeave?: ()=>void,
    onClick?: ()=>void,
    children?:any,
    tableStyle?: 'normal' | 'light'
}

export class TableRow extends React.Component<TableRowProps, any> {

    constructor(props:TableRowProps){
        super(props);

        this.state = {
            
        };
    }

    shouldComponentUpdate(nextProps:TableRowProps, nextState: any){
        if(nextProps.children === this.props.children && nextProps.hovering === this.props.hovering) {
            return false;
        } else {
            return true;
        }
    }

    onClick = () => {
        if(this.props.onClick !== undefined) this.props.onClick();
    }

    render(){

        let styles = {
            hover: {
                background: '#f4f4f4'
            }
        }

        let style = this.props.hovering ? {...styles.hover} : {};

        return (
            <tr onMouseEnter={this.props.onHover} onMouseLeave={this.props.onLeave} style={style} onClick={this.onClick}>
                {this.props.children}
            </tr>
        );
    }
}