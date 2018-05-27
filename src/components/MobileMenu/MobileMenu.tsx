import * as React from 'react';
import * as styles from './MobileMenu.css';

export interface MobileMenuProps {
    open?:boolean;
    className?:string;
    onClick?: () => void;
}

export default function MobileMenu (props: MobileMenuProps) {
    let arm1Open = props.open ? styles.arm1Open : '';
    let arm2Open = props.open ? styles.arm2Open : '';
    let arm3Open = props.open ? styles.arm3Open : '';
    let arm4Open = props.open ? styles.arm4Open : '';
    return (
        <div id="burger" className={styles.mobileMenu} onClick={props.onClick}>
            <span className={styles.arms + ' ' + styles.arm1 + ' ' + arm1Open}></span>
            <span className={styles.arms + ' ' + styles.arm2 + ' ' + arm2Open}></span>
            <span className={styles.arms + ' ' + styles.arm3 + ' ' + arm3Open}></span>
            <span className={styles.arms + ' ' + styles.arm4 + ' ' + arm4Open}></span>
        </div>
    );
}
