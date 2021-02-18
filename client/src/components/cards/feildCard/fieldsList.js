import React, { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {getFields} from '../../../Redux/Actions/feildsAction/actions' ;
import Card from './feildCard'


const Display=()=>{

    const dispatch=useDispatch()
    const fieldsList= useSelector(state=>state.fieldsReducers.fields)
    const filterFeilds= useSelector(state=>state.booksReducers.filterFeilds)

  useEffect(()=>{
        dispatch(getFields())
    },[])
    
return (
<div>
    <button onClick={()=>console.log(fieldsList)}>no</button>
    <h1>field list on</h1>
    <div style={{display:'flex', flexWrap:"wrap"}}>
        {fieldsList&& fieldsList.map((feild,i)=>
        <Card key={feild._id} 
        feild={feild}
    />)}
    </div> 
    <h1> feild list list off</h1>
</div>
)}
export default Display 