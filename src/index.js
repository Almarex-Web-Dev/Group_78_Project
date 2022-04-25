import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// import external css files
import "../src/css/App.css"
import "../src/css/all.min.css"
import '../src/css/mediaQuery.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

