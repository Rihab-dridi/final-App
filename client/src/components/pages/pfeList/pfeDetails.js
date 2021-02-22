import React from 'react';
import { useDispatch } from 'react-redux';
// import {deleteContact, editContact} from '../redux/actions/action';
//import {Link} from 'react-router-dom';
import { useState } from 'react';
//import Modal from 'react-modal';

 


//Modal.setAppElement('#root')
const BookCard=({book})=>{
    
    const [open,setOpen]=useState(false)

        const dispatch=useDispatch()
        // const deletHandler=()=>{
        // dispatch(deleteContact(contact._id))
        // }
    
       
    return(
        <div style={{margin:"20px", border:"black solid 1px", minWidth:"350px", backgroundColor:"white"}}>
            <h1 style={{backgroundColor:"darksalmon"}}>{book.title}</h1>
            <h2>{book.field}</h2>
            <h3>{book.abstract} </h3>
            <div style={{display:"flex", width:"100%", justifyContent:"space-around", marginBottom:"3px"}}>
            {/* <Link to={`/edit/${_id}`}>  */}
            <button style={{width:"49%", border:"none"}} 
          //  onClick={()=>setOpen(true)}
            >Edit</button>
            {/* </Link> */}
                <button 
               // onClick={deletHandler}
                 style={{width:"49%",border:"none"}}>Delete</button>
            </div>
            
            {/* <Modal isOpen={open}>
                <Edit 
                book={book}
                setOpen={setOpen}/>

            </Modal>
           */}
        </div>
        
    )
}
export default BookCard