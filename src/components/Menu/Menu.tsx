import * as React from 'react';
import * as styles from './Menu.css';

interface MenuProps {
    children?:any
}

interface MenuItemProps {
    children?:any
}

export default function Menu (props: MenuProps) {
    return (
      <ul id="Menu" className={styles.menu}>
        {props.children}
      </ul>
    );
}

export function MenuItem (props: MenuItemProps) {
    return (
        <li className={styles.menuItem}>{props.children}</li>
    );
}