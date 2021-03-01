import React, { useEffect } from 'react';
import {  useSelector, useDispatch} from "react-redux";
import { displayEmails , deleteAll} from '../../../Redux/Actions/emails/emails';



function Email() {
    const dispatch=useDispatch()
    const emails= useSelector(state=>state.booksReducers.emails)


    useEffect(()=>{
        dispatch(displayEmails())
    },[])
   
    return (
        <>
        <div style={{display:'flex', columnGap:'50px'}}>
            {
                emails&& emails.map(email=>
                    <div>
                    <h4>
                        {email.email}
                    </h4>
                    <p>
                        {email.createdAt.slice(0,10) }
                    </p>
                     </div>  )
            }
        </div>
    <button onClick={()=>dispatch(deleteAll())} > Clear</button>
        </>
    )
}

export default Email
