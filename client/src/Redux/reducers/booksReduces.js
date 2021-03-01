
import {GET_BOOKS_LIST,SEARCH_TITLE,LIKE, ADD_FAV} from '../Actions/constantes'
import { GET_EMAIL_LIST } from "../Actions/emails/constantes";

const initstate={
    books:[],
    searchTitle:'',
    fav:[],
    email:[]

}

 export const booksReducers=( state=initstate,{type,payload})=>{
   switch (type) {
       case GET_BOOKS_LIST:
        return {...state,
             books: payload}
       
       case GET_EMAIL_LIST:
        return {...state,
             emails: payload}
       
        case SEARCH_TITLE:
               return{
                   ...state,
                   searchTitle:payload,

               }
      
               case LIKE:
                return{ ...state,
                    books: state.books.map((book) => (book._id === payload._id ? payload : book))};
      
                
       
     
       default: return state
          
   }
}