import { GET_BOOKS_LIST, SEARCH_TITLE, SEARCH_STUDENT, LIKE } from './constantes'
import {useSelector} from 'react-redux'
import axios from 'axios'
import * as api from '../API/api';


export const getBooks=()=>dispatch=>{
 axios.get('/books/all_books')
 .then(res=>dispatch({type:GET_BOOKS_LIST,payload:res.data }))
.catch(err=>console.log(err))
}
export const search_title=(payload)=>{
    return{
        type:SEARCH_TITLE,
        payload
    }
}


export const deleteBook=(_id)=>dispatch=>{
    axios.delete(`/books/delete_book/${_id}`)
.then(res=>dispatch(getBooks()))
.catch(err=>console.log(err))
}

export const addBook=(newBook)=>dispatch=>{
    axios.post('/books/add_books',newBook)
    .then(res=>dispatch(getBooks()))
   .catch(err=>console.log(err))
   }

   export const editBook=(_id,editedBook)=>dispatch=>{
    axios.put(`/books/edit_book/${_id}`,editedBook)
    .then(res=>dispatch(getBooks()))
   .catch(err=>console.log(err))
   }

   export const addToFav=(_id, userID)=>dispatch=>{

    const user = useSelector((state) => state.authReducer.user);
    const  userID=user?._id
    axios.put(`/new/fav/${_id}`, userID)
    .then(res=>dispatch(getBooks()))
    .catch(err=>console.log(err))
   }

   export const likePoste=(_id,userID)=>dispatch=>{
    axios.put(`/like/${_id}`,userID)
    .then(res=>dispatch(getBooks()))
   .catch(err=>console.log(err))
   }
  


 
