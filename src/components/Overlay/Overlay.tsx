import * as React from 'react';
import * as styles from './Overlay.css';

export interface OverlayProps {
    visible?: boolean,
    removed?: boolean,
    onClick?: () => void,
    onTransitionEnd?: (visibleWhenStarted:boolean) => void,
    children?: any
}

export default function Overlay (props: OverlayProps) {

    let activeClass = props.visible ? styles.rootActive : '';
    let hiddenClass = props.removed ? styles.rootHidden : '';

    function onClick () {
        props.onClick && props.onClick();
    }

    function transitionEnd() {
        props.onTransitionEnd && props.onTransitionEnd(!props.visible);
    }

    function contentClick (event) {
        // Do nothing on click
        event.stopPropagation();
    }

    return (
        <div className={'overlay-parent ' + styles.root + ' ' + activeClass + ' ' + hiddenClass} onClick={onClick} onTransitionEnd={transitionEnd}>
            <div className={styles.content} onClick={contentClick}>
                {props.children}
            </div>
        </div>
    );
}
