import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {createStore} from 'redux';

it('renders without crashing', () => {
    shallow(<App store={createStore(()=>{})} />);
});
