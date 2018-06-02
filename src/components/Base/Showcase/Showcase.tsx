import * as React from 'react';

export interface ShowcaseProps {
    title?: string,
    description?: string,
    children?: any
}

export interface ShowcaseState {
}

export default class Showcase extends React.Component<ShowcaseProps, ShowcaseState> {
    constructor(props: ShowcaseProps) {
        super(props);

        this.state = {

        }
    }

    render() {
        let styles = {
            root: {
                border: '1px solid #eee',
                display: 'inline-block',
                margin: '10px 10px'
            },
            showcase: {
                marginTop: '10px',
                minWidth: '200px',
                minHeight: '100px',
                padding: '25px',
                position: 'relative' as 'relative',
                boxShadow: '0px 0px 20px rgba(0,0,0,0.1), 0px 10px 20px rgba(0,0,0,.05), 0px 20px 20px rgba(0,0,0,.05), 0px 30px 20px rgba(0,0,0,.05)'
            },
            title: {
                marginTop: '10px',
                width: 'auto',
                textAlign: 'center' as 'center',
                fontSize: '18px',
                fontWeight: 700 as 700,
                fontFamily: 'Arial'
            },
            description: {
                width: 'auto',
                textAlign: 'center' as 'center',
                fontSize: '14px',
                fontFamily: 'Arial'
            },
            content: {
                width: 'auto',
                height: 'auto',
                marginTop: '25px',
                textAlign: 'center' as 'center'
            },
            info: {
                background: '#fff'
            }
        }
        return (
            <div style={{...styles.root}} className='showcase-container'>
                <div style={{...styles.info}}>
                    <div style={{...styles.title}}>{this.props.title}</div>
                    <div style={{...styles.description}}>{this.props.description}</div>
                </div>
                <div style={{...styles.showcase}}>
                    <div style={{...styles.content}}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
