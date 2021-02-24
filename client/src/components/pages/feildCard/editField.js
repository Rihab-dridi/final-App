import React, { useState } from 'react';
import {  Button} from "reactstrap";
import {editField}from '../../../Redux/Actions/feildsAction/actions'
import { useDispatch } from 'react-redux';

function EditField({setOpen,feild}) {
    const dispatch =useDispatch()
    //the addform local states
    const [name,setName]=useState(feild.name)
    const [id,setId]=useState(feild.id)
    const [image,setImage]=useState()
    
    // the form inputs
    const editNameHandeler =(e)=>{
        setName(e.target.value)
     }
     const editIdHandeler =(e)=>{
        setId(e.target.value)
     }
     const editImageHandeler =(e)=>{
        setImage(e.target.value)
     }
     
     //the save in the dataBase
    const editHandler=()=>{
        dispatch( editField(feild._id,{name,id,image}) )
        setOpen(false)
        setName('')
        setId('')
        setImage('')
        
    }
    return (
        <div >
           <div >
             <form style={{display:"flex", flexWrap:"wrap", flexDirection:"column", justifyContent:'space-around',minHeight:"400px"}}>
                 
                     <legend>
                         edit a new Field
                     </legend>
                 <input
                 type='text'
                 placeholder="enter the Field's Name"
                 value={name}
                 onChange={editNameHandeler}
                 autoFocus
                 ></input>
                
                 <input
                 type='text'
                 placeholder="enter the Id of the field "
                 value={id}
                 onChange={editIdHandeler}
                
                 ></input>
              
                 <input
                 type='file'
                 placeholder="enter the Image of the Field"
                 value={image}
                 onChange={editImageHandeler}
                
                 ></input>
                
            
             </form>
           
           <Button className='submitAdd' onClick={editHandler} >save</Button>
           <Button className='submitAdd' onClick={()=>setOpen(false)} >cancel</Button>
        </div>
        </div>
    )
}

export default EditField
