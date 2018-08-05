import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const storeFeedback = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_FEEDBACK':
            return {
                ...state,
                feedback: action.payload
            };
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        storeFeedback
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
