import * as React from 'react';
import Layout from '../components/Layout';

export interface AboutProps {
}

export interface AboutState {
}

class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div>
                About page ... another test
            </div>
        );
    }
}

export default Layout(About);