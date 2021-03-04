import React,{useEffect} from 'react'
import {  useSelector, useDispatch} from "react-redux";
import { getBooks } from '../../../Redux/Actions/actions';
import {getStudents} from '../../../Redux/Actions/students.jsActions/actions'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Search from '../search'



function CurrentStudents() {
    const dispatch=useDispatch()
    const Books= useSelector(state=>state.booksReducers.books)
    const search= useSelector(state=>state.booksReducers.searchTitle)
 
    useEffect(()=>{
        dispatch(getStudents())
    },[])

    return (
        <div className="PriviousStudents" >
          
            <div className="PreviousTitles" >
              <h2 >Previous Students List</h2>
            </div>
            
            <div style= {{padding:"50px", paddingTop:'5px'}}>
            <Search/>
            <div style={{display:'flex', paddingTop:'20px'}}div className='feildCard'>
            
            {Books&& Books
            .filter(
              (book) => 
                book.grad_student_name.toLowerCase().includes(search.toLowerCase().trim()) 
            )
        . 
        map((book,i)=>(
  <div >
   <div  >
            <ul  className= 'oneLink'>
               <li style={{padding:'20px', backgroundColor:'rgb(246, 247, 248)', minWidth:'300px', minHeight:'110px'}} >
                <a style={{fontWeight:'bold'}} href="#!">{book.grad_student_name }</a>
                
                <p>{book.grad_student_email}</p>
              </li>
            </ul>
          </div>
  </div>)
  
)}
</div> 
</div>
        </div>
    )
}

export default CurrentStudents
