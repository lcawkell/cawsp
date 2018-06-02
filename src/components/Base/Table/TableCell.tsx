import * as React from 'react';

export interface TableCellProps {
    hovering?: boolean,
    children?:any,
    tableStyle?: 'normal' | 'light'
}

export class TableCell extends React.PureComponent<TableCellProps, any> {

    constructor(props:TableCellProps){
        super(props);

        this.state = {

        };
    }

    shouldComponentUpdate(nextProps: TableCellProps, nextState: any){
        if(nextProps.children === this.props.children) return false;
        else return true;
    }

    render(){
        let normalStyles = {
            normal: {
                color: '#999',
                border: '1px solid #eee',
                padding: '12px 35px',
                borderCollpase: 'collpase' as 'collpase'
            },
            hover: {
                color: '#555'
            }
        }

        let lightStyles = {
            normal: {
                color: '#999',
                border: '1px solid #eee',
                padding: '10px 15px',
                borderCollpase: 'collpase' as 'collpase'
            },
            hover: {
                color: '#555'
            } 
        }

        let styles = this.props.tableStyle === 'light' ? lightStyles : normalStyles;

        let style = this.props.hovering ? {...styles.normal, ...styles.hover} : {...styles.normal};
        return (
            <td style={style}>
                {this.props.children}
            </td>
        );
    }
}