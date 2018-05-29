var history = require('connect-history-api-fallback');
const express = require('express');
const app = express();
import * as ReactDOMServer from 'react-dom/server';
import { createFactory } from 'react';
import Home from './components/Home';
import About from './components/About';
import Playground from './components/Playground';
import { Router } from './Router';
import * as fs from 'fs';
import * as path from 'path';

console.log(__dirname);

const filePath = path.resolve(__dirname, '..', 'index.html');

let homeHtml = '';
let aboutHtml = '';
let playgroundHtml = '';
let htmlDataA = "";

const HomeApp = createFactory(Home);
const AboutApp = createFactory(About);
const PlaygroundApp = createFactory(Playground);

fs.readFile(filePath, 'utf8', (err:any, htmlData:any) => {
    if (err) {
      console.error('err', err);
      //return res.status(404).end() 
    }

    htmlDataA = htmlData;
    const homeRendered = ReactDOMServer.renderToString(HomeApp());
    const aboutRendered = ReactDOMServer.renderToString(AboutApp());
    const playgroundRendered = ReactDOMServer.renderToString(PlaygroundApp());

    homeHtml = htmlData.replace('<div id="app"></div>',`<div id="app">${homeRendered}</div>`);
    aboutHtml = htmlData.replace('<div id="app"></div>',`<div id="app">${aboutRendered}</div>`);
    playgroundHtml = htmlData.replace('<div id="app"></div>',`<div id="app">${playgroundRendered}</div>`);
    // sendhtml = htmlData;
  });

app.use('/scripts', express.static(path.join(__dirname, "..", "scripts")));
app.use('/styles', express.static(path.join(__dirname, "..", "styles")));

app.get('/About', (req, res) => {
    res.send(htmlDataA);
});

app.get('/Playground', (req, res) => {
    res.send(htmlDataA);
});

app.get('/', (req, res) => {
    res.send(htmlDataA);
});

app.listen(80, ()=> console.log("cawsp server running on 80"));