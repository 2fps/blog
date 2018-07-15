import { combineReducers } from 'redux';
import contentsReducer from './contents-reducer.js';

const reducer = {
    contents: contentsReducer
};

const rootReducer = combineReducers(reducer);

export default rootReducer;