import React, { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {getBooks} from '../../../Redux/Actions/actions';
import Card from '../pfeDetalis/pfeDetails'


const Display=({books})=>{

    const dispatch=useDispatch()
    const booksList= useSelector(state=>state.booksReducers.books)

  
return (
<div>
    <button onClick={()=>console.log(books)}>hi</button>
    <h1>pfe list </h1>
    <div style={{display:'flex', flexWrap:"wrap"}}>
        {books&& books.map((book,i)=>
        <Card key={book._id} 
        book={book}
        />)}
    </div>
    <h1>list off</h1>
</div>
)}
export default Display 