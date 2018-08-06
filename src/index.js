import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const storeFeedback = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FEELING':
            return {
                ...state,
                feeling: action.payload.feeling
            };
        case 'ADD_UNDERSTANDING':
            return {
                ...state,
                understanding: action.payload.understanding
            };
        case 'ADD_SUPPORT':
            return {
                ...state,
                support: action.payload.support
            };
        case 'RESET_FEEDBACK':
            return {};
        case 'ADD_FEEDBACK':
            let newFeedback = action.payload;
            return {
                ...state,
                newFeedback
            }
                ;
        default:
            return state;
    }
}

const pageData = (state, action) => {
    switch (action.type) {
        case 1:
            return {
                question: 'How are you feeling today?',
                pageCount: 1,
                property: 'feeling',
            };
        case 2:
            return {
                question: 'How well are you understanding the content?',
                pageCount: 2,
                property: 'understanding',
            };
        case 3:
            return {
                question: 'How well are you being supported?',
                pageCount: 3,
                property: 'support',
            };
        default:
            return {
                question: '',
                pageCount: 0,
                property: '',
            }
    }
}

const storeInstance = createStore(
    combineReducers({
        storeFeedback,
        pageData
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
