import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppThree from './AppThree';
import EventPubSub from './EventPubSub';

window.appEvents = new EventPubSub();
console.log('app registry loaded')
window.appEvents.on(
    'ADD_APP', (appId) => {
        console.log('Add: ', appId);
        const appRoot = document.getElementById(appId.trim());
        switch (appId.trim()) {
            case "App1":
                ReactDOM.render(<App appName="App1" />, appRoot);
                break;
            case "App3":
                ReactDOM.render(<AppThree appName="App3!" />, appRoot);
                break;
            default:
                break;
        }
    }
);