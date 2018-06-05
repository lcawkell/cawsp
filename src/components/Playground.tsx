import * as React from 'react';
import Layout from '../components/Layout';

// Playground components
import Letter from './Letter';
import WordScramble from './WordScramble';
import Icon from './Base/Icon';
import Checkbox from './Base/Checkbox';
import Link from './Base/Link';

import { TableRow } from './Base/Table/TableRow';
import { TableCell } from './Base/Table/TableCell';
import Overlay from './Base/Overlay';
import { ActionButton, Button, ButtonContent, IconButton } from './Base/Button';
import Chip from './Base/Chip';
import Toggle from './Base/Toggle';

export interface PlaygroundProps {
}

export interface PlaygroundState {
    overlay:boolean,
    removed:boolean,
    toggleActive:boolean
}

class Playground extends React.Component<PlaygroundProps, PlaygroundState> {
    constructor(props: PlaygroundProps) {
        super(props);

        this.state = {
            overlay:false,
            removed:true,
            toggleActive:true
        }
    }

    isClientOrServer = () => {
        return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
      };

      setActive = (active:boolean) => {
          this.setState({toggleActive:active});
      }

    render() {
        return (
            <div>
                <h1>Component Playground</h1>
                Server rendered or client rendered? <Link>{this.isClientOrServer()}</Link>

                <br/>

                <div>
                    <Chip label="Clickable Chip" onDelete={()=>{alert('You clicked delete!')}} onClick={()=>{alert('You clicked the chip')}} />
                </div>

                <br/>

                <div>
                    <Toggle active={this.state.toggleActive} onClick={this.setActive} />
                </div>

                <div style={{fontFamily:'Indie Flower', fontSize:'50px', margin:'50px'}}>
                    <Checkbox checked={this.state.overlay} onChange={()=>this.setState({overlay:true})}>Check me to win <Icon icon="check" size="small" color="green" /></Checkbox>
                </div>
                <Overlay visible={this.state.overlay} onClose={()=>this.setState({overlay:false})}>
                    <h3>You win!</h3>
                    <Checkbox inverse>I agree</Checkbox>
                    <IconButton onClick={()=>{}}><Icon icon="plus" size="large" color="#fff" /></IconButton>
                </Overlay>
            </div>
        );
    }
}

export default Layout(Playground);