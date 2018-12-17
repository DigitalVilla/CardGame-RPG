import React from 'react';
import ReactDOM from 'react-dom';
import "./scss/main.scss";
import * as serviceWorker from './js/serviceWorker';

import App from "./containers/App";

ReactDOM.render( < App / > , document.getElementById('root'));
serviceWorker.unregister();