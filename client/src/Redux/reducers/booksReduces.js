
import {GET_BOOKS_LIST,SEARCH_TITLE} from '../Actions/constantes'
import {GET_FIELDS_LIST} from '../Actions/feildsAction/constantes'
const initstate={
    books:[],
    searchTitle:''
}

 export const booksReducers=( state=initstate,{type,payload})=>{
   switch (type) {
       case GET_BOOKS_LIST:
        return {...state,
             books: payload}
        case SEARCH_TITLE:
               return{
                   ...state,
                   searchTitle:payload
               }
      
                
       
     
       default: return state
          
   }
}