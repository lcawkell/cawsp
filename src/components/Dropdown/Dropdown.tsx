import * as React from 'react';
import * as styles from './Dropdown.css';

import Chip from '../Chip';
import Icon from '../Icon';
import { timingSafeEqual } from 'crypto';

interface IDropdownOption {
    key: string,
    label: string
}

export interface DropdownProps {
    multiple?:boolean
}

export interface DropdownState {
    inputFocusing: boolean,
    selected: IDropdownOption[],
    options: IDropdownOption[]
}

let inputRef = null;

let downIcon = {
    svgCode: 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
    viewBox: '0 0 320 512'
}

let upIcon = {
    svgCode: 'M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z',
    viewBox: '0 0 320 512'
}

export default class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props);

        this.state = {
            inputFocusing: false,
            selected: [],
            options: [
                {key: 'Horse', label: 'Horse'},
                {key: 'Bird', label: 'Bird'},
                {key: 'Cat', label: 'Cat'},
                {key: 'Dog', label: 'Dog'},
                {key: 'A man sat on a log', label: 'A man sat on a log'}
            ]
        }
    }

    componentDidMount(){
        document.addEventListener('click', (caller)=>{
            this.doBlur(caller);
        });

        // document.addEventListener('keyup', (gotten)=>{
        //     console.log("test");
        //     this.onInputKeypress(gotten);
        // });
    }

    doBlur = (caller) => {
        let inputFocusing = this.state.inputFocusing;
        setTimeout(()=>{
            if(typeof caller.target.className === 'string' && caller.target.className.split(' ').indexOf('noBlur') === -1){
                if(inputFocusing) this.setInputFocusing(false);
            }
        }, 15);

    }

    setInputRef = element => {
        inputRef = element;
    }

    focusInput = (caller) => {
        let topSpan = caller.target.closest('span.noFocus');

        setTimeout(()=>{
            if(topSpan == null){
                inputRef.focus();
                this.setState({inputFocusing:true})
            }
        }, 15);
    }

    setInputFocusing = (inputFocusing:boolean) => {
        this.setState({inputFocusing});
    };

    addSelected = (selected:IDropdownOption) => {
        if(this.props.multiple){
            this.addMultiple(selected);
        } else {
            this.addSingle(selected);
        }
    }

    addSingle = (selected:IDropdownOption) => {
        setTimeout(()=>{
            this.setState({selected: [selected]});
        }, 20);
    }

    addMultiple = (selected:IDropdownOption) => {
        let newSelected = [...this.state.selected];
        newSelected.push(selected);
        this.setState({selected:newSelected});
    }

    removeSelected = (index:number) => {
        let newSelected = [...this.state.selected];
        newSelected.splice(index,1);
        this.setState({selected:newSelected});
    }

    onInputKeypress = (gotten) => {
        switch(gotten.key){
            case 'Backspace':
                this.removeSelected(this.state.selected.length-1);
                break;
        }
    }

    render() {

        let display = this.state.inputFocusing ? {} : {display:'none'};
        let blurChoice = this.props.multiple ? ' noBlur' : '';
        let icon = !this.state.inputFocusing ? downIcon : upIcon;

        let options = this.state.options.filter(option=>{

            let matchingItems = this.state.selected.filter(selectedItem => selectedItem.key === option.key);

            return matchingItems.length === 0;

        }).map(option=><div key={option.key} className={styles.option  + blurChoice} onClick={()=>this.addSelected(option)}>{option.label}</div>);

        let selected = this.state.selected.map((selected,index) => {
            if(this.props.multiple) return <Chip key={selected.key} onDelete={()=>this.removeSelected(index)}>{selected.label}</Chip>
            if(!this.props.multiple) return <span className={styles.singleItem}>{selected.label}</span>
        });

        return (
            <div className={styles.root} onClick={this.focusInput}>
                {selected.length < 1 && <span className={styles.placeholder}>Add your items!</span>}
                <span>
                    {selected}
                </span>
                <input className={styles.input} onFocus={(test)=>this.setInputFocusing(true)}  ref={this.setInputRef} onKeyUp={this.onInputKeypress}/>
                
                <div className={styles.options} style={display}>
                    {options}
                </div>

                <div className={styles.icon}>
                    <Icon icon={icon} size="medium" />
                </div>
            </div>
        );
    }
}
