import * as React from 'react';

import Pagination from '../Pagination';
import Checkbox from '../Checkbox';

import { TableBody } from './TableBody';
import { TableHeader } from './TableHeader';
import { TableCell } from './TableCell';
import { TableHeadingCell } from './TableHeadingCell'
import { TableRow } from './TableRow';
import { TableTitle } from './TableTitle';
import TableSelection from './TableSelection';


export interface IColumn {
    title: string,
    name: string,
    sortable?: boolean
}

export interface ISort {
    column: string,
    sort: 'asc' | 'dsc' | ''
}

export interface TableProps {
    title?: string,
    data:{}[],
    columns:IColumn[],
    sortable?: boolean | 'disabled',
    filterable?: boolean,
    selectable?: boolean,
    selectActions?: any,
    selectedItems: {}[],
    onSelectedChanged: (selected) => void,
    tableStyle?: 'normal' | 'light'
}

export interface TableState {
    sort: ISort[],
    rowHovering: number,
    headerHovering: number,
    displaySortShadow: boolean,
    multiSort: boolean,
    data:{}[],
    currentPage: number,
    perPage: number,
    selected:{}[]
}


export interface TableActionsProps {
    children?:any
}



export default class Table extends React.Component<TableProps, TableState> {
    constructor(props: TableProps) {
        super(props);

        this.state = {
            sort: [],
            rowHovering: -1,
            headerHovering: -1,
            displaySortShadow: false,
            multiSort: false,
            data:[],
            selected: [],
            currentPage: 1,
            perPage: 5
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', (event)=>{
            const keyName = event.key;

            if(keyName === 'Shift') {
                this.setState({multiSort:true});
            }

        });

        document.addEventListener('keyup', (event)=>{
            const keyName = event.key;

            if(keyName === 'Shift') {
                this.setState({multiSort:false});
            }
            
        });

