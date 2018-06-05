import * as React from 'react';
import * as styles from './Toggle.css';

export interface ToggleProps {
    active?: boolean,
    onClick: (active:boolean) => void
    onLabel?: string,
    offLabel?:string
}

export default function Toggle (props: ToggleProps) {
    let root = props.active ? [styles.root, styles.rootActive].join(' ') : styles.root;
    let thumb = props.active ? [styles.thumb, styles.thumbActive].join(' ') : styles.thumb;
    let label = props.active ? props.onLabel || 'On' : props.offLabel || 'Off';
    return (
        <div className={'ToggleContainer ' + styles.container} onClick={()=>props.onClick(!props.active)}>
            <span className={root} >
                <div className={thumb}></div>
            </span> <span className={styles.label}>{label}</span>
        </div>
    );
}
