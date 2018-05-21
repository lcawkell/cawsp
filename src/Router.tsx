import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Playground from './components/Playground';

export const Router = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Playground" component={Playground} />
            </div>
        </BrowserRouter>
    );
}

