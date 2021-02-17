import {combineReducers} from 'redux'
import {booksReducers, } from './booksReduces'
import {fieldsReducers, } from './fieldsReducer'

export default combineReducers({
    booksReducers,
    fieldsReducers
});

