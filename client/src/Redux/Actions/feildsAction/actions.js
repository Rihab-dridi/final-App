import { GET_FIELDS_LIST } from './constantes'
import axios from 'axios'


export const getFields=()=>dispatch=>{
 axios.get('/feilds/all_feilds')
 .then(res=>dispatch({type:GET_FIELDS_LIST,payload:res.data }))
.catch(err=>console.log(err))
}