import React, { useEffect, useState } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import { Button, Form, Label, Input, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import Modal from 'react-modal';
import {getBooks} from '../../../Redux/Actions/actions';
import { useParams,Link} from 'react-router-dom'
import { GET_BOOKS_LIST } from '../../../Redux/Actions/constantes';
import Card from './pfeCard'
import Search from "../search";
import Add from './addBook'
import './pfeList.css'

Modal.setAppElement('#root')
const Display=()=>{
     //Modal 
    const [isOpen,setIsOpen]=useState(false)
    const [filter,setfilter]=useState(true)
    const {ID}=useParams();
    const dispatch=useDispatch()
    const books= useSelector(state=>state.booksReducers.books)
    const search= useSelector(state=>state.booksReducers.searchTitle)
    const fieldsList= useSelector(state=>state.fieldsReducers.fields)
    const user = useSelector((state) => state.authReducer.user);
   


    
    

  useEffect(()=>{
        dispatch(getBooks())
    },[])
    console.log(ID)
    
return (
    <>
<div>

    <div style={{display:'flex', flexWrap:"wrap"}}>
    <Search/>
    <Button className="booksButtton" onClick={()=>setfilter(!filter)} > {filter?"Books of all fields >>": `Books filtred by field >>`} </Button>
    {user&& user.role=='coordinator'&&(
        <div >
        <Button className='adminAdd' onClick={()=>setIsOpen(!isOpen)}>
            <i class="fas fa-plus"></i> Add new Book
        </Button>
        <Modal 
       
             isOpen={isOpen}
       >
           <Add setIsOpen={setIsOpen}/>
       </Modal>

</div>
    )}
    </div>
    <div style={{display:'flex'}}>
    {filter?(<div style={{display:'flex', flexWrap:"wrap"}}>
    {books&&
    books
        .filter(
          (book) =>
            book.title.toLowerCase().includes(search.toLowerCase().trim()) &&  book.field==ID
        )
        .map((book,i)=>
        <Card key={book._id} 
        book={book}
    />)}
    </div> ):(<div style={{display:'flex', flexWrap:"wrap"}}>
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
    </div> )}
  
    
    </div>
   
</div>

</>
)}
export default Display 