import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);