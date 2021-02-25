import React,{useEffect} from 'react'
import {  useSelector, useDispatch} from "react-redux";
import { getBooks } from '../../../Redux/Actions/actions';
import {getStudents} from '../../../Redux/Actions/students.jsActions/actions'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Search from '../search'



function CurrentStudents() {
    const dispatch=useDispatch()
    const students= useSelector(state=>state.studentsReducer.students)
    const search= useSelector(state=>state.booksReducers.searchTitle)
 
    useEffect(()=>{
        dispatch(getStudents())
    },[])

    return (
        <div className="currentStudents" >
          {console.log(search)}
            <div className="titles" >
              <h2 >Current Students List</h2>
            </div>
            
            <div style= {{padding:"50px", paddingTop:'0px'}}>
            <Search/>
            <div style={{display:'flex', paddingTop:'20px'}}div className='feildCard'>
            
            {students&& students
            .filter(
              (student) => student.name||
                student.lastName.toLowerCase().includes(search.toLowerCase().trim()) 
            )
        .
        map((student,i)=>(
  <div >
   <div style={{backgrounColor:'red'}} md="6">
            <ul  className= 'oneLink'>
               <li style={{padding:'20px', backgroundColor:'rgb(246, 247, 248)', minWidth:'250px', minHeight:'110px'}} >
                <a style={{fontWeight:'bold'}} href="#!">{student.name || student.first_name}</a>
                <p>{student.email}</p>
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
