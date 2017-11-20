import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import app from './reducers';
import listen from './websocketListener';
import {WEBSOCKET_URL} from './constants';

const store = createStore(app, applyMiddleware(thunkMiddleware));

render(<App store={store} />, document.getElementById('root'));

listen(WEBSOCKET_URL, store.dispatch);
