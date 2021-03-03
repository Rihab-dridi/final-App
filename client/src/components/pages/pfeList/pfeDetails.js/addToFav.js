import React, {useState, useEffect} from 'react'
import { useSelector , useDispatch} from "react-redux";
import {getBooks} from '../../../../Redux/Actions/actions';
import { addFav , deleteFav} from "../../../../Redux/Actions/auth/actions";
import { Button } from "../../../../globalStyle";

function AddToFav({PFEID}) {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getBooks())
    },[])
    
      const books= useSelector(state=>state.booksReducers.books)
      let book= books && books.find(el=>el._id==PFEID)
      const user = useSelector((state) => state.authReducer.user);
    
      const favHandler=()=>{
        dispatch(
            addFav(PFEID,{userID:user?._id}) 
            )
         window.location.reload(false)
        }
    
      const delHandler=()=>{
        dispatch(
            deleteFav(PFEID,{userID:user?._id}) 
            )
            window.location.reload(false)
        }
    
        const indexfav = user?.favorite.findIndex(el=>el._id== book?._id)
       
    
      
    

            return(
                indexfav=== -1? (<Button className="download" 
                onClick={favHandler}> 
                 <i class="fas fa-plus">  Add to your list </i>
                 
                  </Button>):
                (<Button className="download" 
                onClick={delHandler}> 
                  <i class="far fa-trash-alt"> Retreive from the list</i>
                 
                  </Button>)
                )}

export default AddToFav
