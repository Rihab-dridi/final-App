import { GET_STUDENTS } from "./constantes";

import axios from 'axios'


export const getStudents=()=>dispatch=>{
 axios.get('/students/all_students')
 .then(res=>dispatch({type:GET_STUDENTS,payload:res.data }))
.catch(err=>console.log(err))
}

