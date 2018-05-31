import * as React from 'react';
import * as styles from './Overlay.css';

export interface OverlayProps {
    visible:boolean,
    onClose: () => void
}

export default class Overlay extends React.Component<OverlayProps, any> {

    constructor(props: OverlayProps){
        super(props);

        this.state = {
            removed: true,
            visible: false
        }
    }

    componentWillReceiveProps(newProps:OverlayProps){
        if(newProps.visible && !this.state.visible) {
            this.setState({removed:false}, ()=>{
                setTimeout(()=>{
                    this.setState({visible: true});
                }, 50);
    
            });
        } else if (!newProps.visible && this.state.visible){
            this.setState({visible:false});
        }
    }

    setOverlayInvisible = () => {
        this.props.onClose();
    }

    setOverlayRemoved = (visibleWhenStarted:boolean) => {
        if(visibleWhenStarted) this.setState({removed: true});
    }

    render() {
        return (
            <Dimmer visible={this.state.visible} removed={this.state.removed} onClick={this.setOverlayInvisible} onTransitionEnd={(visibleWhenStarted)=>this.setOverlayRemoved(visibleWhenStarted)}>
                {this.props.children}
            </Dimmer>
        );
    }

}

interface DimmerProps {
    visible?: boolean,
    removed?: boolean,
    onClick?: () => void,
    onTransitionEnd?: (visibleWhenStarted:boolean) => void,
    children?: any
}

export function Dimmer (props: DimmerProps) {
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