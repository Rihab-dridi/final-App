
import {GET_BOOKS_LIST} from '../Actions/constantes'
const initstate={
    books:[]
}

 export const booksReducers=( state=initstate,{type,payload})=>{
   switch (type) {
       case GET_BOOKS_LIST:
        return {...state,
             books: payload}
          
   
       default: return state
          
   }
}