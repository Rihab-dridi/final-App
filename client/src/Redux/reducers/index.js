import {combineReducers} from 'redux'
import {booksReducers } from './booksReduces'
import {fieldsReducers } from './fieldsReducer'
import { authReducer } from "./authReducer";
import  AuthRed  from "./Auth";

export default combineReducers({
    booksReducers,
    fieldsReducers,
    authReducer,
    AuthRed
});

