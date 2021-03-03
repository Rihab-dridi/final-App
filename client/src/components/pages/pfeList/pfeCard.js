import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {  Button} from "reactstrap";
// import {deleteContact, editContact} from '../redux/actions/action';
import { deleteBook, editBook,likePoste } from '../../../Redux/Actions/actions';

import {Link} from 'react-router-dom';
import { useState } from 'react';
import './adminSide.css'
import Modal from 'react-modal';
import Edit from "./editBook";

 


//Modal.setAppElement('#root')
const BookCard=({book})=>{
    const dispatch=useDispatch()
    const user = useSelector((state) => state.authReducer.user);
    const [open,setOpen]=useState(false)
 

       
        const deletHandler=()=>{
        dispatch(deleteBook(book._id))
        console.log(book._id)

        }
    
       
    return(
<>

        <div className="pfeCardContainer" >
        <Link to={`/reports/pfe/${book._id}`}>
            <img style={{margin:'0'}} className='pfeImg' src={book.image} alt="Geosciences engeneering" />
            <h2 >{book.title}</h2>
        </Link>
        {user&& user.role=='coordinator'&&(
            <div className="Admin">
            <div className="AdminBook">

            <div className='adminDelete'>
                <button  onClick={deletHandler}>
                    <i class="far fa-trash-alt"></i>
                </button>

                <div className='adminEdit'>
                <button onClick={()=>setOpen(true)}>
                <i class="fas fa-ellipsis-h"></i>
                </button>
                <Modal isOpen={open}>
                <Edit 
                book={book}
                setOpen={setOpen}/>

            </Modal>
          

            </div>
            </div>
            </div>
            
           
            
        </div>
        
        )}
           
            
        </div>
       
        </>
    )
}
export default BookCard