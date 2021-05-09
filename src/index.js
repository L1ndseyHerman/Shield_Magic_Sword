import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//  This doesn't appear at all. 
//<p>A static paragraph.</p>

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//  This also doesn't appear at all. 
//<p>A static paragraph.</p>
