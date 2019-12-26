import {createStore, combineReducers} from 'redux';
import authReducer from "./authReducer";

const reducers = combineReducers({
    authentication: authReducer
});

const store = createStore(reducers);

window.store = store;
export default store;