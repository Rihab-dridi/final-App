import axios from 'axios';

import { GET_EMAIL_LIST } from "./constantes";


  

   export const displayEmails=()=>dispatch=>{
    axios.get('/emails/all_emails')
    .then(res=>dispatch({type:GET_EMAIL_LIST,payload:res.data }))
   .catch(err=>console.log(err))
   }

   export const getEmail=(newEmail)=>dispatch=>{
      axios.post('/emails/email_add',newEmail)
      .then(res=>dispatch(displayEmails()))
     .catch(err=>console.log(err))
     }
