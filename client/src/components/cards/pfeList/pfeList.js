import React, { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {getBooks} from '../../../Redux/Actions/actions';
import Card from '../pfeDetalis/pfeDetails'


const Display=()=>{

    const dispatch=useDispatch()
    const booksList= useSelector(state=>state.booksReducers.books)

  useEffect(()=>{
        dispatch(getBooks())
    },[])
return (
<div>
    <button onClick={()=>console.log(booksList)}>hi</button>
    <h1>list on</h1>
    <div style={{display:'flex', flexWrap:"wrap"}}>
        {booksList&& booksList.map((book,i)=>
        <Card key={book._id} 
        book={book}
        />)}
    </div>
    <h1>list off</h1>
</div>
)}
export default Display 