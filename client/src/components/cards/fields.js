import React, { useEffect } from 'react';
import{useDispatch, useSelector} from 'react-redux';
import {getFields} from '../../Redux/Actions/feildsAction/actions' ;
//import Card from '../pfeDetalis/pfeDetails'


const Display=()=>{

    const dispatch=useDispatch()
    const fieldsList= useSelector(state=>state.fieldsReducers.fields)

  useEffect(()=>{
        dispatch(getFields())
    },[])
return (
<div>
    <button onClick={()=>console.log(fieldsList)}>no</button>
    <h1>list on</h1>
    {/* <div style={{display:'flex', flexWrap:"wrap"}}>
        {booksList&& booksList.map((book,i)=>
        <Card key={book._id} 
        book={book}
        />)}
    </div> */}
    <h1>list off</h1>
</div>
)}
export default Display 