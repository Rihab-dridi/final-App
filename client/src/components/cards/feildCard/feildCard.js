import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {deleteContact, editContact} from '../redux/actions/action';
//import {Link} from 'react-router-dom';
import { useState } from 'react';
import { filterBooks, getBooks } from '../../../Redux/Actions/actions';
import Card from '../pfeList/pfeList'
//import Modal from 'react-modal';

 


//Modal.setAppElement('#root')
const FeildCard=({feild})=>{
    const booksList= useSelector(state=>state.booksReducers.books)
    const filterFeilds= useSelector(state=>state.booksReducers.filterFeilds)

    useEffect(()=>{
        dispatch(getBooks())
    },[])

    useEffect(()=>{
        dispatch(filterBooks(feild.name))
  },[booksList])
    //const [open,setOpen]=useState(false)

        const dispatch=useDispatch()
        // const deletHandler=()=>{
        // dispatch(deleteContact(contact._id))
        // }
    
       
    return(
        <div  >
        <button onClick={()=>dispatch(filterBooks(feild.name))}>no</button>
        <div style={{backgroundColor:"tan",padding:"50px"}}>
        <h1 >{feild.name}</h1>
        <div style={{display:'flex', flexWrap:"wrap"}}>
            {filterFeilds&& filterFeilds.map((books,i)=>
            <Card key={i} 
            books={books}
        />)}
        </div>
        </div> 
        
    </div>
        
    )
}
export default FeildCard