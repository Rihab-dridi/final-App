import React, { useEffect, useState } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import { Button, Form, Label, Input,} from 'reactstrap';
import {getBooks} from '../../../Redux/Actions/actions';
import { GET_BOOKS_LIST } from '../../../Redux/Actions/constantes';
import Search from '../search'
import Card from './pfeDetails'
import './pfeList.css'


const Display=()=>{

    
    const dispatch=useDispatch()
    const books= useSelector(state=>state.booksReducers.books)
    const filterFeilds= useSelector(state=>state.booksReducers.filterFeilds)
    const [search, setSearch]=useState('')

  useEffect(()=>{
        dispatch(getBooks())
    },[])
    
return (
<div>
    <div className="search">
              <Form>
                  <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search by title"
                  onChange={(e)=>setSearch(e.target.value)}
                  autoFocus
                  />
              </Form>
    </div>
    <div style={{display:'flex', flexWrap:"wrap"}}>
    {books&&
    books
        .filter(
          (book) =>
            book.title.toLowerCase().includes(search.toLowerCase().trim()) 
        )
        .map((book,i)=>
        <Card key={book._id} 
        book={book}
    />)}
    </div> 
    <h1> book list list off</h1>
</div>
)}
export default Display 