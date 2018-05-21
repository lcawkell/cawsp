import * as React from 'react';
import Layout from './Layout';

export interface HomeProps {
}

export interface HomeState {
}

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        let styles = {
            root: {
                fontFamily: 'Lato, sans-serif'
            }
        }
        return (
            <div style={{...styles.root}}>
                Test Setup
            </div>
        );
    }
}

export default Layout(Home);