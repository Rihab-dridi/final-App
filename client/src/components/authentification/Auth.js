import React, { useState} from 'react'
import LoginModal from './logIn'
import RegisterModal from './Register';


function Auth() {
    
   const [isSignUp,setIsSignUp]=useState('')
    
    const handleSubmit =()=>{

    }
    return (
        <main>
            <div>
                <div className="avatar">
                    <p>avatar</p>
                </div>
                <div >{isSignUp ?
                         <RegisterModal setIsSignUp={setIsSignUp } /> :
                         <LoginModal/>
                           }
                 </div>

               
            
            </div>
        </main>
    )
}

export default Auth
