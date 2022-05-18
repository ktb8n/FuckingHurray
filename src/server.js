import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import App from "./app";


const root = ReactDom.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

