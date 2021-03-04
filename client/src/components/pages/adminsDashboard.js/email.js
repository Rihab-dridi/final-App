import React, { useEffect } from 'react';
import {  useSelector, useDispatch} from "react-redux";
import { displayEmails , deleteAll} from '../../../Redux/Actions/emails/emails';
import{Button}from '../../../globalStyle'


function Email() {
    const dispatch=useDispatch()
    const emails= useSelector(state=>state.booksReducers.emails)


    useEffect(()=>{
        dispatch(displayEmails())
    },[])
   
    return (
        <>
        <div className='emailss'>
        <div className="titles" >
              <h2 >Emails received</h2>
        </div>
        <div className="em">
            {
                emails&& emails.map(email=>
                    <div style={{backgroundColor:'lightgray'}}>
                    <h4>
                        {email.email}
                    </h4>
                    <p>
                        {email.createdAt.slice(0,10) }
                    </p>
                     </div>  )
            }
            </div>
        </div>
    <Button onClick={()=>dispatch(deleteAll())} > Clear</Button>
        </>
    )
}

export default Email
