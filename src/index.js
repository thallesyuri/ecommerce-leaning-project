import React from 'react';
import ReactDOM from 'react-dom';
//Imported the tool to deal with Routes
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
