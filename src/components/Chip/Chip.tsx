import * as React from 'react';
import * as styles from './Chip.css';
import Icon, { IIconStyles } from '../Icon';

export interface ChipProps {
    children?:any,
    onDelete?: ()=>void
}

export default function Chip (props: ChipProps) {

    let icon = {
        svgCode: 'M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z',
        viewBox: '0 0 320 512'
    }

    let onClick = () => {
        props.onDelete !== undefined && props.onDelete();
    }

    let iconStyles:IIconStyles = {
        root: {
            zIndex: -1,
            height:14,
            width:'auto',
            strokeWidth: 3,
            fill: '#000',
            position: 'relative' as 'relative',
            top: '1px'
        }
    }

    return (
      <div className={styles.root}>
        <span className={styles.actions + ' noFocus'} onClick={onClick}><Icon icon={icon} size="tiny" styles={iconStyles} /></span>
        <span className={styles.text + ' noBlur'}>{props.children}</span>
      </div>
    );
}
