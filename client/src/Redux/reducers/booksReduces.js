
import {GET_BOOKS_LIST} from '../Actions/constantes'
import {GET_FIELDS_LIST} from '../Actions/feildsAction/constantes'
const initstate={
    books:[],
    feilds:[],
    filterFeilds:[]
}

 export const booksReducers=( state=initstate,{type,payload})=>{
   switch (type) {
       case GET_BOOKS_LIST:
        return {...state,
             books: payload}
       case GET_FIELDS_LIST:
              return {...state,
                   fields: payload}
                
       case "FILTREBOOKS":
                return{
                  ...state,
                  filterFeilds:  state.books.filter(book=> book.field=== payload.trim())

                               
                } 

     
       default: return state
          
   }
}