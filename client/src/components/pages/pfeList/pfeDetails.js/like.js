import React, {useState, useEffect} from 'react'
import {getBooks,likeBook, unlikeBook} from '../../../../Redux/Actions/actions'
import { useSelector , useDispatch} from "react-redux";
import { Button } from "../../../../globalStyle";







function Like({PFEID,setModal}) {
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
       user? (
      indexlike=== -1?(

          (book&& book.likes.length==0 )? (<h5 style={{color:"white"}}>0 <i onClick={likeHandler}  class="fas fa-heart"></i></h5>):
          (<h5 style={{color:"white"}} >{book&& book.likes.length} <i onClick={likeHandler}  class="fas fa-heart"></i></h5>)
        ):(
         
           (book&& book.likes.length==1 )? (<p >you  <i onClick={unlikeHandler} style={{color:"gold"}} class="fas fa-heart"></i> </p>):
           (<p style={{color:"white"}}  > <i onClick={unlikeHandler} style={{color:"gold"}} class="fas fa-heart"></i>  you and  {book&& book.likes.length-1} others </p>)
        ) ):(

          <p style={{color:"white"}}  > <i onClick={()=>setModal(true)} style={{color:"gold"}} class="fas fa-heart"></i>   {book&& book.likes.length}  </p>
        )
         )
       } 
      


export default Like