        this.setState({data:this.props.data, selected:this.props.selectedItems});
    }

    componentWillReceiveProps(nextProps:TableProps) {
        if(nextProps.data !== this.props.data) {
            let newDataState = nextProps.data;
            
            this.setState({
                data: newDataState.sort(this.sortData)
            })
        }

        if(nextProps.selectedItems !== this.props.selectedItems) {
            let newSelectedItems = nextProps.selectedItems;

            this.setState({selected:newSelectedItems});
        }
    }

    _onRowHover = (index:number) => {
        this.setState({rowHovering:index});
    }

    _onRowLeave = () => {
        this.setState({rowHovering: -1});
    }

    _onHeaderHover = (index:number) => {
        // Check to see if the column is already sorting (don't display shadow);
        // This is just for looks.
        let isBeingSorted = this.state.sort.filter((column)=>{
            return this.props.columns[index].name === column.column;
        }).length > 0;

        this.setState({headerHovering: index, displaySortShadow: !isBeingSorted});
    }

    _onHeaderHoverLeave = () => {
        this.setState({headerHovering: -1});
    }

    JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
        // Needed for excel
        var CSV = 'sep=,' + '\r\n\n';
    
        // Generate label
        if (ShowLabel) {
            var row = "";
            
            //This loop will extract the label from 1st index of on array
            for (var index in JSONData[0]) {
                
                //Now convert each value to string and comma-seprated
                row += index + ',';
            }
    
            row = row.slice(0, -1);
            
            //append Label row with line break
            CSV += row + '\r\n';
        }
        
        //1st loop is to extract each row
        for (var i = 0; i < JSONData.length; i++) {
            var row = "";
            
            //2nd loop will extract each column and convert it in string comma-seprated
            for (var index in JSONData[i]) {
                row += '"' + JSONData[i][index] + '",';
            }
    
            row.slice(0, row.length - 1);
            
            //add a line break after each row
            CSV += row + '\r\n';
        }
    
        if (CSV == '') {        
            alert("Invalid data");
            return;
        }   
        
        //Generate a file name
        var fileName = "TableExport_";
        //this will remove the blank-spaces from the title and replace it with an underscore
        fileName += ReportTitle.replace(/ /g,"_");   
        
        //Initialize file format you want csv or xls
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
        
        var link:any = document.createElement("a");    
        link.href = uri;
        
        //set the visibility hidden so it will not effect on your web-layout
        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        
        //this part will append the anchor tag and remove it after automatic click
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    sortData = (a, b) => {

        let sortColumns = this.state.sort;

        let returnVal = 0;

        sortColumns.forEach((sortColumn)=>{
            if(returnVal === 0) {
                if(a[sortColumn.column] > b[sortColumn.column]) {
                    returnVal = sortColumn.sort === 'asc' ? 1 : -1;
                } else if(a[sortColumn.column] < b[sortColumn.column]) {
                    returnVal = sortColumn.sort === 'asc' ? -1 : 1;
                } else {
                    returnVal = 0;
                }
            }
        });
        return returnVal;
    }

    setSort = (columnName:string) => {

        let sortable = this.props.sortable === undefined ? true : this.props.sortable;

        if(sortable) {
            // Copy the initial options
            let newSortOptions = this.state.sort.map((sortOption)=>{
                return {...sortOption};
            });

            let foundIndex = -1;

            // Check to see if this column is filtering already
            if(newSortOptions.filter((sortOption, index)=>{
                if(sortOption.column === columnName) {
                    foundIndex = index;
                    return sortOption.column === columnName;
                }
            }).length > 0){
                // There are already filters enabled
                let column = newSortOptions[foundIndex];
                if(column.sort === 'asc') {
                    // Column is filtering by ASC so change that to DSC
                    if(this.state.multiSort){
                        // If multisort is on then don't clear other filter
                        newSortOptions[foundIndex].sort = 'dsc';
                    } else {
                        // If multisort is not on then clear other filters
                        newSortOptions = [];
                        newSortOptions.push({
                            column: column.column,
                            sort: 'dsc'
                        });
                    }
                } else if (column.sort === 'dsc') {
                    // Column is filtering by DSC so either remove it or change to ASC
                    if(this.state.multiSort){
                        // Multisort is on so don't clear the rest of the array, just remove this filter
                        newSortOptions.splice(foundIndex,1);
                    } else {
                        // Multisort is not on so clear the rest of the array
                        if(newSortOptions.length > 1) {
                            // If there are other filters then just change this filter to ASC
                            // It makes more sense that the user would want to set a filter to just this column
                            // instead of clearing the filter
                            newSortOptions = [];
                            newSortOptions.push({
                                column: column.column,
                                sort: 'asc'
                            });
                        } else {
                            // If this is the only filter then it makes sense that they want to clear the filter
                            newSortOptions = [];
                        }
                        
                    }
                }
                
                this.setState({sort:newSortOptions}, ()=>{
                    let data = this.state.data.sort(this.sortData);
                    this.setState({data:data});
                });

            } else {
                // This column is not yet filtering so add a new filter
                if(this.state.multiSort) {
                    // When shift is held we add to the array instead of replacing it
                    newSortOptions.push({
                        column: columnName,
                        sort: 'asc' 
                    });
                } else {
                    // When shift is not held we replace the array with a new one
                    newSortOptions = [
                        {
                            column: columnName,
                            sort: 'asc'
                        }
                    ];
                }

                this.setState({sort:newSortOptions, displaySortShadow:false}, ()=>{
                    let data = this.state.data.sort(this.sortData);
                    this.setState({data:data});
                });
            }
        }
    }

    setPage = (pageNumber:number) => {
        this.setState({currentPage:pageNumber});
    }

    isSelected = (row) => {
        let select = this.props.selectable === undefined ? true : this.props.selectable;
        if(select){
            return this.state.selected.filter((selectedItem)=>{
                return JSON.stringify(row) === JSON.stringify(selectedItem);
            }).length > 0;
        } else {
            return false;
        }
    }

    addSelected = (selected:boolean, row:{}) => {
        let select = this.props.selectable === undefined ? true : this.props.selectable;
        if(select) {
            // If selection is enabled then allow selecting
            if(selected) {
                // Remove the item from selected items
                let selectedIndex = -1;
                let selectedItems = JSON.parse(JSON.stringify(this.state.selected));
                selectedItems.forEach((selectedItem, index)=>{
                    if(JSON.stringify(selectedItem) === JSON.stringify(row)){
                        selectedIndex = index;
                    }
                });

                selectedItems.splice(selectedIndex,1);
                //this.setState({selected: selectedItems});
                this.props.onSelectedChanged(selectedItems);
            } else {
                // Add item to selected items
                let selectedItems = JSON.parse(JSON.stringify(this.state.selected));
                let rowToAdd = JSON.parse(JSON.stringify(row));

                selectedItems.push(rowToAdd);

                //this.setState({selected:selectedItems});
                this.props.onSelectedChanged(selectedItems);
            }
        }
    }

    render() {

        let normalStyles = {
            root: {
                fontFamily: 'Arial',
                margin: '25px 10px',
                border: '1px solid #eee',
                borderCollapse: 'collapse' as 'collapse',
                boxShadow: '0px 0px 20px rgba(0,0,0,0.10), 0px 10px 20px rgba(0,0,0,0.05), 0px 20px 20px rgba(0,0,0,0.05), 0px 30px 20px rgba(0,0,0,0.05)'
            },
            table: {
                borderCollapse: 'collapse' as 'collapse',
                border: '1px solid #eee',
                borderBottom: '2px solid #002145',
                width: '700px',
                whiteSpace: 'nowrap' as 'nowrap'
            }
        }

        let lightStyles = {
            root: {
                fontFamily: 'Arial',
                margin: '5px 5px',
                borderCollapse: 'collapse' as 'collapse',
            },
            table: {
                borderCollapse: 'collapse' as 'collapse',
                border: '1px solid #eee',
                borderBottom: '2px solid #002145',
                whiteSpace: 'nowrap' as 'nowrap'
            }
        }

        let styles = this.props.tableStyle === 'light' ? lightStyles : normalStyles;

        // Set default prop values
        let sortable = this.props.sortable === undefined ? true : this.props.sortable === false ? 'disabled': this.props.sortable;
        let filter = this.props.filterable === undefined ? true : this.props.filterable;
        let select = this.props.selectable === undefined ? true : this.props.selectable;
        let title = this.props.title === undefined ? '' : this.props.title;

        return (
            <div style={{...styles.root}}>
                {this.state.selected.length < 1 ? <TableTitle title={title} filter={filter} /> : <TableSelection selected={this.state.selected.length}>{this.props.selectActions}</TableSelection>}
                <div>
                    <table style={styles.table}>
                        <TableHeader>
                            {select && <TableHeadingCell onClick={null} tableStyle={this.props.tableStyle} hovering={false} displayShadow={false} onHover={null} onHoverLeave={null}></TableHeadingCell>}
                            {this.props.columns.map((column, index)=>{
                                let sortResult = this.state.sort.filter((sort)=>{
                                    return sort.column === column.name ? true : false;
                                });
                                let sort = sortResult.length > 0 ? sortResult[0].sort : '';
                                let columnSortable = sortable === true ? column.sortable : sortable;
                                let displayShadow:boolean = columnSortable === 'disabled' ? false : columnSortable;
                                return <TableHeadingCell key={`TableHeadingRow-${index}`} tableStyle={this.props.tableStyle} sort={sort} onClick={()=>this.setSort(column.name)} hovering={this.state.headerHovering === index} onHover={()=>this._onHeaderHover(index)} onHoverLeave={this._onHeaderHoverLeave} displayShadow={displayShadow} sortable={columnSortable}>{column.title}</TableHeadingCell>
                            })}
                        </TableHeader>
                        <TableBody>
                                {this.state.data.slice(((this.state.currentPage*this.state.perPage)-this.state.perPage),(this.state.currentPage*this.state.perPage)).map((row, index)=>{
                                    let hovering = this.state.rowHovering === index;
                                    let selected = this.isSelected(row);
                                    return (
                                        <TableRow key={`TableRow-${index}`} id={`TableRowInner-${index}`} hovering={hovering} onHover={()=>this._onRowHover(index)} onLeave={this._onRowLeave} onClick={()=>this.addSelected(selected,row)}>
                                            {select && <TableCell tableStyle={this.props.tableStyle} key={`TableCellSelection-${index}`} hovering={hovering}><span style={{position: 'relative' as 'relative'}}><Checkbox checked={selected} size="medium" onChange={()=>this.addSelected(selected,row)} /></span></TableCell>}
                                            {this.props.columns.map((column,cellIndex)=>{
                                                return <TableCell tableStyle={this.props.tableStyle} key={`TableCell-${index}-${cellIndex}`} hovering={hovering}>{row[column.name]}</TableCell>
                                            })}
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </table>
                </div>
                <TableActions>
                    <Pagination total={this.state.data.length} perPage={this.state.perPage} currentPage={this.state.currentPage} onPaginate={this.setPage}/>
                </TableActions>
                {/* <a href="#" onClick={()=>this.JSONToCSVConvertor(this.state.data, "TestData", true)}>Generate Excel</a> */}
            </div>
        );
    }
}


export function TableActions (props: TableActionsProps) {
    let style = {
        root: {
            padding: '5px'
        }
    }
    return (
        <div style={{...style.root}}>
            {props.children}
        </div>
    );
}
