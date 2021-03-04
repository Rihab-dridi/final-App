import React,{useEffect, useState} from 'react'
import {  useSelector, useDispatch} from "react-redux";
import { getBooks } from '../../../Redux/Actions/actions';
import {getStudents} from '../../../Redux/Actions/students.jsActions/actions'
import CurrentStudents from "./currentStudents";
import PreviousStudents from "./previousStudents";
import FEILDS from "../feildCard/fieldsList";
import './dashboard.css'
import Emails from "./email";
import { displayEmails } from '../../../Redux/Actions/emails/emails';
import { Button } from "../../../globalStyle";
 

function AdminDashboard() {
    const dispatch=useDispatch()
    const[feilds, setFeilds]=useState(true)
    const[currentStudents, setcurrentStudents]=useState(false)
    const[PriviousStudents, setsetPriviousStudents]=useState(false)
    const[emails, setemails]=useState(false)


    const togglefeild=()=>{
        setFeilds(true)
        setcurrentStudents(false)
        setsetPriviousStudents(false)
        setemails(false)
    }
    const togglecurrentStudents=()=>{
        setFeilds(false)
        setcurrentStudents(true)
        setsetPriviousStudents(false)
        setemails(false)
    }
    const togglePriviousStudents=()=>{
        setFeilds(false)
        setcurrentStudents(false)
        setsetPriviousStudents(true)
        setemails(false)
    }
    const toggleemails=()=>{
        setFeilds(false)
        setcurrentStudents(false)
        setsetPriviousStudents(false)
        setemails(true)
    }

    const students= useSelector(state=>state.studentsReducer.students)
    const books= useSelector(state=>state.booksReducers.books)
    const search= useSelector(state=>state.booksReducers.searchTitle)
    useEffect(()=>{
        dispatch(getStudents())
        dispatch(getBooks())
        dispatch(displayEmails())

    },[])
   

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    return (
<div className='adminDashboard'>

        <header className="adminInfo">
            <img className="adminPicture" src={user?.result.imageUrl} alt={user?.result.name}  />
            <h2  className='adminName'> <span> Welcome admin </span>{user?.result.name}</h2>
        </header>

        <div className='dashbordsection'>
            <div className='adminButtons'>
                <div style={{textAlign:'center', marginBottom:'30px'}}>
            <img className="adminPicture" src={user?.result.imageUrl} alt={user?.result.name}  />
            </div>
                <Button onClick={togglefeild}> feilds</Button>
                <Button onClick={togglecurrentStudents}>currentStudents</Button>
                <Button onClick={togglePriviousStudents}>PriviousStudents</Button>
                <Button onClick={toggleemails}>emails</Button>
               
            </div>
            <div className='adminSection'>

             {feilds&& 
             <div className='dashbordfield'> <FEILDS/> </div> }
             {currentStudents&&    <CurrentStudents/>}
             {PriviousStudents&&    <PreviousStudents/>}
             {emails&&     <Emails/>}

            
           
            
          
       
             </div>
     </div>
</div>
    )
}

export default AdminDashboard
