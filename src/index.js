
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

/**
 * @name index
 * @description - This file build the react project
 * @returns {JS Element}
 */

ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);