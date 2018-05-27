import * as React from 'react';
import Layout from '../components/Layout';

// Playground components
import Letter from './Letter';
import WordScramble from './WordScramble';

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

    render() {
        return (
            <div>
                <h1>Component Playground</h1>
                <div style={{fontFamily:'Indie Flower', fontSize:'50px', margin:'50px'}}>
                    <WordScramble>Cawsp</WordScramble>
                </div>
            </div>
        );
    }
}

export default Layout(Playground);