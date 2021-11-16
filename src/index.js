import React from 'react';
import ReactDOM from 'react-dom';
//Imported the tool to deal with Routes
import { BrowserRouter as Router } from 'react-router-dom';
//Imported the tool to deal with states - REDUX
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
