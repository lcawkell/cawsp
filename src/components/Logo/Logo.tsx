import * as React from 'react';
import * as styles from './Logo.css';

export interface LogoProps {
    onClick?: () => void
}

export default function Logo (props: LogoProps) {
    let onClick = props.onClick !== undefined ? props.onClick : null;
    return (
      <div id="logo" className={styles.logo} onClick={onClick}>Cawsp</div>
    );
}
