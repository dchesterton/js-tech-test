import {combineReducers} from 'redux';
import odds from './odds';
import data from './data';

const app = combineReducers({
    odds, data
});

export default app;
