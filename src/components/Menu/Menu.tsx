import * as React from 'react';
import * as styles from './Menu.css';

interface MenuProps {
    children?:any,
    open?:boolean
}

interface MenuItemProps {
    children?:any,
    link?:any,
    onClick?: () => void
}

export default function Menu (props: MenuProps) {
    let menuOpenCss = props.open ? {
        height: document.body.scrollHeight-70
    } : null;

    return (
      <ul id="Menu" className={styles.menu} style={{...menuOpenCss}}>
        {props.children}
      </ul>
    );
}

export function MenuItem (props: MenuItemProps) {
    return (
        <li className={styles.menuItem}><a className={styles.menuItemLink} href={props.link} onClick={props.onClick}>{props.children}</a></li>
    );
}