import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './components/App';
import Sidebar from './components/Sidebar';
import Main from './components/Main'
import Tiles from './components/Tiles';
// do with main import Home from './components/Home';
// import * as serviceWorker from './serviceworker';
import {sideBarElementBottom} from './components/Sidebar';
import reportWebVitals from './reportWebVitals';

const App = () => (
    <Home />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
