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
          <div style={{display:'flex', alignItems:'baseline', columnGap:'4px'}}>
          <Button className="download" onClick={likeHandler}>  <i class="far fa-thumbs-up">Like</i> </Button>
          {(book&& book.likes.length==0 )? (<p>0 Likes</p>):(<p>{book&& book.likes.length-1} liked this</p>)}
          </div>
        ):(
          <div style={{display:'flex', alignItems:'baseline', columnGap:'4px'}}>
            <Button className="download" onClick={unlikeHandler}>  <i class="far fa-thumbs-up">unLike</i> </Button>
           {(book&& book.likes.length==1 )? (<p>you  Liked this </p>):(<p>you and  {book&& book.likes.length-2} liked this</p>)}
         
       </div>
        ))
      
}

export default Like
