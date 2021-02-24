import React, { useState } from 'react';
import {  Button} from "reactstrap";
import {addBook}from '../../../Redux/Actions/actions'
import { useDispatch } from 'react-redux';

function AddBooks({setIsOpen}) {
    const dispatch =useDispatch()
    //the addform local states
    const [title,setTitle]=useState()
    const [field,setField]=useState()
    const [abstract,setAbstract]=useState()
    const [grad_year,setGrad_year]=useState()
    const [grad_student_name,setGrad_student_name]=useState()
    const [grad_student_email,setGrad_student_email]=useState()
    const [file,setFile]=useState()

    // the form inputs
    const addTitleHandeler =(e)=>{
        setTitle(e.target.value)
     }
     const addFieldHandeler =(e)=>{
        setField(e.target.value)
     }
     const addAbstractHandeler =(e)=>{
        setAbstract(e.target.value)
     }
     const addGrad_yearHandeler =(e)=>{
        setGrad_year(e.target.value)
     }
     const addGrad_student_nameHandeler =(e)=>{
        setGrad_student_name(e.target.value)
     }
     const addGrad_student_emailHandeler =(e)=>{
        setGrad_student_email(e.target.value)
     }
     const addFileHandeler =(e)=>{
        setFile(e.target.value)
     }
     //the save in the dataBase
    const addHandler=()=>{
        dispatch( addBook({title,field,abstract,grad_year,grad_student_name,grad_student_email,file}) )
        
        setIsOpen(false)
        setTitle('')
        setField('')
        setAbstract('')
        setGrad_year('')
        setGrad_student_name("")
        setGrad_student_email("")
        setFile('')
    }
    return (
        <div >
           <div >
             <form style={{display:"flex", flexWrap:"wrap", flexDirection:"column", justifyContent:'space-around',minHeight:"400px"}}>
                 
                     <legend>
                         Add a new Book
                     </legend>
                 <input
                 type='text'
                 placeholder="enter the Book's title"
                 value={title}
                 onChange={addTitleHandeler}
                 autoFocus
                 ></input>
                
                 <input
                 type='text'
                 placeholder="enter the field id "
                 value={field}
                 onChange={addFieldHandeler}
                
                 ></input>
              
                 <input
                 placeholder="enter the abstract of the book"
                 value={abstract}
                 onChange={addAbstractHandeler}
                
                 ></input>
                 <input
                 placeholder="enter the graduation year of the student "
                 value={grad_year}
                 onChange={addGrad_yearHandeler}
                
                 ></input>
                 <input
                 type='text'
                 placeholder="enter the student name"
                 value={grad_student_name}
                 onChange={addGrad_student_nameHandeler}
                
                 ></input>
                 <input
                 type='email'
                 placeholder="enter the email of the student"
                 value={grad_student_email}
                 onChange={addGrad_student_emailHandeler}
                
                 ></input>
                 <input
                 type='file'
                 placeholder="upload the file"
                 value={file}
                 onChange={addFileHandeler}
                
                 ></input>
            
             </form>
           
           <Button className='submitAdd' onClick={addHandler} >save</Button>
           <Button className='submitAdd' onClick={()=>setIsOpen(false)} >cancel</Button>
        </div>
        </div>
    )
}

export default AddBooks
