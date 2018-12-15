import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import "./scss/main.scss";
// import * as serviceWorker from './serviceWorker';

import Hero from './app/Hero';


ReactDOM.render( 
    <div>
        <Card {...new Hero("Master",0,0)}/>
        <Card {...new Hero("Bato",0,5)}/>
        <Card {...new Hero("Zorro",0,4)}/>
        <Card {...new Hero("Neto",0,3)}/>
    </div>
    , document.getElementById('root'));
            // serviceWorker.unregister();