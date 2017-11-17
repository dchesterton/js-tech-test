import React from 'react';
import {render} from 'react-dom';

import AppWrapper from './components/App';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import app from './reducers';

const store = createStore(app);

render(<Provider store={store}><AppWrapper /></Provider>, document.getElementById('root'));
