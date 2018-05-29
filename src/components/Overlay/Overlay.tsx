import * as React from 'react';
import * as styles from './Overlay.css';

export interface OverlayProps {
    visible?: boolean
}

export default function Overlay (props: OverlayProps) {

    let inlineStyles = {
        opacity: props.visible ? 1 : 0
    }

    return (
      <div className={styles.root} style={{...inlineStyles}}>
        
      </div>
    );
}
