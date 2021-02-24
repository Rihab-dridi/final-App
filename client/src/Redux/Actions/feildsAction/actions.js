import { GET_FIELDS_LIST } from './constantes'
import axios from 'axios'


export const getFields=()=>dispatch=>{
 axios.get('/feilds/all_feilds')
 .then(res=>dispatch({type:GET_FIELDS_LIST,payload:res.data }))
.catch(err=>console.log(err))
}

export const deleteField=(_id)=>dispatch=>{
    axios.delete(`/feilds/delete_feilds/${_id}`)
.then(res=>dispatch(getFields()))
.catch(err=>console.log(err))
}

export const addField=(newField)=>dispatch=>{
    axios.post('/feilds/add_feilds',newField)
    .then(res=>dispatch(getFields()))
   .catch(err=>console.log(err))
   }

   export const editField=(_id,editedFields)=>dispatch=>{
    axios.put(`/feilds/edit_feild/${_id}`,editedFields)
    .then(res=>dispatch(getFields()))
   .catch(err=>console.log(err))
   }