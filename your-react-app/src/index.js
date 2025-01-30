// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';  // Optional, global styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // This should match the id in your index.html
);
