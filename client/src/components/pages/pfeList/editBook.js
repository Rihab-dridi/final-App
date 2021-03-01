import React, { useState } from 'react';
import {editBook}from '../../../Redux/Actions/actions'
import { useDispatch } from 'react-redux';

function EditBooks({setOpen,book}) {
    const dispatch =useDispatch()
    //the editform local states setIsOpen
    const [title,setTitle]=useState(book.title)
    const [field,setField]=useState(book.field)
    const [abstract,setAbstract]=useState(book.abstract)
    const [grad_year,setGrad_year]=useState(book.grad_year)
    const [grad_student_name,setGrad_student_name]=useState(book.grad_student_name)
    const [grad_student_email,setGrad_student_email]=useState(book.grad_student_email)
    const [file,setFile]=useState(book.file)

    // the form inputs
    const editTitleHandeler =(e)=>{
        setTitle(e.target.value)
     }
     const editFieldHandeler =(e)=>{
        setField(e.target.value)
     }
     const editAbstractHandeler =(e)=>{
        setAbstract(e.target.value)
     }
     const editGrad_yearHandeler =(e)=>{
        setGrad_year(e.target.value)
     }
     const editGrad_student_nameHandeler =(e)=>{
        setGrad_student_name(e.target.value)
     }
     const editGrad_student_emailHandeler =(e)=>{
        setGrad_student_email(e.target.value)
     }
     const editFileHandeler =(e)=>{
        setFile(e.target.value)
     }
     //the save in the dataBase
    const editHandler=()=>{
        dispatch(
            editBook(book._id, {title,field,abstract,grad_year,grad_student_name,grad_student_email,file}) 
            )
        
        setOpen(false)
        setTitle('')
        setField('')
        setAbstract('')
        setGrad_year('')
        setGrad_student_name("")
        setGrad_student_email("")
        setFile('')
    }
    return (
        <div>
           <div>
             <form style={{display:"flex", flexWrap:"wrap", flexDirection:"column", justifyContent:'space-around',minHeight:"400px"}}>
                 
                     <legend>
                         edit a new Book
                     </legend>
                 <input
                 type='text'
                 placeholder="enter the Book's title"
                 value={title}
                 onChange={editTitleHandeler}
                 autoFocus
                 ></input>
                
                 <input
                 type='text'
                 placeholder="enter the field id "
                 value={field}
                 onChange={editFieldHandeler}
                
                 ></input>
              
                 <input
                 placeholder="enter the abstract of the book"
                 value={abstract}
                 onChange={editAbstractHandeler}
                
                 ></input>
                 <input
                 placeholder="enter the graduation year of the student "
                 value={grad_year}
                 onChange={editGrad_yearHandeler}
                
                 ></input>
                 <input
                 type='text'
                 placeholder="enter the student name"
                 value={grad_student_name}
                 onChange={editGrad_student_nameHandeler}
                
                 ></input>
                 <input
                 type='email'
                 placeholder="enter the email of the student"
                 value={grad_student_email}
                 onChange={editGrad_student_emailHandeler}
                
                 ></input>
                 <input
                 type='file'
                 placeholder="upload the file"
                 value={file}
                 onChange={editFileHandeler}
                
                 ></input>
            
             </form>
            <button onClick={()=>setOpen(false)} >cancel</button>
           <button onClick={editHandler} >save</button>
        </div>
        </div>
    )
}

export default EditBooks
