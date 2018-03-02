import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Product from './Task2'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App />
    <Product/>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
