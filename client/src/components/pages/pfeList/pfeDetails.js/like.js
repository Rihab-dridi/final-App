import React, {useState, useEffect} from 'react'
import {getBooks,likeBook, unlikeBook} from '../../../../Redux/Actions/actions'
import { useSelector , useDispatch} from "react-redux";
import { Button } from "../../../../globalStyle";





function Like({PFEID}) {
    const dispatch =useDispatch()
    useEffect(()=>{
        dispatch(getBooks())
    },[])
    const books= useSelector(state=>state.booksReducers.books)
    let book= books && books.find(el=>el._id==PFEID)
    const user = useSelector((state) => state.authReducer.user);

    const indexlike = book?.likes.findIndex(el=>el.userID== user?._id)

     //dispatch the like function 
     const likeHandler=()=>{
        dispatch(
            likeBook(PFEID,{userID:user?._id}) 
            )
       
        }
          //dispatch the unlike function 
      const unlikeHandler=()=>{
        dispatch(
            unlikeBook(PFEID,{userID:user?._id}) 
            )
       
        }
        





      return(
        indexlike=== -1?(
          
          <Button  onClick={likeHandler}>  <i class="far fa-thumbs-up">Like</i> </Button>
        ):(
            <Button  onClick={unlikeHandler}>  <i class="far fa-thumbs-up"></i> unLike</Button>
        ))
      
}

export default Like
