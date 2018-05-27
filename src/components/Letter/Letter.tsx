import * as React from 'react';
import * as styles from './Letter.css';

export interface LetterProps {
    left?: string,
    top?: string,
    opacity?:number,
    children: any
}

export interface LetterState {
}

export default class Letter extends React.Component<LetterProps, LetterState> {
    constructor(props: LetterProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        let left = this.props.left !== undefined ? this.props.left : 0;
        let top = this.props.top !== undefined ? this.props.top : 0;
        let opacity = this.props.opacity !== undefined ? this.props.opacity : 1;
        return (
            <div className={styles.root} style={{left:this.props.left, top:this.props.top, opacity:opacity}}>
                {this.props.children}
            </div>
        );
    }
}
