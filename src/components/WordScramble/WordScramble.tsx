import * as React from 'react';
import Letter from '../Letter';
import * as styles from './WordScramble.css';

export interface WordScrambleProps {
    children:any
}

export interface WordScrambleState {
    hovering:boolean,
    words: any
}

export default class WordScramble extends React.Component<WordScrambleProps, WordScrambleState> {
    constructor(props: WordScrambleProps) {
        super(props);

        this.state = {
            hovering:false,
            words: {
                cawsp: [
                    {
                        left: '0px',
                        opacity: 1
                    },
                    {
                        left: '25px',
                        opacity: 1
                    },
                    {
                        left: '50px',
                        opacity: 1
                    },
                    {
                        left: '82px',
                        opacity: 1
                    },
                    {
                        left: '105px',
                        opacity: 1
                    }
                ],
                wasp: [
                    {
                        left: '0px',
                        opacity: 0
                    },
                    {
                        left: '57px',
                        opacity: 1
                    },
                    {
                        left: '25px',
                        opacity: 1
                    },
                    {
                        left: '82px',
                        opacity: 1
                    },
                    {
                        left: '105px',
                        opacity: 1
                    }
                ],
                paws: [
                    {
                        left: '0px',
                        opacity: 0
                    },
                    {
                        left: '52px',
                        opacity: 1
                    },
                    {
                        left: '78px',
                        opacity: 1
                    },
                    {
                        left: '110px',
                        opacty: 1
                    },
                    {
                        left: '25px',
                        opacity: 1
                    }
                ],
                swap: [
                    {
                        left: '0px',
                        opacity: 0
                    },
                    {
                        left: '80px'
                    },
                    {
                        left: '48px'
                    },
                    {
                        left: '25px'
                    },
                    {
                        left: '105px'
                    }
                ]
            }
        }
    }

    setHovering = (hovering:boolean) => {
        this.setState({hovering});
    }

    render() {

        let random = Math.floor(Math.random()*3);
        let chosen; 

        switch(random) {
            case 0:
                chosen = this.state.words.paws;
            break;
            case 1:
                chosen = this.state.words.wasp;
            break;
            case 2:
                chosen = this.state.words.swap;
            break;
        }

        chosen = this.state.hovering ? chosen : this.state.words.cawsp;
        
        return (
            <div onMouseEnter={()=>this.setHovering(true)} onMouseLeave={()=>this.setHovering(false)} className={styles.root}>
                <Letter left={chosen[0].left} opacity={chosen[0].opacity}>C</Letter>
                <Letter left={chosen[1].left}>a</Letter>
                <Letter left={chosen[2].left}>w</Letter>
                <Letter left={chosen[3].left}>s</Letter>
                <Letter left={chosen[4].left}>p</Letter>
            </div>
        );
    }
}
