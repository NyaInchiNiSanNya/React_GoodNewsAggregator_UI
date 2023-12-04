import {combineReducers, createStore} from "redux";
import loginReducer from './Reducers/login-reducer';


let reducers= combineReducers({
    content: loginReducer
})

let store =createStore(reducers); 

export default store;