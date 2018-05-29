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

export interface PlaygroundProps {
}

export interface PlaygroundState {
}

class Playground extends React.Component<PlaygroundProps, PlaygroundState> {
    constructor(props: PlaygroundProps) {
        super(props);

        this.state = {
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
                    <Checkbox>Check me to win <Icon icon="spinner" size="small" color="green" rotate /></Checkbox>
                    <table>
                        <tbody>
                            <TableRow id="Row1">
                                <TableCell>t</TableCell>
                                <TableCell>t</TableCell>
                            </TableRow>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Layout(Playground);