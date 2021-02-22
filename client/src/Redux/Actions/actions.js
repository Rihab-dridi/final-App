import { GET_BOOKS_LIST , SEARCHBOOKS} from './constantes'
import axios from 'axios'


export const getBooks=()=>dispatch=>{
 axios.get('/books/all_books')
 .then(res=>dispatch({type:GET_BOOKS_LIST,payload:res.data }))
.catch(err=>console.log(err))
}
export const searchBooks=(data)=>dispatch=>{
 axios.get('/books/search')
 .then(res=>dispatch({type:SEARCHBOOKS,data }))
.catch(err=>console.log(err))
}

export const filterBooks=(payload)=>{

    return {
        type:'FILTREBOOKS',
        payload
     
    }
}
