import * as React from 'react';
import Layout from '../Layout';
import * as styles from './Home.css';

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
        return (
            <div className={styles.root}>
                <p>The purpose of this site is <u>not</u> to showcase good design. I built and host this site simply to be my sandbox where I can test out new designs and ideas with affecting my workplace.</p>
                <p>This site is built using:</p>
                <ol>
                    <li>React - for building the UI</li>
                    <li>Webpack - for building everything</li>
                    <li>TypeScript - to add types and interfaces to the JavaScript</li>
                    <li>Ruby on Rails - as a backend and REST API</li>
                    <li>Node - to provide server side rendering and the GUI backend</li>
                    <li>Jest / Enzyme - unit testing</li>
                </ol>
            </div>
        );
    }
}

export default Layout(Home);