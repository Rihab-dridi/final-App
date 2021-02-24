import React, { useState } from 'react';
import {  Button} from "reactstrap";
import {addField}from '../../../Redux/Actions/feildsAction/actions'
import { useDispatch } from 'react-redux';

function AddField({setIsOpen}) {
    const dispatch =useDispatch()
    //the addform local states
    const [name,setName]=useState()
    const [id,setId]=useState()
    const [image,setImage]=useState()
    
    // the form inputs
    const addNameHandeler =(e)=>{
        setName(e.target.value)
     }
     const addIdHandeler =(e)=>{
        setId(e.target.value)
     }
     const addImageHandeler =(e)=>{
        setImage(e.target.value)
     }
     
     //the save in the dataBase
    const addHandler=()=>{
        dispatch( addField({name,id,image}) )
        setIsOpen(false)
        setName('')
        setId('')
        setImage('')
        
    }
    return (
        <div >
           <div >
             <form style={{display:"flex", flexWrap:"wrap", flexDirection:"column", justifyContent:'space-around',minHeight:"400px"}}>
                 
                     <legend>
                         Add a new Field
                     </legend>
                 <input
                 type='text'
                 placeholder="enter the Field's Name"
                 value={name}
                 onChange={addNameHandeler}
                 autoFocus
                 ></input>
                
                 <input
                 type='text'
                 placeholder="enter the Id of the field "
                 value={id}
                 onChange={addIdHandeler}
                
                 ></input>
              
                 <input
                 type='file'
                 placeholder="enter the Image of the Field"
                 value={image}
                 onChange={addImageHandeler}
                
                 ></input>
                
            
             </form>
           
           <Button className='submitAdd' onClick={addHandler} >save</Button>
           <Button className='submitAdd' onClick={()=>setIsOpen(false)} >cancel</Button>
        </div>
        </div>
    )
}

export default AddField
