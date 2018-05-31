import * as React from 'react';
import Layout from '../components/Layout';

// Playground components
import Letter from './Letter';
import WordScramble from './WordScramble';
import Icon from './Icon';
import Checkbox from './Checkbox';
import Link from './Link';

import { TableRow } from './Table/TableRow';
import { TableCell } from './Table/TableCell';
import Overlay from './Overlay';
import { ActionButton, Button, ButtonContent, IconButton } from './Button';

export interface PlaygroundProps {
}

export interface PlaygroundState {
    overlay:boolean,
    removed:boolean
}

class Playground extends React.Component<PlaygroundProps, PlaygroundState> {
    constructor(props: PlaygroundProps) {
        super(props);

        this.state = {
            overlay:false,
            removed:true
        }
    }

    isClientOrServer = () => {
        return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
      };



    render() {
        return (
            <div>
                <h1>Component Playground</h1>
                Server rendered or client rendered? <Link>{this.isClientOrServer()}</Link>
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