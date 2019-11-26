import {combineReducers, createStore} from 'redux';
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    auth: authReducer
});

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());