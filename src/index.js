import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Tooltip, Toast, Popover } from 'bootstrap';
import Alert from 'bootstrap/js/dist/alert';
// Require Sass file so webpack can build it
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css';
import './styles/floating-label.css';

ReactDOM.render(<App />, document.getElementById('App'));
