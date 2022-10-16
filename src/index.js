import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './app/styles/app.css';

const rootElement = document.getElementById('root'); 
const root = ReactDOM.createRoot(rootElement);
root.render(
    <App />
);